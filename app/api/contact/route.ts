export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      firstName?: string;
      lastName?: string;
      phone?: string;
      email?: string;
      comment?: string;
    };

    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const comment = (body.comment || "").trim();

    if (!firstName || !lastName || !phone || !email || !comment) {
      return Response.json({ ok: false, message: "Заполните все обязательные поля" }, { status: 400 });
    }

    const webhook = process.env.BITRIX_WEBHOOK_URL;
    if (!webhook) {
      return Response.json({ ok: false, message: "BITRIX_WEBHOOK_URL is not configured" }, { status: 500 });
    }

    const bitrixUrl = `${webhook}/crm.lead.add.json`;
    const payload = {
      fields: {
        TITLE: `Сообщение с формы контактов: ${firstName} ${lastName}`,
        NAME: firstName,
        LAST_NAME: lastName,
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
        COMMENTS: comment,
        SOURCE_ID: "WEB",
      },
      params: { REGISTER_SONET_EVENT: "Y" },
    };

    const res = await fetch(bitrixUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return Response.json({ ok: false, message: "Ошибка отправки в CRM" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, message: "Ошибка на сервере" }, { status: 500 });
  }
}
