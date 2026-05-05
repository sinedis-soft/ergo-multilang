import type { MetadataRoute } from "next";
import { LOCALES } from "@/app/dictionaries/header";
import { ROUTES, localePath, toAbsolute } from "@/app/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return LOCALES.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: toAbsolute(localePath(lang, route)),
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    })),
  );
}