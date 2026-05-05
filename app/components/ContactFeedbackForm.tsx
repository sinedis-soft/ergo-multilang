"use client";

import { useState } from "react";
import type { Lang } from "@/app/dictionaries/header";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  comment: string;
};

const t = {
  ru: {
    title: "Форма обратной связи",
    firstName: "Имя",
    lastName: "Фамилия",
    phone: "Телефон",
    email: "E-mail",
    comment: "Комментарий",
    submit: "Отправить",
    sending: "Отправка...",
    ok: "Сообщение отправлено. Мы скоро свяжемся с вами.",
    error: "Не удалось отправить форму. Попробуйте позже.",
  },
  lv: {
    title: "Atgriezeniskās saites forma",
    firstName: "Vārds",
    lastName: "Uzvārds",
    phone: "Tālrunis",
    email: "E-pasts",
    comment: "Komentārs",
    submit: "Nosūtīt",
    sending: "Nosūtīšana...",
    ok: "Ziņojums nosūtīts. Drīzumā ar jums sazināsimies.",
    error: "Neizdevās nosūtīt formu. Mēģiniet vēlāk.",
  },
  en: {
    title: "Feedback form",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone",
    email: "E-mail",
    comment: "Comment",
    submit: "Send",
    sending: "Sending...",
    ok: "Message sent. We will contact you soon.",
    error: "Failed to send the form. Try again later.",
  },
  uz: {
    title: "Qayta aloqa formasi",
    firstName: "Ism",
    lastName: "Familiya",
    phone: "Telefon",
    email: "E-mail",
    comment: "Izoh",
    submit: "Yuborish",
    sending: "Yuborilmoqda...",
    ok: "Xabar yuborildi. Tez orada bog'lanamiz.",
    error: "Formani yuborib bo'lmadi. Keyinroq urinib ko'ring.",
  },
  kg: {
    title: "Кайтарым байланыш формасы",
    firstName: "Аты",
    lastName: "Фамилиясы",
    phone: "Телефон",
    email: "E-mail",
    comment: "Комментарий",
    submit: "Жөнөтүү",
    sending: "Жөнөтүлүүдө...",
    ok: "Билдирүү жөнөтүлдү. Жакында байланышабыз.",
    error: "Форманы жөнөтүү мүмкүн болгон жок. Кийин кайра аракет кылыңыз.",
  },
} as const;

export default function ContactFeedbackForm({ lang }: { lang: Lang }) {
  const dict = t[lang];
  const [form, setForm] = useState<FormState>({ firstName: "", lastName: "", phone: "", email: "", comment: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
      if (!res.ok || !data?.ok) {
        setStatus("error");
        setMessage(data?.message || dict.error);
        return;
      }
      setStatus("success");
      setMessage(dict.ok);
      setForm({ firstName: "", lastName: "", phone: "", email: "", comment: "" });
    } catch {
      setStatus("error");
      setMessage(dict.error);
    }
  }

  return (
    <section className="section">
      <div className="panel__hd"><div className="panel__title">{dict.title}</div></div>
      <form className="form" onSubmit={onSubmit}>
        <div className="grid-2">
          <label className="field"><span>{dict.firstName}</span><input className="control" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} /></label>
          <label className="field"><span>{dict.lastName}</span><input className="control" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} /></label>
        </div>
        <div className="grid-2">
          <label className="field"><span>{dict.phone}</span><input className="control" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
          <label className="field"><span>{dict.email}</span><input className="control" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
        </div>
        <label className="field"><span>{dict.comment}</span><textarea className="control" rows={4} required value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} /></label>
        {status !== "idle" ? <p className={status === "success" ? "ok" : "error"}>{message}</p> : null}
        <button className="btn btn--primary" type="submit" disabled={status === "loading"}>{status === "loading" ? dict.sending : dict.submit}</button>
      </form>
    </section>
  );
}
