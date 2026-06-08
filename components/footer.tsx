import Link from "next/link";
import { categories } from "@/lib/demo-data";
import { Logo } from "./logo";

const links = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Terms", "/terms"],
  ["Privacy", "/privacy"],
  ["Refund Policy", "/refund-policy"]
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            OpenWire.today publishes independent reporting, concise briefings, and thoughtful analysis for readers who want the signal without the noise.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide">Sections</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="text-muted hover:text-ink">
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide">Company</h3>
          <div className="mt-4 grid gap-2 text-sm">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-muted hover:text-ink">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 py-5 text-center text-xs text-muted">
        © 2026 OpenWire.today. Original demo publication platform.
      </div>
    </footer>
  );
}
