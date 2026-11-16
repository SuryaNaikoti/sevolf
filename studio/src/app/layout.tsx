import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'SELVOF Digital Product Studio',
  description: 'Internal digital-product production studio for SELVOF print-ready lifestyle workbooks, planners, and guides.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#FAF8F5] text-[#232321] min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
