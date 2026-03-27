import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Get hostname of request (e.g. acme.visiblx.com)
  const hostname = request.headers.get('host');

  if (!hostname) return NextResponse.next();

  // Remove port if it exists (e.g. localhost:3000)
  const cleanHostname = hostname.replace(/:\d+$/, '');
  
  // Extract subdomain assuming the base domain is visiblx.com
  let subdomain = '';
  
  if (cleanHostname.endsWith('.visiblx.com')) {
    subdomain = cleanHostname.replace('.visiblx.com', '');
  } else if (cleanHostname.endsWith('.localhost')) {
    // Also keeping localhost support just in case it's needed in the future
    subdomain = cleanHostname.replace('.localhost', '');
  }

  // Prevent routing 'www' to a client profile
  if (subdomain === 'www') {
    subdomain = '';
  }

  // If a valid subdomain is identified, dynamically rewrite the routing
  if (subdomain && subdomain !== 'visiblx.com' && subdomain !== 'localhost') {
    // We rewrite the URL to /client/[subdomain]/[current_path]
    // So rachel.visiblx.com/about becomes internally /client/rachel/about
    url.pathname = `/client/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
