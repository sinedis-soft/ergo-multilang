import CookiesPolicyPage from "@/app/components/CookiesPolicyPage";
import { getProductInfoDictionary } from "@/app/dictionaries/productInfo";
import type { Lang } from "@/app/dictionaries/header";

export const dynamic = "force-static";

type Params = Promise<{ lang: Lang }>;

export default async function ProductInfoRoute({ params }: { params: Params }) {
  const { lang } = await params;
  const t = getProductInfoDictionary(lang);
  return <CookiesPolicyPage lang={lang} t={t} />;
}
