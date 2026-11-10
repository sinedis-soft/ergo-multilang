import type { MetadataRoute } from "next";
import sitemapDates from "@/app/lib/sitemapDates.json";
import { LOCALES } from "@/app/dictionaries/header";
import { ROUTES, localePath, toAbsolute } from "@/app/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const dates: Record<string, { lastModified?: string }> = sitemapDates;

  return LOCALES.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: toAbsolute(localePath(lang, route)),
      ...(dates[route]?.lastModified ? { lastModified: dates[route].lastModified } : {}),
    })),
  );
}