'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Compass, Sparkles, HeartHandshake, Home } from 'lucide-react';

interface ProductIntroProps {
  onOpenCheckout?: () => void;
}

export function ProductIntro({ onOpenCheckout }: ProductIntroProps) {
  const pillars = [
    {
      title: 'Phase 1: Thresholds (Days 1–3)',
      desc: 'Entryway, living surfaces, and paper traps — clear high-traffic visual zones first for instant psychological relief.',
    },
    {
      title: 'Phase 2: Sustenance (Days 4–7)',
      desc: 'Kitchen countertops, pantry essentials, refrigerator, and cookware — reset the functional heartbeat of daily meals.',
    },
    {
      title: 'Phase 3: Sanctuaries (Days 8–14)',
      desc: 'Wardrobes, bedside tables, bathrooms, and home workspace — reclaim deeply personal spaces for restorative rest and focus.',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Mockup Inset */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#EAE3D6] bg-white p-3 shadow-lg">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-square">
                <Image
                  src="/images/selvof-hero-mockup.jpg"
                  alt="SELVOF The 14-Day Home Reset Kit Method"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Inset Badge */}
              <div className="p-4 bg-[#FAF8F2] rounded-xl mt-3 border border-[#EAE3D6] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-[#586B4D] uppercase">
                    METHODOLOGY
                  </span>
                  <span className="text-[10px] font-sans text-[#77766F]">
                    22 Full Worksheets
                  </span>
                </div>
                <p className="text-xs font-sans text-[#292A26] leading-relaxed">
                  Engineered with Japandi minimalism: warm ivory backgrounds, natural botanical diagrams, and clear, distraction-free typography.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & 3 Phases */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#586B4D] uppercase">
                THE 14-DAY ARCHITECTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292A26] font-normal leading-tight">
                Introducing The 14-Day{' '}
                <span className="italic font-medium text-[#586B4D]">Home Reset Kit.</span>
              </h2>
              <p className="font-sans text-base text-[#77766F] leading-relaxed">
                A guided room-by-room decluttering system designed to help you reclaim your space through manageable daily sessions. Rather than an overwhelming weekend overhaul, the Kit breaks down your home into three intentional phases.
              </p>
            </div>

            {/* Three Phases Breakdown */}
            <div className="space-y-3.5 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-white border border-[#EAE3D6] hover:border-[#899A7E] transition-colors flex items-start gap-3.5 shadow-xs"
                >
                  <div className="w-7 h-7 rounded-full bg-[#E9EEE5] text-[#586B4D] font-mono font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-[#292A26]">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-sans text-[#77766F] leading-relaxed pt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center gap-4">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#586B4D] text-[#FAF8F2] text-xs font-sans font-medium hover:bg-[#47573e] transition-colors"
              >
                <span>Get Instant Access • ₹299</span>
                <Sparkles className="w-3.5 h-3.5 text-[#E9EEE5]" />
              </button>
              <span className="text-xs font-sans text-[#77766F]">
                Lifetime access to both A4 & US Letter
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
