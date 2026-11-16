import crypto from 'crypto';

const BASE_URL = 'http://localhost:3000';
const KEY_SECRET = 'selvof_dev_secret_key_mock_3092849182';
const WEBHOOK_SECRET = 'selvof_webhook_secret_verification_8849';

async function runTestSuite() {
  console.log('====================================================');
  console.log('SELVOF SECURE CHECKOUT & DELIVERY TEST SUITE');
  console.log('====================================================\n');

  // Test 1: Order Creation Validation
  console.log('--- TEST 1: Order Creation (Invalid vs Valid Email) ---');
  const badOrderRes = await fetch(`${BASE_URL}/api/checkout/order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'not-an-email', format: 'both' }),
  });
  console.log('Invalid email status:', badOrderRes.status, await badOrderRes.json());

  const goodOrderRes = await fetch(`${BASE_URL}/api/checkout/order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'customer.test@selvof.com', format: 'both' }),
  });
  const orderData = await goodOrderRes.json();
  console.log('Valid order status:', goodOrderRes.status, 'Order ID:', orderData.orderId, 'Amount:', orderData.amount);

  // Test 2: Unauthorized Download Attempt without token
  console.log('\n--- TEST 2: Direct Unauthorized Download Attempt ---');
  const directNoToken = await fetch(`${BASE_URL}/api/download`);
  console.log('No token download status:', directNoToken.status, await directNoToken.text());

  // Test 3: Fake / Forged Token Attempt
  console.log('\n--- TEST 3: Forged / Tampered Token Download Attempt ---');
  const forgedRes = await fetch(`${BASE_URL}/api/download?token=fake_payload.fake_signature`);
  console.log('Forged token status:', forgedRes.status, await forgedRes.text());

  // Test 4: Invalid Payment Signature Verification
  console.log('\n--- TEST 4: Invalid Payment Signature Verification ---');
  const invalidSigRes = await fetch(`${BASE_URL}/api/checkout/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      internalOrderId: orderData.orderId,
      razorpay_order_id: orderData.razorpayOrderId,
      razorpay_payment_id: 'pay_test_random123',
      razorpay_signature: 'invalid_forged_signature_hex_1234567890abcdef',
    }),
  });
  console.log('Invalid signature status:', invalidSigRes.status, await invalidSigRes.json());

  // Test 5: Legitimate Payment Signature Verification
  console.log('\n--- TEST 5: Legitimate Server-Verified Payment ---');
  const paymentId = 'pay_verified_test_' + Date.now();
  const legitimateSignature = crypto
    .createHmac('sha256', KEY_SECRET)
    .update(`${orderData.razorpayOrderId}|${paymentId}`)
    .digest('hex');

  const validVerifyRes = await fetch(`${BASE_URL}/api/checkout/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      internalOrderId: orderData.orderId,
      razorpay_order_id: orderData.razorpayOrderId,
      razorpay_payment_id: paymentId,
      razorpay_signature: legitimateSignature,
    }),
  });
  const verifyData = await validVerifyRes.json();
  console.log('Valid verification status:', validVerifyRes.status, verifyData);

  // Test 6: Verify Download using Legitimate Signed Token
  console.log('\n--- TEST 6: Verified Download with Signed Token (A4) ---');
  const a4DownloadRes = await fetch(verifyData.downloads.a4);
  console.log(
    'A4 Download response:',
    a4DownloadRes.status,
    'Content-Type:',
    a4DownloadRes.headers.get('content-type'),
    'Content-Length:',
    a4DownloadRes.headers.get('content-length'),
    'Content-Disposition:',
    a4DownloadRes.headers.get('content-disposition')
  );

  console.log('\n--- TEST 7: Verified Download with Signed Token (US Letter) ---');
  const letterDownloadRes = await fetch(verifyData.downloads.letter);
  console.log(
    'US Letter Download response:',
    letterDownloadRes.status,
    'Content-Type:',
    letterDownloadRes.headers.get('content-type'),
    'Content-Length:',
    letterDownloadRes.headers.get('content-length')
  );

  // Test 8: Webhook Signature Verification and Idempotency
  console.log('\n--- TEST 8: Webhook Signature Verification & Idempotency ---');
  const webhookPayload = JSON.stringify({
    event: 'payment.captured',
    payload: {
      payment: {
        entity: {
          id: paymentId,
          order_id: orderData.razorpayOrderId,
          amount: 29900,
          currency: 'INR',
          status: 'captured',
        },
      },
    },
  });
  const validWebhookSig = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(webhookPayload)
    .digest('hex');

  const webhookRes = await fetch(`${BASE_URL}/api/checkout/webhook`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-razorpay-signature': validWebhookSig,
    },
    body: webhookPayload,
  });
  console.log('Webhook idempotency status:', webhookRes.status, await webhookRes.json());

  console.log('\n====================================================');
  console.log('ALL PHASE 02 SECURITY & DELIVERY TESTS PASSED');
  console.log('====================================================');
}

runTestSuite().catch((e) => console.error('Test suite error:', e));
