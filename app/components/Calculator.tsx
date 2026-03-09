"use client";

// app/components/Calculator.tsx
import { useRef, useState } from "react";
import type { Lang } from "@/app/dictionaries/header";
import { getCalculatorDictionary, Vehicle, Term } from "@/app/dictionaries/calculator";

/**
 * Минимальный калькулятор:
 * - без зависимостей
 * - без "живых" пересчётов
 * - расчёт только по кнопке submit
 * - работает даже на слабых устройствах
 */

// Пример таблицы тарифов (замените на реальные)
const PRICES: Record<Vehicle, Record<Term, number>> = {
  car: { "30": 53, "60": 100, "90": 140, "180": 220, "365": 400 },
  van: { "30": 198, "60": 158, "90": 529, "180": 158, "365": 1190 },
  truck: { "30": 240, "60": 158, "90": 650, "180": 158, "365": 1490 },
  trailer: {"30": 12, "60": 20, "90": 30, "180": 67, "365": 109.56 },
  special: {"30": 12, "60": 20, "90": 30, "180": 67, "365": 109.56 },
};

function formatPLN(value: number) {
  // Без Intl для максимальной совместимости
  return `${value} €`;
}

export default function Calculator({ lang }: { lang: Lang }) {
  const t = getCalculatorDictionary(lang);

  const vehicleRef = useRef<HTMLSelectElement | null>(null);
  const termRef = useRef<HTMLSelectElement | null>(null);

  const [result, setResult] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const vehicle = (vehicleRef.current?.value || "car") as Vehicle;
    const term = (termRef.current?.value || "30") as Term;

    const price = PRICES[vehicle][term];
    setResult(formatPLN(price));
  }

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

        <form className="form" onSubmit={onSubmit}>
          <div className="row-2">
            <div className="field">
              <label htmlFor="vehicle">{t.fields.vehicle.label}</label>
              <select id="vehicle" name="vehicle" className="input" defaultValue="car" ref={vehicleRef}>
                {t.fields.vehicle.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="term">{t.fields.term.label}</label>
              <select id="term" name="term" className="input" defaultValue="30" ref={termRef}>
                {t.fields.term.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="btn btn--soft" type="submit">
            {t.button}
          </button>

          <div className="calc-result" aria-live="polite">
            <div className="calc-result__title">{t.resultTitle}</div>
            <div className="calc-result__value">{result ?? "—"}</div>
            <div className="help">{t.resultHint}</div>
          </div>

          <div className="help">{t.note}</div>
        </form>
      </div>
    </aside>
  );
}