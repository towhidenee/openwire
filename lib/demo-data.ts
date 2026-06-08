import type { Author, Category, Post } from "./types";

export const categories: Category[] = [
  { name: "World", slug: "world", description: "Global affairs, diplomacy, and power shifts." },
  { name: "Politics", slug: "politics", description: "Policy, elections, institutions, and civic life." },
  { name: "Business", slug: "business", description: "Markets, companies, money, and economic ideas." },
  { name: "Technology", slug: "technology", description: "AI, devices, platforms, security, and digital culture." },
  { name: "Entertainment", slug: "entertainment", description: "Film, streaming, music, art, and celebrity culture." },
  { name: "Sports", slug: "sports", description: "Scores, analysis, profiles, and the business of sport." },
  { name: "Opinion", slug: "opinion", description: "Columns, essays, and argued perspectives." },
  { name: "Video", slug: "video", description: "Watchable explainers, interviews, and field reports." },
  { name: "Lifestyle", slug: "lifestyle", description: "Travel, wellness, food, design, and modern living." },
  { name: "Environment", slug: "environment", description: "Climate, energy, nature, and sustainability." }
];

export const authors: Author[] = [
  {
    name: "Maya Rahman",
    slug: "maya-rahman",
    title: "Global Affairs Editor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    bio: "Maya covers diplomacy, civic systems, and the human consequences of fast-moving policy."
  },
  {
    name: "Jonas Blake",
    slug: "jonas-blake",
    title: "Technology Correspondent",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Jonas reports on AI, platforms, security, and the business models shaping everyday technology."
  },
  {
    name: "Leah Stone",
    slug: "leah-stone",
    title: "Culture Writer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Leah writes about entertainment, lifestyle, and the stories people gather around."
  }
];

const body = `OpenWire reporters spoke with organizers, analysts, and readers watching this story unfold across institutions and everyday life.

The clearest theme is adaptation. Leaders are moving faster, communities are asking sharper questions, and the old playbooks are being rewritten in public. That makes the moment noisy, but it also makes it unusually revealing.

What happens next will depend on execution, public trust, and whether decision-makers can explain tradeoffs without hiding the uncertainty. OpenWire will continue tracking the facts, the numbers, and the people affected by them.`;

export const posts: Post[] = [
  {
    id: "p1",
    title: "New Climate Finance Pact Sets Faster Timeline for Coastal Resilience",
    slug: "new-climate-finance-pact-sets-faster-timeline-for-coastal-resilience",
    excerpt: "A multi-country agreement puts adaptation funding, local planning, and flood infrastructure on a tighter calendar.",
    body,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    category: "Environment",
    tags: ["climate", "finance", "cities"],
    author: "Maya Rahman",
    readingTime: 4,
    publishedAt: "2026-06-08T08:30:00.000Z",
    status: "Published",
    featured: true,
    breaking: true,
    views: 12840,
    seo: {
      metaTitle: "Climate Finance Pact Accelerates Coastal Resilience | OpenWire",
      metaDescription: "A new pact pushes coastal resilience funding and planning onto a faster global timeline.",
      ogTitle: "Climate Finance Pact Sets Faster Timeline",
      ogDescription: "OpenWire explains the adaptation deal and why coastal cities are watching closely.",
      ogImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
      canonical: "/environment/new-climate-finance-pact-sets-faster-timeline-for-coastal-resilience"
    }
  },
  {
    id: "p2",
    title: "Inside the AI Search Shift Changing How Publishers Reach Readers",
    slug: "inside-the-ai-search-shift-changing-how-publishers-reach-readers",
    excerpt: "Media teams are rebuilding audience strategy as AI answers, search referrals, and direct subscriptions collide.",
    body,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    category: "Technology",
    tags: ["ai", "media", "search"],
    author: "Jonas Blake",
    readingTime: 5,
    publishedAt: "2026-06-08T07:00:00.000Z",
    status: "Published",
    featured: true,
    video: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: 9400,
    seo: {
      metaTitle: "AI Search Is Changing Publisher Strategy | OpenWire",
      metaDescription: "How AI search and answer engines are changing discovery for modern publishers.",
      ogTitle: "Inside the AI Search Shift",
      ogDescription: "Publishers are rethinking audience funnels as AI search expands.",
      ogImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      canonical: "/technology/inside-the-ai-search-shift-changing-how-publishers-reach-readers"
    }
  },
  {
    id: "p3",
    title: "Election Officials Test New Verification Tools Ahead of Local Polls",
    slug: "election-officials-test-new-verification-tools-ahead-of-local-polls",
    excerpt: "Local administrators are balancing faster reporting with paper trails, audits, and public confidence.",
    body,
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1400&q=80",
    category: "Politics",
    tags: ["elections", "verification", "government"],
    author: "Maya Rahman",
    readingTime: 3,
    publishedAt: "2026-06-07T21:20:00.000Z",
    status: "Published",
    views: 7100,
    seo: {
      metaTitle: "Election Verification Tools Face First Big Test | OpenWire",
      metaDescription: "Election officials prepare verification systems before local polls.",
      ogTitle: "New Election Verification Tools",
      ogDescription: "Administrators balance speed, audits, and trust.",
      ogImage: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1400&q=80",
      canonical: "/politics/election-officials-test-new-verification-tools-ahead-of-local-polls"
    }
  },
  {
    id: "p4",
    title: "Streaming Studios Bet on Smaller Series With Global Appeal",
    slug: "streaming-studios-bet-on-smaller-series-with-global-appeal",
    excerpt: "After years of expensive tentpoles, entertainment companies are tuning budgets toward nimble international hits.",
    body,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80",
    category: "Entertainment",
    tags: ["streaming", "television", "business"],
    author: "Leah Stone",
    readingTime: 4,
    publishedAt: "2026-06-07T18:15:00.000Z",
    status: "Published",
    views: 6300,
    seo: {
      metaTitle: "Streaming Studios Pivot to Smaller Global Series | OpenWire",
      metaDescription: "Studios are betting on leaner shows with broader appeal.",
      ogTitle: "Streaming's Smaller-Series Bet",
      ogDescription: "A new programming strategy is reshaping entertainment budgets.",
      ogImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80",
      canonical: "/entertainment/streaming-studios-bet-on-smaller-series-with-global-appeal"
    }
  },
  {
    id: "p5",
    title: "Markets Open Mixed as Rate Expectations Split Investors",
    slug: "markets-open-mixed-as-rate-expectations-split-investors",
    excerpt: "Bank shares rose while growth stocks softened, reflecting a divided reading of inflation data.",
    body,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    category: "Business",
    tags: ["markets", "rates", "stocks"],
    author: "Jonas Blake",
    readingTime: 3,
    publishedAt: "2026-06-07T14:45:00.000Z",
    status: "Published",
    views: 8900,
    seo: {
      metaTitle: "Markets Mixed as Rate Expectations Split Investors | OpenWire",
      metaDescription: "Investors split over rate expectations after new data.",
      ogTitle: "Markets Open Mixed",
      ogDescription: "Bank shares and growth stocks diverge.",
      ogImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
      canonical: "/business/markets-open-mixed-as-rate-expectations-split-investors"
    }
  },
  {
    id: "p6",
    title: "A New Generation of Runners Is Rewriting City Marathons",
    slug: "a-new-generation-of-runners-is-rewriting-city-marathons",
    excerpt: "Community clubs, creator-led training, and inclusive race formats are changing who shows up at the start line.",
    body,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=80",
    category: "Sports",
    tags: ["running", "community", "fitness"],
    author: "Leah Stone",
    readingTime: 4,
    publishedAt: "2026-06-06T17:10:00.000Z",
    status: "Published",
    video: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: 5100,
    seo: {
      metaTitle: "City Marathons Find a New Generation | OpenWire",
      metaDescription: "Running clubs and new formats reshape marathon culture.",
      ogTitle: "New Runners, New Marathons",
      ogDescription: "Community and creator-led training are changing race day.",
      ogImage: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=80",
      canonical: "/sports/a-new-generation-of-runners-is-rewriting-city-marathons"
    }
  },
  {
    id: "p7",
    title: "What Better Public Meetings Could Do for Local Trust",
    slug: "what-better-public-meetings-could-do-for-local-trust",
    excerpt: "Opinion: civic processes can be clearer, shorter, and more useful without becoming less democratic.",
    body,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    category: "Opinion",
    tags: ["cities", "democracy", "opinion"],
    author: "Maya Rahman",
    readingTime: 4,
    publishedAt: "2026-06-06T09:25:00.000Z",
    status: "Published",
    views: 4300,
    seo: {
      metaTitle: "Better Public Meetings Could Build Local Trust | OpenWire",
      metaDescription: "An opinion essay on modernizing civic meetings.",
      ogTitle: "Better Public Meetings",
      ogDescription: "How local government can make participation more useful.",
      ogImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
      canonical: "/opinion/what-better-public-meetings-could-do-for-local-trust"
    }
  },
  {
    id: "p8",
    title: "Design Hotels Turn to Neighborhood Guides Instead of Concierge Scripts",
    slug: "design-hotels-turn-to-neighborhood-guides-instead-of-concierge-scripts",
    excerpt: "Travel brands are using local editors to make stays feel less templated and more connected.",
    body,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    category: "Lifestyle",
    tags: ["travel", "design", "hospitality"],
    author: "Leah Stone",
    readingTime: 3,
    publishedAt: "2026-06-05T13:40:00.000Z",
    status: "Published",
    views: 3900,
    seo: {
      metaTitle: "Design Hotels Adopt Local Neighborhood Guides | OpenWire",
      metaDescription: "Hotels are replacing generic scripts with local editorial guides.",
      ogTitle: "Hotels Get More Local",
      ogDescription: "The hospitality shift toward neighborhood expertise.",
      ogImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
      canonical: "/lifestyle/design-hotels-turn-to-neighborhood-guides-instead-of-concierge-scripts"
    }
  }
];

export const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

export function getPost(category: string, slug: string) {
  return posts.find((post) => post.category.toLowerCase() === category && post.slug === slug);
}
