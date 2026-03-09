import { resolveLang } from "@/dictionaries";
import type { LeadPayload } from "@/lib/lead/contracts";

function asBool(value: FormDataEntryValue | null): boolean {
  return value === "on" || value === "true" || value === "1";
}

export async function parseLeadRequest(request: Request): Promise<LeadPayload> {
  const formData = await request.formData();

  return {
    formType: (formData.get("formType") as LeadPayload["formType"]) || "insurance_lead",
    locale: resolveLang(String(formData.get("locale") || "ru")),
    fullName: String(formData.get("fullName") || ""),
    phone: String(formData.get("phone") || ""),
    email: String(formData.get("email") || ""),
    vehicleType: String(formData.get("vehicleType") || ""),
    period: String(formData.get("period") || ""),
    message: String(formData.get("message") || ""),
    consentTerms: asBool(formData.get("consentTerms")),
    consentPrivacy: asBool(formData.get("consentPrivacy")),
    honeypot: String(formData.get("website") || ""),
  };
}
