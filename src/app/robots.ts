import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'visiblx.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${baseDomain}/sitemap.xml`,
  };
}
