import { NextResponse } from "next/server";
import { categories } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ data: categories });
}
