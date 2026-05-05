import { LOCALES, type Lang } from "@/app/dictionaries/header";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://europolis.lv";

export const ROUTES = ["", "/about", "/contacts", "/product-info", "/rules", "/privacy", "/cookiepolicy"] as const;

export function toAbsolute(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function localePath(lang: Lang, route: string): string {
  return `/${lang}${route}`;
}

export function languageAlternates(route: string): Record<string, string> {
  return Object.fromEntries(
    LOCALES.map((lang) => [lang, toAbsolute(localePath(lang, route))]),
  );
}

export function pageAlternates(lang: Lang, route: string) {
  return {
    canonical: localePath(lang, route),
    languages: languageAlternates(route),
  };
}