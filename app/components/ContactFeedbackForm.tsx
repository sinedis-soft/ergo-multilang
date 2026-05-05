"use client";

import { useState } from "react";
import type { Lang } from "@/app/dictionaries/header";
import { getContactFeedbackFormDictionary } from "@/app/dictionaries/contactFeedbackForm";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  comment: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  comment: "",
};

export default function ContactFeedbackForm({ lang }: { lang: Lang }) {
  const dict = getContactFeedbackFormDictionary(lang);

  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          lang,
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
      } | null;

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setMessage(data?.message || dict.error);
        return;
      }

      setStatus("success");
      setMessage(dict.ok);
      setForm(initialFormState);
    } catch {
      setStatus("error");
      setMessage(dict.error);
    }
  }

  return (
    <section className="section">
      <div className="panel__hd">
        <div className="panel__title">{dict.title}</div>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <div className="grid-2">
          <label className="field">
            <span>{dict.firstName}</span>
            <input
              suppressHydrationWarning
              className="control"
              required
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
            />
          </label>

          <label className="field">
            <span>{dict.lastName}</span>
            <input
              suppressHydrationWarning
              className="control"
              required
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
            />
          </label>
        </div>

        <div className="grid-2">
          <label className="field">
            <span>{dict.phone}</span>
            <input
              suppressHydrationWarning
              className="control"
              required
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </label>

          <label className="field">
            <span>{dict.email}</span>
            <input
              suppressHydrationWarning
              className="control"
              required
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </label>
        </div>

        <label className="field">
          <span>{dict.comment}</span>
          <textarea
            className="control"
            rows={4}
            required
            value={form.comment}
            onChange={(e) => updateField("comment", e.target.value)}
          />
        </label>

        {status !== "idle" ? (
          <p className={status === "success" ? "ok" : "error"}>{message}</p>
        ) : null}

        <button
          className="btn btn--primary"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? dict.sending : dict.submit}
        </button>
      </form>
    </section>
  );
}