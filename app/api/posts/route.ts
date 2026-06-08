import { NextResponse } from "next/server";
import { z } from "zod";
import { posts } from "@/lib/demo-data";
import { readingTime } from "@/lib/utils";

const postSchema = z.object({
  title: z.string().min(5),
  slug: z.string().min(3),
  excerpt: z.string().min(10),
  body: z.string().min(20),
  category: z.string().min(2),
  tags: z.array(z.string()).default([]),
  author: z.string().min(2),
  status: z.enum(["Draft", "Published", "Scheduled"]).default("Draft"),
  featured: z.boolean().default(false),
  breaking: z.boolean().default(false),
  video: z.boolean().default(false),
  videoUrl: z.string().url().optional()
});

export async function GET() {
  return NextResponse.json({ data: posts });
}

export async function POST(request: Request) {
  const payload = postSchema.parse(await request.json());
  return NextResponse.json({
    data: {
      id: crypto.randomUUID(),
      ...payload,
      readingTime: readingTime(payload.body),
      createdAt: new Date().toISOString()
    }
  }, { status: 201 });
}
