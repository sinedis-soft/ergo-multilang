import type { LeadPayload } from "@/lib/lead/contracts";

export function validateLeadPayload(payload: LeadPayload): string[] {
  const errors: string[] = [];

  if (!payload.fullName || payload.fullName.length < 2) errors.push("fullName");
  if (!/^\+?[0-9]{7,15}$/.test(payload.phone)) errors.push("phone");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.push("email");
  if (!payload.consentTerms || !payload.consentPrivacy) errors.push("consent");

  return errors;
}
