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
                <Link href={withLang(lang, "/rules")}>{t.rules}</Link>
                <Link href={withLang(lang, "/product-info")}>{t.documents}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-row">
          <span>{t.copyright}</span>

          <div className="site-footer__legal">
            <Link href={withLang(lang, "/cookiepolicy")}>{t.cookiePolicy}</Link>
            <Link href={withLang(lang, "/privacy")}>{t.privacyPolicy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}