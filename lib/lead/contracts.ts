import type { Lang } from "@/dictionaries/config";

export type LeadFormType = "insurance_lead" | "contact";

export interface LeadPayload {
  formType: LeadFormType;
  locale: Lang;
  fullName: string;
  phone: string;
  email: string;
  vehicleType?: string;
  period?: string;
  message?: string;
  consentTerms: boolean;
  consentPrivacy: boolean;
  honeypot?: string;
}

export interface LeadResult {
  ok: boolean;
  code:
    | "LEAD_ACCEPTED"
    | "VALIDATION_ERROR"
    | "SPAM_DETECTED"
    | "RATE_LIMITED"
    | "INTEGRATION_ERROR"
    | "UNKNOWN_ERROR";
  message: string;
}
