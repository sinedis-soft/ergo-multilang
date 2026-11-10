// Only sources affecting published page content, metadata, links or structured data.
// Shared translation files deliberately apply to every locale using them.
const shared = [
  'app/[lang]/layout.tsx', 'app/layout.tsx', 'app/seo.ts',
  'app/components/Header.tsx', 'app/components/Footer.tsx',
  'app/components/CookieConsent.tsx', 'app/components/StructuredData.tsx',
  'app/dictionaries/header.ts', 'app/dictionaries/footer.ts',
  'app/dictionaries/cookies.ts', 'app/dictionaries/seo.ts', 'app/lib/business.ts',
];
const pages = {
  '': ['Home', 'InfoCompare', 'Calculator', 'LeadForm', 'CoverageBlock', 'SubmissionModal'],
  '/about': ['AboutPage'],
  '/contacts': ['ContactsPage', 'ContactFeedbackForm', 'SubmissionModal', 'BusinessHours'],
  '/product-info': ['CookiesPolicyPage'],
  '/rules': ['RulesPage'],
  '/privacy': ['CookiesPolicyPage'],
  '/cookiepolicy': ['CookiesPolicyPage'],
};
const dictionaries = {
  '': ['home', 'infoCompare', 'calculator', 'leadForm', 'coverage'],
  '/about': ['about'],
  '/contacts': ['contactFeedbackForm', 'businessHours'],
  '/product-info': ['productInfo'],
  '/rules': ['rules'],
  '/privacy': ['privacyPolicy'],
  '/cookiepolicy': ['privacyCookies'],
};
const extra = {
  '': ['app/lib/insurancePrices.ts', 'public/coverage-map.png'],
  '/contacts': ['app/lib/businessHours.ts'],
};
export const sitemapSources = Object.fromEntries(Object.entries(pages).map(([route, components]) => [route, [
  ...shared,
  `app/[lang]${route}/page.tsx`,
  ...components.map((name) => `app/components/${name}.tsx`),
  ...dictionaries[route].map((name) => `app/dictionaries/${name}.ts`),
  ...(extra[route] || []),
  'app/utils/typography.ts',
].sort()]));
