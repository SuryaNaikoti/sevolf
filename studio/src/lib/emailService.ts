import { Order } from '@/types/orders';

export interface EmailDeliveryPayload {
  to: string;
  order: Order;
  downloadLinks: {
    a4?: string;
    letter?: string;
  };
}

export async function sendOrderConfirmationEmail(payload: EmailDeliveryPayload): Promise<{ success: boolean; id?: string }> {
  const { to, order, downloadLinks } = payload;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  console.log('---------------------------------------------------------');
  console.log(`[EMAIL DISPATCH] To: ${to}`);
  console.log(`[EMAIL DISPATCH] Subject: Your SELVOF 14-Day Home Reset Kit (Order #${order.id})`);
  console.log(`[EMAIL DISPATCH] Amount: ₹${(order.amount / 100).toFixed(2)} ${order.currency}`);
  console.log(`[EMAIL DISPATCH] Format: ${order.format.toUpperCase()}`);
  if (downloadLinks.a4) {
    console.log(`[EMAIL DISPATCH] A4 Download URL: ${downloadLinks.a4}`);
  }
  if (downloadLinks.letter) {
    console.log(`[EMAIL DISPATCH] US Letter Download URL: ${downloadLinks.letter}`);
  }
  console.log('---------------------------------------------------------');

  // In production, wire to Resend, SendGrid, Amazon SES or standard SMTP:
  // e.g. await resend.emails.send({ ... })

  return { success: true, id: `msg_${Date.now()}` };
}
