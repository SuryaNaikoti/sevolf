'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Set Your Intention',
      phase: 'PREPARE',
      desc: 'Gather four basic sorting boxes, set your timer for 30–60 minutes, read the Golden Rules, and identify your priority spaces.',
      detail: 'Includes the supplies checklist, 30-day intention prompt, and master roadmap schedule.',
    },
    {
      num: '02',
      title: 'Reset One Space at a Time',
      phase: 'RESET',
      desc: 'Follow the room-by-room daily checklist. Contain your scope to today’s micro-zone, follow the 30-second rule, and log your tally.',
      detail: '14 days broken down into Thresholds (Days 1–3), Sustenance (Days 4–7), and Sanctuaries (Days 8–14).',
    },
    {
      num: '03',
      title: 'Maintain Your Progress',
      phase: 'MAINTAIN',
      desc: 'Implement the 15-minute weekly maintenance rhythm, review the 30-Day Pause Box, and sign your official Completion Certificate.',
      detail: 'Prevents clutter from creeping back and establishes lasting spatial habits.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#586B4D] uppercase">
            A GENTLE, REPEATABLE PROCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292A26] font-normal leading-tight">
            How the 14-Day Reset{' '}
            <span className="italic font-medium text-[#586B4D]">actually works.</span>
          </h2>
          <p className="font-sans text-base text-[#77766F] leading-relaxed max-w-2xl mx-auto">
            No 12-hour marathon cleans. Just three straightforward phases that protect your energy and guarantee tangible momentum.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative p-8 rounded-2xl bg-white border border-[#EAE3D6] shadow-xs flex flex-col justify-between hover:border-[#899A7E] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-4">
                  <span className="font-serif text-4xl text-[#586B4D] font-normal">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#E9EEE5] text-[#586B4D] font-semibold">
                    {step.phase}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#292A26] font-medium pt-1">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-[#77766F] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EAE3D6]/60 text-xs font-sans text-[#292A26] flex items-start gap-2 bg-[#FAF8F2]/60 p-3 rounded-xl border border-[#EAE3D6]/50">
                <CheckCircle2 className="w-4 h-4 text-[#899A7E] shrink-0 mt-0.5" />
                <span>{step.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
