import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { credits } from "@/content/credits";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/behind-the-scenes", "/about", "/press", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.8 })),
    ...credits.map((c) => ({ url: `${site.url}/work/${c.slug}`, lastModified: new Date(), priority: 0.7 })),
  ];
}
