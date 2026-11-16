'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/storefront/Navbar';
import { Hero } from '@/components/storefront/Hero';
import { ProblemSection } from '@/components/storefront/ProblemSection';
import { ProductIntro } from '@/components/storefront/ProductIntro';
import { WhatsIncluded } from '@/components/storefront/WhatsIncluded';
import { HowItWorks } from '@/components/storefront/HowItWorks';
import { ProductGallery } from '@/components/storefront/ProductGallery';
import { Benefits } from '@/components/storefront/Benefits';
import { Pricing } from '@/components/storefront/Pricing';
import { Faq } from '@/components/storefront/Faq';
import { FinalCta } from '@/components/storefront/FinalCta';
import { Footer } from '@/components/storefront/Footer';
import { CheckoutModal } from '@/components/storefront/CheckoutModal';

export default function StorefrontPage() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#292A26] selection:bg-[#E9EEE5] selection:text-[#586B4D]">
      {/* 1. Global Navigation */}
      <Navbar onOpenCheckout={() => setCheckoutOpen(true)} />

      {/* 2. Hero Section */}
      <main>
        <Hero onOpenCheckout={() => setCheckoutOpen(true)} />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Product Introduction */}
        <ProductIntro onOpenCheckout={() => setCheckoutOpen(true)} />

        {/* 5. What's Included (8 Feature Cards) */}
        <WhatsIncluded />

        {/* 6. How It Works (3 Steps) */}
        <HowItWorks />

        {/* 7. Product Gallery (Actual Workbook Previews) */}
        <ProductGallery />

        {/* 8. Benefits */}
        <Benefits />

        {/* 9. Pricing */}
        <Pricing onOpenCheckout={() => setCheckoutOpen(true)} />

        {/* 10. FAQ */}
        <Faq />

        {/* 11. Final CTA */}
        <FinalCta onOpenCheckout={() => setCheckoutOpen(true)} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Modular Checkout Drawer / Modal */}
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
}
