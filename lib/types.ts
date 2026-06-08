export type Role = "ADMIN" | "EDITOR" | "AUTHOR";
export type PostStatus = "Draft" | "Published" | "Scheduled";

export type Category = {
  name: string;
  slug: string;
  description: string;
};

export type Author = {
  name: string;
  slug: string;
  title: string;
  avatar: string;
  bio: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  readingTime: number;
  publishedAt: string;
  status: PostStatus;
  featured?: boolean;
  breaking?: boolean;
  video?: boolean;
  videoUrl?: string;
  views: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    canonical: string;
  };
};
