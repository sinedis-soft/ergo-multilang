"use client";

// app/components/Header.tsx

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { headerDictionary, LOCALES, LOCALE_META, Lang } from "@/app/dictionaries/header";

function withLang(lang: Lang, path: string) {
  return `/${lang}${path}`;
}

function switchLangPath(pathname: string | null, currentLang: Lang, targetLang: Lang) {
  if (!pathname) return withLang(targetLang, "/");

  const currentPrefix = `/${currentLang}`;

  if (pathname === currentPrefix) return `/${targetLang}`;
  if (pathname.startsWith(`${currentPrefix}/`)) {
    return `/${targetLang}${pathname.slice(currentPrefix.length)}`;
  }

  return withLang(targetLang, "/");
}

type Active = "main" | "about" | "contacts";

function detectActiveFromPath(pathname: string | null, lang: Lang): Active {
  const base = `/${lang}`;

  if (!pathname || pathname === base || pathname === `${base}/`) return "main";
  if (pathname.startsWith(`${base}/about`)) return "about";
  if (pathname.startsWith(`${base}/contacts`)) return "contacts";

  return "main";
}

export default function Header({ lang, active }: { lang: Lang; active?: Active }) {
  const t = headerDictionary[lang];
  const pathname = usePathname();
  const toggleId = "nav-toggle";
  const drawerId = "mobile-drawer";
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);

  const resolvedActive = active ?? detectActiveFromPath(pathname, lang);

  const navItems = [
    { id: "main", label: t.nav.main, href: "/" },
    { id: "about", label: t.nav.about, href: "/about" },
    { id: "contacts", label: t.nav.contacts, href: "/contacts" },
  ] as const;

  const groupedLocales = useMemo(() => {
    return LOCALES.reduce<Record<string, Lang[]>>((acc, locale) => {
      const region = LOCALE_META[locale].region;
      if (!acc[region]) acc[region] = [];
      acc[region].push(locale);
      return acc;
    }, {});
  }, []);


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

            <button className="language-trigger" type="button" onClick={() => setLanguageModalOpen(true)}>
              <span aria-hidden="true">🌐</span>
              <span>{LOCALE_META[lang].nativeName}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="site-header">
        <div className="container">
          <input id={toggleId} className="nav-toggle" type="checkbox" />

          <div className="header__row">
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
                  className={item.id === resolvedActive ? "active" : undefined}
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
                    className={item.id === resolvedActive ? "active" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="hr" />
                <Link href={withLang(lang, calcHref)}>{t.ctaCalc}</Link>
                <Link href={withLang(lang, buyHref)}>{t.ctaBuy}</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isLanguageModalOpen && (
        <div className="language-modal" role="dialog" aria-modal="true" aria-label={t.languageDialogTitle}>
          <div className="language-modal__card">
            <div className="language-modal__header">
              <h2>{t.languageDialogTitle}</h2>
              <button type="button" onClick={() => setLanguageModalOpen(false)}>
                {t.languageDialogClose}
              </button>
            </div>

            {Object.entries(groupedLocales).map(([region, locales]) => (
              <section key={region} className="language-modal__region">
                <h3>{region}</h3>
                <div className="language-modal__grid">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={switchLangPath(pathname, lang, l)}
                      className={`pill ${l === lang ? "pill--active" : ""}`}
                      onClick={() => setLanguageModalOpen(false)}
                    >
                      {LOCALE_META[l].nativeName}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </>
  );
}