import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
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

  return (
    <div className="min-h-dvh flex flex-col">
      <Header lang={lang} active="main" />
      {children}
      <Footer lang={lang} />
    </div>
  );
}