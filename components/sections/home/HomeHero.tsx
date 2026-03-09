import type { Lang } from "@/dictionaries/config";
import { getDictionaries } from "@/dictionaries";

export function HomeHero({ lang }: { lang: Lang }) {
  const dict = getDictionaries(lang).pages.home;

  return (
    <section className="hero container" id="main-content">
      <div className="hero__wrap glass">
        <span>{dict.hero.badge}</span>
        <h1>{dict.hero.title}</h1>
        <p>{dict.hero.description}</p>
        <div className="hero__actions">
          <a className="btn btn-primary" href="#lead">
            {dict.hero.primaryCta}
          </a>
          <a className="btn btn-secondary" href="#process">
            {dict.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
