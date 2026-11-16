import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { razorpayClient } from '@/lib/razorpay';
import { SELVOF_PRODUCTS, PdfFormatChoice } from '@/types/orders';
import { saveOrder } from '@/lib/orderStore';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateCheck = checkRateLimit(`order_${ip}`, 15, 60);
    if (!rateCheck.allowed) {
      return NextResponse.json({ error: 'Too many order requests. Please wait a moment.' }, { status: 429 });
    }

    const body = await req.json();
    const { email, format = 'both', productId = 'selvof-home-reset-kit-v1' } = body;

    // Email validation
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const product = SELVOF_PRODUCTS[productId];
    if (!product) {
      return NextResponse.json({ error: 'Invalid product selection.' }, { status: 400 });
    }

    const validFormats: PdfFormatChoice[] = ['both', 'a4', 'letter'];
    const chosenFormat: PdfFormatChoice = validFormats.includes(format) ? format : 'both';

    // Internal unique order ID
    const internalOrderId = `order_${crypto.randomBytes(8).toString('hex')}`;

    // Create Razorpay order on server via official SDK
    let rzpOrder;
    try {
      rzpOrder = await razorpayClient.orders.create({
        amount: product.pricePaise, // ₹299 = 29900 paise
        currency: product.currency,
        receipt: internalOrderId,
        notes: {
          customerEmail: email.trim().toLowerCase(),
          format: chosenFormat,
          productId: product.id,
        },
      });
    } catch (rzpErr: any) {
      console.error('Razorpay API order creation failed:', rzpErr?.error?.description || rzpErr?.message || rzpErr);
      return NextResponse.json(
        {
          error:
            rzpErr?.error?.description ||
            'Razorpay order creation failed. Please ensure valid test credentials (Key ID and Secret) are configured in .env.local.',
        },
        { status: 502 }
      );
    }

    // Save initial pending order to private database
    const newOrder = saveOrder({
      id: internalOrderId,
      razorpayOrderId: rzpOrder.id,
      customerEmail: email.trim().toLowerCase(),
      productId: product.id,
      productTitle: product.title,
      amount: rzpOrder.amount as number,
      currency: rzpOrder.currency as string,
      status: 'pending',
      format: chosenFormat,
      createdAt: new Date().toISOString(),
      downloadCount: { a4: 0, letter: 0, both: 0 },
    });

    return NextResponse.json({
      success: true,
      orderId: newOrder.id,
      razorpayOrderId: rzpOrder.id,
      amount: rzpOrder.amount,
      currency: rzpOrder.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      productTitle: product.title,
    });
  } catch (err: any) {
    console.error('Order creation error:', err);
    return NextResponse.json({ error: 'Failed to initiate order. Please try again.' }, { status: 500 });
  }
}
