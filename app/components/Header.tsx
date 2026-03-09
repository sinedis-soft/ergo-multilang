// app/components/Header.tsx

import Link from "next/link";
import { headerDictionary, LOCALES, Lang } from "@/app/dictionaries/header";

function withLang(lang: Lang, path: string) {
  return `/${lang}${path}`;
}

type Active = "main" | "about" | "contacts";

export default function Header({ lang, active }: { lang: Lang; active?: Active }) {
  const t = headerDictionary[lang];
  const toggleId = "nav-toggle";
  const drawerId = "mobile-drawer";

  const navItems = [
    { id: "main", label: t.nav.main, href: "/" },
    { id: "about", label: t.nav.about, href: "/about" },
    { id: "contacts", label: t.nav.contacts, href: "/contacts" },
  ] as const;

  const calcHref = "/#calc";
  const buyHref = "/#buy";

  return (
    <>
      <a className="sr-only" href="#main">
        Skip to content
      </a>

      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar__row">
            <Link href={withLang(lang, "/contacts")} aria-label={t.topContacts}>
              {t.topContacts}
            </Link>

            {LOCALES.map((l) => (
              <Link
                key={l}
                className={`pill ${l === lang ? "pill--active" : ""}`}
                href={withLang(l, "/")}
                aria-current={l === lang ? "page" : undefined}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="site-header">
        <div className="container">
          {/* ВАЖНО: input должен быть на одном уровне с .mobile-drawer */}
          <input id={toggleId} className="nav-toggle" type="checkbox" />

          <div className="header__row">
            {/* Brand */}
            <Link className="brand" href={withLang(lang, "/")} aria-label={t.nav.main}>
              <div className="logo" aria-hidden="true" />
              <div className="brand__text">
                <div className="brand__title">{t.brandTitle}</div>
                <div className="brand__sub">{t.brandSub}</div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="nav" aria-label="Main menu">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={withLang(lang, item.href)}
                  className={item.id === active ? "active" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="header__actions">
              <Link className="btn btn--soft" href={withLang(lang, calcHref)}>
                {t.ctaCalc}
              </Link>

              <Link className="btn btn--primary" href={withLang(lang, buyHref)}>
                {t.ctaBuy}
              </Link>

              <label className="hamburger" htmlFor={toggleId} aria-controls={drawerId}>
                <span className="bars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                {t.menu}
              </label>
            </div>
          </div>

          {/* Mobile drawer */}
          <div id={drawerId} className="mobile-drawer">
            <div className="container">
              <div className="mobile-drawer__inner" aria-label="Mobile menu">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={withLang(lang, item.href)}
                    className={item.id === active ? "active" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="hr" />

                <Link href={withLang(lang, calcHref)}>{t.ctaCalc}</Link>
                <Link href={withLang(lang, buyHref)}>{t.ctaBuy}</Link>

                <div className="hr" />

                {LOCALES.map((l) => (
                  <Link key={l} href={withLang(l, "/")}>
                    {t.topLangLabel}: {l.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}