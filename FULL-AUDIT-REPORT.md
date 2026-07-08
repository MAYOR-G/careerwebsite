# ContentFlow Media SEO, AEO and GEO Audit

Audited URL: https://contentflowmedia.co.uk/
Audit date: 2026-07-08
Project folder: CONTENTFLOW/careerwebsite

## Executive Summary

SEO health before implementation: 42/100
SEO health after implementation: 78/100 local technical readiness

The live domain could not be resolved from this environment, so the audit used the local Vite React build and direct source inspection. The main issue was that the deployed SPA would ship almost no search metadata in raw HTML: the page title was `website`, there were no canonical or social tags, no structured data, no sitemap, no robots.txt, no llms.txt, and the Google Search Console verification file was not in Vite's publishable `public/` directory.

## Implemented

- Replaced generic HTML title with ContentFlow Media SEO title.
- Added homepage meta description, canonical, robots, Googlebot, Open Graph, Twitter Card, theme, sitemap discovery, and initial JSON-LD.
- Added route-aware non-visual SEO manager for per-page title, description, canonical, Open Graph, Twitter Card, and WebPage JSON-LD.
- Added Organization, WebSite, WebPage, and Service schema.
- Added `public/robots.txt` allowing Google and major AI search crawlers.
- Added `public/sitemap.xml` with all public routes.
- Added `public/llms.txt` for AI search and LLM crawler guidance.
- Added `public/googlef2b6d249050ab8fb.html` so Google Search Console can verify the domain after deployment.
- Added Netlify-style SPA fallback file at `public/_redirects` for client-side routes.

## Technical SEO

Score after implementation: 80/100

Strong points:
- HTTPS canonical URL is now declared.
- Index/follow directives are present.
- Sitemap and robots files are present.
- Search Console verification file is placed in Vite's static public folder.
- Page-specific metadata is maintained on client-side route changes.

Remaining risks:
- As a client-rendered SPA, non-homepage metadata and JSON-LD are updated by JavaScript. Google can render JavaScript, but discovery is slower than static SSR/prerendered HTML.
- Direct live DNS resolution failed during audit, so production status codes, headers, robots, sitemap availability, and Core Web Vitals could not be verified.
- Security headers such as HSTS, CSP, X-Content-Type-Options, and Referrer-Policy must be configured at the hosting/CDN layer.

## On-Page SEO

Score after implementation: 78/100

Implemented metadata covers:
- Home
- About
- Services
- Pricing
- Gallery
- Blog
- Contact

Remaining opportunities:
- Add real long-form blog posts once ready; the current blog page is thin by search standards.
- Add case studies with measurable outcomes and client-specific proof where available.
- Add verifiable social profile URLs to Organization `sameAs` once official profiles are confirmed.

## Schema

Score after implementation: 82/100

Implemented JSON-LD:
- Organization
- WebSite
- WebPage
- Service

No FAQ schema was added because Google restricts FAQ rich results mostly to government and healthcare authority sites. Structured Q&A copy can still be useful for AEO/GEO later, but the current request was implemented without changing visible content.

## GEO and AEO

Score after implementation: 76/100

Implemented:
- `llms.txt` with key pages, services, business facts, and AI citation guidance.
- AI crawler access in `robots.txt` for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, and PerplexityBot.
- Schema and metadata that clarify the brand entity, services, service area, and canonical URLs.

Remaining opportunities:
- Add self-contained answer sections, FAQs, statistics, and comparison tables on service pages when visible content changes are allowed.
- Publish expert-authored blog content with dates, author information, and evidence-backed claims.
- Build external brand mention signals on LinkedIn, YouTube, Reddit, industry directories, and reputable local/business profiles.

## Performance and Core Web Vitals

Not scored from live data because the domain could not be resolved. Local source risks include remote video and external images. After deployment, test with PageSpeed Insights and Search Console Core Web Vitals using LCP, INP, and CLS.

## Priority Action Plan

Critical:
- Deploy the updated build and verify `https://contentflowmedia.co.uk/googlef2b6d249050ab8fb.html` in Google Search Console.
- Confirm the live domain resolves and returns a 200 status for `/`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt`.

High:
- Submit `https://contentflowmedia.co.uk/sitemap.xml` in Google Search Console.
- Configure production security headers at the hosting layer.
- If the host is not Netlify, configure equivalent SPA fallback rewrites for `/about`, `/services`, `/pricing`, `/gallery`, `/blog`, and `/contact`.

Medium:
- Consider prerendering or SSR for stronger non-JavaScript SEO on all routes.
- Add official social profiles to schema once available.
- Expand the blog from placeholder status into useful, evidence-led articles.

Low:
- Add IndexNow for Bing once production hosting is confirmed.
- Add image dimensions and modern image delivery checks after live performance testing.
