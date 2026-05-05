import type { Lang } from "@/app/dictionaries/header";
import { getHomeDictionary } from "@/app/dictionaries/home";
import { SITE_URL, toAbsolute } from "@/app/seo";

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

const COMPANY_ADDRESS = {
  "@type": "PostalAddress",
  addressCountry: "LV",
  addressLocality: "Riga",
  postalCode: "LV-1013",
};

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
];

const OFFICIAL_PROFILES = [
  toAbsolute("/ru/contacts"),
  toAbsolute("/en/contacts"),
];

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
    "@id": toAbsolute(`/${lang}#organization`),
    name: "Rižova Ludmila",
    url: SITE_URL,
    email: "ludmila.rizova@ergo.lv",
    telephone: "+37122355307",
    address: COMPANY_ADDRESS,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: OFFICIAL_PROFILES,
    areaServed: ["LV", ...TARGET_CARRIER_COUNTRIES],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+37122355307",
        email: "ludmila.rizova@ergo.lv",
        availableLanguage: ["ru", "lv", "en", "uz", "kg", "ka", "kz", "tr", "fa", "mn", "hy"],
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
    "@id": toAbsolute(`/${lang}#insurance-agency`),
    name: "Rižova Ludmila",
    url: toAbsolute(`/${lang}`),
    parentOrganization: {
      "@id": toAbsolute(`/${lang}#organization`),
    },
    address: COMPANY_ADDRESS,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: OFFICIAL_PROFILES,
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