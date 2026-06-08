import { BarChart3, FileText, Image, LayoutDashboard, Mail, Tags, Users } from "lucide-react";
import { authors, categories, posts, tags } from "@/lib/demo-data";
import { AdminEditor } from "./admin-editor";

const modules = [
  ["Post management", "Create, edit, delete, schedule, feature, and mark breaking/video posts.", FileText],
  ["Category management", "Maintain section descriptions, slugs, and archive visibility.", LayoutDashboard],
  ["Tag management", "Clean taxonomy, aliases, and SEO-friendly tag archives.", Tags],
  ["Author management", "Profiles, roles, bios, bylines, and avatar media.", Users],
  ["Media uploads", "Featured images, alt text, library search, and image optimization.", Image],
  ["Newsletter subscribers", "Export audience lists and review signup source pages.", Mail],
  ["SEO and analytics", "Meta fields, Open Graph, canonical URLs, schema, views, and GA.", BarChart3]
];

export const metadata = { title: "Admin Dashboard" };

export default function AdminPage() {
  return (
    <section className="container mt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">Secure admin</p>
          <h1 className="headline mt-2 text-5xl font-black">OpenWire Dashboard</h1>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted">Edit demo content, manage story flags, and prepare SEO fields from one dashboard.</p>
      </div>
      <AdminEditor initialPosts={posts} categories={categories} authors={authors} />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {modules.map(([title, description, Icon]) => (
          <div key={title as string} className="rounded-lg border border-black/10 bg-white p-5">
            <Icon className="text-wire" />
            <h2 className="mt-4 text-xl font-black">{title as string}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{description as string}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-black/10 bg-white p-5">
        <h2 className="text-xl font-black">Homepage Controls</h2>
        <p className="mt-2 text-sm leading-6 text-muted">Featured lead story, section ordering, breaking ticker, menu builder, banner placements, and subscription callouts are represented in schema and ready for persistent admin forms.</p>
        <p className="mt-4 text-sm font-bold">Available tags: {tags.join(", ")}</p>
      </div>
    </section>
  );
}
