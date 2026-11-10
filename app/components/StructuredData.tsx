import { BUSINESS_CONTACT, OPENING_HOURS_SPECIFICATION } from "@/app/lib/business";
import { LOCALES } from "@/app/dictionaries/header";
import type { Lang } from "@/app/dictionaries/header";
import { getHomeDictionary } from "@/app/dictionaries/home";
import { toAbsolute } from "@/app/seo";

type JsonLdProps = { data: Record<string, unknown> | Array<Record<string, unknown>> };


const TARGET_CARRIER_COUNTRIES = [
  "KZ",
  "UZ",
  "AM",
  "GE",
  "TJ",
  "KG",
  "MN",
  "TM",
] as const;

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": toAbsolute("/#organization"),
    name: BUSINESS_CONTACT.name,
    url: toAbsolute(`/${lang}`),
    email: BUSINESS_CONTACT.email,
    telephone: BUSINESS_CONTACT.phone,
    areaServed: ["LV", ...TARGET_CARRIER_COUNTRIES],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        hoursAvailable: OPENING_HOURS_SPECIFICATION,
        telephone: BUSINESS_CONTACT.phone,
        email: BUSINESS_CONTACT.email,
        availableLanguage: LOCALES,
        areaServed: ["LV", ...TARGET_CARRIER_COUNTRIES],
      },
    ],
  };

  return <JsonLd data={data} />;
}

export function InsuranceAgencyJsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": toAbsolute("/#insurance-agency"),
    name: BUSINESS_CONTACT.name,
    url: toAbsolute(`/${lang}`),
    telephone: BUSINESS_CONTACT.phone,
    email: BUSINESS_CONTACT.email,
    parentOrganization: {
      "@id": toAbsolute("/#organization"),
    },
    openingHoursSpecification: OPENING_HOURS_SPECIFICATION,
    areaServed: ["LV", ...TARGET_CARRIER_COUNTRIES],
    serviceType: "EEA cross-border motor third-party liability insurance",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Border insurance for EEA countries",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cross-border border insurance for the European Economic Area (EEA)",
            areaServed: ["EEA"],
          },
        },
      ],
    },
  };

  return <JsonLd data={data} />;
}

export function FaqPageJsonLd({ lang }: { lang: Lang }) {
  const faqItems = getHomeDictionary(lang).faq.items;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": toAbsolute(`/${lang}#faq`),
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <JsonLd data={data} />;
}