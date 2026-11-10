export const BUSINESS_CONTACT = {
  name: "Rižova Ludmila",
  phone: "+37120770244",
  phoneDisplay: "+371-207-702-44",
  email: "ludmila.rizova@ergo.lv",
} as const;

export const BUSINESS_TIME_ZONE = "Europe/Minsk";

// The offset is explicit: the agency's hours are fixed to Minsk, not Riga.
export const BUSINESS_HOURS = [
  { days: [1, 2, 3, 4], opens: "09:00", closes: "17:30" },
  { days: [5], opens: "09:00", closes: "16:30" },
] as const;

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const OPENING_HOURS_SPECIFICATION = BUSINESS_HOURS.map(({ days, opens, closes }) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: days.map((day) => `https://schema.org/${DAY_NAMES[day]}`),
  opens: `${opens}:00+03:00`,
  closes: `${closes}:00+03:00`,
}));
