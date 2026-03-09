import Link from "next/link";
import type { Lang } from "@/dictionaries/config";
import { LOCALES } from "@/dictionaries/config";
import { getDictionaries } from "@/dictionaries";

export function SiteHeader({ lang }: { lang: Lang }) {
  const dict = getDictionaries(lang);

  return (
    <header className="site-header container">
      <div className="site-header__inner glass">
        <Link href={`/${lang}`}>{dict.header.brandTitle}</Link>
        <nav className="site-nav" aria-label="main navigation">
          <Link href={`/${lang}`}>{dict.navigation.home}</Link>
          <Link href={`/${lang}/about`}>{dict.navigation.about}</Link>
          <Link href={`/${lang}/contacts`}>{dict.navigation.contacts}</Link>
          {LOCALES.map((locale) => (
            <Link key={locale} href={`/${locale}`} aria-current={locale === lang ? "page" : undefined}>
              {locale.toUpperCase()}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-primary" href={`/${lang}#lead`}>
          {dict.header.primaryCta}
        </Link>
      </div>
    </header>
  );
}
