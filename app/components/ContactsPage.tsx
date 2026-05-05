import type { Lang } from "@/app/dictionaries/header";
import type { AboutDictionary } from "@/app/dictionaries/about";
import LeadForm from "@/app/components/LeadForm";
import { keepShortWords } from "@/app/utils/typography";

export default function ContactsPage({ lang, t }: { lang: Lang; t: AboutDictionary }) {
  const companyLines = t.company.lines.filter((line) => line.trim() !== "");

  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div className="section__hd">
            <div>
              <h1 className="section__title">{keepShortWords(t.contact.title)}</h1>
              <p className="section__desc">{keepShortWords(t.contact.desc)}</p>
            </div>
          </div>

          <div className="panel">
            <div className="panel__body">
              <h2 className="section__title" style={{ marginBottom: 12 }}>
                {keepShortWords(t.company.title)}
              </h2>
              {companyLines.map((line, idx) => (
                <p key={idx} className="section__desc" style={{ margin: "0 0 10px" }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
