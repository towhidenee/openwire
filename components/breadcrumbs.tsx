import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="container mt-8 text-xs font-bold uppercase tracking-wide text-muted" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-ink">Home</Link>
      {items.map((item) => (
        <span key={item.href}>
          <span className="mx-2">/</span>
          <Link href={item.href} className="hover:text-ink">{item.label}</Link>
        </span>
      ))}
    </nav>
  );
}
