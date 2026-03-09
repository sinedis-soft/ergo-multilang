// app/components/InfoCompare.tsx

import type { Lang } from "@/app/dictionaries/header";
import { getInfoCompareDictionary } from "@/app/dictionaries/infoCompare";

export default function InfoCompare({ lang }: { lang: Lang }) {
  const t = getInfoCompareDictionary(lang);

  return (
    <section className="section">
      <div className="container">
        <div className="info-compare">
          {/* LEFT */}
          <div className="info-compare__left">
            <div className="info-compare__kicker">{t.kicker}</div>
            <h2 className="info-compare__title">{t.title}</h2>

            {t.leftBlocks.map((b, idx) => (
              <p key={idx} className="info-compare__p">
                <strong>{b.strong}</strong> {b.text}
              </p>
            ))}
          </div>

          {/* RIGHT */}
          <aside className="info-compare__right panel">
            <div className="panel__hd">
              <div className="panel__title">{t.rightTitle}</div>
            </div>

            <div className="panel__body">
              <div className="info-compare__rows">
                {t.rows.map((r, idx) => (
                  <div key={idx} className="info-compare__row">
                    <div className="info-compare__row-title">
                      {r.title}
                    </div>
                    <div className="info-compare__row-text">
                      {r.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hr" />

              <p className="info-compare__note">{t.note}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}