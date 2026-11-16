import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminSessionToken } from '@/lib/adminAuth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect /admin/studio
  if (pathname.startsWith('/admin/studio')) {
    const sessionCookie = req.cookies.get('selvof_admin_session')?.value;
    const isAuthenticated = await verifyAdminSessionToken(sessionCookie);

    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/studio/:path*'],
};
