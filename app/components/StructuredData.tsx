import type { Lang } from "@/app/dictionaries/header";
import { getHomeDictionary } from "@/app/dictionaries/home";
import { SITE_URL, toAbsolute } from "@/app/seo";

type JsonLdProps = { data: Record<string, unknown> | Array<Record<string, unknown>> };

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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+37122355307",
        email: "ludmila.rizova@ergo.lv",
        availableLanguage: ["ru", "lv", "en", "uz", "kg", "ka", "kz", "tr", "fa", "mn", "hy"],
        areaServed: ["EU", "LV"],
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
    areaServed: ["EU", "LV"],
    serviceType: "Cross-border motor third-party liability insurance",
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