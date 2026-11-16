'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

export function ProductGallery() {
  const [activeFormat, setActiveFormat] = useState<'a4' | 'letter'>('a4');
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  // Showcase 8 key representative pages from the actual 22 pages
  const previewPages = [
    { pageNum: 1, title: 'Page 01 — Illustrated Cover', tag: 'COVER & IDENTITY' },
    { pageNum: 2, title: 'Page 02 — Three Golden Rules & Timer Flow', tag: 'FOUNDATIONS' },
    { pageNum: 3, title: 'Page 03 — Four-Category Sort Protocol', tag: 'DECISION METHOD' },
    { pageNum: 4, title: 'Page 04 — 14-Day Master Roadmap', tag: 'OVERVIEW SCHEDULE' },
    { pageNum: 6, title: 'Page 06 — Day 01: Entryway & Landing Strip', tag: 'DAILY ACTION GUIDE' },
    { pageNum: 8, title: 'Page 08 — Day 03: Curating Books & Paper Traps', tag: 'PAPER BOUNDARY' },
    { pageNum: 16, title: 'Page 16 — Day 11: Personal Care & Vanity Audit', tag: 'WELLNESS AUDIT' },
    { pageNum: 21, title: 'Page 21 — Room Planning & Dot Grid Worksheet', tag: 'FUTURE PLANNING' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#EAE3D6]/25 border-y border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#586B4D] uppercase">
              ACTUAL WORKBOOK PAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292A26] font-normal leading-tight">
              A peek inside the{' '}
              <span className="italic font-medium text-[#586B4D]">22-page workbook.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#77766F] leading-relaxed">
              Every page is designed with clean typography, generous writing spaces, Japandi room illustrations, and structured checklists. Click any page to inspect.
            </p>
          </div>

          {/* Format Switcher Pill */}
          <div className="flex items-center gap-2 bg-white border border-[#EAE3D6] p-1.5 rounded-full shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveFormat('a4')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                activeFormat === 'a4'
                  ? 'bg-[#586B4D] text-[#FAF8F2] shadow-xs'
                  : 'text-[#77766F] hover:text-[#292A26]'
              }`}
            >
              ISO A4 Format
            </button>
            <button
              onClick={() => setActiveFormat('letter')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                activeFormat === 'letter'
                  ? 'bg-[#586B4D] text-[#FAF8F2] shadow-xs'
                  : 'text-[#77766F] hover:text-[#292A26]'
              }`}
            >
              US Letter Format
            </button>
          </div>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {previewPages.map((item) => {
            const pageNumStr = String(item.pageNum).padStart(2, '0');
            const imgSrc = `/previews/${activeFormat}/page_${pageNumStr}.png`;

            return (
              <motion.div
                key={item.pageNum}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPage(item.pageNum)}
                className="group cursor-pointer bg-white border border-[#EAE3D6] rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#899A7E] transition-all flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[1/1.414] bg-[#FAF8F2] overflow-hidden border-b border-[#EAE3D6]">
                  <Image
                    src={imgSrc}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-[#292A26]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/95 text-[#586B4D] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-3.5 space-y-1 bg-white">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#899A7E] font-semibold block">
                    {item.tag}
                  </span>
                  <h4 className="text-xs font-sans font-medium text-[#292A26] truncate">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All 22 Pages Included Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#EAE3D6] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E9EEE5] flex items-center justify-center text-[#586B4D] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-sans font-semibold text-[#292A26]">
                All 22 Illustrated Pages Included in Your Download
              </h4>
              <p className="text-xs font-sans text-[#77766F]">
                Receive both ISO A4 and US Letter PDF deliverables upon purchase.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-[#586B4D] bg-[#E9EEE5] px-3 py-1.5 rounded-full border border-[#899A7E]/30 shrink-0">
            22 Pages • High-Res Vector
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#292A26]/80 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
            onClick={() => setSelectedPage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-2xl p-4 sm:p-6 overflow-hidden flex flex-col shadow-2xl border border-[#EAE3D6]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D6]">
                <div>
                  <h3 className="font-serif text-lg text-[#292A26] font-medium">
                    {previewPages.find((p) => p.pageNum === selectedPage)?.title}
                  </h3>
                  <span className="text-[11px] font-sans text-[#77766F]">
                    {activeFormat.toUpperCase()} Format • 100% Vector Print Resolution
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPage(null)}
                  className="p-1.5 rounded-full hover:bg-[#EAE3D6] text-[#77766F] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Image View */}
              <div className="relative flex-1 min-h-[450px] my-4 rounded-xl overflow-hidden bg-[#FAF8F2] border border-[#EAE3D6]">
                <Image
                  src={`/previews/${activeFormat}/page_${String(selectedPage).padStart(2, '0')}.png`}
                  alt={`Workbook Page ${selectedPage}`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-sans text-[#77766F]">
                <span>Use arrows to browse preview samples</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const idx = previewPages.findIndex((p) => p.pageNum === selectedPage);
                      if (idx > 0) setSelectedPage(previewPages[idx - 1].pageNum);
                    }}
                    disabled={previewPages.findIndex((p) => p.pageNum === selectedPage) === 0}
                    className="p-1.5 rounded-lg border border-[#EAE3D6] hover:bg-[#FAF8F2] disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      const idx = previewPages.findIndex((p) => p.pageNum === selectedPage);
                      if (idx < previewPages.length - 1)
                        setSelectedPage(previewPages[idx + 1].pageNum);
                    }}
                    disabled={
                      previewPages.findIndex((p) => p.pageNum === selectedPage) ===
                      previewPages.length - 1
                    }
                    className="p-1.5 rounded-lg border border-[#EAE3D6] hover:bg-[#FAF8F2] disabled:opacity-30"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
