import { resolveLang } from "@/dictionaries";

const termsTitleByLang = {
  ru: "Условия использования",
  en: "Terms of Use",
  lv: "Lietošanas noteikumi",
  uz: "Foydalanish shartlari",
} as const;

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = resolveLang(rawLang);

  return (
    <main className="section container" id="main-content">
      <article className="glass panel-pad legal-page">
        <h1>{termsTitleByLang[lang]}</h1>
      </article>
    </main>
  );
}
