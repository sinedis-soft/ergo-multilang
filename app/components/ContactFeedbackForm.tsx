"use client";

import React, { useState } from "react";
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
    <section className="contact-form-section">
      <div className="contact-form-card">
        <div className="contact-form-header">
          <div>
            <div className="contact-form-kicker">Contact</div>
            <h2 className="contact-form-title">{dict.title}</h2>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="contact-form-grid">
            <label className="contact-field">
              <span>{dict.firstName}</span>
              <input
                className="contact-control"
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
              />
            </label>

            <label className="contact-field">
              <span>{dict.lastName}</span>
              <input
                className="contact-control"
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
              />
            </label>
          </div>

          <div className="contact-form-grid">
            <label className="contact-field">
              <span>{dict.phone}</span>
              <input
                className="contact-control"
                required
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </label>

            <label className="contact-field">
              <span>{dict.email}</span>
              <input
                className="contact-control"
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </label>
          </div>

          <label className="contact-field">
            <span>{dict.comment}</span>
            <textarea
              className="contact-control contact-textarea"
              rows={5}
              required
              value={form.comment}
              onChange={(e) => updateField("comment", e.target.value)}
            />
          </label>

          {status !== "idle" ? (
            <div
              className={
                status === "success"
                  ? "contact-message contact-message--success"
                  : status === "error"
                    ? "contact-message contact-message--error"
                    : "contact-message"
              }
              role="status"
              aria-live="polite"
            >
              {status === "loading" ? dict.sending : message}
            </div>
          ) : null}

          <div className="contact-form-actions">
            <button
              className="contact-submit"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? dict.sending : dict.submit}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .contact-form-section {
          padding: 36px 0;
        }

        .contact-form-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid var(--border);
          background:
            radial-gradient(
              720px 240px at 90% 0%,
              rgba(174, 93, 55, 0.16),
              rgba(174, 55, 55, 0) 62%
            ),
            #ffffff;
          box-shadow: var(--shadow-1);
          padding: 28px;
        }

        .contact-form-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: linear-gradient(
            180deg,
            var(--brand-primary),
            var(--brand-accent)
          );
        }

        .contact-form-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 22px;
          padding-left: 6px;
        }

        .contact-form-kicker {
          margin-bottom: 8px;
          color: var(--brand-accent);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .contact-form-title {
          margin: 0;
          color: var(--brand-primary);
          font-size: clamp(22px, 2.4vw, 30px);
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.4px;
        }

        .contact-form {
          display: grid;
          gap: 16px;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: var(--text-800);
          font-size: 13px;
          font-weight: 850;
        }

        .contact-control {
          width: 100%;
          min-height: 48px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--surface-soft);
          padding: 12px 14px;
          color: var(--text-900);
          font: inherit;
          font-weight: 600;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.08s ease;
        }

        .contact-control:hover {
          background: #ffffff;
          border-color: var(--border-strong);
        }

        .contact-control:focus {
          outline: none;
          background: #dd4b4b23;
          border-color: rgba(174, 79, 55, 0.65);
          box-shadow: var(--focus);
        }

        .contact-textarea {
          min-height: 132px;
          resize: vertical;
          line-height: 1.45;
        }

        .contact-message {
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--surface-soft);
          padding: 12px 14px;
          color: var(--text-700);
          font-size: 14px;
          font-weight: 700;
        }

        .contact-message--success {
          border-color: rgba(143, 47, 47, 0.28);
          background: rgba(143, 61, 47, 0.09);
          color: #6c311f;
        }

        .contact-message--error {
          border-color: rgba(180, 35, 24, 0.28);
          background: rgba(180, 35, 24, 0.08);
          color: #8f2018;
        }

        .contact-form-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 4px;
        }

        .contact-submit {
          min-width: 220px;
          height: 48px;
          border: 0;
          border-radius: 999px;
          background: linear-gradient(
            135deg,
            var(--brand-accent),
            var(--brand-accent-hover)
          );
          color: #1b0606;
          cursor: pointer;
          font: inherit;
          font-weight: 900;
          letter-spacing: 0.04em;
          box-shadow: 0 14px 30px rgba(174, 55, 55, 0.26);
          transition:
            transform 0.08s ease,
            box-shadow 0.2s ease,
            background 0.2s ease,
            opacity 0.2s ease;
        }

        .contact-submit:hover {
          background: linear-gradient(135deg, #bf1528, #8e0038);
          box-shadow: 0 18px 40px rgba(174, 55, 55, 0.34);
        }

        .contact-submit:active {
          transform: translateY(1px);
        }

        .contact-submit:disabled {
          cursor: not-allowed;
          opacity: 0.65;
          box-shadow: none;
        }

        @media (max-width: 760px) {
          .contact-form-card {
            padding: 22px 18px;
            border-radius: 20px;
          }

          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .contact-form-actions {
            justify-content: stretch;
          }

          .contact-submit {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}