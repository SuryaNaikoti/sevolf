'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What will I receive?',
      a: 'You will receive a complete 22-page illustrated PDF workbook delivered in high-resolution, print-ready format. We include both international ISO A4 and North American US Letter sizes, along with an interactive digital version that can be filled out on any tablet, iPad (using GoodNotes, Notability, or Apple Books), or computer.',
    },
    {
      q: 'Can I print it at home?',
      a: 'Yes. The workbook is engineered with optimal print margins, neutral ivory/white balance, and high-contrast lines so it prints beautifully on standard home inkjet or laser printers, as well as at local print shops.',
    },
    {
      q: 'Do I need to purchase organizers or storage containers?',
      a: 'No. The entire SELVOF philosophy emphasizes decluttering and spatial containment before considering organizers. You are guided to use everyday household items — basic cardboard boxes, grocery totes, and simple shoe boxes — to complete the entire reset.',
    },
    {
      q: 'How long does each daily task take?',
      a: 'Most sessions are strictly bounded to 30–60 minutes. Every daily page includes a timer guide and micro-zone option (15 minutes) if you have an unusually busy day, ensuring you never experience overwhelm or burnout.',
    },
    {
      q: 'Is this a physical product?',
      a: 'No. This is an instant digital product. No physical item will be shipped, which means zero shipping costs, zero waiting time, and immediate access to your files worldwide.',
    },
    {
      q: 'Will I receive the product immediately?',
      a: 'Yes. The digital download link is delivered automatically on the confirmation screen immediately after successful checkout, as well as sent directly to your email address.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#FAF8F2]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#586B4D] uppercase">
            CLEAR ANSWERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292A26] font-normal leading-tight">
            Frequently asked{' '}
            <span className="italic font-medium text-[#586B4D]">questions.</span>
          </h2>
          <p className="font-sans text-base text-[#77766F] leading-relaxed max-w-xl mx-auto">
            Everything you need to know about The 14-Day Home Reset Kit files, printing, and digital usage.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#EAE3D6] bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F2]/60 transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#292A26] font-medium">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F2] border border-[#EAE3D6] flex items-center justify-center text-[#586B4D] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm font-sans text-[#77766F] leading-relaxed border-t border-[#EAE3D6]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
