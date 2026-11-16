'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, ShieldCheck, FileText, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface HeroProps {
  onOpenCheckout?: () => void;
}

export function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F2]">
      {/* Subtle organic background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E9EEE5]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#EAE3D6]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9EEE5] border border-[#899A7E]/30 text-[#586B4D] text-xs font-sans font-medium">
              <span className="w-2 h-2 rounded-full bg-[#586B4D] animate-pulse" />
              <span>Edition No. 04 • Printable & Fillable PDF</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#292A26] font-normal tracking-tight leading-[1.12]">
                A calmer home starts with{' '}
                <span className="italic font-medium text-[#586B4D]">one small step.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#77766F] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transform your home into a more organized, peaceful and intentional space with a simple 14-day guided reset.
              </p>
            </div>

            {/* Reassurance Micro-Copy */}
            <p className="text-xs sm:text-sm text-[#77766F] font-sans border-l-2 border-[#899A7E] pl-3 py-0.5 max-w-lg mx-auto lg:mx-0 italic text-left">
              No overwhelming weekend cleanups. No expensive storage systems. No pressure to make everything perfect. Just practical daily tasks, one space at a time.
            </p>

            {/* Launch Pricing & Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#586B4D] text-[#FAF8F2] font-sans font-medium text-sm tracking-wide shadow-md hover:bg-[#47573e] active:scale-[0.98] transition-all group"
              >
                <span>Get Your Home Reset Kit</span>
                <span className="bg-[#FAF8F2]/20 text-[#FAF8F2] px-2 py-0.5 rounded-full text-xs font-mono">
                  ₹299
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#whats-inside"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#EAE3D6] bg-white/80 text-[#292A26] hover:bg-white hover:border-[#899A7E] text-sm font-sans font-medium transition-all"
              >
                <Layers className="w-4 h-4 text-[#899A7E]" />
                <span>Explore What&apos;s Inside</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-3 border-t border-[#EAE3D6] grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#899A7E] shrink-0" />
                <span className="text-[11.5px] font-sans text-[#77766F]">22-Page Illustrated PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#899A7E] shrink-0" />
                <span className="text-[11.5px] font-sans text-[#77766F]">30–60 Min Daily Tasks</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-[#899A7E] shrink-0" />
                <span className="text-[11.5px] font-sans text-[#77766F]">Instant Digital Download</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Mockup Visual (Using Supplied SELVOF Marketing Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#899A7E]/20 via-[#EAE3D6]/40 to-[#586B4D]/10 blur-xl opacity-70" />

              {/* Mockup Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#EAE3D6] bg-white shadow-xl">
                <Image
                  src="/images/selvof-hero-mockup.jpg"
                  alt="SELVOF The 14-Day Home Reset Kit - Illustrated Printable Workbook and Tablet Edition"
                  width={1400}
                  height={933}
                  priority
                  className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-700 ease-out"
                />

                {/* Floating Highlight Pill Over Image */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#FAF8F2]/95 backdrop-blur-md border border-[#EAE3D6] rounded-xl px-4 py-2.5 shadow-md flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E9EEE5] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#586B4D]" />
                  </div>
                  <div>
                    <div className="text-xs font-sans font-semibold text-[#292A26]">
                      The 14-Day Home Reset Kit
                    </div>
                    <div className="text-[10px] font-sans text-[#77766F]">
                      A4 & US Letter Printables + Fillable Digital PDFs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
