import type { ErrorDictionary } from "@/dictionaries/types";

export const errorsLv: ErrorDictionary = {
  lead: {
    invalidPayload: "Nederīgi formas dati.",
    rateLimited: "Pārāk daudz pieprasījumu. Mēģiniet vēlāk.",
    spamDetected: "Pieteikumu noraidīja drošības sistēma.",
    integrationFailed: "Neizdevās nosūtīt pieteikumu. Mēģiniet vēlāk.",
    unknown: "Radās neparedzēta kļūda.",
  },
};
