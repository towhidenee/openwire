import Link from "next/link";
import { posts } from "@/lib/demo-data";

export function Sidebar() {
  const mostRead = [...posts].sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <aside className="space-y-8">
      <section className="rounded-lg border border-black/10 bg-white p-5">
        <h2 className="text-sm font-black uppercase tracking-wide">Trending Now</h2>
        <div className="mt-4 space-y-4">
          {mostRead.map((post, index) => (
            <Link key={post.id} href={`/${post.category.toLowerCase()}/${post.slug}`} className="grid grid-cols-[32px_1fr] gap-3">
              <span className="font-serif text-3xl font-black text-wire">{index + 1}</span>
              <span className="text-sm font-bold leading-5 hover:text-wire">{post.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="rounded-lg bg-ink p-5 text-white">
        <span className="text-xs font-black uppercase tracking-[0.24em] text-white/60">Ad Slot</span>
        <h2 className="mt-4 text-2xl font-black">Advertise with OpenWire</h2>
        <p className="mt-2 text-sm leading-6 text-white/70">Native banners, newsletter placements, and sponsorship blocks ready for AdSense or direct campaigns.</p>
      </section>
    </aside>
  );
}
