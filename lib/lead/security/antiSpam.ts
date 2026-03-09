import type { LeadPayload } from "@/lib/lead/contracts";

export function isSpam(payload: LeadPayload): boolean {
  return Boolean(payload.honeypot);
}
