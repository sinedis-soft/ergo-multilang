import CookiesPolicyPage from "@/app/components/CookiesPolicyPage";
import { getPrivacyPolicyDictionary } from "@/app/dictionaries/privacyPolicy";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { pageAlternates } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}


export const dynamic = "force-static";

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const seo = getSeoDictionary(lang);

  return {
    alternates: pageAlternates(lang, "/privacy"),

    title: seo.privacy.title,
    description: seo.privacy.description,
  };
}

export default async function PrivacyPolicyRoute({ params }: { params: Params }) {
  const { lang } = await params;
  const t = getPrivacyPolicyDictionary(lang);
  return <CookiesPolicyPage lang={lang} t={t} />;
}
