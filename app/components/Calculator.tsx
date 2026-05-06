"use client";

// app/components/Calculator.tsx
import { useMemo, useState } from "react";
import type { Lang } from "@/app/dictionaries/header";
import {
  getCalculatorDictionary,
  Vehicle,
  Term,
} from "@/app/dictionaries/calculator";
import { getPolicyPrice, formatEUR } from "@/app/lib/insurancePrices";

export default function Calculator({ lang }: { lang: Lang }) {
  const t = getCalculatorDictionary(lang);

  const [vehicle, setVehicle] = useState<Vehicle>("car");
  const [term, setTerm] = useState<Term>("30");

  const result = useMemo(() => {
    const price = getPolicyPrice(vehicle, term);

    if (price === null) {
      return "—";
    }

    return formatEUR(price);
  }, [vehicle, term]);

  return (
    <aside className="panel" id="calc" aria-label={t.title}>
      <div className="panel__hd">
        <div className="panel__title">{t.title}</div>
        <span className="badge">{t.badge}</span>
      </div>

      <div className="panel__body">
        <p className="help" style={{ marginTop: 0 }}>
          {t.intro}
        </p>

        <div className="form">
          <div className="row-2">
            <div className="field">
              <label htmlFor="vehicle">{t.fields.vehicle.label}</label>
              <select
                id="vehicle"
                name="vehicle"
                className="input"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value as Vehicle)}
              >
                {t.fields.vehicle.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="term">{t.fields.term.label}</label>
              <select
                id="term"
                name="term"
                className="input"
                value={term}
                onChange={(e) => setTerm(e.target.value as Term)}
              >
                {t.fields.term.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="calc-result" aria-live="polite">
            <div className="calc-result__title">{t.resultTitle}</div>
            <div className="calc-result__value">{result}</div>
            <div className="help">{t.resultHint}</div>
          </div>

          <div className="help">{t.note}</div>
        </div>
      </div>
    </aside>
  );
}