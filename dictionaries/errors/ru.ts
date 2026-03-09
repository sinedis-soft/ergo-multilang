import type { ErrorDictionary } from "@/dictionaries/types";

export const errorsRu: ErrorDictionary = {
  lead: {
    invalidPayload: "Некорректные данные формы.",
    rateLimited: "Слишком много запросов. Попробуйте позже.",
    spamDetected: "Заявка отклонена системой безопасности.",
    integrationFailed: "Не удалось отправить заявку. Попробуйте позже.",
    unknown: "Произошла непредвиденная ошибка.",
  },
};
