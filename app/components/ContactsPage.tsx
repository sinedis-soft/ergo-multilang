import type { Lang } from "@/app/dictionaries/header";

import ContactFeedbackForm from "@/app/components/ContactFeedbackForm";

import { keepShortWords } from "@/app/utils/typography";

const titles: Record<Lang, string> = {
  ru: "Контакты",
  lv: "Kontakti",
  en: "Contacts",
  uz: "Kontaktlar",
  kg: "Байланыш",
};

const intro: Record<Lang, string> = {
  ru: "Свяжитесь с нами удобным для вас способом.",
  lv: "Sazinieties ar mums jums ērtā veidā.",
  en: "Contact us in any convenient way.",
  uz: "Biz bilan o'zingizga qulay usulda bog'laning.",
  kg: "Биз менен өзүңүзгө ыңгайлуу жол менен байланышыңыз.",
};

const labels: Record<Lang, { phone: string; email: string }> = {
  ru: { phone: "Телефон", email: "E-mail" },
  lv: { phone: "Tālrunis", email: "E-pasts" },
  en: { phone: "Phone", email: "E-mail" },
  uz: { phone: "Telefon", email: "E-mail" },
  kg: { phone: "Телефон", email: "E-mail" },
};

export default function ContactsPage({ lang }: { lang: Lang }) {

  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div className="section__hd">
            <div>

              <h1 className="section__title">{keepShortWords(titles[lang])}</h1>
              <p className="section__desc">{keepShortWords(intro[lang])}</p>

            </div>
          </div>

          <div className="panel">
            <div className="panel__body">

              <p className="section__desc" style={{ margin: "0 0 10px", fontWeight: 700 }}>Rižova Ludmila</p>
              <p className="section__desc" style={{ margin: "0 0 10px" }}>
                {labels[lang].phone}: <a href="tel:+37122355307">+371 22355307</a>
              </p>
              <p className="section__desc" style={{ margin: 0 }}>
                {labels[lang].email}: <a href="mailto:ludmila.rizova@ergo.lv">ludmila.rizova@ergo.lv</a>
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="panel__body">

              <ContactFeedbackForm lang={lang} />

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
