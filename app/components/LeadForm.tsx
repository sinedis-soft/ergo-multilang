// app/components/LeadForm.tsx
"use client";

import React, { useRef, useState } from "react";
import type { Lang } from "@/app/dictionaries/header";
import { getLeadFormDictionary } from "@/app/dictionaries/leadForm";

type FormStatus = "idle" | "loading" | "success" | "error";

function formatLatinName(raw: string): string {
  return raw.replace(/[^A-Za-z\s'-]/g, "");
}

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  return "+" + digits;
}

function formatEmail(raw: string): string {
  let value = raw.replace(/\s/g, "");
  value = value.replace(/[^A-Za-z0-9.@_-]/g, "");
  const firstAtIndex = value.indexOf("@");
  if (firstAtIndex !== -1) {
    const beforeAt = value.slice(0, firstAtIndex + 1);
    const afterAt = value.slice(firstAtIndex + 1).replace(/@/g, "");
    value = beforeAt + afterAt;
  }
  if (value.length > 70) value = value.slice(0, 70);
  return value.toLowerCase();
}

function formatPlate(raw: string): string {
  return raw.replace(/\s/g, "").replace(/[^A-Za-z0-9-]/g, "").toUpperCase().slice(0, 12);
}

function formatDigits(raw: string, maxLen?: number): string {
  let v = raw.replace(/\D/g, "");
  if (typeof maxLen === "number" && maxLen >= 0) v = v.slice(0, maxLen);
  return v;
}

function validateFiles(files: FileList, forbiddenTypes: string[], fileForbiddenText: string): boolean {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const type = file.type || "";

    for (let j = 0; j < forbiddenTypes.length; j++) {
      const t = forbiddenTypes[j];
      if (t.charAt(t.length - 1) === "/") {
        if (type.indexOf(t) === 0) {
          alert(file.name + ": " + fileForbiddenText);
          return false;
        }
      } else {
        if (type === t) {
          alert(file.name + ": " + fileForbiddenText);
          return false;
        }
      }
    }
  }
  return true;
}

export default function LeadForm(props: { lang: Lang }) {
  const t = getLeadFormDictionary(props.lang);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isCompany, setIsCompany] = useState(false);

  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");

  const [companyInn, setCompanyInn] = useState("");
  const [ceoFullName, setCeoFullName] = useState("");
  const [ceoTitle, setCeoTitle] = useState("");

  const [vehicleBlocks, setVehicleBlocks] = useState<number[]>([0]);

  const formRef = useRef<HTMLFormElement | null>(null);

  const forbiddenTypes = [
    "application/zip",
    "application/x-rar-compressed",
    "application/x-7z-compressed",
    "application/x-tar",
    "audio/",
    "video/",
  ];

  function todayISO(): string {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return yyyy + "-" + mm + "-" + dd;
  }

  function maxBirthDateISO(): string {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 18);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return yyyy + "-" + mm + "-" + dd;
  }

  function addVehicle() {
    setVehicleBlocks(function (prev) {
      const lastId = prev.length ? prev[prev.length - 1] : 0;
      return prev.concat([lastId + 1]);
    });
  }

  function removeVehicle(id: number) {
    setVehicleBlocks(function (prev) {
      if (prev.length <= 1) return prev;
      const next: number[] = [];
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== id) next.push(prev[i]);
      }
      return next;
    });
  }

  function validateAll(): boolean {
    if (!formRef.current) return true;

    const elements = formRef.current.querySelectorAll("input, select, textarea") as NodeListOf<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >;

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (el.offsetParent === null) continue;

      if (!el.checkValidity()) {
        el.reportValidity();
        try {
          el.focus();
        } catch {
          // ignore
        }
        return false;
      }
    }
    return true;
  }

  function onToggleCompany(nextVal: boolean) {
    setIsCompany(nextVal);

    if (nextVal) {
      setBirthDate("");
      setAddress("");
    } else {
      setCompanyInn("");
      setCeoFullName("");
      setCeoTitle("");
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("idle");
    setMessage("");

    if (!validateAll()) return;

    setStatus("loading");

    try {
      const formEl = e.currentTarget;
      const formData = new FormData(formEl);

      if (typeof window !== "undefined") {
        try {
          formData.append("pageUrl", window.location.href);
          const utm = localStorage.getItem("utm_data");
          if (utm) formData.append("utm", utm);
        } catch {
          // ignore
        }
      }

      const res = await fetch("/api/lead", { method: "POST", body: formData });

      type LeadApiResponse = {
        ok?: boolean;
        message?: string;
      };

      let data: LeadApiResponse | null = null;

      try {
        data = (await res.json()) as LeadApiResponse;
      } catch {
        data = null;
      }

      const ok = Boolean(data?.ok);
      const serverMsg = data?.message ? String(data.message) : "";

      if (!res.ok || !ok) {
        setStatus("error");
        setMessage(serverMsg || t.statusError);
        return;
      }

      setStatus("success");
      setMessage(t.statusSuccess);

      formEl.reset();
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");

      setIsCompany(false);

      setBirthDate("");
      setAddress("");

      setCompanyInn("");
      setCeoFullName("");
      setCeoTitle("");

      setVehicleBlocks([0]);
    } catch {
      setStatus("error");
      setMessage(t.statusError);
    }
  }

  const minStartDate = todayISO();
  const maxBirthDate = maxBirthDateISO();
  const statusId = "lead-form-status";

  return (
    <section className="section" id="buy" aria-label={t.title}>
      <div className="container">
        {/* ВАЖНО: НЕ добавляем новых “panel/card” контейнеров, используем существующую разметку проекта */}
        <div className="panel__hd">
          <div className="panel__title">{t.title}</div>
        </div>

        <div className="panel__body">
          <p className="help help--top">{t.intro}</p>

          <form
            ref={formRef}
            className="form"
            onSubmit={onSubmit}
            aria-describedby={status !== "idle" ? statusId : undefined}
          >
            <div className="hr" />

            <div className="legend">{t.contact.legend}</div>

            <div className="row-2">
              <div className="field">
                <label htmlFor="firstName">{t.contact.firstName} *</label>
                <input
                  id="firstName"
                  name="contact_firstNameLat"
                  className="input"
                  value={firstName}
                  onChange={(ev) => setFirstName(formatLatinName(ev.target.value))}
                  required
                  autoComplete="given-name"
                />
              </div>

              <div className="field">
                <label htmlFor="lastName">{t.contact.lastName} *</label>
                <input
                  id="lastName"
                  name="contact_lastNameLat"
                  className="input"
                  value={lastName}
                  onChange={(ev) => setLastName(formatLatinName(ev.target.value))}
                  required
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="row-2">
              <div className="field">
                <label htmlFor="phone">{t.contact.phone} *</label>
                <input
                  id="phone"
                  name="contact_phone"
                  className="input"
                  value={phone}
                  onChange={(ev) => setPhone(formatPhone(ev.target.value))}
                  required
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>

              <div className="field">
                <label htmlFor="email">{t.contact.email} *</label>
                <input
                  id="email"
                  name="contact_email"
                  className="input"
                  value={email}
                  onChange={(ev) => setEmail(formatEmail(ev.target.value))}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="field">
              <label className="check">
                <input
                  type="checkbox"
                  name="policyholder_isCompany"
                  checked={isCompany}
                  onChange={(e) => onToggleCompany(!!e.currentTarget.checked)}
                  disabled={status === "loading"}
                />
                <span>{t.policyholder.companyCheckbox}</span>
              </label>
            </div>

            {!isCompany ? (
              <div className="block">
                <div className="block__title">{t.policyholder.individualTitle}</div>

                <div className="row-2">
                  <div className="field">
                    <label htmlFor="birthDate">{t.policyholder.birthDate} *</label>
                    <input
                      id="birthDate"
                      type="date"
                      name="policyholder_birthDate"
                      className="input"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.currentTarget.value)}
                      required
                      max={maxBirthDate}
                      autoComplete="bday"
                    />
                  </div>
                  <div className="field" />
                </div>

                <div className="field">
                  <label htmlFor="policyholderAddress">{t.policyholder.addressTitle} *</label>
                  <input
                    id="policyholderAddress"
                    name="policyholder_address"
                    className="input"
                    value={address}
                    onChange={(e) => setAddress(e.currentTarget.value)}
                    required
                    autoComplete="street-address"
                    placeholder={t.policyholder.addressPlaceholder}
                  />
                  <div className="help">{t.policyholder.addressHelp}</div>
                </div>
              </div>
            ) : (
              <div className="block">
                <div className="block__title">{t.policyholder.companyTitle}</div>

                <div className="row-2">
                  <div className="field">
                    <label htmlFor="companyInn">{t.policyholder.companyInn} *</label>
                    <input
                      id="companyInn"
                      name="company_inn"
                      className="input"
                      value={companyInn}
                      onChange={(e) => setCompanyInn(formatDigits(e.currentTarget.value, 20))}
                      required
                      inputMode="numeric"
                      autoComplete="off"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="ceoTitle">{t.policyholder.ceoTitle} *</label>
                    <input
                      id="ceoTitle"
                      name="company_ceo_title"
                      className="input"
                      value={ceoTitle}
                      onChange={(e) => setCeoTitle(e.currentTarget.value)}
                      required
                      autoComplete="organization-title"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="ceoFullName">{t.policyholder.ceoFullName} *</label>
                  <input
                    id="ceoFullName"
                    name="company_ceo_fullName"
                    className="input"
                    value={ceoFullName}
                    onChange={(e) => setCeoFullName(e.currentTarget.value)}
                    required
                    autoComplete="name"
                  />
                </div>
              </div>
            )}

            <div className="hr" />

            <div className="legend">{t.policy.legend}</div>

            {vehicleBlocks.map(function (id, idx) {
              return (
                <div key={id} className="vehicle">
                  <div className="vehicle__top">
                    <div className="vehicle__title">
                      {t.policy.vehicleBlockTitle} #{idx + 1}
                    </div>

                    {vehicleBlocks.length > 1 ? (
                      <button
                        type="button"
                        className="btn btn--ghost btn--sm"
                        onClick={() => removeVehicle(id)}
                        disabled={status === "loading"}
                      >
                        {t.policy.removeVehicle}
                      </button>
                    ) : null}
                  </div>

                  <div className="row-2">
                    <div className="field">
                      <label>{t.policy.countryFrom} *</label>
                      <select name={"vehicles[" + idx + "][countryFrom]"} className="input" defaultValue="" required>
                        <option value="">{t.notSelected}</option>
                        {t.policy.options.countriesFrom.map(function (o) {
                          return (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="field">
                      <label>{t.policy.vehicleType} *</label>
                      <select name={"vehicles[" + idx + "][vehicleType]"} className="input" defaultValue="" required>
                        <option value="">{t.notSelected}</option>
                        {t.policy.options.vehicleTypes.map(function (o) {
                          return (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="row-2">
                    <div className="field">
                      <label>{t.policy.period} *</label>
                      <select name={"vehicles[" + idx + "][period]"} className="input" defaultValue="" required>
                        <option value="">{t.notSelected}</option>
                        {t.policy.options.periods.map(function (o) {
                          return (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="field">
                      <label>{t.policy.startDate} *</label>
                      <input
                        type="date"
                        name={"vehicles[" + idx + "][startDate]"}
                        className="input"
                        min={minStartDate}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label>{t.policy.vehiclePlate} *</label>
                    <input
                      name={"vehicles[" + idx + "][plate]"}
                      className="input"
                      required
                      onChange={(e) => {
                        e.currentTarget.value = formatPlate(e.currentTarget.value);
                      }}
                    />
                  </div>

                  <div className="field">
                    <label>{t.policy.docsLabel} *</label>
                    <input
                      type="file"
                      name={"vehicles[" + idx + "][docs]"}
                      multiple
                      required
                      accept="image/*,application/pdf"
                      className="file"
                      onChange={(e) => {
                        const fl = e.currentTarget.files;
                        if (!fl) return;
                        const ok = validateFiles(fl, forbiddenTypes, t.fileForbidden);
                        if (!ok) e.currentTarget.value = "";
                      }}
                    />
                    <div className="help">{t.policy.docsHint}</div>
                  </div>
                </div>
              );
            })}

            <div className="actions">
              <button type="button" className="btn btn--soft" onClick={addVehicle} disabled={status === "loading"}>
                {t.policy.addVehicle}
              </button>
            </div>

            {status !== "idle" ? (
              <div id={statusId} role="status" aria-live="polite" className="help help--status">
                {status === "loading" ? t.statusSending : message}
              </div>
            ) : null}

            <div className="actions actions--right">
              <button type="submit" className="btn btn--primary" disabled={status === "loading"}>
                {status === "loading" ? t.statusSending : t.submit}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        /* Никаких новых рамок: только отступы/переносы/адаптивность */

        .container {
          padding-left: 12px;
          padding-right: 12px;
        }

        .panel__hd {
          padding: 14px 14px 8px 14px;
        }

        .panel__body {
          padding: 0 14px 14px 14px;
        }

        .panel__title,
        .legend,
        label,
        .help,
        .block__title,
        .vehicle__title {
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .help--top {
          margin: 0 0 10px 0;
        }

        .hr {
          margin: 12px 0;
        }

        .legend {
          margin: 0 0 8px 0;
          font-weight: 600;
        }

        .field {
          margin: 0 0 10px 0;
          min-width: 0;
        }

        label {
          display: block;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }

        .input,
        select,
        textarea,
        .file {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          min-width: 0;
        }

        .check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 0;
        }

        .check span {
          min-width: 0;
        }

        .row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-items: start;
        }

        .block {
          margin-top: 12px;
        }

        .block__title {
          font-weight: 600;
          margin: 0 0 10px 0;
        }

        .vehicle {
          margin-top: 12px;
        }

        .vehicle__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 0 0 8px 0;
          min-width: 0;
        }

        .vehicle__title {
          font-weight: 600;
          line-height: 1.2;
          min-width: 0;
        }

        .btn--sm {
          height: 36px;
          padding: 0 12px;
          border-radius: 12px;
          white-space: nowrap;
          flex: 0 0 auto;
        }

        .actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .actions--right {
          justify-content: flex-end;
        }

        .help--status {
          margin-top: 10px;
        }

        @media (max-width: 520px) {
          .panel__hd {
            padding: 12px 12px 8px 12px;
          }
          .panel__body {
            padding: 0 12px 12px 12px;
          }
          .row-2 {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .btn--sm {
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
}