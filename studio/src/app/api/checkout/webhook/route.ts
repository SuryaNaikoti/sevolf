import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature } from '@/lib/razorpay';
import { getOrderByRazorpayOrderId, saveOrder } from '@/lib/orderStore';
import { generateDownloadToken } from '@/lib/tokenService';
import { sendOrderConfirmationEmail } from '@/lib/emailService';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const webhookSignature = req.headers.get('x-razorpay-signature');

    if (!webhookSignature) {
      return NextResponse.json({ error: 'Missing webhook signature header' }, { status: 400 });
    }

    // Verify webhook signature
    const isValid = verifyWebhookSignature(rawBody, webhookSignature);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
    }

    const event = JSON.parse(rawBody);

    // Handle payment.captured event
    if (event.event === 'payment.captured' || event.event === 'order.paid') {
      const paymentEntity = event.payload?.payment?.entity;
      const rzpOrderId = paymentEntity?.order_id || event.payload?.order?.entity?.id;

      if (!rzpOrderId) {
        return NextResponse.json({ received: true, note: 'No order_id in event payload' });
      }

      const order = getOrderByRazorpayOrderId(rzpOrderId);
      if (!order) {
        return NextResponse.json({ received: true, note: 'Order not found' });
      }

      // Idempotency: Prevent duplicate order fulfillment
      if (order.status === 'paid') {
        return NextResponse.json({ received: true, message: 'Order already fulfilled' });
      }

      // Validate payment amount matches order requirement
      if (paymentEntity?.amount && paymentEntity.amount !== order.amount) {
        console.error(`Amount mismatch: expected ${order.amount}, received ${paymentEntity.amount}`);
        order.status = 'failed';
        saveOrder(order);
        return NextResponse.json({ error: 'Amount mismatch' }, { status: 400 });
      }

      order.status = 'paid';
      order.razorpayPaymentId = paymentEntity?.id || 'webhook_captured';
      order.paidAt = new Date().toISOString();
      saveOrder(order);

      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      const a4Token = generateDownloadToken(order.id, 'a4', order.customerEmail, 24);
      const letterToken = generateDownloadToken(order.id, 'letter', order.customerEmail, 24);

      const downloadLinks = {
        a4: order.format === 'letter' ? undefined : `${baseUrl}/api/download?token=${a4Token}`,
        letter: order.format === 'a4' ? undefined : `${baseUrl}/api/download?token=${letterToken}`,
      };

      await sendOrderConfirmationEmail({
        to: order.customerEmail,
        order,
        downloadLinks,
      });

      return NextResponse.json({ received: true, success: true });
    }

    return NextResponse.json({ received: true, event: event.event });
  } catch (err: any) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 'Webhook processing error' }, { status: 500 });
  }
}
