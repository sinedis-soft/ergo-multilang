"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { CSSProperties } from "react";
import type { Lang } from "@/dictionaries/config";
import { LOCALES } from "@/dictionaries/config";
import { getDictionaries } from "@/dictionaries";

export function SiteHeader({ lang }: { lang: Lang }) {
  const dict = getDictionaries(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopLocaleOpen, setIsDesktopLocaleOpen] = useState(false);
  const [isMobileLocaleOpen, setIsMobileLocaleOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 900px)").matches : false,
  );
  const [mobileLocaleMenuStyle, setMobileLocaleMenuStyle] = useState<CSSProperties>({});

  const desktopSwitcherRef = useRef<HTMLDivElement | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileSwitcherRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement | null>(null);
  const mobileCtaRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const onChange = () => {
      setIsMobileViewport(media.matches);
      setIsDesktopLocaleOpen(false);
      setIsMobileLocaleOpen(false);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsDesktopLocaleOpen(false);
        setIsMobileLocaleOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isDesktopLocaleOpen && !isMobileLocaleOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const insideDesktop = desktopSwitcherRef.current?.contains(target) || desktopMenuRef.current?.contains(target);
      const insideMobile = mobileSwitcherRef.current?.contains(target) || mobileMenuRef.current?.contains(target);

      if (!insideDesktop && !insideMobile) {
        setIsDesktopLocaleOpen(false);
        setIsMobileLocaleOpen(false);
      }
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("touchstart", onPointerDown);

    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("touchstart", onPointerDown);
    };
  }, [isDesktopLocaleOpen, isMobileLocaleOpen]);

  useEffect(() => {
    if (!isMobileViewport || !isOpen || !isMobileLocaleOpen) return;

    const updatePosition = () => {
      const triggerRect = mobileTriggerRef.current?.getBoundingClientRect();
      const ctaRect = mobileCtaRef.current?.getBoundingClientRect();
      if (!triggerRect) return;

      const viewportPadding = 12;
      const gapFromTrigger = 8;
      const gapFromCta = 10;
      const top = triggerRect.bottom + gapFromTrigger;
      const width = Math.max(triggerRect.width, 140);
      const left = Math.min(Math.max(viewportPadding, triggerRect.left), window.innerWidth - width - viewportPadding);
      const ctaTop = ctaRect?.top ?? window.innerHeight - viewportPadding;
      const maxHeight = Math.max(120, ctaTop - top - gapFromCta);

      setMobileLocaleMenuStyle({
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        maxHeight: `${maxHeight}px`,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isMobileLocaleOpen, isMobileViewport, isOpen]);

  function closeAllMenus() {
    setIsOpen(false);
    setIsDesktopLocaleOpen(false);
    setIsMobileLocaleOpen(false);
  }

  function localeLinks() {
    return LOCALES.map((locale) => (
      <Link
        key={locale}
        href={`/${locale}`}
        role="menuitem"
        aria-current={locale === lang ? "page" : undefined}
        className={locale === lang ? "is-active" : undefined}
        onClick={closeAllMenus}
      >
        {locale.toUpperCase()}
      </Link>
    ));
  }

  return (
    <header className="site-header container">
      <div className="site-header__inner glass">
        <Link href={`/${lang}`} className="site-header__brand" onClick={closeAllMenus}>
          {dict.header.brandTitle}
        </Link>

        <button
          type="button"
          className="site-header__burger"
          aria-expanded={isOpen}
          aria-controls="site-nav-menu"
          aria-label={isOpen ? dict.header.closeMenu : dict.header.openMenu}
          onClick={() => {
            setIsOpen((value) => !value);
            setIsDesktopLocaleOpen(false);
            setIsMobileLocaleOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isOpen ? "is-open" : ""}`} id="site-nav-menu" aria-label="main navigation">
          <Link href={`/${lang}`} onClick={closeAllMenus}>
            {dict.navigation.home}
          </Link>
          <Link href={`/${lang}/about`} onClick={closeAllMenus}>
            {dict.navigation.about}
          </Link>
          <Link href={`/${lang}/contacts`} onClick={closeAllMenus}>
            {dict.navigation.contacts}
          </Link>

          <div className="locale-switcher locale-switcher--mobile" ref={mobileSwitcherRef}>
            <button
              ref={mobileTriggerRef}
              type="button"
              className="locale-switcher__trigger"
              aria-haspopup="menu"
              aria-expanded={isMobileLocaleOpen}
              aria-controls="mobile-locale-menu"
              onClick={() => {
                setIsMobileLocaleOpen((value) => !value);
                setIsDesktopLocaleOpen(false);
              }}
            >
              {lang.toUpperCase()}
            </button>
          </div>

          <Link ref={mobileCtaRef} className="btn btn-primary site-nav__mobile-cta" href={`/${lang}#lead`} onClick={closeAllMenus}>
            {dict.header.primaryCta}
          </Link>
        </nav>

        <div className="site-header__actions">
          <div className="locale-switcher locale-switcher--desktop" ref={desktopSwitcherRef}>
            <button
              type="button"
              className="locale-switcher__trigger"
              aria-haspopup="menu"
              aria-expanded={isDesktopLocaleOpen}
              aria-controls="desktop-locale-menu"
              onClick={() => {
                setIsDesktopLocaleOpen((value) => !value);
                setIsMobileLocaleOpen(false);
              }}
            >
              {lang.toUpperCase()}
            </button>
            {isDesktopLocaleOpen ? (
              <div id="desktop-locale-menu" ref={desktopMenuRef} className="locale-switcher__menu" role="menu" aria-label="language menu">
                {localeLinks()}
              </div>
            ) : null}
          </div>

          <Link className="btn btn-primary site-header__cta" href={`/${lang}#lead`}>
            {dict.header.primaryCta}
          </Link>
        </div>

        {typeof window !== "undefined" && isMobileViewport && isOpen && isMobileLocaleOpen
          ? createPortal(
              <div
                id="mobile-locale-menu"
                ref={mobileMenuRef}
                className="locale-switcher__menu locale-switcher__menu--portal"
                role="menu"
                aria-label="language menu"
                style={mobileLocaleMenuStyle}
              >
                {localeLinks()}
              </div>,
              document.body,
            )
          : null}

        {isOpen ? <button type="button" className="site-nav__backdrop" aria-label={dict.header.closeMenu} onClick={closeAllMenus} /> : null}
      </div>
    </header>
  );
}
