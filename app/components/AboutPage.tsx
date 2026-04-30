import type { Lang } from "@/app/dictionaries/header";
import type { AboutDictionary } from "@/app/dictionaries/about";
import LeadForm from "@/app/components/LeadForm";

export default function AboutPage({ lang, t }: { lang: Lang; t: AboutDictionary }) {
  return (
    <main id="main">

      <section className="section about-hero">

        <div className="container">
          <div className="section__hd">
            <div>
              <h1 className="section__title">{t.hero.title}</h1>
              <p className="section__desc">{t.hero.subtitle}</p>
            </div>
          </div>

          <div className="grid-4">
            {t.cards.map((card, idx) => (
              <article className="card" key={idx}>
                <div className="card__body">
                  <h3 className="card__title">{card.title}</h3>
                  <p className="card__text">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="panel__body">
              <h2 className="section__title" style={{ marginBottom: 12 }}>{t.company.title}</h2>
              {t.company.lines.map((line, idx) => (
                <p key={idx} className="section__desc" style={{ margin: "0 0 10px" }}>
                  {line}
                </p>
              ))}
              <p className="lead" style={{ marginTop: 16 }}>{t.company.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact-form">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">{t.contact.title}</h2>
              <p className="section__desc">{t.contact.desc}</p>
            </div>
          </div>
          <div className="panel">
            <div className="panel__body">
              <LeadForm lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
