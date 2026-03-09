import type { LeadPayload } from "@/lib/lead/contracts";

export function normalizeLeadPayload(payload: LeadPayload): LeadPayload {
  return {
    ...payload,
    fullName: payload.fullName.trim(),
    phone: payload.phone.replace(/\s+/g, ""),
    email: payload.email.trim().toLowerCase(),
    message: payload.message?.trim(),
  };
}
