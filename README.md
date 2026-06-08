# OpenWire

OpenWire is a deployment-ready Next.js news and media platform for `OpenWire.today`. It uses an original premium card-based editorial interface, App Router pages, role-aware admin screens, API routes, Prisma schema, and seeded demo content.

## Stack

- Next.js, React, TypeScript, Tailwind CSS
- NextAuth credentials login with admin/editor roles
- Prisma schema for PostgreSQL
- SEO metadata, sitemap, robots, Open Graph, Twitter cards, and NewsArticle schema

## Quick Start

```bash
cp .env.example .env
npm install
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

Open `http://localhost:3000`.

Demo admin credentials come from `.env`:

- `ADMIN_EMAIL=admin@openwire.today`
- `ADMIN_PASSWORD=ChangeMe123!`

## Deployment

1. Create a PostgreSQL database.
2. Set the environment variables from `.env.example` in Vercel or your VPS.
3. Run `npm run db:push && npm run db:seed`.
4. Deploy with `npm run build` and `npm run start`, or Vercel's standard Next.js flow.

## Notes

The public pages use seeded demo data from `lib/demo-data.ts` so the site is immediately browsable. The Prisma schema and API route structure are ready for persistent data integration.
