export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "EURO polis",
    areaServed: "EU",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
