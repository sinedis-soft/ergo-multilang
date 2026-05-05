export function keepShortWords(input?: string | null): string {
  if (!input) return "";

  return input.replace(
    /(^|\s)([A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{1,2})\s+/g,
    "$1$2\u00A0",
  );
}
