export const dynamic = "force-static";
export const dynamicParams = false;

import type { Metadata } from "next";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { getCookiesPolicyDictionary } from "@/app/dictionaries/privacyCookies";
import CookiesPolicyPage from "@/app/components/CookiesPolicyPage";
import { pageAlternates } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const seo = getSeoDictionary(lang);

  return {
    alternates: pageAlternates(lang, "/cookiepolicy"),
    title: seo.cookiePolicy.title,
    description: seo.cookiePolicy.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const t = getCookiesPolicyDictionary(lang);

  return <CookiesPolicyPage lang={lang} t={t} />;
}
