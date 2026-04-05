import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'visiblx.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      {
        // Explicitly allow high-value bots to prioritize indexing
        userAgent: ['Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot'],
        allow: '/',
      },
      {
        // Allow AI agents to crawl for visibility in AI search results
        userAgent: [
          'GPTBot', 
          'ChatGPT-User', 
          'CCBot', 
          'Google-Extended', 
          'OAI-SearchBot',
          'Anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'PerplexityBot',
          'YouBot'
        ],
        allow: '/',
      }
    ],
    sitemap: `https://${baseDomain}/sitemap.xml`,
  };
}
