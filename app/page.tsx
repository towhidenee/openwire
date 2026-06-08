import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { Newsletter } from "@/components/newsletter";
import { Sidebar } from "@/components/sidebar";
import { categories, posts } from "@/lib/demo-data";

export default function HomePage() {
  const featured = posts.find((post) => post.featured) || posts[0];
  const secondary = posts.filter((post) => post.id !== featured.id).slice(0, 4);
  const latest = posts.slice(1);

  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <div className="container flex items-center gap-3 overflow-hidden py-3 text-sm">
          <span className="rounded-full bg-wire px-3 py-1 text-xs font-black uppercase text-white">Breaking</span>
          <div className="flex min-w-0 gap-8 whitespace-nowrap font-semibold">
            {posts.filter((post) => post.breaking).map((post) => (
              <Link key={post.id} href={`/${post.category.toLowerCase()}/${post.slug}`} className="hover:text-wire">
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mt-10 grid gap-4 border-b border-black/10 pb-8 md:grid-cols-[1fr_360px] md:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">OpenWire.today</p>
          <h1 className="headline mt-3 text-5xl font-black leading-none md:text-7xl">Independent news for a moving world.</h1>
        </div>
        <p className="text-base leading-7 text-muted">
          Original reporting, concise context, and premium analysis across politics, business, technology, culture, sport, video, lifestyle, and climate.
        </p>
      </section>

      <section className="container mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="grid gap-8">
          <ArticleCard post={featured} large />
          <div className="grid gap-6 md:grid-cols-2">
            {secondary.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <Sidebar />
      </section>

      <section className="container mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">Sections</p>
            <h2 className="headline mt-2 text-3xl font-black md:text-5xl">Explore the wire</h2>
          </div>
          <Link href="/search" className="text-sm font-black hover:text-wire">Search all</Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="rounded-lg border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lift">
              <h3 className="font-black">{category.name}</h3>
              <p className="mt-2 text-sm leading-5 text-muted">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="headline text-3xl font-black">Latest Articles</h2>
          <Link href="/search" className="text-sm font-black hover:text-wire">View all</Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
