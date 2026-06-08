import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { authors, posts } from "@/lib/demo-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = authors.find((item) => item.slug === slug);
  if (!author) notFound();
  const items = posts.filter((post) => post.author === author.name);

  return (
    <section className="container mt-10">
      <div className="flex flex-col gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-center">
        <Image src={author.avatar} alt={author.name} width={112} height={112} className="h-28 w-28 rounded-full object-cover" />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">{author.title}</p>
          <h1 className="headline mt-2 text-5xl font-black">{author.name}</h1>
          <p className="mt-3 max-w-2xl text-muted">{author.bio}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
