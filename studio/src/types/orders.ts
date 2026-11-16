export type OrderStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type PdfFormatChoice = 'both' | 'a4' | 'letter';

export interface Order {
  id: string; // Internal unique order ID (e.g. order_selvof_xxx)
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  customerEmail: string;
  productId: string;
  productTitle: string;
  amount: number; // in paise (e.g. 29900 for ₹299)
  currency: string; // 'INR'
  status: OrderStatus;
  format: PdfFormatChoice;
  createdAt: string; // ISO 8601
  paidAt?: string;
  downloadCount: {
    a4: number;
    letter: number;
    both: number;
  };
  lastDownloadedAt?: string;
}

export interface ProductCatalogItem {
  id: string;
  title: string;
  subtitle: string;
  pricePaise: number; // 29900 = ₹299
  currency: string;
}

export const SELVOF_PRODUCTS: Record<string, ProductCatalogItem> = {
  'selvof-home-reset-kit-v1': {
    id: 'selvof-home-reset-kit-v1',
    title: 'The 14-Day Home Reset Kit',
    subtitle: '22-Page Illustrated Printable & Fillable PDF Workbook',
    pricePaise: 29900, // ₹299
    currency: 'INR',
  },
};
