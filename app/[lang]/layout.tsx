import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import type { Metadata } from "next";
import { LOCALES, Lang } from "@/app/dictionaries/header";
import { SITE_URL } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import { InsuranceAgencyJsonLd, OrganizationJsonLd } from "@/app/components/StructuredData";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (LOCALES as readonly string[]).includes(rawLang)
    ? (rawLang as Lang)
    : "ru";

  const isRtl = lang === "fa";

  return (
    
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-dvh flex flex-col ${isRtl ? "text-right" : "text-left"}`}
    >
      <OrganizationJsonLd lang={lang} />
      <InsuranceAgencyJsonLd lang={lang} />
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (LOCALES as readonly string[]).includes(rawLang) ? (rawLang as Lang) : "ru";

  const seo = getSeoDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seo.home.title,
      template: "%s | EURO polis",
    },
    description:seo.home.description,
    alternates: {
      canonical: `/${lang}`,
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `/${lang}`,
      siteName: "EURO polis",
      title: seo.home.title,
      description: seo.home.description,
    },
  };
}
