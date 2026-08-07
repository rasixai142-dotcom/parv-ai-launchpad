# Meta Pixel Setup (ID 1070109208700223)

## What gets added

1. **Pixel base code, site-wide**
   - Injected into the root route head (`src/routes/__root.tsx`) via a `scripts` entry so it loads on every page, including the landing page and thank-you page.
   - Fires `PageView` automatically on load.
   - The `<noscript>` tracking pixel image is added inside the root shell body.

2. **SPA page-view tracking**
   - Because the site is a single-page app, navigation between routes does not reload the page. A small router subscription fires `fbq('track', 'PageView')` on each route change so pages like `/thank-you` are counted.

3. **Conversion events**
   - Registration CTA click (`CtaButton` → Razorpay link): fires `fbq('track', 'Lead')`.
   - Thank-you page load: fires `fbq('track', 'Purchase', { value: 99, currency: 'INR' })`.
   - A tiny helper `src/lib/pixel.ts` wraps `fbq` safely (no-op if the pixel is blocked or not loaded yet).

## Technical notes

- Pixel ID `1070109208700223` is hardcoded in the helper/config (pixel IDs are public, no secret needed).
- Script is added with TanStack Router's head `scripts` option, not `react-helmet`.
- Duplicate PageView guard: the base snippet's initial PageView is not re-fired on the first route render.

## Verify after build

Use Meta Pixel Helper on the published site: PageView on `/`, Lead on CTA click, Purchase on `/thank-you`.
