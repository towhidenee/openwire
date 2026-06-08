import { NextResponse } from "next/server";
import { tags } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ data: tags });
}
