import Razorpay from 'razorpay';
import crypto from 'crypto';

const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_51HomeResetDevKey';
const key_secret = process.env.RAZORPAY_KEY_SECRET || 'selvof_dev_secret_key_mock_3092849182';

export const razorpayClient = new Razorpay({
  key_id,
  key_secret,
});

/**
 * Verifies Razorpay payment signature
 * generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret)
 */
export function verifyRazorpaySignature(orderId: string, paymentId: string, signature: string): boolean {
  try {
    const text = `${orderId}|${paymentId}`;
    const expectedSignature = crypto
      .createHmac('sha256', key_secret)
      .update(text)
      .digest('hex');

    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSignature);

    if (sigBuf.length !== expectedBuf.length) return false;
    return crypto.timingSafeEqual(sigBuf, expectedBuf);
  } catch (err) {
    console.error('Signature verification error:', err);
    return false;
  }
}

/**
 * Verifies Razorpay webhook signature
 */
export function verifyWebhookSignature(body: string, webhookSignature: string): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET || 'selvof_webhook_secret_verification_8849';
  try {
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex');

    const sigBuf = Buffer.from(webhookSignature);
    const expectedBuf = Buffer.from(expectedSignature);

    if (sigBuf.length !== expectedBuf.length) return false;
    return crypto.timingSafeEqual(sigBuf, expectedBuf);
  } catch (err) {
    console.error('Webhook signature verification error:', err);
    return false;
  }
}
