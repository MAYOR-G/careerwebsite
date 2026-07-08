# ContentFlow Media SEO Implementation Action Plan

## Done

- Added full homepage SEO metadata in `index.html`.
- Added route-level SEO metadata manager.
- Added Organization, WebSite, WebPage, and Service JSON-LD.
- Added `robots.txt`.
- Added `sitemap.xml`.
- Added `llms.txt`.
- Added Google Search Console verification file under `public/`.
- Added SPA fallback file for Netlify-style hosting.

## Next Deployment Steps

1. Build and deploy the updated site.
2. Open `https://contentflowmedia.co.uk/googlef2b6d249050ab8fb.html` and confirm it shows the Google verification line.
3. Verify the property in Google Search Console.
4. Submit `https://contentflowmedia.co.uk/sitemap.xml` in Google Search Console.
5. Test these URLs after deployment:
   - `https://contentflowmedia.co.uk/robots.txt`
   - `https://contentflowmedia.co.uk/sitemap.xml`
   - `https://contentflowmedia.co.uk/llms.txt`
   - `https://contentflowmedia.co.uk/about`
   - `https://contentflowmedia.co.uk/services`
   - `https://contentflowmedia.co.uk/contact`

## Hosting Checks

- If hosted on Netlify, `public/_redirects` should support client-side route refreshes.
- If hosted on Vercel, add an equivalent rewrite rule in `vercel.json`.
- If hosted on Apache or Nginx, configure all app routes to serve `index.html`.

## Later SEO/AEO/GEO Work

- Add real articles to the blog.
- Add case studies or proof pages.
- Add official social profiles and include them in schema `sameAs`.
- Add answer-style service sections when visible page copy can be changed.
- Run live PageSpeed Insights after deployment and optimise LCP, INP, and CLS.
