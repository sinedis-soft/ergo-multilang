export const dynamic = "force-static";
export const dynamicParams = false;

import type { Metadata } from "next";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { getAboutDictionary } from "@/app/dictionaries/about";
import AboutPage from "@/app/components/AboutPage";

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
  const t = getAboutDictionary(lang);

  return {
    title: t.seo.title,
    description: t.seo.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const t = getAboutDictionary(lang);

  return <AboutPage lang={lang} t={t} />;
}
