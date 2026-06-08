"use client";

import { useEffect, useMemo, useState } from "react";
import { Edit3, Plus, Save, Trash2 } from "lucide-react";
import type { Author, Category, Post, PostStatus } from "@/lib/types";
import { readingTime } from "@/lib/utils";

type AdminEditorProps = {
  initialPosts: Post[];
  categories: Category[];
  authors: Author[];
};

const emptyPost = (category: string, author: string): Post => ({
  id: `post-${Date.now()}`,
  title: "Untitled OpenWire story",
  slug: "untitled-openwire-story",
  excerpt: "",
  body: "",
  image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
  category,
  tags: [],
  author,
  readingTime: 1,
  publishedAt: new Date().toISOString(),
  status: "Draft",
  featured: false,
  breaking: false,
  video: false,
  videoUrl: "",
  views: 0,
  seo: {
    metaTitle: "",
    metaDescription: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: ""
  }
});

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function AdminEditor({ initialPosts, categories, authors }: AdminEditorProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [selectedId, setSelectedId] = useState(initialPosts[0]?.id || "");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("openwire-admin-posts");
    if (saved) {
      const parsed = JSON.parse(saved) as Post[];
      setPosts(parsed);
      setSelectedId(parsed[0]?.id || "");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("openwire-admin-posts", JSON.stringify(posts));
  }, [posts]);

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedId) || posts[0],
    [posts, selectedId]
  );

  const stats = [
    ["Posts", posts.length],
    ["Published", posts.filter((post) => post.status === "Published").length],
    ["Drafts", posts.filter((post) => post.status === "Draft").length],
    ["Views", posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()]
  ];

  function updatePost(patch: Partial<Post>) {
    setPosts((current) =>
      current.map((post) =>
        post.id === selectedPost.id
          ? {
              ...post,
              ...patch,
              readingTime: readingTime(patch.body ?? post.body)
            }
          : post
      )
    );
  }

  function updateSeo(field: keyof Post["seo"], value: string) {
    updatePost({ seo: { ...selectedPost.seo, [field]: value } });
  }

  function addPost() {
    const post = emptyPost(categories[0].name, authors[0].name);
    setPosts((current) => [post, ...current]);
    setSelectedId(post.id);
  }

  function deletePost() {
    const nextPosts = posts.filter((post) => post.id !== selectedPost.id);
    setPosts(nextPosts);
    setSelectedId(nextPosts[0]?.id || "");
  }

  function savePost() {
    setSavedMessage("Saved in this browser. Commit database persistence before using as a multi-user CMS.");
    window.setTimeout(() => setSavedMessage(""), 3500);
  }

  if (!selectedPost) {
    return (
      <div className="mt-8 rounded-lg border border-black/10 bg-white p-6">
        <button onClick={addPost} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-black text-white">
          <Plus size={16} /> Create first post
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-black/10 bg-white p-5">
            <p className="text-sm font-bold text-muted">{label}</p>
            <p className="mt-2 text-4xl font-black">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
        <aside className="rounded-lg border border-black/10 bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-black">Posts</h2>
            <button onClick={addPost} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-black text-white">
              <Plus size={15} /> New
            </button>
          </div>
          <div className="mt-4 grid gap-2">
            {posts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedId(post.id)}
                className={`rounded-lg border p-3 text-left transition hover:bg-paper ${post.id === selectedPost.id ? "border-ink bg-paper" : "border-black/10"}`}
              >
                <span className="block text-sm font-black leading-5">{post.title}</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-muted">{post.status} • {post.category}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="rounded-lg border border-black/10 bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">Post editor</p>
              <h2 className="mt-1 text-2xl font-black">Edit article</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={deletePost} className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-black hover:bg-red-50">
                <Trash2 size={15} /> Delete
              </button>
              <button onClick={savePost} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-black text-white">
                <Save size={15} /> Save
              </button>
            </div>
          </div>

          {savedMessage ? <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm font-bold text-green-800">{savedMessage}</p> : null}

          <div className="mt-5 grid gap-4">
            <label className="grid gap-2 text-sm font-bold">
              Title
              <input value={selectedPost.title} onChange={(event) => updatePost({ title: event.target.value })} className="rounded-lg border border-black/10 p-3 font-normal" />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                Slug
                <input value={selectedPost.slug} onChange={(event) => updatePost({ slug: slugify(event.target.value) })} className="rounded-lg border border-black/10 p-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Status
                <select value={selectedPost.status} onChange={(event) => updatePost({ status: event.target.value as PostStatus })} className="rounded-lg border border-black/10 p-3 font-normal">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold">
              Excerpt
              <textarea value={selectedPost.excerpt} onChange={(event) => updatePost({ excerpt: event.target.value })} className="min-h-24 rounded-lg border border-black/10 p-3 font-normal" />
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Full body
              <textarea value={selectedPost.body} onChange={(event) => updatePost({ body: event.target.value })} className="min-h-56 rounded-lg border border-black/10 p-3 font-normal" />
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Featured image URL
              <input value={selectedPost.image} onChange={(event) => updatePost({ image: event.target.value })} className="rounded-lg border border-black/10 p-3 font-normal" />
            </label>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="grid gap-2 text-sm font-bold">
                Category
                <select value={selectedPost.category} onChange={(event) => updatePost({ category: event.target.value })} className="rounded-lg border border-black/10 p-3 font-normal">
                  {categories.map((category) => <option key={category.slug}>{category.name}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Author
                <select value={selectedPost.author} onChange={(event) => updatePost({ author: event.target.value })} className="rounded-lg border border-black/10 p-3 font-normal">
                  {authors.map((author) => <option key={author.slug}>{author.name}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Tags, comma separated
                <input value={selectedPost.tags.join(", ")} onChange={(event) => updatePost({ tags: event.target.value.split(",").map((tag) => tag.trim()).filter(Boolean) })} className="rounded-lg border border-black/10 p-3 font-normal" />
              </label>
            </div>

            <div className="grid gap-3 rounded-lg bg-paper p-4 sm:grid-cols-3">
              <label className="flex items-center gap-2 text-sm font-bold">
                <input type="checkbox" checked={Boolean(selectedPost.featured)} onChange={(event) => updatePost({ featured: event.target.checked })} />
                Featured post
              </label>
              <label className="flex items-center gap-2 text-sm font-bold">
                <input type="checkbox" checked={Boolean(selectedPost.breaking)} onChange={(event) => updatePost({ breaking: event.target.checked })} />
                Breaking news
              </label>
              <label className="flex items-center gap-2 text-sm font-bold">
                <input type="checkbox" checked={Boolean(selectedPost.video)} onChange={(event) => updatePost({ video: event.target.checked })} />
                Video post
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold">
              YouTube/embed link
              <input value={selectedPost.videoUrl || ""} onChange={(event) => updatePost({ videoUrl: event.target.value })} className="rounded-lg border border-black/10 p-3 font-normal" />
            </label>

            <div className="rounded-lg border border-black/10 p-4">
              <div className="mb-4 flex items-center gap-2">
                <Edit3 size={18} className="text-wire" />
                <h3 className="font-black">SEO settings</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input placeholder="Meta title" value={selectedPost.seo.metaTitle} onChange={(event) => updateSeo("metaTitle", event.target.value)} className="rounded-lg border border-black/10 p-3" />
                <input placeholder="Canonical URL" value={selectedPost.seo.canonical} onChange={(event) => updateSeo("canonical", event.target.value)} className="rounded-lg border border-black/10 p-3" />
                <textarea placeholder="Meta description" value={selectedPost.seo.metaDescription} onChange={(event) => updateSeo("metaDescription", event.target.value)} className="min-h-24 rounded-lg border border-black/10 p-3" />
                <textarea placeholder="Open Graph description" value={selectedPost.seo.ogDescription} onChange={(event) => updateSeo("ogDescription", event.target.value)} className="min-h-24 rounded-lg border border-black/10 p-3" />
                <input placeholder="Open Graph title" value={selectedPost.seo.ogTitle} onChange={(event) => updateSeo("ogTitle", event.target.value)} className="rounded-lg border border-black/10 p-3" />
                <input placeholder="Open Graph image" value={selectedPost.seo.ogImage} onChange={(event) => updateSeo("ogImage", event.target.value)} className="rounded-lg border border-black/10 p-3" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
