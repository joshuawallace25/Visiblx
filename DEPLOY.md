# Vercel Deployment & Wildcard Subdomains

Follow these steps to get your **Tesla-inspired** identy platform live with full subdomain support (e.g., `rachel.visiblx.com`).

## 1. Domain Configuration (DNS)

You must point your domain and its subdomains to Vercel:

1.  **A Record**: Point `@` (or your root domain) to `76.76.21.21`.
2.  **Wildcard CNAME**: Add a CNAME record for `*` pointing to `cname.vercel-dns.com`.
    -   *Example*: Host: `*` | Value: `cname.vercel-dns.com`

## 2. Vercel Dashboard Settings

1.  **Root Directory**: Ensure it is set to `Visiblx`.
2.  **Domains**:
    -   Add `visiblx.com` (your root domain).
    -   Add `*.visiblx.com` (the wildcard domain).
3.  **Environment Variables**:
    -   `NEXT_PUBLIC_BASE_DOMAIN`: Set this to `visiblx.com` in production so the sitemap and metadata generate correctly.

## 3. SEO & Crawling

-   **Sitemap**: Automatically generated at `visiblx.com/sitemap.xml`.
-   **Robots**: Configured at `visiblx.com/robots.txt` to allow all bots.
-   **Metadata**: Each client page automatically generates unique titles, descriptions, and canonical tags for Google.

## 4. Verification

Once deployed, you can verify by visiting:
-   `https://visiblx.com` (Main Landing)
-   `https://rachel.visiblx.com` (Rachel's Identity Page)
-   `https://bishop.visiblx.com` (Bishop's Identity Page)

## Summary of Fixes

-   [x] **Build Fix**: Temporarily moved `acme`, `bishop`, `brighttech`, `david`, `john`, `rachel` to `src/reserved_pages/` to resolve an internal Next.js error.
-   [x] **Link Handling**: Updated the landing page to remove broken links and added a "Coming Soon" badge.
-   [x] **Vercel Config**: Added `vercel.json` inside the `Visiblx` folder for better routing.

> [!TIP]
> When you're ready to set up subdomains later, let me know and we'll move the client pages back into the active routing!
