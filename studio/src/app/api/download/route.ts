import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifyDownloadToken } from '@/lib/tokenService';
import { getOrderById, incrementDownloadCount } from '@/lib/orderStore';
import { checkRateLimit } from '@/lib/rateLimit';

const MAX_DOWNLOADS_PER_FORMAT = 10;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateCheck = checkRateLimit(`download_${ip}`, 30, 60);
    if (!rateCheck.allowed) {
      return new NextResponse('Rate limit exceeded. Please wait a minute before downloading again.', { status: 429 });
    }

    if (!token) {
      return new NextResponse('Missing download authorization token.', { status: 401 });
    }

    // 1. Verify token signature and expiration
    const verifyResult = verifyDownloadToken(token);
    if (!verifyResult.valid || !verifyResult.payload) {
      return new NextResponse(`Unauthorized or expired download link: ${verifyResult.error}`, { status: 403 });
    }

    const { orderId, format } = verifyResult.payload;

    // 2. Validate Order Status in database
    const order = getOrderById(orderId);
    if (!order) {
      return new NextResponse('Order not found.', { status: 404 });
    }

    if (order.status !== 'paid') {
      return new NextResponse('Payment verification required before download.', { status: 402 });
    }

    // 3. Enforce Format Permissions
    if (order.format !== 'both' && order.format !== format) {
      return new NextResponse(`Your order does not include the ${format.toUpperCase()} format.`, { status: 403 });
    }

    // 4. Enforce Reasonable Download Limits
    const currentCount = order.downloadCount?.[format] || 0;
    if (currentCount >= MAX_DOWNLOADS_PER_FORMAT) {
      return new NextResponse(
        `Maximum download limit (${MAX_DOWNLOADS_PER_FORMAT}) reached for this file. Please contact support@selvof.com if you need a link reset.`,
        { status: 429 }
      );
    }

    // 5. Read Master PDF from PRIVATE STORAGE ONLY
    const fileName = format === 'a4' ? 'Home-Reset-Kit-A4.pdf' : 'Home-Reset-Kit-US-Letter.pdf';
    const filePath = path.join(process.cwd(), 'private_storage', fileName);

    if (!fs.existsSync(filePath)) {
      console.error(`Master file not found at private path: ${filePath}`);
      return new NextResponse('Master workbook deliverable file not found on server.', { status: 500 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    // 6. Increment download tally
    incrementDownloadCount(order.id, format);

    // 7. Stream secure file response
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'no-store, no-cache, must-revalidate, private',
        'Pragma': 'no-cache',
      },
    });
  } catch (err: any) {
    console.error('Secure download error:', err);
    return new NextResponse('Internal server error processing download request.', { status: 500 });
  }
}
