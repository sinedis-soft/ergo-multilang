import { resolveLang } from "@/dictionaries";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeProcess } from "@/components/sections/home/HomeProcess";
import { LeadForm } from "@/components/forms/LeadForm";
import { SchemaOrg } from "@/components/ui/SchemaOrg";

export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = resolveLang(rawLang);

  return (
    <main>
      <SchemaOrg />
      <HomeHero lang={lang} />
      <HomeProcess lang={lang} />
      <LeadForm lang={lang} />
    </main>
  );
}
