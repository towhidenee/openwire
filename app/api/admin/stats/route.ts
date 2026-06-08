import { NextResponse } from "next/server";
import { authors, categories, posts } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({
    posts: posts.length,
    users: authors.length + 1,
    categories: categories.length,
    views: posts.reduce((sum, post) => sum + post.views, 0)
  });
}
