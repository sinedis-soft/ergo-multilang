import Home from "@/app/components/Home";
import { LOCALES, Lang } from "@/app/dictionaries/header";
import { pageAlternates } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const seo = getSeoDictionary(lang);

  return {
    alternates: pageAlternates(lang, ""),
    title: seo.home.title,
    description: seo.home.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (LOCALES as readonly string[]).includes(rawLang)
    ? (rawLang as Lang)
    : "ru";

  return <Home lang={lang} />;
}