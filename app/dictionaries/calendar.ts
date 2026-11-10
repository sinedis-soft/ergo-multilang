import type { Lang } from "./header";

// Gregorian calendar names from Unicode CLDR 48.0.0 (format/wide).
// https://github.com/unicode-org/cldr-json/tree/48.0.0/cldr-json/cldr-dates-full/main
// Bundled locally: browser Intl installations may omit these languages.
type CalendarDictionary = {
  weekdays: readonly [string, string, string, string, string, string, string];
  months: readonly [string, string, string, string, string, string, string, string, string, string, string, string];
  pattern: string;
};

export const calendarDictionary = {
  "ru": {
    "weekdays": [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота"
    ],
    "months": [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ],
    "pattern": "{weekday}, {day} {month}"
  },
  "lv": {
    "weekdays": [
      "svētdiena",
      "pirmdiena",
      "otrdiena",
      "trešdiena",
      "ceturtdiena",
      "piektdiena",
      "sestdiena"
    ],
    "months": [
      "janvāris",
      "februāris",
      "marts",
      "aprīlis",
      "maijs",
      "jūnijs",
      "jūlijs",
      "augusts",
      "septembris",
      "oktobris",
      "novembris",
      "decembris"
    ],
    "pattern": "{weekday}, {day}. {month}"
  },
  "en": {
    "weekdays": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "months": [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "pattern": "{weekday}, {month} {day}"
  },
  "uz": {
    "weekdays": [
      "yakshanba",
      "dushanba",
      "seshanba",
      "chorshanba",
      "payshanba",
      "juma",
      "shanba"
    ],
    "months": [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avgust",
      "sentabr",
      "oktabr",
      "noyabr",
      "dekabr"
    ],
    "pattern": "{weekday}, {day}-{month}"
  },
  "ky": {
    "weekdays": [
      "жекшемби",
      "дүйшөмбү",
      "шейшемби",
      "шаршемби",
      "бейшемби",
      "жума",
      "ишемби"
    ],
    "months": [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь"
    ],
    "pattern": "{day}-{month}, {weekday}"
  },
  "ka": {
    "weekdays": [
      "კვირა",
      "ორშაბათი",
      "სამშაბათი",
      "ოთხშაბათი",
      "ხუთშაბათი",
      "პარასკევი",
      "შაბათი"
    ],
    "months": [
      "იანვარი",
      "თებერვალი",
      "მარტი",
      "აპრილი",
      "მაისი",
      "ივნისი",
      "ივლისი",
      "აგვისტო",
      "სექტემბერი",
      "ოქტომბერი",
      "ნოემბერი",
      "დეკემბერი"
    ],
    "pattern": "{weekday}, {day} {month}"
  },
  "kk": {
    "weekdays": [
      "жексенбі",
      "дүйсенбі",
      "сейсенбі",
      "сәрсенбі",
      "бейсенбі",
      "жұма",
      "сенбі"
    ],
    "months": [
      "қаңтар",
      "ақпан",
      "наурыз",
      "сәуір",
      "мамыр",
      "маусым",
      "шілде",
      "тамыз",
      "қыркүйек",
      "қазан",
      "қараша",
      "желтоқсан"
    ],
    "pattern": "{day} {month}, {weekday}"
  },
  "tr": {
    "weekdays": [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi"
    ],
    "months": [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
    ],
    "pattern": "{day} {month} {weekday}"
  },
  "fa": {
    "weekdays": [
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنجشنبه",
      "جمعه",
      "شنبه"
    ],
    "months": [
      "ژانویه",
      "فوریه",
      "مارس",
      "آوریل",
      "مه",
      "ژوئن",
      "ژوئیه",
      "اوت",
      "سپتامبر",
      "اکتبر",
      "نوامبر",
      "دسامبر"
    ],
    "pattern": "{weekday} {day} {month}"
  },
  "mn": {
    "weekdays": [
      "ням",
      "даваа",
      "мягмар",
      "лхагва",
      "пүрэв",
      "баасан",
      "бямба"
    ],
    "months": [
      "нэгдүгээр сар",
      "хоёрдугаар сар",
      "гуравдугаар сар",
      "дөрөвдүгээр сар",
      "тавдугаар сар",
      "зургаадугаар сар",
      "долоодугаар сар",
      "наймдугаар сар",
      "есдүгээр сар",
      "аравдугаар сар",
      "арван нэгдүгээр сар",
      "арван хоёрдугаар сар"
    ],
    "pattern": "{month}ын {day}, {weekday}"
  },
  "hy": {
    "weekdays": [
      "կիրակի",
      "երկուշաբթի",
      "երեքշաբթի",
      "չորեքշաբթի",
      "հինգշաբթի",
      "ուրբաթ",
      "շաբաթ"
    ],
    "months": [
      "հունվարի",
      "փետրվարի",
      "մարտի",
      "ապրիլի",
      "մայիսի",
      "հունիսի",
      "հուլիսի",
      "օգոստոսի",
      "սեպտեմբերի",
      "հոկտեմբերի",
      "նոյեմբերի",
      "դեկտեմբերի"
    ],
    "pattern": "{day} {month}, {weekday}"
  }
} as const satisfies Record<Lang, CalendarDictionary>;

