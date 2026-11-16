'use client';

import React from 'react';
import { StudioPage, PageBlock, PageFormat } from '@/types/studio';
import { Check, Star, Sparkles, Clock, Target, Compass, Heart, Trash2, HelpCircle, CheckSquare, Sparkle } from 'lucide-react';
import {
  BotanicalBranch,
  PottedPlant,
  JapandiLivingRoom,
  JapandiEntryway,
  KeepBasketIcon,
  DonateBoxIcon,
  RecycleBinIcon,
  PauseBoxIcon,
  LivingRoomHorizonDiagram,
  BookshelfPaperDiagram,
  KitchenPrepZoneDiagram,
  PantryTieringDiagram,
  FridgeZonesDiagram,
  WardrobeCapsuleDiagram,
  VerticalFileFoldDiagram,
  NightstandSanctuaryDiagram,
  BathroomVanityDiagram,
  LinenClosetDiagram,
  OfficeCableDiagram
} from '@/components/illustrations/Botanicals';

interface PageRendererProps {
  page: StudioPage;
  format?: PageFormat;
  totalPages?: number;
  interactive?: boolean;
  onUpdateBlockData?: (blockId: string, newData: any) => void;
  scale?: number;
}

export const PageRenderer: React.FC<PageRendererProps> = ({
  page,
  format = 'a4',
  totalPages = 22,
  interactive = true,
  onUpdateBlockData,
  scale = 1,
}) => {
  const isA4 = format === 'a4';
  const widthStyle = isA4 ? '210mm' : '8.5in';
  const minHeightStyle = isA4 ? '297mm' : '11in';

  return (
    <div
      id={`page-sheet-${page.id}`}
      data-page-id={page.id}
      data-page-number={page.pageNumber}
      className="page-sheet relative bg-[#FAF8F2] text-[#292A26] transition-shadow duration-200 select-text overflow-hidden flex flex-col justify-between"
      style={{
        width: widthStyle,
        minHeight: minHeightStyle,
        height: minHeightStyle,
        padding: page.isCover ? '0' : '16mm 18mm 14mm 18mm',
        boxSizing: 'border-box',
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: 'top center',
        boxShadow: '0 4px 20px -2px rgba(41, 42, 38, 0.08), 0 2px 6px -1px rgba(41, 42, 38, 0.04)',
      }}
    >
      {/* Decorative Outer Hairline Frame for Editorial Feel */}
      {!page.isCover && (
        <div 
          className="absolute inset-[8mm] border border-[#EAE3D6] pointer-events-none opacity-50" 
          aria-hidden="true" 
        />
      )}

      {/* Running Header */}
      {!page.isCover && (
        <header className="relative z-10 flex items-center justify-between pb-3 border-b border-[#EAE3D6] text-[9px] tracking-[0.22em] uppercase font-sans text-[#77766F]">
          <div className="flex items-center gap-2">
            <BotanicalBranch className="w-3.5 h-3.5" />
            <span>{page.headerText || 'SELVOF STUDIO • LIVING SYSTEMS'}</span>
          </div>
          <div className="text-right tracking-[0.25em] font-medium text-[#899A7E]">
            {page.category || 'WORKBOOK'}
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className={`relative z-10 flex-1 flex flex-col ${page.isCover ? 'h-full' : 'py-4 justify-between'}`}>
        <div className="space-y-4">
          {page.blocks.map((block) => (
            <BlockRenderer
              key={block.id}
              block={block}
              interactive={interactive}
              onUpdateData={(newData) => onUpdateBlockData?.(block.id, newData)}
            />
          ))}
        </div>
      </main>

      {/* Running Footer & Page Numbering */}
      {!page.isCover && (
        <footer className="relative z-10 pt-3 border-t border-[#EAE3D6] flex items-center justify-between text-[9px] tracking-[0.18em] uppercase text-[#77766F]">
          <div className="flex items-center gap-2">
            <span className="font-serif italic text-[#899A7E] text-[11px] lowercase">selvof</span>
            <span>{page.footerText || 'The 14-Day Home Reset Kit'}</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <span className="text-[#899A7E] font-serif italic text-xs lowercase">page</span>
            <span className="font-medium text-[#292A26]">
              {String(page.pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </span>
          </div>
        </footer>
      )}
    </div>
  );
};

// Sub-component for Block Rendering with V1.2.0 Visual Components
const BlockRenderer: React.FC<{
  block: PageBlock;
  interactive: boolean;
  onUpdateData: (newData: any) => void;
}> = ({ block, interactive, onUpdateData }) => {
  switch (block.type) {
    // -------------------------------------------------------------
    // PAGE 01: PREMIUM JAPANDI COVER
    // -------------------------------------------------------------
    case 'cover':
      return (
        <div className="h-full min-h-[297mm] flex flex-col justify-between p-[18mm] relative bg-gradient-to-b from-[#FAF8F2] via-[#F6F1E9] to-[#FAF8F2] text-[#292A26]">
          <div className="absolute inset-[10mm] border-2 border-[#899A7E]/30 pointer-events-none" />
          <div className="absolute inset-[12mm] border border-[#EAE3D6] pointer-events-none" />

          {/* Top Brand Tag & Botanical Flourish */}
          <div className="relative z-10 pt-3 flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <BotanicalBranch className="w-4 h-4 text-[#899A7E]" />
              <span className="text-[13px] font-serif tracking-[0.35em] uppercase text-[#292A26] font-semibold">
                S E L V O F
              </span>
              <BotanicalBranch className="w-4 h-4 text-[#899A7E] scale-x-[-1]" />
            </div>
            <span className="text-[9px] font-sans tracking-[0.28em] uppercase text-[#899A7E]">
              LIVING SYSTEMS • EDITION NO. 04
            </span>
          </div>

          {/* Central Title */}
          <div className="relative z-10 text-center px-4 space-y-3 mt-1">
            <h1 className="font-serif text-5xl md:text-[56px] font-normal tracking-[0.04em] text-[#292A26] leading-[1.08] uppercase">
              The 14-Day<br />Home Reset Kit
            </h1>
            <p className="font-sans text-xs md:text-sm font-light text-[#77766F] max-w-md mx-auto leading-relaxed tracking-wide">
              A Guided 14-Day System for Intentional Space, Decluttering Clarity, and Everyday Calm
            </p>
          </div>

          {/* Centerpiece Japandi Living Room Illustration & 14-Day Badge */}
          <div className="relative z-10 my-auto py-2 flex flex-col items-center">
            <div className="relative w-full max-w-[520px] rounded-xl overflow-hidden border border-[#EAE3D6] bg-white shadow-sm">
              <JapandiLivingRoom className="w-full h-56 md:h-64" />
              {/* Circular Badge */}
              <div className="absolute top-4 right-4 w-18 h-18 rounded-full bg-[#586B4D] text-[#FAF8F2] flex flex-col items-center justify-center shadow-md border-2 border-white text-center p-1.5">
                <span className="font-serif text-xl font-bold leading-none">14</span>
                <span className="text-[8px] tracking-widest uppercase font-sans font-semibold">DAYS</span>
                <span className="text-[6.5px] tracking-tight uppercase opacity-85">TO CALM</span>
              </div>
            </div>
          </div>

          {/* Four Benefit Indicators */}
          <div className="relative z-10 grid grid-cols-4 gap-3 border-y border-[#EAE3D6] py-3.5 text-center">
            <div className="space-y-1.5">
              <div className="w-7 h-7 rounded-full bg-[#E9EEE5] mx-auto flex items-center justify-center text-[#586B4D]">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] font-sans font-semibold uppercase tracking-wider text-[#292A26] block">
                30–60m Tasks
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="w-7 h-7 rounded-full bg-[#E9EEE5] mx-auto flex items-center justify-center text-[#586B4D]">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] font-sans font-semibold uppercase tracking-wider text-[#292A26] block">
                No Relapse
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="w-7 h-7 rounded-full bg-[#E9EEE5] mx-auto flex items-center justify-center text-[#586B4D]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] font-sans font-semibold uppercase tracking-wider text-[#292A26] block">
                Room by Room
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="w-7 h-7 rounded-full bg-[#E9EEE5] mx-auto flex items-center justify-center text-[#586B4D]">
                <Sparkle className="w-4 h-4" />
              </div>
              <span className="text-[9.5px] font-sans font-semibold uppercase tracking-wider text-[#292A26] block">
                Zero Guilt
              </span>
            </div>
          </div>

          {/* Cover Footer */}
          <div className="relative z-10 text-center pt-2 space-y-1">
            <p className="text-[10px] font-sans tracking-[0.22em] uppercase text-[#292A26] font-semibold">
              STUDIO SELVOF • PRINT & DIGITAL EDITION
            </p>
            <p className="text-[8.5px] font-sans tracking-[0.16em] uppercase text-[#899A7E]">
              Format: A4 / US Letter • Print-Ready Illustrated Workbook
            </p>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // PAGE 02: THREE GOLDEN RULES CARDS + TIMER PROCESS
    // -------------------------------------------------------------
    case 'three-rules-cards':
      return (
        <div className="space-y-3.5 my-1">
          {/* 3 Visual Golden Rules Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-full bg-[#E9EEE5] flex items-center justify-center text-[#586B4D]">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#586B4D]">
                1. Set a Strict Timer
              </h4>
              <p className="text-[11px] font-sans text-[#77766F] leading-relaxed">
                Work only for your allotted 30–60 minutes. When your timer chimes, stop immediately. Consistency beats exhaustion.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-full bg-[#E9EEE5] flex items-center justify-center text-[#586B4D]">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#586B4D]">
                2. Contain the Scope
              </h4>
              <p className="text-[11px] font-sans text-[#77766F] leading-relaxed">
                Never pull out more items than you can sort within your session. Do one shelf, one drawer, or one surface at a time.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-full bg-[#E9EEE5] flex items-center justify-center text-[#586B4D]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#586B4D]">
                3. Be Decisive (30s)
              </h4>
              <p className="text-[11px] font-sans text-[#77766F] leading-relaxed">
                If you hesitate over an item for more than 30 seconds, don’t agonize—place it in the 30-Day Pause Box and keep moving.
              </p>
            </div>
          </div>

          {/* Visual 30–60 Minute Session Breakdown Diagram */}
          <div className="p-3 bg-white border border-[#EAE3D6] rounded-xl shadow-xs">
            <span className="text-[9px] font-sans font-semibold tracking-[0.2em] uppercase text-[#586B4D] block mb-2">
              HOW THE 30–60 MINUTE DAILY SESSION WORKS
            </span>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2 bg-[#FAF8F2] rounded-lg border border-[#EAE3D6]">
                <span className="text-[10px] font-mono font-bold text-[#899A7E] block">00–05 MIN</span>
                <span className="text-[10px] font-medium text-[#292A26] block">Stage Supplies</span>
                <span className="text-[8.5px] text-[#77766F] block">4 boxes & bags</span>
              </div>
              <div className="p-2 bg-[#FAF8F2] rounded-lg border border-[#EAE3D6]">
                <span className="text-[10px] font-mono font-bold text-[#899A7E] block">05–35 MIN</span>
                <span className="text-[10px] font-medium text-[#292A26] block">Sort & Filter</span>
                <span className="text-[8.5px] text-[#77766F] block">Touch each item once</span>
              </div>
              <div className="p-2 bg-[#FAF8F2] rounded-lg border border-[#EAE3D6]">
                <span className="text-[10px] font-mono font-bold text-[#899A7E] block">35–50 MIN</span>
                <span className="text-[10px] font-medium text-[#292A26] block">Wipe & Return</span>
                <span className="text-[8.5px] text-[#77766F] block">Clean surfaces</span>
              </div>
              <div className="p-2 bg-[#E9EEE5] rounded-lg border border-[#899A7E]/30 text-[#586B4D]">
                <span className="text-[10px] font-mono font-bold block">50–60 MIN</span>
                <span className="text-[10px] font-semibold block">Log & Celebrate</span>
                <span className="text-[8.5px] block">Check off Page 05</span>
              </div>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // PAGE 03: FOUR-CATEGORY SORT CARDS
    // -------------------------------------------------------------
    case 'four-sort-cards':
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 my-2">
          {/* Card 1: KEEP */}
          <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl flex flex-col items-center text-center space-y-2 shadow-xs">
            <KeepBasketIcon className="w-12 h-12 mt-1" />
            <h4 className="text-xs font-sans font-bold tracking-wider uppercase text-[#586B4D]">
              1. KEEP
            </h4>
            <p className="text-[10.5px] text-[#77766F] leading-relaxed">
              Actively used in past 6 months. Brings utility or genuine joy. Has an assigned permanent home.
            </p>
          </div>

          {/* Card 2: DONATE / REHOME */}
          <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl flex flex-col items-center text-center space-y-2 shadow-xs">
            <DonateBoxIcon className="w-12 h-12 mt-1" />
            <h4 className="text-xs font-sans font-bold tracking-wider uppercase text-[#586B4D]">
              2. DONATE
            </h4>
            <p className="text-[10.5px] text-[#77766F] leading-relaxed">
              Good condition, but no longer serving your current life phase. Ready for gift, charity, or consignment.
            </p>
          </div>

          {/* Card 3: RECYCLE / DISPOSE */}
          <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl flex flex-col items-center text-center space-y-2 shadow-xs">
            <RecycleBinIcon className="w-12 h-12 mt-1" />
            <h4 className="text-xs font-sans font-bold tracking-wider uppercase text-[#586B4D]">
              3. RECYCLE
            </h4>
            <p className="text-[10.5px] text-[#77766F] leading-relaxed">
              Broken beyond repair. Expired cosmetics, medicines, and outdated paper records. Safe disposal.
            </p>
          </div>

          {/* Card 4: 30-DAY PAUSE BOX */}
          <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl flex flex-col items-center text-center space-y-2 shadow-xs">
            <PauseBoxIcon className="w-12 h-12 mt-1" />
            <h4 className="text-xs font-sans font-bold tracking-wider uppercase text-[#586B4D]">
              4. PAUSE BOX
            </h4>
            <p className="text-[10.5px] text-[#77766F] leading-relaxed">
              For sentimental hesitation. Tape shut with 30-day date. If unopened, donate without regret.
            </p>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // PAGE 04: EDITORIAL TIMELINE ROADMAP
    // -------------------------------------------------------------
    case 'visual-roadmap-timeline':
      return (
        <div className="space-y-3.5 my-1">
          {/* 3 Phase Badges Bar */}
          <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
            <div className="p-2.5 bg-[#E9EEE5] rounded-lg border border-[#899A7E]/30 text-[#586B4D]">
              <span className="font-serif font-bold text-base block">Phase 1</span>
              <span className="text-[9.5px] uppercase tracking-wider font-sans font-medium">Thresholds (Days 1–3)</span>
            </div>
            <div className="p-2.5 bg-[#EAE3D6] rounded-lg border border-[#D3C9B8] text-[#292A26]">
              <span className="font-serif font-bold text-base block">Phase 2</span>
              <span className="text-[9.5px] uppercase tracking-wider font-sans font-medium">Sustenance (Days 4–7)</span>
            </div>
            <div className="p-2.5 bg-[#E9EEE5] rounded-lg border border-[#899A7E]/30 text-[#586B4D]">
              <span className="font-serif font-bold text-base block">Phase 3</span>
              <span className="text-[9.5px] uppercase tracking-wider font-sans font-medium">Sanctuaries (Days 8–14)</span>
            </div>
          </div>

          {/* Visual 14-Day Timeline Grid */}
          <div className="border border-[#EAE3D6] rounded-xl overflow-hidden bg-white shadow-xs">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#E9EEE5]/70 border-b border-[#EAE3D6] text-[9.5px] uppercase tracking-[0.16em] text-[#586B4D]">
                <tr>
                  <th className="p-2.5 font-semibold w-18">Day</th>
                  <th className="p-2.5 font-semibold">Phase</th>
                  <th className="p-2.5 font-semibold">Zone / Task Focus</th>
                  <th className="p-2.5 font-semibold w-20 text-center">Target Time</th>
                  <th className="p-2.5 font-semibold w-14 text-center">Done</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE3D6]/70 text-[11px]">
                {block.data.rows?.map((row: any, rIdx: number) => (
                  <tr key={rIdx} className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="p-2.5 font-mono font-medium text-[#899A7E]">{row[0]}</td>
                    <td className="p-2.5 text-[10.5px] text-[#77766F]">{row[1]}</td>
                    <td className="p-2.5 text-[#292A26] font-medium">{row[2]}</td>
                    <td className="p-2.5 text-center font-mono text-[10.5px] text-[#77766F]">{row[3]}</td>
                    <td className="p-2.5 text-center">
                      <div className="w-4 h-4 rounded border border-[#899A7E] mx-auto bg-[#FAF8F2] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-[#899A7E] opacity-40" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // PAGE 06: DAY 01 ILLUSTRATED ACTION PANEL + 3-STEP FLOW
    // -------------------------------------------------------------
    case 'daily-action-panel':
      return (
        <div className="space-y-3.5 my-1">
          {/* Header Row with Japandi Entryway Illustration & Goal Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 items-center">
            <div className="rounded-xl overflow-hidden border border-[#EAE3D6] bg-white shadow-xs">
              <JapandiEntryway className="w-full h-44" />
            </div>

            <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl space-y-3 flex flex-col justify-between h-full shadow-xs">
              <div>
                <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-2">
                  <span className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-[#586B4D]">
                    TODAY'S MISSION
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#E9EEE5] text-[#586B4D] font-mono text-[10px] font-semibold">
                    ⏱ 45 MIN
                  </span>
                </div>
                <p className="text-xs font-sans text-[#292A26] pt-2 leading-relaxed">
                  Clear transit bottlenecks at the front door to create a welcoming, instant feeling of calm upon arriving home.
                </p>
              </div>

              {/* Micro-Zone Callout */}
              <div className="p-2.5 bg-[#EAE3D6]/40 border border-[#D3C9B8] rounded-lg text-[10.5px] text-[#77766F]">
                <strong className="text-[#586B4D] font-medium">⚡ Micro-Zone Option (15 min):</strong> If short on time, focus exclusively on the coat hooks and shoes today.
              </div>
            </div>
          </div>

          {/* 3-Step Action Sequence Indicator */}
          <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
            <div className="p-2 bg-white rounded-lg border border-[#EAE3D6] shadow-xs">
              <span className="text-[10px] font-bold text-[#899A7E] font-mono block">STEP 1</span>
              <span className="text-[10.5px] font-medium text-[#292A26]">Empty Hooks & Rack</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-[#EAE3D6] shadow-xs">
              <span className="text-[10px] font-bold text-[#899A7E] font-mono block">STEP 2</span>
              <span className="text-[10.5px] font-medium text-[#292A26]">Cull Key & Mail Tray</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-[#EAE3D6] shadow-xs">
              <span className="text-[10px] font-bold text-[#899A7E] font-mono block">STEP 3</span>
              <span className="text-[10.5px] font-medium text-[#292A26]">Wipe Mat & Handle</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // PAGE 21: ROOM PLANNING WORKSHEET
    // -------------------------------------------------------------
    case 'room-planning-worksheet':
      return (
        <div className="space-y-4 my-1">
          {/* Needs vs Wants Table */}
          <div className="p-3.5 bg-white border border-[#EAE3D6] rounded-xl space-y-2.5 shadow-xs">
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#586B4D] flex items-center justify-between">
              <span>Needs vs. Wants Evaluation Table</span>
              <span className="text-[9.5px] font-normal text-[#77766F]">30-Day Cooling Off Filter</span>
            </h4>
            <div className="border border-[#EAE3D6] rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-[#E9EEE5]/70 text-[9.5px] uppercase tracking-wider text-[#586B4D] border-b border-[#EAE3D6]">
                  <tr>
                    <th className="p-2.5">Item / Enhancement Idea</th>
                    <th className="p-2.5">Zone</th>
                    <th className="p-2.5">Need or Want?</th>
                    <th className="p-2.5">30-Day Review Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE3D6]/70 text-[11px]">
                  <tr className="hover:bg-[#FAF8F2]">
                    <td className="p-2.5 text-[#77766F] italic">Example: Slim entryway bench</td>
                    <td className="p-2.5 text-[#77766F]">Entryway</td>
                    <td className="p-2.5 text-[#586B4D] font-medium">Need (functional)</td>
                    <td className="p-2.5 text-[#77766F] font-mono">Check in 30 days</td>
                  </tr>
                  {Array.from({ length: 3 }).map((_, rIdx) => (
                    <tr key={rIdx} className="hover:bg-[#FAF8F2]">
                      <td className="p-2.5">__________________________</td>
                      <td className="p-2.5">____________</td>
                      <td className="p-2.5 text-[#77766F]">Need / Want</td>
                      <td className="p-2.5 font-mono text-[10px]">____ / ____ / ______</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Room Sketch Dot Grid (Cleaned & High-Contrast Inline SVG for Reliable Print/PDF Rendering) */}
          <div className="p-4 bg-white border border-[#EAE3D6] rounded-xl space-y-2.5 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-2">
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#586B4D]">
                Room Layout & Dimensions Sketch Grid
              </h4>
              <span className="text-[9.5px] text-[#77766F] font-mono">1 square = 1 foot scale • Sketch floor plan or furniture layout</span>
            </div>
            {/* 100% Unobstructed Usable Sketching Area with Inline SVG Dot Grid */}
            <div className="w-full h-64 rounded-lg border-2 border-dashed border-[#899A7E]/60 bg-[#FAF8F2]/90 p-2 overflow-hidden relative">
              <svg
                className="w-full h-full block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="room-sketch-dot-grid"
                    width="18"
                    height="18"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="9"
                      cy="9"
                      r="1.4"
                      fill="#899A7E"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#room-sketch-dot-grid)" />
              </svg>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // DAILY INSTRUCTIONAL DIAGRAMS (PAGES 07–20)
    // -------------------------------------------------------------
    case 'instructional-diagram': {
      const diagramType = block.data.diagram;
      return (
        <div className="my-2 rounded-xl overflow-hidden border border-[#EAE3D6] bg-white shadow-xs p-1">
          {diagramType === 'living-room-horizon' && <LivingRoomHorizonDiagram className="w-full h-24" />}
          {diagramType === 'bookshelf-paper' && <BookshelfPaperDiagram className="w-full h-24" />}
          {diagramType === 'kitchen-prep-zones' && <KitchenPrepZoneDiagram className="w-full h-24" />}
          {diagramType === 'pantry-tiering' && <PantryTieringDiagram className="w-full h-24" />}
          {diagramType === 'fridge-zones' && <FridgeZonesDiagram className="w-full h-24" />}
          {diagramType === 'wardrobe-capsule' && <WardrobeCapsuleDiagram className="w-full h-24" />}
          {diagramType === 'vertical-file-fold' && <VerticalFileFoldDiagram className="w-full h-24" />}
          {diagramType === 'nightstand-sanctuary' && <NightstandSanctuaryDiagram className="w-full h-24" />}
          {diagramType === 'bathroom-vanity' && <BathroomVanityDiagram className="w-full h-24" />}
          {diagramType === 'linen-closet' && <LinenClosetDiagram className="w-full h-24" />}
          {diagramType === 'office-cable' && <OfficeCableDiagram className="w-full h-24" />}
        </div>
      );
    }

    // -------------------------------------------------------------
    // EXISTING STANDARD EDITORIAL BLOCKS
    // -------------------------------------------------------------
    case 'section-title':
      return (
        <div className="space-y-1 border-b border-[#EAE3D6] pb-2.5">
          {block.data.eyebrow && (
            <span className="text-[9px] font-sans font-semibold tracking-[0.24em] text-[#899A7E] uppercase block">
              {block.data.eyebrow}
            </span>
          )}
          <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#292A26] tracking-tight">
            {block.data.title}
          </h2>
          {block.data.description && (
            <p className="text-[11px] font-sans text-[#77766F] leading-relaxed max-w-2xl">
              {block.data.description}
            </p>
          )}
        </div>
      );

    case 'quote':
      return (
        <div className="my-2 p-4 bg-[#E9EEE5]/50 border-l-2 border-[#899A7E] rounded-r-md">
          <p className="font-serif italic text-base text-[#292A26] leading-snug">
            {block.data.quote}
          </p>
          {block.data.author && (
            <p className="text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-[#586B4D] mt-1.5">
              — {block.data.author}
            </p>
          )}
        </div>
      );

    case 'paragraph':
      return (
        <p className="text-xs font-sans text-[#77766F] leading-relaxed">
          {block.data.content}
        </p>
      );

    case 'checklist':
      return (
        <div className="space-y-2 my-2">
          {block.data.items?.map((item: any, idx: number) => (
            <div
              key={idx}
              onClick={() => {
                if (!interactive) return;
                const newItems = [...block.data.items];
                newItems[idx] = { ...item, checked: !item.checked };
                onUpdateData({ ...block.data, items: newItems });
              }}
              className={`flex items-start gap-2.5 p-2 rounded border transition-colors ${
                interactive ? 'cursor-pointer hover:bg-white' : ''
              } ${item.checked ? 'bg-[#E9EEE5]/50 border-[#899A7E]/40' : 'bg-white/60 border-[#EAE3D6]'}`}
            >
              <div
                className={`w-3.5 h-3.5 mt-0.5 rounded flex items-center justify-center border transition-all ${
                  item.checked
                    ? 'bg-[#899A7E] border-[#899A7E] text-white'
                    : 'border-[#77766F]/50 bg-white'
                }`}
              >
                {item.checked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </div>
              <span
                className={`text-xs font-sans leading-relaxed flex-1 select-none ${
                  item.checked ? 'text-[#77766F] line-through' : 'text-[#292A26]'
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      );

    case 'prompt-box':
      return (
        <div className="p-3.5 bg-white border border-[#EAE3D6] rounded-md space-y-1.5 my-2 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-1">
            <h4 className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#586B4D]">
              {block.data.title}
            </h4>
            <span className="text-[8px] uppercase tracking-wider text-[#899A7E]">Reflection & Sign-off</span>
          </div>
          <p className="text-[11px] font-sans text-[#292A26] italic whitespace-pre-line leading-relaxed">
            {block.data.prompt}
          </p>
          <div className="space-y-3 pt-1">
            {Array.from({ length: block.data.lines || 2 }).map((_, lIdx) => (
              <div
                key={lIdx}
                className="w-full border-b border-dashed border-[#899A7E]/40 h-3"
              />
            ))}
          </div>
        </div>
      );

    case 'tracker-grid':
      return (
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 my-2">
          {block.data.days?.map((d: any, idx: number) => (
            <div
              key={idx}
              className="p-2 bg-white border border-[#EAE3D6] rounded flex flex-col items-center text-center space-y-1 shadow-xs"
            >
              <span className="text-[8px] font-sans tracking-widest uppercase font-semibold text-[#899A7E]">
                Day {d.day}
              </span>
              <span className="text-[10px] font-medium text-[#292A26] line-clamp-1">
                {d.title}
              </span>
              <span className="text-[8px] text-[#77766F] font-mono">{d.target}</span>
              <div className="w-4 h-4 rounded-full border border-[#899A7E] mt-0.5 flex items-center justify-center bg-[#FAF8F2]">
                <CheckSquare className="w-2.5 h-2.5 text-[#899A7E] opacity-60" />
              </div>
            </div>
          ))}
        </div>
      );

    case 'two-column-list':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
          <div className="p-3 bg-white border border-[#EAE3D6] rounded-md space-y-2 shadow-xs">
            <h4 className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-[#586B4D] border-b border-[#EAE3D6] pb-1">
              {block.data.col1Title}
            </h4>
            <ul className="space-y-1.5">
              {block.data.col1Items?.map((text: string, i: number) => (
                <li key={i} className="text-[11px] font-sans text-[#77766F] flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#899A7E] mt-1 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3 bg-white border border-[#EAE3D6] rounded-md space-y-2 shadow-xs">
            <h4 className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-[#586B4D] border-b border-[#EAE3D6] pb-1">
              {block.data.col2Title}
            </h4>
            <ul className="space-y-1.5">
              {block.data.col2Items?.map((text: string, i: number) => (
                <li key={i} className="text-[11px] font-sans text-[#77766F] flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#899A7E] mt-1 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 'table':
      return (
        <div className="my-2 border border-[#EAE3D6] rounded-md overflow-hidden bg-white shadow-xs">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#E9EEE5]/70 border-b border-[#EAE3D6] text-[9px] uppercase tracking-[0.16em] text-[#586B4D]">
              <tr>
                {block.data.headers?.map((h: string, idx: number) => (
                  <th key={idx} className="p-2 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE3D6]/70 text-[11px]">
              {block.data.rows?.map((row: string[], rIdx: number) => (
                <tr key={rIdx} className="hover:bg-[#FAF8F2] transition-colors">
                  {row.map((cell: string, cIdx: number) => (
                    <td
                      key={cIdx}
                      className={`p-2 text-[#292A26] ${
                        cIdx === 0 ? 'font-mono text-[10px] text-[#899A7E] font-medium' : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'note-lines':
      return (
        <div className="space-y-2 p-3 bg-white border border-[#EAE3D6] rounded-md my-2 shadow-xs">
          <h4 className="text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-[#586B4D]">
            {block.data.title}
          </h4>
          <div className="space-y-3 pt-1">
            {Array.from({ length: block.data.count || 4 }).map((_, idx) => (
              <div key={idx} className="w-full border-b border-[#899A7E]/30 h-3" />
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};
