import type { LeadPayload } from "@/lib/lead/contracts";

export async function sendLeadToBitrix(payload: LeadPayload): Promise<{ ok: boolean; id?: string }> {
  const webhook = process.env.BITRIX24_WEBHOOK_URL;
  if (!webhook) return { ok: false };

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        TITLE: `Lead: ${payload.fullName}`,
        NAME: payload.fullName,
        PHONE: [{ VALUE: payload.phone, VALUE_TYPE: "WORK" }],
        EMAIL: [{ VALUE: payload.email, VALUE_TYPE: "WORK" }],
        COMMENTS: payload.message || "",
      },
    }),
  });

  if (!response.ok) return { ok: false };
  const data = (await response.json()) as { result?: string };
  return { ok: Boolean(data.result), id: data.result };
}
