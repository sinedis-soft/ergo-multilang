import { LOCALES, type Lang } from "@/app/dictionaries/header";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://euro-polis.com";

export const ROUTES = ["", "/about", "/contacts", "/product-info", "/rules", "/privacy", "/cookiepolicy"] as const;

const REGIONAL_HREFLANG_MAP: Record<string, Lang> = {
  // Russian
  "ru-RU": "ru",
  "ru-BY": "ru",
  "ru-KZ": "ru",
  "ru-KG": "ru",
  "ru-UZ": "ru",

  // Latvian
  "lv-LV": "lv",

  // English
  "en-US": "en",
  "en-GB": "en",
  // The language-only "en" entry is the global English fallback.
  // Uzbek
  "uz-UZ": "uz",

  // Kyrgyz
  "ky-KG": "ky",

  // Georgian
  "ka-GE": "ka",

  // Kazakh
  "kk-KZ": "kk",

  // Turkish
  "tr-TR": "tr",

  // Persian (Farsi)
  "fa-IR": "fa",

  // Mongolian
  "mn-MN": "mn",

  // Armenian
  "hy-AM": "hy",
};

export function toAbsolute(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function localePath(lang: Lang, route: string): string {
  return `/${lang}${route}`;
}

export function languageAlternates(route: string): Record<string, string> {
  const languageAlternatesMap = Object.fromEntries(
    LOCALES.map((lang) => [lang, toAbsolute(localePath(lang, route))]),
  );
  const regionalAlternatesMap = Object.fromEntries(
    Object.entries(REGIONAL_HREFLANG_MAP).map(([hreflang, lang]) => [hreflang, toAbsolute(localePath(lang, route))]),
  );

  return {
    ...languageAlternatesMap,
    ...regionalAlternatesMap,
    "x-default": toAbsolute(localePath("en", route)),
  };
}

export function pageAlternates(_lang: Lang, route: string) {
  return {
    canonical: localePath("en", route),
    languages: languageAlternates(route),
  };
}