// app/components/Home.tsx
import type { Lang } from "@/app/dictionaries/header";
import { getHomeDictionary } from "@/app/dictionaries/home";
import InfoCompare from "@/app/components/InfoCompare";
import Calculator from "@/app/components/Calculator";
import LeadForm from "@/app/components/LeadForm";
import CoverageBlock from "@/app/components/CoverageBlock";
import { keepShortWords } from "@/app/utils/typography";

export default function Home({ lang }: { lang: Lang }) {
  const t = getHomeDictionary(lang);

  return (
    <main id="main">
      {/* HERO + CALC */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <p className="kicker">
                <span className="badge">{t.hero.kicker}</span>
              </p>

              <h1 className="h1">{keepShortWords(t.hero.title)}</h1>
              <p className="lead">{keepShortWords(t.hero.lead)}</p>

              <div className="hero__cta">
                <a className="btn btn--ghost" href="#calc">
                  {t.hero.ctaCalc}
                </a>
                <a className="btn btn--primary" href="#buy">
                  {t.hero.ctaBuy}
                </a>
              </div>

              <div className="meta" aria-label="Meta">
                <span>{t.hero.meta[0]}</span>
                <span className="dot" aria-hidden="true" />
                <span>{t.hero.meta[1]}</span>
                <span className="dot" aria-hidden="true" />
                <span>{t.hero.meta[2]}</span>
              </div>
            </div>

            {/* Anchor for hero button + calculator */}
            <div id="calc">
              <Calculator lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">{keepShortWords(t.process.title)}</h2>
              <p className="section__desc">{t.process.desc}</p>
            </div>
          </div>

          <div className="process-flow" aria-label={t.process.title}>
            {t.process.steps.map((s, idx) => (
              <article className="process-flow__item" key={idx}>
                <span className="process-flow__num" aria-hidden="true">{idx + 1}</span>
                <h3 className="process-flow__title">{keepShortWords(s.title)}</h3>
                <p className="process-flow__text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INFO COMPARE */}
      <InfoCompare lang={lang} />

      {/* WHY */}
      <section className="section">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">{keepShortWords(t.why.title)}</h2>
              <p className="section__desc">{t.why.desc}</p>
            </div>
          </div>

          <div className="grid-4">
            {t.why.items.map((w, idx) => (
              <article className="card" key={idx}>
                <div className="card__body">
                  <div className="card__top">
                    <h3 className="card__title">{keepShortWords(w.title)}</h3>
                    <span className="tag tag--green">OK</span>
                  </div>
                  <p className="card__text">{w.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <CoverageBlock lang={lang} />

      {/* FORM */}
      <section className="section" id="buy">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">{keepShortWords(t.form.title)}</h2>
              <p className="section__desc">{t.form.desc}</p>
            </div>
          </div>

          <div className="panel">
            <div className="panel__body">
              <LeadForm lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">{keepShortWords(t.faq.title)}</h2>
              <p className="section__desc">{t.faq.desc}</p>
            </div>
          </div>

          <div className="faq">
            {t.faq.items.map((f, idx) => (
              <details key={idx} className="faq__item">
                <summary className="faq__summary">
                  <span>{f.q}</span>
                  <span className="muted">+</span>
                </summary>

                <div
                  className="details__body"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFY */}
      <section className="section" id="verify">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">{keepShortWords(t.verify.title)}</h2>
              <p className="section__desc">{t.verify.lead}</p>
            </div>
          </div>

          <div className="grid-3">
            {t.verify.items.map((v) => (
              <article className="card" key={v.code}>
                <div className="card__body">
                  <div className="card__top">
                    <h3 className="card__title">
                      {v.code} — {v.country}
                    </h3>
                    <span className="tag tag--yellow">{v.code}</span>
                  </div>

                  <p className="card__text" style={{ fontWeight: 800 }}>
                    {v.org}
                  </p>
                  <p className="card__text">{v.desc}</p>

                  <div className="card__cta">
                    <a
                      className="btn btn--ghost"
                      href={v.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {v.cta}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
