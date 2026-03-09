// app/components/CoverageBlock.tsx
import type { Lang } from "@/app/dictionaries/header";
import { getCoverageDictionary } from "@/app/dictionaries/coverage";

type Props = { lang: Lang };

export default function CoverageBlock({ lang }: Props) {
  const t = getCoverageDictionary(lang);

  return (
    <section className="section">
      <div className="container">
        <div className="coverage panel">
          <div className="coverage__hd">
            <h2 className="coverage__title">{t.title}</h2>
          </div>

          <div className="coverage__grid">
            {/* LEFT: text */}
            <div className="coverage__left">
              {t.items.map((it, idx) => (
                <div key={idx} className="coverage__item">
                  <span className="coverage__dot" aria-hidden="true" />
                  <div className="coverage__item-body">
                    <div className="coverage__item-title">{it.title}</div>
                    <div className="coverage__item-text">{it.text}</div>
                    {it.note ? (
                      <div className="coverage__item-note">{it.note}</div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: map */}
            <div className="coverage__right">
              <div className="coverage__map">
                <picture>
                  
                  <img
                    src="/coverage-map.png"
                    alt={t.mapAlt}
                    loading="lazy"
                    decoding="async"
                    className="coverage__map-img"
                  />
                </picture>

                {t.mapCaption ? (
                  <div className="coverage__map-caption">{t.mapCaption}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}