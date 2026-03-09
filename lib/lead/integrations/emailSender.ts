import type { LeadPayload } from "@/lib/lead/contracts";

export async function sendLeadEmail(payload: LeadPayload): Promise<{ ok: boolean }> {
  void payload;
  return { ok: true };
}
