import type { Lang } from "@/dictionaries/config";

export type LocaleRecord<T> = Record<Lang, T>;

export interface CommonDictionary {
  actions: {
    submit: string;
    sending: string;
    retry: string;
  };
  status: {
    success: string;
    error: string;
  };
}

export interface HeaderDictionary {
  skipToContent: string;
  brandTitle: string;
  brandSubtitle: string;
  primaryCta: string;
}

export interface FooterDictionary {
  legalTitle: string;
  rights: string;
}

export interface NavigationDictionary {
  home: string;
  contacts: string;
  about: string;
}

export interface ErrorDictionary {
  lead: {
    invalidPayload: string;
    rateLimited: string;
    spamDetected: string;
    integrationFailed: string;
    unknown: string;
  };
}

export interface MetaDictionary {
  siteName: string;
  homeTitle: string;
  homeDescription: string;
}

export interface HomePageDictionary {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  sections: {
    processTitle: string;
    processDescription: string;
    processItems: Array<{ title: string; description: string }>;
  };
}

export interface LeadFormDictionary {
  title: string;
  description: string;
  fields: {
    fullName: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    vehicleType: { label: string; placeholder: string };
    period: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
  };
  consent: {
    terms: string;
    privacy: string;
  };
  submit: string;
}

export interface ContactFormDictionary {
  title: string;
  description: string;
}
