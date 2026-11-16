'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkle, RefreshCw, Layers } from 'lucide-react';

export function ProblemSection() {
  const problemCards = [
    {
      icon: Brain,
      tag: 'DECISION FATIGUE',
      title: 'Unfinished Decisions',
      description:
        'Clutter isn’t just things lying around. Every unmade decision on a counter or table silently drains your daily mental bandwidth.',
    },
    {
      icon: RefreshCw,
      tag: 'THE OVERWHELM CYCLE',
      title: 'The Weekend Reset Trap',
      description:
        'Spending an entire exhausting Saturday cleaning only to watch rooms revert back by Wednesday leads to frustration and declutter burnout.',
    },
    {
      icon: Layers,
      tag: 'COMPLEX ORGANIZERS',
      title: 'Overcomplicated Systems',
      description:
        'You don’t need an aesthetic pantry overhaul or hundreds of dollars in plastic acrylic bins. You need a calm, repeatable sorting habit.',
    },
  ];

  return (
    <section id="overview" className="py-24 bg-[#EAE3D6]/30 border-y border-[#EAE3D6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#586B4D] uppercase">
            A NEW PERSPECTIVE ON DECLUTTERING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292A26] font-normal leading-tight">
            Your home should restore you,{' '}
            <span className="italic font-medium text-[#586B4D]">not overwhelm you.</span>
          </h2>
          <p className="font-sans text-base text-[#77766F] leading-relaxed max-w-2xl mx-auto pt-2">
            Clutter isn’t a personal failure. It is the natural accumulation of busy life without a simple boundary system. You don’t need another exhausting cleaning routine. You need a gentle system that helps you make progress consistently.
          </p>
        </div>

        {/* 3 Concise Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#EAE3D6] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#899A7E]/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#E9EEE5] flex items-center justify-center text-[#586B4D] group-hover:bg-[#586B4D] group-hover:text-[#FAF8F2] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-[#77766F] uppercase">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#292A26] font-normal group-hover:text-[#586B4D] transition-colors">
                    {card.title}
                  </h3>

                  <p className="font-sans text-sm text-[#77766F] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE3D6]/60 flex items-center gap-2 text-xs font-sans text-[#586B4D] font-medium">
                  <Sparkle className="w-3.5 h-3.5 text-[#899A7E]" />
                  <span>Solved in The 14-Day Reset</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
