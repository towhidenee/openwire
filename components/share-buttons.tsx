"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";

export function ShareButtons({ title }: { title: string }) {
  const share = (network: "twitter" | "facebook" | "linkedin") => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    const hrefs = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`
    };
    window.open(hrefs[network], "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => share("twitter")} className="rounded-full border border-black/10 p-2 hover:bg-white" aria-label="Share on X"><Twitter size={18} /></button>
      <button onClick={() => share("facebook")} className="rounded-full border border-black/10 p-2 hover:bg-white" aria-label="Share on Facebook"><Facebook size={18} /></button>
      <button onClick={() => share("linkedin")} className="rounded-full border border-black/10 p-2 hover:bg-white" aria-label="Share on LinkedIn"><Linkedin size={18} /></button>
    </div>
  );
}
