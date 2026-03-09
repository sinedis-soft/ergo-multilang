import type { Metadata } from "next";
import { getDictionaries, LOCALES, resolveLang } from "@/dictionaries";
import { buildCanonical, buildLanguageAlternates } from "@/lib/i18n/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = resolveLang(rawLang);
  const dict = getDictionaries(lang);

  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      canonical: buildCanonical(lang),
      languages: buildLanguageAlternates(),
    },
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: buildCanonical(lang),
      siteName: dict.meta.siteName,
      locale: lang,
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = resolveLang(rawLang);
  const dict = getDictionaries(lang);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {dict.header.skipToContent}
      </a>
      <SiteHeader lang={lang} />
      {children}
      <SiteFooter lang={lang} />
    </>
  );
}
