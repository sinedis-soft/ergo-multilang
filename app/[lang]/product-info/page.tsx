import CookiesPolicyPage from "@/app/components/CookiesPolicyPage";
import { getProductInfoDictionary } from "@/app/dictionaries/productInfo";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { pageAlternates } from "@/app/seo";
function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export const dynamic = "force-static";

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return {
    alternates: pageAlternates(lang, "/product-info"),
  };
}


export default async function ProductInfoRoute({ params }: { params: Params }) {
  const { lang } = await params;
  const t = getProductInfoDictionary(lang);
  return <CookiesPolicyPage lang={lang} t={t} />;
}
