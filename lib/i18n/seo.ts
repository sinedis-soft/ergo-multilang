import type { Lang } from "@/dictionaries/config";
import { LOCALES } from "@/dictionaries/config";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function buildCanonical(lang: Lang, path = ""): string {
  return `${SITE_URL}/${lang}${path}`;
}

export function buildLanguageAlternates(path = "") {
  return Object.fromEntries(LOCALES.map((lang) => [lang, `${SITE_URL}/${lang}${path}`]));
}
