'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Download, Sparkles, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenCheckout?: () => void;
}

export function Pricing({ onOpenCheckout }: PricingProps) {
  const inclusions = [
    'Complete 22-page illustrated digital workbook',
    'ISO A4 printable PDF format (standard international)',
    'US Letter printable PDF format (North America)',
    'Interactive fillable PDF version (type directly on tablet/computer)',
    'The Three Golden Rules & 30-second decision protocol',
    'Room-by-room daily action checklists (Days 01–14)',
    'Habit streak tracker & 30-day maintenance system',
    'Room layout planning dot grid & Needs vs. Wants matrix',
    'Official Milestone Completion Certificate',
    'Lifetime personal access & unlimited future reprint rights',
  ];

  return (
    <section id="pricing" className="py-24 bg-[#EAE3D6]/30 border-y border-[#EAE3D6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#586B4D] uppercase">
            TRANSPARENT VALUE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292A26] font-normal leading-tight">
            One simple investment for a{' '}
            <span className="italic font-medium text-[#586B4D]">calmer everyday life.</span>
          </h2>
          <p className="font-sans text-base text-[#77766F] leading-relaxed max-w-xl mx-auto">
            No subscriptions. No hidden upgrades. Just a thoughtfully designed, permanent system you can reprint and return to whenever your home needs a reset.
          </p>
        </div>

        {/* Centered Pricing Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white border-2 border-[#899A7E]/50 p-8 sm:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-6">
              <div>
                <span className="text-xs font-mono font-semibold tracking-wider text-[#586B4D] uppercase">
                  INTRODUCTORY LAUNCH OFFER
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#292A26] font-normal pt-1">
                  The 14-Day Home Reset Kit
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E9EEE5] flex items-center justify-center text-[#586B4D]">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Price Presentation */}
            <div className="py-8 border-b border-[#EAE3D6] space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl sm:text-6xl text-[#292A26] font-semibold">
                  ₹299
                </span>
                <span className="text-sm font-sans text-[#77766F]">
                  / one-time payment
                </span>
              </div>
              <p className="text-xs font-sans text-[#586B4D] flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#899A7E]" />
                <span>Instant digital access • No recurring charges ever</span>
              </p>
            </div>

            {/* Inclusions Checklist */}
            <div className="py-8 space-y-3.5">
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#586B4D]">
                WHAT YOU WILL RECEIVE:
              </h4>
              <ul className="space-y-2.5">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#292A26]">
                    <div className="w-4 h-4 rounded-full bg-[#E9EEE5] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#586B4D]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase CTA */}
            <div className="space-y-4 pt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 rounded-full bg-[#586B4D] text-[#FAF8F2] font-sans font-medium text-sm tracking-wide shadow-md hover:bg-[#47573e] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get Instant Access Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-sans text-[#77766F]">
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-[#899A7E]" /> Direct PDF Download
                </span>
                <span>•</span>
                <span>Print At Home</span>
                <span>•</span>
                <span>Secure Checkout</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
