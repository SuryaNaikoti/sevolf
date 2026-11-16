import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { createAdminSessionToken } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const correctPassword = process.env.ADMIN_PASSWORD || 'selvof_studio_owner_2026';

    if (!password || password !== correctPassword) {
      return NextResponse.json({ error: 'Invalid owner access credentials.' }, { status: 401 });
    }

    const token = await createAdminSessionToken();
    const cookieStore = await cookies();
    cookieStore.set('selvof_admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 86400, // 7 days
    });

    return NextResponse.json({ success: true, message: 'Authentication successful.' });
  } catch (err: any) {
    return NextResponse.json({ error: 'Server authentication error.' }, { status: 500 });
  }
}
