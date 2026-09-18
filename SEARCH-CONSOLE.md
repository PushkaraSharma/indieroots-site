# Google Search Console

Do this after `https://indieroots.in/` loads over HTTPS.

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add a **Domain** property: `indieroots.in`.
   - Domain property covers `www` and `rentvelo.indieroots.in` once DNS TXT is verified.
3. Add the TXT record GitHub/Google shows at your DNS host. Do not remove the `rentvelo` CNAME while doing this.
4. After verification, Sitemaps → submit `https://indieroots.in/sitemap.xml`.
5. Request indexing for `https://indieroots.in/` and `https://indieroots.in/products/`.

Optional: Bing Webmaster Tools with the same sitemap.

If Google asks for an HTML file instead of a domain TXT record, put the file in this repo root and push.
