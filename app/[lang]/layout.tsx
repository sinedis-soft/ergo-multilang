import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import { LOCALES, Lang } from "@/app/dictionaries/header";

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
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}