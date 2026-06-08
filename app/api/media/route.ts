import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required." }, { status: 400 });
  }

  return NextResponse.json({
    data: {
      filename: file.name,
      size: file.size,
      url: `/uploads/${file.name}`,
      note: "Wire this route to S3, Cloudinary, or local VPS storage in production."
    }
  });
}
