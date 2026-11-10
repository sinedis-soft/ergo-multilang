"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "@/app/dictionaries/header";
import { businessHoursDictionary } from "@/app/dictionaries/businessHours";
import { BUSINESS_HOURS, BUSINESS_TIME_ZONE } from "@/app/lib/business";
import { formatInterval, sourceWeekStart, weeklyIntervals } from "@/app/lib/businessHours";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}
function snapshot() {
  return `${Intl.DateTimeFormat().resolvedOptions().timeZone || BUSINESS_TIME_ZONE}|${sourceWeekStart(new Date())}`;
}
const serverSnapshot = () => "";

export default function BusinessHours({ lang }: { lang: Lang }) {
  const current = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const t = businessHoursDictionary[lang];
  const [zone, monday] = current.split("|");
  const weekday = new Intl.DateTimeFormat(lang, { weekday: "long", timeZone: "UTC" });
  const dayName = (day: number) => weekday.format(new Date(Date.UTC(2026, 0, 4 + day)));

  return (
    <section aria-labelledby="business-hours-title" style={{ marginTop: 24 }}>
      <h2 id="business-hours-title" className="section__title">{t.title}</h2>
      {current && (
        <div>
          <p>{t.local}: <bdi>{zone}</bdi></p>
          <dl>
            {weeklyIntervals(monday).map((interval) => {
              const formatted = formatInterval(interval, lang, zone);
              return <div key={interval.opens.toISOString()} style={{ marginBottom: 8 }}>
                <dt>{formatted.day}</dt>
                <dd style={{ marginInlineStart: 0 }}><bdi>{formatted.hours}</bdi></dd>
              </div>;
            })}
          </dl>
        </div>
      )}
      <div>
        <p>{t.source}: <bdi>{BUSINESS_TIME_ZONE} (UTC+03:00)</bdi></p>
        <dl>
          {BUSINESS_HOURS.map((hours) => <div key={hours.closes} style={{ marginBottom: 8 }}>
            <dt>{dayName(hours.days[0])}{hours.days.length > 1 ? ` – ${dayName(hours.days[hours.days.length - 1])}` : ""}</dt>
            <dd style={{ marginInlineStart: 0 }}><bdi>{hours.opens} – {hours.closes}</bdi></dd>
          </div>)}
          <div><dt>{dayName(6)} – {dayName(0)}</dt><dd style={{ marginInlineStart: 0 }}>{t.closed}</dd></div>
        </dl>
      </div>
    </section>
  );
}
