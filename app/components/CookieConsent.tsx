"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Lang } from "@/app/dictionaries/header";
import { getCookieDictionary, type CookieCategoryKey } from "@/app/dictionaries/cookies";

type ConsentState = Record<CookieCategoryKey, boolean>;

const COOKIE_NAME = "deda_cookie_consent_v2";
const ONE_YEAR_SEC = 60 * 60 * 24 * 365;

const DEFAULT_STATE: ConsentState = {
  necessary: true,
  functional: false,
  marketing: false,
};

function safeParseConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const decoded = decodeURIComponent(raw);
    const obj = JSON.parse(decoded) as Partial<ConsentState>;
    return {
      necessary: true,
      functional: Boolean(obj.functional),
      marketing: Boolean(obj.marketing),
    };
  } catch {
    return null;
  }
}

function readCookieValue(name: string): string | null {
  if (typeof document === "undefined") return null;
  const found = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return found ? found.slice(name.length + 1) : null;
}

function writeConsent(state: ConsentState) {
  const value = encodeURIComponent(JSON.stringify({ ...state, necessary: true }));
  const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${value}; Path=/; Max-Age=${ONE_YEAR_SEC}; SameSite=Lax${secure}`;
}

export default function CookieConsent({ lang }: { lang: Lang }) {
  const t = useMemo(() => getCookieDictionary(lang), [lang]);

  const [saved, setSaved] = useState<ConsentState | null>(() => {
    if (typeof window === "undefined") return null;
    return safeParseConsent(readCookieValue(COOKIE_NAME));
  });
  const [draft, setDraft] = useState<ConsentState>(() => {
    if (typeof window === "undefined") return DEFAULT_STATE;
    return safeParseConsent(readCookieValue(COOKIE_NAME)) ?? DEFAULT_STATE;
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function save(next: ConsentState) {
    const normalized: ConsentState = { ...next, necessary: true };
    writeConsent(normalized);
    setSaved(normalized);
    setDraft(normalized);
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: normalized }));
  }

  const status = saved ? (saved.functional || saved.marketing ? "✓" : "✕") : "";
  const mustChoose = saved === null;

  const policyUrl = useMemo(() => `/${lang}${t.policyHref.startsWith("/") ? t.policyHref : `/${t.policyHref}`}`,[lang, t.policyHref]);


  return (
    <>
      <button suppressHydrationWarning type="button" onClick={() => setIsOpen(true)} className="cc-manage" aria-label={t.manageBtn}>
        {t.manageBtn} {status}
      </button>

      {isOpen ? (
        <div className="cc-overlay" role="dialog" aria-modal="true" aria-label={t.modalTitle}>
          <div className="cc-modal">
            <div className="cc-head">
              <div>
                <div className="cc-title">{t.modalTitle}</div>
                <p className="cc-text">{t.modalText}</p>
              </div>
              {!mustChoose ? (
                <button type="button" className="cc-close" onClick={() => setIsOpen(false)} aria-label={t.closeAria}>✕</button>
              ) : null}
            </div>
            <div className="cc-cats__title">{t.categoriesTitle}</div>
            <div className="cc-cats__list">
              {t.categories.map((c) => {
                const checked = Boolean(draft[c.key]);
                const locked = Boolean(c.locked);
                return (
                  <div key={c.key} className="cc-cat">
                    <div className="cc-cat__text">
                      <div className="cc-cat__name">{c.title}</div>
                      <div className="cc-cat__desc">{c.description}</div>
                    </div>
                    <label className="cc-toggle">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checked}
                        disabled={locked}
                        onChange={(e) => setDraft((prev) => ({ ...prev, [c.key]: e.target.checked, necessary: true }))}
                      />
                      <span className={["cc-toggle__track", locked ? "is-locked" : checked ? "is-on" : "is-off"].join(" ")} />
                    </label>
                  </div>
                );
              })}
            </div>

            <p className="cc-policy">{t.policyText} <Link href={policyUrl} className="link" onClick={() => setIsOpen(false)}>{t.policyLabel}</Link>.</p>

            <div className="cc-actions">
              <button type="button" className="btn btn-ghost" onClick={() => save({ necessary: true, functional: false, marketing: false })}>{t.rejectAllBtn}</button>
              <button type="button" className="btn btn-secondary" onClick={() => save(draft)}>{t.saveBtn}</button>
              <button type="button" className="btn btn-primary" onClick={() => save({ necessary: true, functional: true, marketing: true })}>{t.acceptAllBtn}</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
