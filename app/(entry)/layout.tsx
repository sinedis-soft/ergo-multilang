import { BUSINESS_CONTACT } from "@/app/lib/business";
// app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";
import { SITE_URL } from "@/app/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/en" },
  title: `Страховой агент ${BUSINESS_CONTACT.name}`,
  description: "Официальные страховые услуги и сопровождение.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}