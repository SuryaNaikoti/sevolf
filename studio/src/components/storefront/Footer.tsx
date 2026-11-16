'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#292A26] text-[#FAF8F2] pt-16 pb-12 border-t border-[#3d3f39]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3d3f39]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-[#FAF8F2] uppercase">
                SELVOF
              </span>
              <span className="text-[10px] tracking-[0.2em] font-sans uppercase font-medium text-[#899A7E] border-l border-[#3d3f39] pl-2.5">
                Living Systems
              </span>
            </div>
            <p className="font-sans text-xs text-[#899A7E] max-w-sm leading-relaxed">
              Thoughtful printable lifestyle systems and intentional digital tools for everyday calm, decluttering clarity, and mindful living.
            </p>
            <div className="text-[11px] font-sans text-[#77766F] pt-2">
              Designed with Scandinavian minimalism and Japandi interior aesthetics.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#FAF8F2]">
              THE 14-DAY RESET
            </h5>
            <ul className="space-y-2 text-xs font-sans text-[#899A7E]">
              <li>
                <a href="#overview" className="hover:text-[#FAF8F2] transition-colors">
                  Overview & Philosophy
                </a>
              </li>
              <li>
                <a href="#whats-inside" className="hover:text-[#FAF8F2] transition-colors">
                  What&apos;s Included (22 Pages)
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#FAF8F2] transition-colors">
                  The 3-Phase Method
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FAF8F2] transition-colors">
                  Sample Page Previews
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#FAF8F2] transition-colors">
                  Pricing (₹299)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FAF8F2] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Intentional Living Editorial Note */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#FAF8F2]">
              INTENTIONAL SPACES
            </h5>
            <p className="text-xs font-sans text-[#899A7E] leading-relaxed">
              We design structured lifestyle workbooks to help people cultivate calm, decluttered surroundings through manageable, bite-sized daily rituals.
            </p>
            <div className="pt-2 text-[11px] font-sans text-[#77766F]">
              Direct support: <span className="text-[#FAF8F2]">support@selvof.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-[#77766F]">
          <div>
            © 2026 SELVOF Living Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#FAF8F2] cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span>•</span>
            <span className="hover:text-[#FAF8F2] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-[#FAF8F2] cursor-pointer transition-colors">
              Digital Download License
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
