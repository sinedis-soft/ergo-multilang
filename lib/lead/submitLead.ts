import { getDictionaries } from "@/dictionaries";
import type { LeadPayload, LeadResult } from "@/lib/lead/contracts";
import { normalizeLeadPayload } from "@/lib/lead/normalizePayload";
import { validateLeadPayload } from "@/lib/lead/validatePayload";
import { isSpam } from "@/lib/lead/security/antiSpam";
import { isRateLimited } from "@/lib/lead/security/rateLimit";
import { sendLeadToBitrix } from "@/lib/lead/integrations/bitrix24Client";
import { sendLeadEmail } from "@/lib/lead/integrations/emailSender";

export async function submitLead(payload: LeadPayload, rateLimitKey: string): Promise<LeadResult> {
  const dict = getDictionaries(payload.locale);

  if (isSpam(payload)) {
    return { ok: false, code: "SPAM_DETECTED", message: dict.errors.lead.spamDetected };
  }

  if (isRateLimited(rateLimitKey)) {
    return { ok: false, code: "RATE_LIMITED", message: dict.errors.lead.rateLimited };
  }

  const normalized = normalizeLeadPayload(payload);
  const invalidFields = validateLeadPayload(normalized);

  if (invalidFields.length > 0) {
    return { ok: false, code: "VALIDATION_ERROR", message: dict.errors.lead.invalidPayload };
  }

  const crm = await sendLeadToBitrix(normalized);
  if (!crm.ok) {
    return { ok: false, code: "INTEGRATION_ERROR", message: dict.errors.lead.integrationFailed };
  }

  await sendLeadEmail(normalized);

  return { ok: true, code: "LEAD_ACCEPTED", message: dict.common.status.success };
}
