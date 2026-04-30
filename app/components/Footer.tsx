// app/components/Footer.tsx

import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import { getFooterDictionary } from "@/app/dictionaries/footer";

function withLang(lang: Lang, path: string) {
  return `/${lang}${path}`;
}

export default function Footer({ lang }: { lang: Lang }) {
  const t = getFooterDictionary(lang);

  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__grid">
            <div>
              <h3 className="site-footer__title">{t.company}</h3>
              <div className="site-footer__links">
                <Link href={withLang(lang, "/about")}>{t.about}</Link>
              </div>
            </div>

            <div>
              <h3 className="site-footer__title">{t.contacts}</h3>
              <div className="site-footer__links">
                <Link href={withLang(lang, "/contacts")}>
                  {t.contactsLink}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="site-footer__title">{t.more}</h3>
              <div className="site-footer__links">
                <a href="#">{t.rules}</a>
                <a href="#">{t.documents}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-row">
          <span>{t.copyright}</span>

          <div className="site-footer__legal">
            <a href="#">{t.cookiePolicy}</a>
            <a href="#">{t.privacyPolicy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}