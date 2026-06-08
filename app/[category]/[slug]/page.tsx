import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ShareButtons } from "@/components/share-buttons";
import { ArticleCard } from "@/components/article-card";
import { getPost, posts } from "@/lib/demo-data";
import { formatDate, siteUrl } from "@/lib/utils";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPost(category, slug);
  if (!post) return {};

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    alternates: { canonical: post.seo.canonical },
    openGraph: {
      title: post.seo.ogTitle,
      description: post.seo.ogDescription,
      images: [post.seo.ogImage],
      type: "article",
      publishedTime: post.publishedAt
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.ogTitle,
      description: post.seo.ogDescription,
      images: [post.seo.ogImage]
    }
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    category: post.category.toLowerCase(),
    slug: post.slug
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const post = getPost(category, slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.category === post.category && item.id !== post.id).slice(0, 3);
  const articleUrl = siteUrl(`/${post.category.toLowerCase()}/${post.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "OpenWire", url: siteUrl("/") },
    mainEntityOfPage: articleUrl
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: post.category, item: siteUrl(`/category/${post.category.toLowerCase()}`) },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ label: post.category, href: `/category/${post.category.toLowerCase()}` }, { label: post.title, href: `/${post.category.toLowerCase()}/${post.slug}` }]} />
      <article className="container mt-8 grid gap-10 lg:grid-cols-[minmax(0,760px)_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wide text-wire">
            <Link href={`/category/${post.category.toLowerCase()}`}>{post.category}</Link>
            {post.breaking ? <span className="rounded-full bg-wire px-2 py-1 text-white">Breaking</span> : null}
            {post.video ? <span className="rounded-full bg-ink px-2 py-1 text-white">Video</span> : null}
          </div>
          <h1 className="headline mt-4 text-4xl font-black leading-none md:text-6xl">{post.title}</h1>
          <p className="mt-5 text-xl leading-8 text-muted">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-black/10 py-4 text-sm text-muted">
            <span>By <Link href={`/author/${post.author.toLowerCase().replaceAll(" ", "-")}`} className="font-bold text-ink">{post.author}</Link> • {formatDate(post.publishedAt)} • {post.readingTime} min read</span>
            <ShareButtons title={post.title} />
          </div>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg">
            <Image src={post.image} alt="" fill priority className="object-cover" />
          </div>
          {post.video && post.videoUrl ? (
            <iframe className="mt-8 aspect-video w-full rounded-lg" src={post.videoUrl} title={post.title} allowFullScreen />
          ) : null}
          <div className="mt-8 space-y-6 text-lg leading-8">
            {post.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tag/${tag}`} className="rounded-full border border-black/10 px-3 py-1 text-sm font-bold hover:bg-white">#{tag}</Link>
            ))}
          </div>
        </div>
        <aside className="lg:pt-28">
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <h2 className="text-sm font-black uppercase tracking-wide">Related Articles</h2>
            <div className="mt-4 grid gap-5">
              {(related.length ? related : posts.filter((item) => item.id !== post.id).slice(0, 3)).map((item) => (
                <ArticleCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </aside>
      </article>
    </>
  );
}
