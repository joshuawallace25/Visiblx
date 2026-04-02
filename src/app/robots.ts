import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'visiblx.com';

  return {
    rules: [
      {
        // General Search Engines
        userAgent: ['*', 'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 'YandexBot'],
        allow: '/',
      },
      {
        // AI Crawlers and GPTs
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
