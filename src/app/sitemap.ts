import { MetadataRoute } from 'next';
import { allClients } from '@/data/clients';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'visiblx.com';
  const baseUrl = `https://${baseDomain}`;

  // 1. Landing Page
  const mainSite = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ];

  // 2. Dynamic Client Subdomains
  const clientSites = allClients.map((client) => ({
    url: `https://${client.subdomain}.${baseDomain}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  return [...mainSite, ...clientSites];
}
