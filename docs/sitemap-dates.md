# Sitemap modification dates

`npm run build` and `npm run dev` run `npm run seo:dates` first. The generator records the latest meaningful Git change affecting each public route in `app/lib/sitemapDates.json`. `app/sitemap.ts` uses this static snapshot; requests and repeated builds never substitute the current time.

The source map in `scripts/sitemap-sources.mjs` includes each route's page, rendered components, translations, relevant assets, pricing, shared layout, navigation, SEO helpers and organization data. Update this map when adding routes or content dependencies. Changes to shared components affect every route using them. Translation files currently contain multiple languages, so a change to such a file conservatively affects every locale using that route.

The generator reads the first-parent history and committer timestamps: for a merged change, this is when the content entered the main branch. It normalizes TypeScript/JavaScript before comparison to skip comment-only, formatting-only and type-only changes. Shared schema or contact updates are meaningful changes, so multiple routes can legitimately have the same date. API handlers, build scripts and the sitemap itself do not refresh public-page dates.

The snapshot stores the source fingerprint and originating commit for auditability. Commit an updated snapshot together with changes where possible; `npm run seo:dates` refreshes it after committing content. A full Git history is needed to compute dates. If building from an archive or shallow clone, an existing snapshot is reused only where the source fingerprint matches. Changed/uncommitted sources without a matching verified date omit `lastmod`, rather than reporting an invented date. The sitemap works without Git in production.

Run checks with:

```sh
npm run test:seo
npm run build
```
