import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { categories, posts } from "@/lib/demo-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  return category ? { title: category.name, description: category.description } : {};
}

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const items = posts.filter((post) => post.category.toLowerCase() === slug);

  return (
    <section className="container mt-10">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">Category</p>
      <h1 className="headline mt-3 text-5xl font-black">{category.name}</h1>
      <p className="mt-3 max-w-2xl text-muted">{category.description}</p>
      <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {(items.length ? items : posts.slice(0, 6)).map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
