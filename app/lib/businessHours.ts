import { BUSINESS_HOURS, BUSINESS_TIME_ZONE } from "./business";
import type { Lang } from "../dictionaries/header";
import { calendarDictionary } from "../dictionaries/calendar";

function dateParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    calendar: "gregory", numberingSystem: "latn",
    timeZone, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(date);
  const value = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  return { year: value("year"), month: value("month"), day: value("day"), hour: value("hour"), minute: value("minute") };
}

function atSourceTime(day: Date, time: string) {
  const [hour, minute] = time.split(":").map(Number);
  const wanted = Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), hour, minute);
  let result = wanted;
  for (let i = 0; i < 3; i++) {
    const parts = dateParts(new Date(result), BUSINESS_TIME_ZONE);
    const actual = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute);
    result += wanted - actual;
  }
  return new Date(result);
}

export function sourceWeekStart(now: Date): string {
  const parts = dateParts(now, BUSINESS_TIME_ZONE);
  const monday = new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
  monday.setUTCDate(monday.getUTCDate() - (monday.getUTCDay() + 6) % 7);
  return monday.toISOString().slice(0, 10);
}

export function weeklyIntervals(monday: string) {
  const start = new Date(`${monday}T00:00:00Z`);
  return BUSINESS_HOURS.flatMap(({ days, opens, closes }) => days.map((day) => {
    const date = new Date(start);
    date.setUTCDate(date.getUTCDate() + day - 1);
    return { opens: atSourceTime(date, opens), closes: atSourceTime(date, closes) };
  }));
}

function formatDay(parts: ReturnType<typeof dateParts>, lang: Lang) {
  const t = calendarDictionary[lang];
  const weekday = new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay();
  return t.pattern.replace("{weekday}", t.weekdays[weekday])
    .replace("{day}", String(parts.day)).replace("{month}", t.months[parts.month - 1]);
}

function formatTime(parts: ReturnType<typeof dateParts>) {
  return `${String(parts.hour).padStart(2, "0")}:${String(parts.minute).padStart(2, "0")}`;
}

export function formatInterval(interval: { opens: Date; closes: Date }, lang: Lang, timeZone: string) {
  // Intl only converts numeric Gregorian parts to the visitor's time zone.
  // Localized names come from our dictionary, never the browser's fallback locale.
  const start = dateParts(interval.opens, timeZone);
  const end = dateParts(interval.closes, timeZone);
  const sameDay = start.year === end.year && start.month === end.month && start.day === end.day;
  return {
    day: formatDay(start, lang),
    hours: `${formatTime(start)} – ${sameDay ? "" : `${formatDay(end, lang)} `}${formatTime(end)}`,
  };
}
