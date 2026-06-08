import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function readingTime(text: string) {
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 220));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}

export function siteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://openwire.today";
  return `${base}${path}`;
}
