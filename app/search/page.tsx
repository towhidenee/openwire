import { ArticleCard } from "@/components/article-card";
import { posts } from "@/lib/demo-data";

export const metadata = {
  title: "Search",
  description: "Search OpenWire articles by keyword, category, author, and tag."
};

export default async function SearchPage({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const query = params?.q?.toLowerCase() || "";
  const results = query
    ? posts.filter((post) =>
        [post.title, post.excerpt, post.category, post.author, post.tags.join(" ")].join(" ").toLowerCase().includes(query)
      )
    : posts;

  return (
    <section className="container mt-10">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">Search</p>
      <h1 className="headline mt-3 text-5xl font-black">Find stories</h1>
      <form className="mt-6 flex max-w-2xl gap-2 rounded-full border border-black/10 bg-white p-2">
        <input name="q" defaultValue={query} placeholder="Search OpenWire" className="min-w-0 flex-1 rounded-full px-4 outline-none" />
        <button className="rounded-full bg-ink px-5 py-3 text-sm font-black text-white">Search</button>
      </form>
      <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {results.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
