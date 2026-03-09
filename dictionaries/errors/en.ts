import type { ErrorDictionary } from "@/dictionaries/types";

export const errorsEn: ErrorDictionary = {
  lead: {
    invalidPayload: "Invalid form payload.",
    rateLimited: "Too many requests. Try again later.",
    spamDetected: "Request blocked by security checks.",
    integrationFailed: "Failed to submit the request. Try again later.",
    unknown: "Unexpected server error.",
  },
};
