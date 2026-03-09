import { parseLeadRequest } from "@/lib/lead/parseRequest";
import { submitLead } from "@/lib/lead/submitLead";

export async function POST(request: Request) {
  try {
    const payload = await parseLeadRequest(request);
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const result = await submitLead(payload, `${ip}:${payload.email}`);

    if (!result.ok) {
      const status = result.code === "RATE_LIMITED" ? 429 : 400;
      return Response.json(result, { status });
    }

    return Response.json(result, { status: 200 });
  } catch {
    return Response.json(
      { ok: false, code: "UNKNOWN_ERROR", message: "Unhandled server error" },
      { status: 500 },
    );
  }
}
