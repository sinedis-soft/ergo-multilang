import CookiesPolicyPage from "@/app/components/CookiesPolicyPage";
import { getPrivacyPolicyDictionary } from "@/app/dictionaries/privacyPolicy";
import type { Lang } from "@/app/dictionaries/header";

export const dynamic = "force-static";

type Params = Promise<{ lang: Lang }>;

export default async function PrivacyPolicyRoute({ params }: { params: Params }) {
  const { lang } = await params;
  const t = getPrivacyPolicyDictionary(lang);
  return <CookiesPolicyPage lang={lang} t={t} />;
}
