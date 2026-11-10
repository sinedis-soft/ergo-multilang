"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "@/app/dictionaries/header";
import { businessHoursDictionary } from "@/app/dictionaries/businessHours";
import { BUSINESS_TIME_ZONE } from "@/app/lib/business";
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
    </section>
  );
}
