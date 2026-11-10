import { BUSINESS_CONTACT } from "@/app/lib/business";
import BusinessHours from "@/app/components/BusinessHours";
import type { Lang } from "@/app/dictionaries/header";

import ContactFeedbackForm from "@/app/components/ContactFeedbackForm";

import { keepShortWords } from "@/app/utils/typography";

const titles: Record<Lang, string> = {
  ru: "Контакты",
  lv: "Kontakti",
  en: "Contacts",
  uz: "Kontaktlar",
  ky: "Байланыш",
  ka: "კონტაქტები",
  kk: "Байланыс",
  tr: "İletişim",
  fa: "تماس با ما",
  mn: "Холбоо барих",
  hy: "Կոնտակտներ",
};

const intro: Record<Lang, string> = {
  ru: "Свяжитесь с нами удобным для вас способом.",
  lv: "Sazinieties ar mums jums ērtā veidā.",
  en: "Contact us in any convenient way.",
  uz: "Biz bilan o'zingizga qulay usulda bog'laning.",
  ky: "Биз менен өзүңүзгө ыңгайлуу жол менен байланышыңыз.",
  ka: "დაგვიკავშირდით თქვენთვის ხელსაყრელი ნებისმიერი ფორმით.",
  kk: "Бізге өзіңізге ыңғайлы тәсілмен хабарласыңыз.",
  tr: "Bize size en uygun yoldan ulaşın.",
  fa: "از هر طریقی که برایتان راحت‌تر است با ما تماس بگیرید.",
  mn: "Өөрт тохиромжтой хэлбэрээр бидэнтэй холбогдоорой.",
  hy: "Կապվեք մեզ հետ ձեզ հարմար ցանկացած տարբերակով:"
};

const labels: Record<Lang, { phone: string; email: string }> = {
  ru: { phone: "Телефон", email: "E-mail" },
  lv: { phone: "Tālrunis", email: "E-pasts" },
  en: { phone: "Phone", email: "E-mail" },
  uz: { phone: "Telefon", email: "E-mail" },
  ky: { phone: "Телефон", email: "E-mail" },
  ka: { phone: "ტელეფონი", email: "ელ-ფოსტა" },
  kk: { phone: "Телефон", email: "Электрондық пошта" },
  tr: { phone: "Telefon", email: "E-posta" },
  fa: { phone: "تلفن", email: "ایمیل" },
  mn: { phone: "Утас", email: "Имэйл" },
  hy: { phone: "Հեռախոս", email: "Էլ. փոստ" },
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

              <p className="section__desc" style={{ margin: "0 0 10px", fontWeight: 700 }}>{BUSINESS_CONTACT.name}</p>
              <p className="section__desc" style={{ margin: "0 0 10px" }}>
                {labels[lang].phone}: <a href={`tel:${BUSINESS_CONTACT.phone}`}><bdi>{BUSINESS_CONTACT.phoneDisplay}</bdi></a>
              </p>
              <p className="section__desc" style={{ margin: 0 }}>
                {labels[lang].email}: <a href={`mailto:${BUSINESS_CONTACT.email}`}><bdi>{BUSINESS_CONTACT.email}</bdi></a>
              </p>
              <BusinessHours lang={lang} />

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
