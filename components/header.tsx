import Link from "next/link";
import { Search } from "lucide-react";
import { categories } from "@/lib/demo-data";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex">
          {categories.slice(0, 8).map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="hover:text-wire">
              {category.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/search" className="rounded-full border border-black/10 p-2 hover:bg-white" aria-label="Search">
            <Search size={18} />
          </Link>
          <Link href="/login" className="hidden rounded-full px-4 py-2 text-sm font-bold hover:bg-white sm:inline-flex">
            Sign in
          </Link>
          <Link href="/pricing" className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-wire">
            Subscribe
          </Link>
        </div>
      </div>
      <div className="container flex gap-4 overflow-x-auto border-t border-black/5 py-2 text-xs font-bold uppercase tracking-wide text-muted lg:hidden">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`} className="whitespace-nowrap">
            {category.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
