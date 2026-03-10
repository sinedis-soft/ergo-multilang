import { resolveLang } from "@/dictionaries";

const privacyTitleByLang = {
  ru: "Политика конфиденциальности",
  en: "Privacy Policy",
  lv: "Privātuma politika",
  uz: "Maxfiylik siyosati",
} as const;

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = resolveLang(rawLang);

  return (
    <main className="section container" id="main-content">
      <article className="glass panel-pad legal-page">
        <h1>{privacyTitleByLang[lang]}</h1>
      </article>
    </main>
  );
}
