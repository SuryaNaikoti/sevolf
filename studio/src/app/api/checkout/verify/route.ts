import { NextRequest, NextResponse } from 'next/server';
import { getOrderByRazorpayOrderId, getOrderById, saveOrder } from '@/lib/orderStore';
import { verifyRazorpaySignature } from '@/lib/razorpay';
import { generateDownloadToken } from '@/lib/tokenService';
import { sendOrderConfirmationEmail } from '@/lib/emailService';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateCheck = checkRateLimit(`verify_${ip}`, 20, 60);
    if (!rateCheck.allowed) {
      return NextResponse.json({ error: 'Too many verification attempts.' }, { status: 429 });
    }

    const body = await req.json();
    const {
      internalOrderId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing payment credentials.' }, { status: 400 });
    }

    // Lookup order
    const order = (internalOrderId ? getOrderById(internalOrderId) : null) || getOrderByRazorpayOrderId(razorpay_order_id);

    if (!order) {
      return NextResponse.json({ error: 'Order not found.' }, { status: 404 });
    }

    // Idempotency: If already paid, return fresh tokens directly without double fulfillment
    if (order.status === 'paid') {
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      const a4Token = generateDownloadToken(order.id, 'a4', order.customerEmail, 24);
      const letterToken = generateDownloadToken(order.id, 'letter', order.customerEmail, 24);

      return NextResponse.json({
        success: true,
        alreadyProcessed: true,
        orderId: order.id,
        status: 'paid',
        downloads: {
          a4: order.format === 'letter' ? undefined : `${baseUrl}/api/download?token=${a4Token}`,
          letter: order.format === 'a4' ? undefined : `${baseUrl}/api/download?token=${letterToken}`,
        },
      });
    }

    // STRICT SERVER-SIDE SIGNATURE VERIFICATION
    const isSignatureValid = verifyRazorpaySignature(razorpay_order_id, razorpay_payment_id, razorpay_signature);

    if (!isSignatureValid) {
      order.status = 'failed';
      saveOrder(order);
      return NextResponse.json({ error: 'Payment signature verification failed. Unauthorized callback.' }, { status: 400 });
    }

    // Mark paid & prevent double fulfillment
    order.status = 'paid';
    order.razorpayPaymentId = razorpay_payment_id;
    order.razorpaySignature = razorpay_signature;
    order.paidAt = new Date().toISOString();
    saveOrder(order);

    // Generate signed, expiring download links
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const a4Token = generateDownloadToken(order.id, 'a4', order.customerEmail, 24);
    const letterToken = generateDownloadToken(order.id, 'letter', order.customerEmail, 24);

    const downloadLinks = {
      a4: order.format === 'letter' ? undefined : `${baseUrl}/api/download?token=${a4Token}`,
      letter: order.format === 'a4' ? undefined : `${baseUrl}/api/download?token=${letterToken}`,
    };

    // Send order confirmation email
    await sendOrderConfirmationEmail({
      to: order.customerEmail,
      order,
      downloadLinks,
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      status: 'paid',
      downloads: downloadLinks,
    });
  } catch (err: any) {
    console.error('Verification error:', err);
    return NextResponse.json({ error: 'Server error during payment verification.' }, { status: 500 });
  }
}
