import type { Lang } from "@/dictionaries/config";
import { getDictionaries } from "@/dictionaries";

export function SiteFooter({ lang }: { lang: Lang }) {
  const dict = getDictionaries(lang);

  return (
    <footer className="footer container">
      <div className="glass footer-card">
        <strong>{dict.footer.legalTitle}</strong>
        <p>{dict.footer.rights}</p>
      </div>
    </footer>
  );
}
