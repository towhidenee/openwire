import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ post, large = false }: { post: Post; large?: boolean }) {
  const href = `/${post.category.toLowerCase()}/${post.slug}`;

  return (
    <article className="group">
      <Link href={href} className="block overflow-hidden rounded-lg bg-black">
        <div className={`relative ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <Image src={post.image} alt="" fill sizes={large ? "720px" : "360px"} className="object-cover transition duration-500 group-hover:scale-105" />
          {post.video ? (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-black uppercase">
              <PlayCircle size={14} /> Watch
            </span>
          ) : null}
        </div>
      </Link>
      <div className="mt-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-wire">
          <Link href={`/category/${post.category.toLowerCase()}`}>{post.category}</Link>
          <span className="text-muted">•</span>
          <span className="text-muted">{formatDate(post.publishedAt)}</span>
        </div>
        <h2 className={`headline mt-2 font-black leading-tight ${large ? "text-3xl md:text-5xl" : "text-xl"}`}>
          <Link href={href} className="hover:text-wire">
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
      </div>
    </article>
  );
}
