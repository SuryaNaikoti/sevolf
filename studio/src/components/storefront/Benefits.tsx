'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Home, Boxes, FileCheck } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: '30–60 Minute Sessions',
      subtitle: 'Designed for Real Schedules',
      description:
        'Every task is strictly time-bounded. When your timer rings, you stop. This eliminates the dreaded all-day exhaustion of traditional weekend cleaning marathons.',
    },
    {
      icon: Home,
      title: 'Room-by-Room Clarity',
      subtitle: 'One Micro-Zone at a Time',
      description:
        'Instead of pulling apart your entire home simultaneously, you work through one isolated threshold, cabinet, or closet so life remains functional throughout.',
    },
    {
      icon: Boxes,
      title: 'Zero Organizer Upgrades Required',
      subtitle: 'Use What You Already Own',
      description:
        'Decluttering comes before organizing. You will never be asked to purchase expensive acrylic bins or matching baskets to achieve peace in your space.',
    },
    {
      icon: FileCheck,
      title: 'Practical Printable Worksheets',
      subtitle: 'Tactile Checkboxes & Reflection Logs',
      description:
        'Engineered with generous writing lines, dot grids, and satisfaction tallies so you can unplug from screens and enjoy the tangible feel of pencil on paper.',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#586B4D] uppercase">
            WHY IT FEELS DIFFERENT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292A26] font-normal leading-tight">
            Designed for life,{' '}
            <span className="italic font-medium text-[#586B4D]">not magazine perfection.</span>
          </h2>
          <p className="font-sans text-base text-[#77766F] leading-relaxed max-w-2xl mx-auto">
            You don&apos;t need a perfect home. You need a home that works better for you and restores your peace every time you walk through the front door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-[#EAE3D6] hover:border-[#899A7E] transition-all flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E9EEE5] flex items-center justify-center text-[#586B4D]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#899A7E] font-medium">
                      {b.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-[#292A26] font-normal pt-1">
                      {b.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-[#77766F] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
