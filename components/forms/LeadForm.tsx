"use client";

import Link from "next/link";
import { useState } from "react";
import type { Lang } from "@/dictionaries/config";
import { getDictionaries } from "@/dictionaries";

type LeadStatus = "idle" | "loading" | "success" | "error";

export function LeadForm({ lang }: { lang: Lang }) {
  const { forms, errors, common } = getDictionaries(lang);
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    formData.append("formType", "insurance_lead");
    formData.append("locale", lang);

    try {
      const response = await fetch("/api/lead", { method: "POST", body: formData });
      const data = (await response.json()) as { ok: boolean; message?: string };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message || errors.lead.integrationFailed);
        return;
      }

      setStatus("success");
      setMessage(common.status.success);
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage(errors.lead.unknown);
    }
  }

  const t = forms.lead;

  return (
    <section className="section container" id="lead">
      <div className="glass panel-pad">
        <h2>{t.title}</h2>
        <p>{t.description}</p>

        <form onSubmit={onSubmit} className="form-grid">
          <label className="field">
            <span>{t.fields.fullName.label}</span>
            <input name="fullName" placeholder={t.fields.fullName.placeholder} required />
          </label>
          <label className="field">
            <span>{t.fields.phone.label}</span>
            <input name="phone" placeholder={t.fields.phone.placeholder} required />
          </label>
          <label className="field">
            <span>{t.fields.email.label}</span>
            <input type="email" name="email" placeholder={t.fields.email.placeholder} required />
          </label>
          <label className="field">
            <span>{t.fields.vehicleType.label}</span>
            <select name="vehicleType" required defaultValue="">
              <option value="" disabled>
                {t.fields.vehicleType.placeholder}
              </option>
              <option value="car">Car</option>
              <option value="truck">Truck</option>
              <option value="bus">Bus</option>
            </select>
          </label>
          <label className="field">
            <span>{t.fields.period.label}</span>
            <select name="period" required defaultValue="">
              <option value="" disabled>
                {t.fields.period.placeholder}
              </option>
              <option value="30">30</option>
              <option value="90">90</option>
              <option value="365">365</option>
            </select>
          </label>
          <label className="field">
            <span>{t.fields.message.label}</span>
            <textarea name="message" placeholder={t.fields.message.placeholder} />
          </label>

          <div className="field form-consent" role="group" aria-label="consents">
            <label className="consent-item">
              <input type="checkbox" name="consentTerms" required />
              <Link href={`/${lang}/terms`}>{t.consent.terms}</Link>
            </label>
            <label className="consent-item">
              <input type="checkbox" name="consentPrivacy" required />
              <Link href={`/${lang}/privacy`}>{t.consent.privacy}</Link>
            </label>
          </div>

          <div className="form-actions">
            <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
              {status === "loading" ? common.actions.sending : t.submit}
            </button>
            {status !== "idle" ? <span>{message}</span> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
