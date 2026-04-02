import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - static files (_next/static)
     * - optimized images (_next/image)
     * - specific metadata files (favicon, sitemap, robots)
     * - any path containing a dot (indicating a file extension like .jpg, .png, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  if (!hostname) return NextResponse.next();

  // Remove port if it exists (e.g. localhost:3000)
  const cleanHostname = hostname.replace(/:\d+$/, '');
  
  // Base domain configuration
  const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'visiblx.com';
  
  let subdomain = '';
  if (cleanHostname.endsWith(`.${baseDomain}`)) {
    subdomain = cleanHostname.replace(`.${baseDomain}`, '');
  } else if (cleanHostname.endsWith('.localhost')) {
    subdomain = cleanHostname.replace('.localhost', '');
  }

  // Define excluded subdomains (like www)
  const excludedSubdomains = ['www', 'app', 'api', 'admin'];

  if (subdomain && !excludedSubdomains.includes(subdomain)) {
    // Rewriting the URL to includes the subdomain in the path
    // So rachel.visiblx.com/ becomes internally /rachel/
    url.pathname = `/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
