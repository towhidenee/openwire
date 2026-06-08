import { ArticleCard } from "@/components/article-card";
import { posts, tags } from "@/lib/demo-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tags.map((slug) => ({ slug }));
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const items = posts.filter((post) => post.tags.includes(slug));

  return (
    <section className="container mt-10">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">Tag</p>
      <h1 className="headline mt-3 text-5xl font-black">#{slug}</h1>
      <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
