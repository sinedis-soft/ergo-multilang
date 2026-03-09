import Home from "@/app/components/Home";
import { LOCALES, Lang } from "@/app/dictionaries/header";

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