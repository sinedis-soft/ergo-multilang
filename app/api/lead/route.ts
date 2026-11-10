import { NextResponse } from "next/server";

export const runtime = "nodejs";

const BITRIX_WEBHOOK = process.env.BITRIX_WEBHOOK_URL?.trim().replace(/\/+$/, "");
const DOCUMENT_FIELD = "UF_CRM_1686154280439";
type BitrixFileUpload = { fileData: [string, string] };

type VehicleInput = {
  countryFrom: string;
  vehicleType: string;
  period: string;
  startDate: string;
  plate: string;
  comment: string;
  docs: File[];
};

type VehicleStringField = Exclude<keyof VehicleInput, "docs">;

const vehicleStringFields: VehicleStringField[] = [
  "countryFrom",
  "vehicleType",
  "period",
  "startDate",
  "plate",
  "comment",
];

function isVehicleStringField(field: string): field is VehicleStringField {
  return vehicleStringFields.includes(field as VehicleStringField);
}

const langToComm: Record<string, string> = {
  ru: "3937",
  lv: "3955",
  en: "3953",
  uz: "3947",
  ky: "3949",
  ka: "3941",
  kk: "3945",
  tr: "3957",
  fa: "3953",
  mn: "3953",
  hy: "3943",
};

const countryMap: Record<string, string> = {
  AR: "529",
  AZ: "531",
  BY: "123",
  GE: "523",
  KZ: "385",
  KG: "527",
  MD: "521",
  MN: "383",
  RU: "125",
  TR: "2253",
  UA: "519",
  UZ: "525",
  OTHER: "411",
};

const vehicleTypeMap: Record<string, string> = {
  car: "127",
  trailer: "129",
  bus: "131",
  moto: "217",
  special: "457",
  truck: "453",
};

const periodMap: Record<string, string> = {
  "30": "115",
  "90": "117",
  "180": "119",
  "365": "121",
};

type BitrixResponse = {
  result?: unknown;
  error?: string;
  error_description?: string;
};

async function bx(method: string, payload: unknown): Promise<unknown> {
  if (!BITRIX_WEBHOOK) {
    throw new Error("BITRIX_WEBHOOK_URL is not set");
  }

  const res = await fetch(`${BITRIX_WEBHOOK}/${method}.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const data = (await res.json()) as BitrixResponse;

  if (!res.ok || data.error) {
    throw new Error(data.error_description || data.error || "Bitrix error");
  }

  return data.result;
}

function toString(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

async function fileToBase64(file: File): Promise<string> {
  return Buffer.from(await file.arrayBuffer()).toString("base64");
}

function storedFileCount(value: unknown): number {
  const values = Array.isArray(value) ? value : [value];
  return values.filter((item) => {
    const id = item && typeof item === "object"
      ? (item as { id?: unknown; ID?: unknown }).id ?? (item as { ID?: unknown }).ID
      : item;
    return (typeof id === "number" || typeof id === "string") && Number(id) > 0;
  }).length;
}

function getIdFromFirstItem(value: unknown): number | null {
  if (!Array.isArray(value)) return null;

  const first = value[0];
  if (!first || typeof first !== "object") return null;

  const id = (first as { ID?: unknown }).ID;
  const parsed = Number(id);

  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function duplicateContactIds(value: unknown): number[] {
  if (Array.isArray(value) && value.length === 0) return [];
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Invalid Bitrix duplicate-search response");
  }
  const ids = (value as { CONTACT?: unknown }).CONTACT;
  if (ids === undefined) return [];
  if (!Array.isArray(ids)) throw new Error("Invalid Bitrix contact identifiers");
  return [...new Set(ids.map(getCreatedId))];
}

function normalizeName(value: unknown): string {
  return typeof value === "string" ? value.normalize("NFKC").trim().replace(/\s+/g, " ").toLowerCase() : "";
}

function matchingCommunication(values: unknown, expected: string, type: "email" | "phone"): boolean {
  if (!Array.isArray(values)) return false;
  return values.some((item) => {
    const value = item && typeof item === "object" ? (item as { VALUE?: unknown }).VALUE : null;
    if (typeof value !== "string") return false;
    return type === "email" ? value.trim().toLowerCase() === expected : value.replace(/\D/g, "") === expected.replace(/\D/g, "");
  });
}

async function findMatchingContact(firstName: string, lastName: string, phone: string, email: string, birthDate: string): Promise<number | null> {
  const [byEmail, byPhone] = await Promise.all([
    bx("crm.duplicate.findbycomm", { entity_type: "CONTACT", type: "EMAIL", values: [email] }),
    bx("crm.duplicate.findbycomm", { entity_type: "CONTACT", type: "PHONE", values: [phone] }),
  ]);
  const emailIds = duplicateContactIds(byEmail);
  const phoneIds = new Set(duplicateContactIds(byPhone));
  const candidates = emailIds.filter((id) => phoneIds.has(id));
  // Shared addresses, shared telephone numbers and ambiguous duplicates must not select another person.
  if (candidates.length !== 1) return null;
  const id = candidates[0];
  const contact = await bx("crm.contact.get", { id }) as Record<string, unknown>;
  if (!contact || Number(contact.ID) !== id) throw new Error("Invalid Bitrix contact response");
  if (normalizeName(contact.NAME) !== normalizeName(firstName) || normalizeName(contact.LAST_NAME) !== normalizeName(lastName)) return null;
  if (!matchingCommunication(contact.EMAIL, email, "email") || !matchingCommunication(contact.PHONE, phone, "phone")) return null;
  if (birthDate && typeof contact.BIRTHDATE === "string" && contact.BIRTHDATE && contact.BIRTHDATE.slice(0, 10) !== birthDate) return null;
  return id;
}

function getCreatedId(value: unknown): number {
  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error("Bitrix returned invalid ID");
  }

  return parsed;
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const lang = toString(form.get("lang")) || "en";
    const firstName = toString(form.get("contact_firstNameLat"));
    const lastName = toString(form.get("contact_lastNameLat"));
    const rawPhone = toString(form.get("contact_phone"));
    const phone = "+" + rawPhone.replace(/\D/g, "");
    const email = toString(form.get("contact_email")).toLowerCase();

    const isCompany = form.get("policyholder_isCompany") === "on";

    const birthDate = toString(form.get("policyholder_birthDate"));
    const address = toString(form.get("policyholder_address"));

    const companyInn = toString(form.get("company_inn"));
    const ceoFullName = toString(form.get("company_ceo_fullName"));
    const ceoTitle = toString(form.get("company_ceo_title"));

    const vehiclesByIdx: Record<string, VehicleInput> = {};

    for (const [key, value] of form.entries()) {
      const match = key.match(/^vehicles\[(\d+)\]\[(\w+)\]$/);
      if (!match) continue;

      const [, idx, field] = match;

      vehiclesByIdx[idx] ||= {
        countryFrom: "",
        vehicleType: "",
        period: "",
        startDate: "",
        plate: "",
        comment: "",
        docs: [],
      };

      if (field === "docs" && value instanceof File) {
        vehiclesByIdx[idx].docs.push(value);
      } else if (typeof value === "string" && isVehicleStringField(field)) {
        vehiclesByIdx[idx][field] = value.trim();
      }
    }

    const vehicles = Object.keys(vehiclesByIdx)
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => vehiclesByIdx[key])
      .filter((vehicle) => vehicle.plate || vehicle.docs.length > 0);

    if (!firstName || !lastName || !/^[^\s@]+@[^\s@]+$/.test(email) ||
        !/^\+?[0-9\s().-]+$/.test(rawPhone) || !/^\+\d{7,15}$/.test(phone) || vehicles.length === 0 ||
        (isCompany && !companyInn)) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    let documentFieldIsMultiple = true;
    if (vehicles.some((vehicle) => vehicle.docs.length > 0)) {
      const fields = await bx("crm.deal.fields", {}) as Record<string, {
        type?: string; isMultiple?: boolean; isReadOnly?: boolean;
      }>;
      const field = fields?.[DOCUMENT_FIELD];
      if (!field || field.type !== "file" || field.isReadOnly) {
        throw new Error(`Bitrix document field ${DOCUMENT_FIELD} is missing, is not a file field, or is read-only`);
      }
      if (typeof field.isMultiple !== "boolean") {
        throw new Error(`Bitrix document field ${DOCUMENT_FIELD} has no multiplicity information`);
      }
      documentFieldIsMultiple = field.isMultiple;
      if (!documentFieldIsMultiple && vehicles.some((vehicle) => vehicle.docs.length > 1)) {
        return NextResponse.json(
          { ok: false, message: "The Bitrix document field accepts only one file per vehicle. Enable multiple files in Bitrix or attach one file." },
          { status: 400 }
        );
      }
    }

    const contactFields = {
      NAME: firstName,
      LAST_NAME: lastName,
      PHONE: phone ? [{ VALUE: phone, VALUE_TYPE: "WORK" }] : [],
      EMAIL: email ? [{ VALUE: email, VALUE_TYPE: "WORK" }] : [],
      UF_CRM_1753957395750: langToComm[lang] || "3953",
      ...(isCompany ? {} : { BIRTHDATE: birthDate, ADDRESS: address }),
    };

    const existingContactId = await findMatchingContact(firstName, lastName, phone, email, isCompany ? "" : birthDate);
    // Public form submissions must never overwrite an existing person's CRM profile.
    const contactId = existingContactId ?? getCreatedId(await bx("crm.contact.add", { fields: contactFields }));

    let companyId = 1817;

    if (isCompany) {
      const companyList = await bx("crm.company.list", {
        filter: { UF_CRM_COMPANY_1692911328252: companyInn },
        select: ["ID"],
        start: -1,
      });

      const companyFields = {
        TITLE: companyInn
          ? `Company ${companyInn}`
          : `Company ${lastName} ${firstName}`.trim(),
        UF_CRM_COMPANY_1692911328252: companyInn,
        UF_CRM_1709019759168: ceoFullName,
        UF_CRM_1709019814756: ceoTitle,
      };

      const existingCompanyId = getIdFromFirstItem(companyList);

      if (existingCompanyId) {
        companyId = existingCompanyId;
        await bx("crm.company.update", {
          id: companyId,
          fields: companyFields,
        });
      } else {
        companyId = getCreatedId(
          await bx("crm.company.add", {
            fields: companyFields,
          })
        );
      }
    }

    let hasFileProcessingIssue = false;

    for (const vehicle of vehicles) {
      const docs: BitrixFileUpload[] = [];

      for (const file of vehicle.docs) {
        try {
          if (!file.name || file.size === 0) {
            hasFileProcessingIssue = true;
            continue;
          }
          docs.push({ fileData: [file.name, await fileToBase64(file)] });
        } catch {
          hasFileProcessingIssue = true;
        }
      }

      const dealId = getCreatedId(await bx("crm.deal.add", {
        fields: {
          TITLE: `Lead ${lastName} ${firstName} ${vehicle.plate}`.trim(),
          CONTACT_IDS: [contactId],
          COMPANY_ID: companyId,

          UF_CRM_1686152306664: countryMap[vehicle.countryFrom] || "411",
          UF_CRM_1686152567597: vehicleTypeMap[vehicle.vehicleType] || "127",
          UF_CRM_1686152209741: periodMap[vehicle.period] || "115",
          UF_CRM_1686152149204: vehicle.startDate,
          UF_CRM_1686152485641: vehicle.plate,
          ...(docs.length ? { [DOCUMENT_FIELD]: documentFieldIsMultiple ? docs : docs[0] } : {}),

          COMMENTS: vehicle.comment,

          UF_CRM_1693578066803: "4335",
          UF_CRM_1686682902533: "4287",
          UF_CRM_1690539097: "425",
          UF_CRM_1700656576088: "1095",
          UF_CRM_1686683031442: "941",
        },
      }));

      if (docs.length > 0) {
        try {
          const savedDeal = await bx("crm.deal.get", { id: dealId }) as Record<string, unknown>;
          const savedCount = storedFileCount(savedDeal?.[DOCUMENT_FIELD]);
          if (savedCount !== docs.length) {
            hasFileProcessingIssue = true;
            console.error("[lead] Attachment count mismatch", { dealId, expected: docs.length, saved: savedCount });
          }
        } catch {
          // The deal already exists: use the partial-success response to avoid a duplicate retry.
          hasFileProcessingIssue = true;
          console.error("[lead] Could not verify saved attachments", { dealId });
        }
      }
    }

    return NextResponse.json({ ok: true, fileProcessingIssue: hasFileProcessingIssue });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}