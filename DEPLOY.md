# Vercel Deployment Instructions

Follow these exact steps to resolve the `404: NOT_FOUND` error and get your landing page live on Vercel.

## 1. Verify Vercel Project Settings

To ensure Vercel can find your application, you **MUST** configure the Root Directory:

1.  Open your project in the **Vercel Dashboard**.
2.  Go to **Settings** -> **General**.
3.  Scroll down to **Root Directory**.
4.  Set the value to `Visiblx`.
5.  Click **Save**.

## 2. Redeploy

After saving the Root Directory:

1.  Go to the **Deployments** tab.
2.  Find your latest deployment.
3.  Click the three dots `...` and select **Redeploy**.
4.  Ensure **"Bypass Build Cache"** is checked.

## 3. Verify Local Build

If you run into issues, confirm your local build still works:

1.  Open your terminal in the `Visiblx` directory.
2.  Run `npm run build`.
3.  If you see `✓ Generating static pages using 3 workers (3/3)`, your build is perfect.

## Summary of Fixes

-   [x] **Build Fix**: Temporarily moved `acme`, `bishop`, `brighttech`, `david`, `john`, `rachel` to `src/reserved_pages/` to resolve an internal Next.js error.
-   [x] **Link Handling**: Updated the landing page to remove broken links and added a "Coming Soon" badge.
-   [x] **Vercel Config**: Added `vercel.json` inside the `Visiblx` folder for better routing.

> [!TIP]
> When you're ready to set up subdomains later, let me know and we'll move the client pages back into the active routing!
