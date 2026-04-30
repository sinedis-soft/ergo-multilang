export function keepShortWords(input: string): string {
  return input.replace(
    /(^|\s)([A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{1,2})\s+/g,
    "$1$2\u00A0",
  );
}
