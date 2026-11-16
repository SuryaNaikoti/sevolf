'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCtaProps {
  onOpenCheckout?: () => void;
}

export function FinalCta({ onOpenCheckout }: FinalCtaProps) {
  return (
    <section className="py-24 bg-[#586B4D] text-[#FAF8F2] relative overflow-hidden">
      {/* Decorative organic background aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E9EEE5] text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Today • Instant PDF Download</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15]">
            Your calmer home{' '}
            <span className="italic font-medium text-[#E9EEE5]">begins today.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#E9EEE5]/90 max-w-xl mx-auto leading-relaxed pt-2">
            Give yourself the gift of clarity. One manageable 30–60 minute session at a time, your space will become the peaceful sanctuary you deserve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FAF8F2] text-[#292A26] font-sans font-medium text-sm tracking-wide shadow-lg hover:bg-white active:scale-[0.98] transition-all group"
          >
            <span>Get Your Home Reset Kit</span>
            <span className="bg-[#292A26]/10 text-[#292A26] px-2 py-0.5 rounded-full text-xs font-mono font-semibold">
              ₹299
            </span>
            <ArrowRight className="w-4 h-4 text-[#586B4D] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <p className="text-xs font-sans text-[#E9EEE5]/80 flex items-center justify-center gap-2 pt-2">
          <ShieldCheck className="w-4 h-4 text-[#E9EEE5]" />
          <span>One-time investment • Instant automatic access • No subscriptions</span>
        </p>
      </div>
    </section>
  );
}
