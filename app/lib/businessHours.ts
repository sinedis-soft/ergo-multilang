import { BUSINESS_HOURS, BUSINESS_TIME_ZONE } from "./business";

function dateParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
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

export function formatInterval(interval: { opens: Date; closes: Date }, locale: string, timeZone: string) {
  const date = new Intl.DateTimeFormat(locale, { timeZone, weekday: "long", day: "numeric", month: "short" });
  const time = new Intl.DateTimeFormat(locale, { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
  const startDate = date.format(interval.opens);
  const endDate = date.format(interval.closes);
  return {
    day: startDate,
    hours: `${time.format(interval.opens)} – ${startDate === endDate ? "" : `${endDate} `}${time.format(interval.closes)}`,
  };
}
