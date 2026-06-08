import type { MetadataRoute } from "next";
import { authors, categories, posts, tags } from "@/lib/demo-data";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/contact", "/privacy", "/terms", "/refund-policy", "/pricing", "/login", "/search"].map((path) => ({
    url: siteUrl(path),
    lastModified: new Date()
  }));

  return [
    ...staticPages,
    ...categories.map((category) => ({ url: siteUrl(`/category/${category.slug}`), lastModified: new Date() })),
    ...tags.map((tag) => ({ url: siteUrl(`/tag/${tag}`), lastModified: new Date() })),
    ...authors.map((author) => ({ url: siteUrl(`/author/${author.slug}`), lastModified: new Date() })),
    ...posts.map((post) => ({ url: siteUrl(`/${post.category.toLowerCase()}/${post.slug}`), lastModified: new Date(post.publishedAt) }))
  ];
}
