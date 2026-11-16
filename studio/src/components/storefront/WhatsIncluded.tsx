'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Map,
  Scale,
  Package,
  CheckSquare,
  CalendarCheck,
  RefreshCcw,
  Grid,
  Award,
  Sparkles,
} from 'lucide-react';

export function WhatsIncluded() {
  const items = [
    {
      icon: Map,
      page: 'PAGE 04',
      title: '14-Day Master Roadmap',
      desc: 'Complete overview table linking all 14 days, focus areas, 30–60 minute session targets, and completion checkpoints.',
    },
    {
      icon: Scale,
      page: 'PAGE 02',
      title: 'Three Golden Rules of the Reset',
      desc: 'Set strict timers, contain physical scope to one surface, and enforce 30-second decisive sorting to prevent mental fatigue.',
    },
    {
      icon: Package,
      page: 'PAGE 03',
      title: 'Four-Category Sort Protocol',
      desc: 'Keep, Donate/Rehome, Recycle/Dispose, and the signature 30-Day Pause Box for emotional or uncertain possessions.',
    },
    {
      icon: CheckSquare,
      page: 'PAGES 06–19',
      title: 'Daily Action Checklists',
      desc: '14 room-by-room worksheets with illustrated Japandi diagrams, step-by-step culling tasks, micro-zone options, and reflection tallies.',
    },
    {
      icon: CalendarCheck,
      page: 'PAGE 05',
      title: 'Habit Tracker & Intentions',
      desc: 'Daily 14-day tracking grid, streak log, and mindset prompts to cultivate sustainable tidying routines.',
    },
    {
      icon: RefreshCcw,
      page: 'PAGE 20',
      title: '30-Day Maintenance Protocol',
      desc: 'Weekly 15-minute maintenance rhythm, seasonal checklist, and prevention rules to ensure your rooms never revert to clutter.',
    },
    {
      icon: Grid,
      page: 'PAGE 21',
      title: 'Room Planning Worksheet',
      desc: 'Needs vs. Wants evaluation table with 30-day cooling-off review dates plus a high-contrast dot grid for floor plan sketching.',
    },
    {
      icon: Award,
      page: 'PAGE 22',
      title: 'Official Completion Certificate',
      desc: 'An elegant editorial certificate with signature, date, and milestone sign-off commemorating your completed 14-day transformation.',
    },
  ];

  return (
    <section id="whats-inside" className="py-24 bg-[#EAE3D6]/25 border-y border-[#EAE3D6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#586B4D] uppercase">
            COMPREHENSIVE 22-PAGE WORKBOOK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292A26] font-normal leading-tight">
            Everything inside your{' '}
            <span className="italic font-medium text-[#586B4D]">Home Reset Kit.</span>
          </h2>
          <p className="font-sans text-base text-[#77766F] leading-relaxed max-w-2xl mx-auto">
            Every page is intentionally designed to guide you step-by-step through a calm, manageable decluttering process with zero fluff or wasted space.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white border border-[#EAE3D6] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#899A7E] transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#E9EEE5] flex items-center justify-center text-[#586B4D] group-hover:bg-[#586B4D] group-hover:text-[#FAF8F2] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-[#899A7E] uppercase bg-[#FAF8F2] border border-[#EAE3D6] px-2 py-0.5 rounded-full">
                      {item.page}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#292A26] font-medium leading-snug group-hover:text-[#586B4D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#77766F] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAE3D6]/60 flex items-center gap-1.5 text-[11px] font-sans text-[#586B4D]">
                  <Sparkles className="w-3 h-3 text-[#899A7E]" />
                  <span>Printable & Fillable</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
