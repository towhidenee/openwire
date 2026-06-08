import { PrismaClient, PostStatus, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { authors, categories, posts, tags } from "../lib/demo-data";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash(process.env.ADMIN_PASSWORD || "ChangeMe123!", 10);
  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || "admin@openwire.today" },
    update: {},
    create: {
      name: "OpenWire Admin",
      email: process.env.ADMIN_EMAIL || "admin@openwire.today",
      password,
      role: Role.ADMIN
    }
  });

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category
    });
  }

  for (const tag of tags) {
    await prisma.tag.upsert({
      where: { slug: tag },
      update: { name: tag },
      create: { name: tag, slug: tag }
    });
  }

  for (const author of authors) {
    await prisma.author.upsert({
      where: { slug: author.slug },
      update: author,
      create: author
    });
  }

  for (const post of posts) {
    const category = await prisma.category.findUniqueOrThrow({ where: { slug: post.category.toLowerCase() } });
    const author = await prisma.author.findUniqueOrThrow({ where: { slug: post.author.toLowerCase().replaceAll(" ", "-") } });
    await prisma.post.upsert({
      where: { categoryId_slug: { categoryId: category.id, slug: post.slug } },
      update: {},
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        body: post.body,
        featuredImage: post.image,
        readingTime: post.readingTime,
        status: PostStatus.PUBLISHED,
        featured: Boolean(post.featured),
        breaking: Boolean(post.breaking),
        video: Boolean(post.video),
        videoUrl: post.videoUrl,
        publishedAt: new Date(post.publishedAt),
        views: post.views,
        categoryId: category.id,
        authorId: author.id,
        seo: {
          create: {
            metaTitle: post.seo.metaTitle,
            metaDescription: post.seo.metaDescription,
            ogTitle: post.seo.ogTitle,
            ogDescription: post.seo.ogDescription,
            ogImage: post.seo.ogImage,
            canonicalUrl: post.seo.canonical
          }
        },
        tags: {
          create: post.tags.map((tag) => ({ tag: { connect: { slug: tag } } }))
        }
      }
    });
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
