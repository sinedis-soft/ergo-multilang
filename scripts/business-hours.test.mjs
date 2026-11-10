import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import ts from 'typescript';

// Load the actual TypeScript modules without adding a runtime test dependency.
const cache = new Map();
function load(relative) {
  const filename = path.resolve(relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  const loaded = new Module(filename);
  cache.set(filename, loaded);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  loaded.require = (specifier) => load(path.resolve(path.dirname(filename), `${specifier}.ts`));
  loaded._compile(ts.transpileModule(readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, filename);
  return loaded.exports;
}
const { formatInterval, weeklyIntervals, sourceWeekStart } = load('app/lib/businessHours.ts');
const { calendarDictionary } = load('app/dictionaries/calendar.ts');
const { LOCALES } = load('app/dictionaries/header.ts');
const monday = weeklyIntervals('2026-11-09')[0];
const expected = {
  ru: 'понедельник, 9 ноября', lv: 'pirmdiena, 9. novembris', en: 'Monday, November 9',
  uz: 'dushanba, 9-noyabr', ky: '9-ноябрь, дүйшөмбү', ka: 'ორშაბათი, 9 ნოემბერი',
  kk: '9 қараша, дүйсенбі', tr: '9 Kasım Pazartesi', fa: 'دوشنبه 9 نوامبر',
  mn: 'арван нэгдүгээр сарын 9, даваа', hy: '9 նոյեմբերի, երկուշաբթի',
};

test('all site languages show translated dates even when Intl only supports English', (t) => {
  const Original = Intl.DateTimeFormat;
  t.mock.method(Intl, 'DateTimeFormat', function (locale, options) {
    assert.equal(locale, 'en-US', 'localized text must never depend on browser locale data');
    assert.equal(options.calendar, 'gregory');
    assert.equal(options.numberingSystem, 'latn');
    return new Original('en-US', options);
  });
  assert.deepEqual(Object.keys(calendarDictionary).sort(), [...LOCALES].sort());
  for (const lang of LOCALES) {
    assert.equal(formatInterval(monday, lang, 'Europe/Minsk').day, expected[lang]);
    const names = calendarDictionary[lang];
    assert.equal(names.weekdays.length, 7);
    assert.equal(names.months.length, 12);
    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= 7; day++) {
        const opens = new Date(Date.UTC(2026, month, day, 9));
        const result = formatInterval({ opens, closes: opens }, lang, 'UTC');
        assert(result.day.includes(names.months[month]), `${lang} month ${month + 1}`);
        assert(result.day.includes(names.weekdays[opens.getUTCDay()]), `${lang} weekday ${day}`);
        assert(!/M\d|undefined|Invalid/.test(result.day));
      }
    }
  }
});

test('visitor time zone and daylight saving retain their correct offsets', () => {
  assert.equal(formatInterval(monday, 'ka', 'Europe/Minsk').hours, '09:00 – 17:30');
  assert.equal(formatInterval(monday, 'ka', 'Europe/Warsaw').hours, '07:00 – 15:30');
  assert.equal(formatInterval(weeklyIntervals('2026-07-06')[0], 'ka', 'Europe/Warsaw').hours, '08:00 – 16:30');
  assert.equal(formatInterval(monday, 'uz', 'Asia/Almaty').hours, '11:00 – 19:30');
  assert.equal(formatInterval(monday, 'fa', 'Asia/Tehran').hours, '09:30 – 18:00');
  assert.equal(formatInterval(weeklyIntervals('2026-11-09')[4], 'hy', 'Europe/Minsk').hours, '09:00 – 16:30');
});

test('both dates are translated when a shift crosses local midnight or year end', () => {
  assert.deepEqual(formatInterval(monday, 'ka', 'Pacific/Kiritimati'), {
    day: 'ორშაბათი, 9 ნოემბერი', hours: '20:00 – სამშაბათი, 10 ნოემბერი 04:30',
  });
  assert.deepEqual(formatInterval(monday, 'uz', 'America/Los_Angeles'), {
    day: 'yakshanba, 8-noyabr', hours: '22:00 – dushanba, 9-noyabr 06:30',
  });
  assert.deepEqual(formatInterval({ opens: new Date('2026-12-31T23:30Z'), closes: new Date('2027-01-01T01:00Z') }, 'hy', 'UTC'), {
    day: '31 դեկտեմբերի, հինգշաբթի', hours: '23:30 – 1 հունվարի, ուրբաթ 01:00',
  });
  assert.equal(sourceWeekStart(new Date('2026-11-08T22:00Z')), '2026-11-09');
});
