import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";

function withLang(lang: Lang, path: string) {
  return `/${lang}${path}`;
}

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__grid">
            <div>
              <h3 className="site-footer__title">О компании ERGO</h3>
              <div className="site-footer__links">
                <Link href={withLang(lang, "/about")}>О нас</Link>
              </div>
            </div>

            <div>
              <h3 className="site-footer__title">Контакты</h3>
              <div className="site-footer__links">
                <Link href={withLang(lang, "/contacts")}>Контакты и офисы</Link>
              </div>
            </div>

            <div>
              <h3 className="site-footer__title">Более</h3>
              <div className="site-footer__links">
                <a href="#">Правила</a>
                <a href="#">Документы с информацией о продукте</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-row">
          <span>© 2025 ERGO</span>
          <div className="site-footer__legal">
            <a href="#">Политика использования файлов cookie</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
