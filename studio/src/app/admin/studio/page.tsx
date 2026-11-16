'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { StudioProduct, StudioPage as StudioPageType, PageFormat, PageBlock } from '@/types/studio';
import { homeResetKitTemplate } from '@/data/defaultTemplate';
import { PageRenderer } from '@/components/PageRenderer';
import { exportStudioToPdf, downloadPdfBlob } from '@/utils/exportEngine';
import { runProductQA } from '@/utils/qaValidator';
import {
  FileText,
  Download,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Settings2,
  Printer,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Save,
  RotateCcw,
  Sparkles,
  Eye,
  Sliders,
  Maximize2,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export default function StudioPage() {
  const [product, setProduct] = useState<StudioProduct>(homeResetKitTemplate);
  const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'single' | 'all' | 'qa' | 'meta'>('single');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<{ percent: number; text: string }>({
    percent: 0,
    text: '',
  });
  const [versionNote, setVersionNote] = useState<string>('');
  const [showVersionModal, setShowVersionModal] = useState<boolean>(false);

  const currentPage = product.pages[selectedPageIndex] || product.pages[0];
  const qaResult = useMemo(() => runProductQA(product), [product]);

  // Handle format toggle (A4 vs Letter)
  const handleFormatChange = (fmt: PageFormat) => {
    setProduct((prev) => ({ ...prev, format: fmt }));
  };

  // Block Data Updates
  const handleUpdateBlockData = (blockId: string, newData: any) => {
    setProduct((prev) => {
      const updatedPages = prev.pages.map((pg, pIdx) => {
        if (pIdx !== selectedPageIndex) return pg;
        return {
          ...pg,
          blocks: pg.blocks.map((blk) => (blk.id === blockId ? { ...blk, data: newData } : blk)),
        };
      });
      return { ...prev, pages: updatedPages };
    });
  };

  // Page level metadata update
  const handleUpdateCurrentPageMeta = (field: keyof StudioPageType, value: any) => {
    setProduct((prev) => {
      const updatedPages = [...prev.pages];
      updatedPages[selectedPageIndex] = {
        ...updatedPages[selectedPageIndex],
        [field]: value,
      };
      return { ...prev, pages: updatedPages };
    });
  };

  // Add block to current page
  const handleAddBlock = (type: PageBlock['type']) => {
    let defaultData: any = {};
    if (type === 'paragraph') defaultData = { content: 'New mindful living instruction or reflection note.' };
    if (type === 'checklist') defaultData = { items: [{ text: 'New daily action item', checked: false }] };
    if (type === 'prompt-box') defaultData = { title: 'Reflection Area', prompt: 'Write your notes or insights here...', lines: 3 };
    if (type === 'quote') defaultData = { quote: '“Simplicity is the keynote of all true elegance.”', author: 'Coco Chanel' };

    const newBlock: PageBlock = {
      id: `blk-${Date.now()}`,
      type,
      data: defaultData,
    };

    setProduct((prev) => {
      const updatedPages = [...prev.pages];
      updatedPages[selectedPageIndex] = {
        ...updatedPages[selectedPageIndex],
        blocks: [...updatedPages[selectedPageIndex].blocks, newBlock],
      };
      return { ...prev, pages: updatedPages };
    });
  };

  // Save new version
  const handleSaveVersion = () => {
    if (!versionNote.trim()) return;
    const newVersionNum = `1.${product.versionsHistory.length}.0`;
    const newVersionItem = {
      id: `v-${Date.now()}`,
      version: newVersionNum,
      savedAt: new Date().toISOString(),
      note: versionNote,
    };
    setProduct((prev) => ({
      ...prev,
      version: newVersionNum,
      updatedAt: new Date().toISOString(),
      versionsHistory: [newVersionItem, ...prev.versionsHistory],
    }));
    setVersionNote('');
    setShowVersionModal(false);
  };

  // Export to PDF
  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const blob = await exportStudioToPdf(product, {
        format: product.format,
        includeCover: true,
        onProgress: (percent, text) => {
          setExportProgress({ percent, text });
        },
      });
      const filename = `${product.title.replace(/\s+/g, '_')}_${product.format.toUpperCase()}.pdf`;
      downloadPdfBlob(blob, filename);
    } catch (error) {
      console.error('PDF export error:', error);
      alert('Encountered an issue during PDF export. Check console for details.');
    } finally {
      setIsExporting(false);
      setExportProgress({ percent: 0, text: '' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#232321]">
      {/* Top Studio Navbar */}
      <header className="no-print sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5DFD6] px-4 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8A9A86] flex items-center justify-center text-white font-serif text-lg font-bold">
            S
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-base font-semibold tracking-wide text-[#232321]">
                SELVOF Digital Product Studio
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#EBF0EA] text-[#586855] rounded-full border border-[#8A9A86]/20">
                v{product.version}
              </span>
            </div>
            <p className="text-[11px] text-[#575753] truncate max-w-xs md:max-w-md">
              {product.title} • {product.pages.length} Pages • {product.format.toUpperCase()} Print Ready
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Format Selection */}
          <div className="hidden sm:flex items-center bg-[#EFECE6] p-1 rounded-md text-xs font-medium">
            <button
              onClick={() => handleFormatChange('a4')}
              className={`px-2.5 py-1 rounded transition-all ${
                product.format === 'a4'
                  ? 'bg-white text-[#232321] shadow-xs font-semibold'
                  : 'text-[#575753] hover:text-[#232321]'
              }`}
            >
              A4
            </button>
            <button
              onClick={() => handleFormatChange('letter')}
              className={`px-2.5 py-1 rounded transition-all ${
                product.format === 'letter'
                  ? 'bg-white text-[#232321] shadow-xs font-semibold'
                  : 'text-[#575753] hover:text-[#232321]'
              }`}
            >
              US Letter
            </button>
          </div>

          {/* View Modes */}
          <div className="flex items-center bg-[#EFECE6] p-1 rounded-md text-xs font-medium">
            <button
              onClick={() => setViewMode('single')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                viewMode === 'single'
                  ? 'bg-white text-[#232321] shadow-xs font-semibold'
                  : 'text-[#575753] hover:text-[#232321]'
              }`}
              title="Editor View"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Editor</span>
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                viewMode === 'all'
                  ? 'bg-white text-[#232321] shadow-xs font-semibold'
                  : 'text-[#575753] hover:text-[#232321]'
              }`}
              title="Overview of all 22 pages"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Overview</span>
            </button>
            <button
              onClick={() => setViewMode('qa')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 relative ${
                viewMode === 'qa'
                  ? 'bg-white text-[#232321] shadow-xs font-semibold'
                  : 'text-[#575753] hover:text-[#232321]'
              }`}
              title="QA Validation"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A86]" />
              <span className="hidden md:inline">QA</span>
              {qaResult.warnings.length > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute -top-0.5 -right-0.5" />
              )}
            </button>
            <button
              onClick={() => setViewMode('meta')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                viewMode === 'meta'
                  ? 'bg-white text-[#232321] shadow-xs font-semibold'
                  : 'text-[#575753] hover:text-[#232321]'
              }`}
              title="Product Metadata & Versions"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Product</span>
            </button>
          </div>

          {/* Version Button */}
          <button
            onClick={() => setShowVersionModal(true)}
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#E5DFD6] bg-white hover:bg-[#FAF8F5] text-xs font-medium text-[#575753] hover:text-[#232321] transition-colors"
          >
            <Save className="w-3.5 h-3.5 text-[#8A9A86]" />
            <span>Save Version</span>
          </button>

          {/* Customer Storefront Link */}
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#586B4D] text-white hover:bg-[#47573e] text-xs font-medium tracking-wide transition-all shadow-xs"
            title="Open Consumer Storefront"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Storefront</span>
          </Link>

          {/* Owner Logout Button */}
          <button
            onClick={async () => {
              await fetch('/api/admin/logout', { method: 'POST' });
              window.location.href = '/';
            }}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#E5DFD6] bg-white hover:bg-[#FAF8F5] text-xs text-[#77766F] hover:text-rose-600 transition-colors"
            title="Lock Studio"
          >
            <span>Lock</span>
          </button>

          {/* Export PDF Button */}
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#232321] text-white hover:bg-[#383835] active:scale-95 text-xs font-medium tracking-wide transition-all shadow-xs disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5 text-[#8A9A86]" />
            <span>{isExporting ? 'Exporting...' : 'Export PDF'}</span>
          </button>

          {/* Browser Native Print Button */}
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#E5DFD6] bg-white hover:bg-[#FAF8F5] text-xs text-[#575753] transition-colors"
            title="Browser Direct Print"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Exporting Progress Overlay */}
      {isExporting && (
        <div className="no-print fixed inset-0 z-50 bg-[#232321]/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E5DFD6] rounded-xl p-6 max-w-sm w-full space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EBF0EA] flex items-center justify-center text-[#586855] animate-spin">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base font-medium text-[#232321]">
                  Generating Print PDF
                </h4>
                <p className="text-xs text-[#575753]">Compiling high-resolution vector pages...</p>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="w-full bg-[#EFECE6] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#8A9A86] h-full transition-all duration-300"
                  style={{ width: `${exportProgress.percent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-[#575753] font-mono">
                <span>{exportProgress.text}</span>
                <span>{exportProgress.percent}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Studio Body */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Page Navigator Thumbnails */}
        <aside className="no-print w-full md:w-64 bg-white/70 border-r border-[#E5DFD6] flex flex-col shrink-0 overflow-y-auto max-h-[calc(100vh-61px)]">
          <div className="p-3 border-b border-[#E5DFD6] flex items-center justify-between text-xs font-medium text-[#575753]">
            <span className="uppercase tracking-wider font-semibold text-[10px]">
              Pages ({product.pages.length})
            </span>
            <span className="text-[10px] font-mono text-[#8A9A86]">
              {product.format.toUpperCase()}
            </span>
          </div>

          <div className="p-2 space-y-1.5">
            {product.pages.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPageIndex(idx);
                  if (viewMode !== 'single') setViewMode('single');
                }}
                className={`w-full text-left p-2.5 rounded-md flex items-center gap-3 transition-all ${
                  selectedPageIndex === idx && viewMode === 'single'
                    ? 'bg-[#EBF0EA] text-[#232321] font-medium border border-[#8A9A86]/40 shadow-xs'
                    : 'hover:bg-white text-[#575753]'
                }`}
              >
                <span className="w-5 h-5 rounded text-[10px] font-mono font-semibold flex items-center justify-center bg-white border border-[#E5DFD6] text-[#8A9A86] shrink-0">
                  {p.pageNumber}
                </span>
                <div className="truncate flex-1">
                  <div className="text-xs truncate">{p.title}</div>
                  <div className="text-[9px] uppercase tracking-wider text-[#8A9A86] truncate">
                    {p.category || (p.isCover ? 'Cover' : 'Page')}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Center / Right Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
          {/* VIEW MODE 1: SINGLE PAGE EDITOR & PREVIEW */}
          {viewMode === 'single' && (
            <div className="w-full flex flex-col xl:flex-row items-start justify-center gap-8">
              {/* Actual Page Canvas Sheet */}
              <div className="flex flex-col items-center">
                {/* Page Navigation Stepper */}
                <div className="no-print flex items-center justify-between w-full max-w-[210mm] mb-4 bg-white/80 border border-[#E5DFD6] p-2 rounded-lg text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPageIndex((prev) => Math.max(0, prev - 1))}
                      disabled={selectedPageIndex === 0}
                      className="p-1 rounded hover:bg-[#FAF8F5] disabled:opacity-30"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-medium text-[#232321]">
                      Page {selectedPageIndex + 1} of {product.pages.length}
                    </span>
                    <button
                      onClick={() =>
                        setSelectedPageIndex((prev) =>
                          Math.min(product.pages.length - 1, prev + 1)
                        )
                      }
                      disabled={selectedPageIndex === product.pages.length - 1}
                      className="p-1 rounded hover:bg-[#FAF8F5] disabled:opacity-30"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-[11px] text-[#575753] font-serif italic truncate max-w-xs">
                    {currentPage.title}
                  </span>
                </div>

                {/* Printable Page Sheet */}
                <div className="border border-[#E5DFD6] rounded-sm overflow-hidden shadow-md">
                  <PageRenderer
                    page={currentPage}
                    format={product.format}
                    totalPages={product.pages.length}
                    interactive={true}
                    onUpdateBlockData={handleUpdateBlockData}
                  />
                </div>
              </div>

              {/* Right Panel: Page Editor Inspector */}
              <div className="no-print w-full xl:w-80 bg-white border border-[#E5DFD6] rounded-xl p-5 space-y-5 shadow-xs">
                <div className="border-b border-[#E5DFD6] pb-3">
                  <h3 className="font-serif text-lg font-medium text-[#232321] flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#8A9A86]" />
                    Page Inspector
                  </h3>
                  <p className="text-[11px] text-[#575753]">
                    Edit typography, running headers, and structure.
                  </p>
                </div>

                {/* Page Metadata Inputs */}
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#575753] block mb-1">
                      Page Title
                    </label>
                    <input
                      type="text"
                      value={currentPage.title}
                      onChange={(e) => handleUpdateCurrentPageMeta('title', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
                    />
                  </div>

                  {!currentPage.isCover && (
                    <>
                      <div>
                        <label className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#575753] block mb-1">
                          Category / Eyebrow
                        </label>
                        <input
                          type="text"
                          value={currentPage.category || ''}
                          onChange={(e) =>
                            handleUpdateCurrentPageMeta('category', e.target.value)
                          }
                          className="w-full text-xs p-2 rounded border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#575753] block mb-1">
                          Running Header Text
                        </label>
                        <input
                          type="text"
                          value={currentPage.headerText || ''}
                          onChange={(e) =>
                            handleUpdateCurrentPageMeta('headerText', e.target.value)
                          }
                          className="w-full text-xs p-2 rounded border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#575753] block mb-1">
                          Running Footer Text
                        </label>
                        <input
                          type="text"
                          value={currentPage.footerText || ''}
                          onChange={(e) =>
                            handleUpdateCurrentPageMeta('footerText', e.target.value)
                          }
                          className="w-full text-xs p-2 rounded border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Add Content Blocks */}
                {!currentPage.isCover && (
                  <div className="pt-3 border-t border-[#E5DFD6] space-y-2">
                    <label className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#575753] block">
                      Add Component Block
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        onClick={() => handleAddBlock('checklist')}
                        className="p-2 border border-[#E5DFD6] rounded bg-[#FAF8F5] hover:bg-[#EBF0EA] text-[#232321] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-3 h-3 text-[#8A9A86]" /> Checklist
                      </button>
                      <button
                        onClick={() => handleAddBlock('prompt-box')}
                        className="p-2 border border-[#E5DFD6] rounded bg-[#FAF8F5] hover:bg-[#EBF0EA] text-[#232321] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-3 h-3 text-[#8A9A86]" /> Prompt Box
                      </button>
                      <button
                        onClick={() => handleAddBlock('paragraph')}
                        className="p-2 border border-[#E5DFD6] rounded bg-[#FAF8F5] hover:bg-[#EBF0EA] text-[#232321] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-3 h-3 text-[#8A9A86]" /> Paragraph
                      </button>
                      <button
                        onClick={() => handleAddBlock('quote')}
                        className="p-2 border border-[#E5DFD6] rounded bg-[#FAF8F5] hover:bg-[#EBF0EA] text-[#232321] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-3 h-3 text-[#8A9A86]" /> Quote
                      </button>
                    </div>
                  </div>
                )}

                {/* Blocks Breakdown */}
                <div className="pt-3 border-t border-[#E5DFD6] space-y-2">
                  <label className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#575753] block">
                    Blocks on this page ({currentPage.blocks.length})
                  </label>
                  <div className="space-y-1.5">
                    {currentPage.blocks.map((blk, bIdx) => (
                      <div
                        key={blk.id}
                        className="flex items-center justify-between p-2 rounded bg-[#FAF8F5] border border-[#E5DFD6] text-xs"
                      >
                        <span className="font-mono text-[10px] text-[#8A9A86]">
                          {bIdx + 1}. {blk.type}
                        </span>
                        {!currentPage.isCover && (
                          <button
                            onClick={() => {
                              const updatedBlocks = currentPage.blocks.filter(
                                (b) => b.id !== blk.id
                              );
                              handleUpdateCurrentPageMeta('blocks', updatedBlocks);
                            }}
                            className="text-[#575753] hover:text-red-600 p-1"
                            title="Remove Block"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW MODE 2: ALL 22 PAGES OVERVIEW GRID */}
          {viewMode === 'all' && (
            <div className="w-full max-w-6xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5DFD6] pb-4">
                <div>
                  <h2 className="font-serif text-2xl text-[#232321]">
                    Complete 22-Page Workbook Overview
                  </h2>
                  <p className="text-xs text-[#575753]">
                    Click any page to jump directly into the single-page editor.
                  </p>
                </div>
                <div className="text-xs text-[#575753]">
                  Format: <span className="font-semibold text-[#8A9A86]">{product.format.toUpperCase()}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product.pages.map((p, idx) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSelectedPageIndex(idx);
                      setViewMode('single');
                    }}
                    className="cursor-pointer group flex flex-col items-center bg-white border border-[#E5DFD6] rounded-lg p-3 hover:border-[#8A9A86] hover:shadow-md transition-all"
                  >
                    <div className="w-full flex items-center justify-between text-[11px] mb-2 font-mono text-[#575753]">
                      <span>Page {p.pageNumber}</span>
                      <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#FAF8F5] border border-[#E5DFD6]">
                        {p.blocks.length} blocks
                      </span>
                    </div>

                    {/* Scaled Mini Preview */}
                    <div className="w-full aspect-[210/297] bg-[#FAF8F5] border border-[#E5DFD6] rounded flex flex-col p-3 overflow-hidden relative group-hover:bg-white transition-colors">
                      <div className="text-[10px] font-serif font-semibold text-[#232321] line-clamp-2">
                        {p.title}
                      </div>
                      <div className="mt-2 space-y-1.5 flex-1">
                        {p.blocks.map((blk) => (
                          <div
                            key={blk.id}
                            className="h-1.5 rounded-full bg-[#E5DFD6]/70 group-hover:bg-[#8A9A86]/40 transition-colors"
                          />
                        ))}
                      </div>
                      <div className="text-[8px] text-[#8A9A86] uppercase font-sans tracking-widest mt-auto">
                        SELVOF STUDIO
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW MODE 3: QA & VALIDATION ENGINE */}
          {viewMode === 'qa' && (
            <div className="w-full max-w-4xl space-y-6">
              <div className="border-b border-[#E5DFD6] pb-4">
                <h2 className="font-serif text-2xl text-[#232321] flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#8A9A86]" />
                  Quality Assurance & Pre-Flight Validation
                </h2>
                <p className="text-xs text-[#575753]">
                  Automated checks to ensure complete print readiness, margin integrity, and page count conformity.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white border border-[#E5DFD6] rounded-lg space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#575753]">Total Pages</span>
                  <div className="font-serif text-2xl font-semibold text-[#232321]">
                    {qaResult.pageStats.totalPages} / 22
                  </div>
                  <span className="text-[10px] text-[#8A9A86]">Standard Template</span>
                </div>
                <div className="p-4 bg-white border border-[#E5DFD6] rounded-lg space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#575753]">Content Blocks</span>
                  <div className="font-serif text-2xl font-semibold text-[#232321]">
                    {qaResult.pageStats.blocksCount}
                  </div>
                  <span className="text-[10px] text-[#8A9A86]">Total Elements</span>
                </div>
                <div className="p-4 bg-white border border-[#E5DFD6] rounded-lg space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#575753]">Checklists</span>
                  <div className="font-serif text-2xl font-semibold text-[#232321]">
                    {qaResult.pageStats.checklistsCount}
                  </div>
                  <span className="text-[10px] text-[#8A9A86]">Interactive / Print</span>
                </div>
                <div className="p-4 bg-white border border-[#E5DFD6] rounded-lg space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#575753]">Writing Prompts</span>
                  <div className="font-serif text-2xl font-semibold text-[#232321]">
                    {qaResult.pageStats.writingPromptsCount}
                  </div>
                  <span className="text-[10px] text-[#8A9A86]">Fillable Areas</span>
                </div>
              </div>

              {/* Validation Status */}
              <div className="space-y-4">
                {qaResult.errors.length > 0 ? (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-xs space-y-2 text-red-800">
                    <div className="font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      Critical Export Blockers
                    </div>
                    <ul className="list-disc pl-5 space-y-1">
                      {qaResult.errors.map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="p-4 bg-[#EBF0EA] border border-[#8A9A86]/30 rounded-lg text-xs flex items-center gap-3 text-[#586855]">
                    <CheckCircle2 className="w-5 h-5 text-[#8A9A86] shrink-0" />
                    <div>
                      <div className="font-semibold">All Critical QA Checks Passed</div>
                      <p className="text-[11px] opacity-90">
                        Page counts, aspect ratios, margins and vector layers meet SELVOF print standards.
                      </p>
                    </div>
                  </div>
                )}

                {qaResult.warnings.length > 0 && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs space-y-2 text-amber-800">
                    <div className="font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Advisories & Recommendations
                    </div>
                    <ul className="list-disc pl-5 space-y-1">
                      {qaResult.warnings.map((warn, i) => (
                        <li key={i}>{warn}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW MODE 4: PRODUCT METADATA & VERSIONS */}
          {viewMode === 'meta' && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="border-b border-[#E5DFD6] pb-4">
                <h2 className="font-serif text-2xl text-[#232321]">
                  Product Workspace & Version Control
                </h2>
                <p className="text-xs text-[#575753]">
                  Manage overarching product definitions, licensing specs, and version archives.
                </p>
              </div>

              <div className="bg-white border border-[#E5DFD6] rounded-xl p-6 space-y-4 shadow-xs">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#575753] block mb-1">
                    Product Title
                  </label>
                  <input
                    type="text"
                    value={product.title}
                    onChange={(e) => setProduct({ ...product, title: e.target.value })}
                    className="w-full text-sm p-2.5 rounded-md border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#575753] block mb-1">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={product.subtitle}
                    onChange={(e) => setProduct({ ...product, subtitle: e.target.value })}
                    className="w-full text-sm p-2.5 rounded-md border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#575753] block mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={product.category}
                    onChange={(e) => setProduct({ ...product, category: e.target.value })}
                    className="w-full text-sm p-2.5 rounded-md border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#575753] block mb-1">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={product.description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-md border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
                  />
                </div>
              </div>

              {/* Version History Table */}
              <div className="bg-white border border-[#E5DFD6] rounded-xl p-6 space-y-4 shadow-xs">
                <h3 className="font-serif text-lg text-[#232321]">Version History</h3>
                <div className="divide-y divide-[#E5DFD6] text-xs">
                  {product.versionsHistory.map((ver) => (
                    <div key={ver.id} className="py-3 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-semibold text-[#8A9A86]">
                            v{ver.version}
                          </span>
                          <span className="text-[11px] text-[#575753]">
                            {ver.savedAt ? ver.savedAt.slice(0, 10) : ''}
                          </span>
                        </div>
                        <p className="text-[#232321] mt-0.5">{ver.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Dedicated off-screen staging container with ALL 22 pages rendered for export engine */}
      <div
        id="export-staging-container"
        className="no-print"
        style={{
          position: 'fixed',
          top: 0,
          left: '-9999px',
          width: product.format === 'a4' ? '210mm' : '8.5in',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: -9999,
        }}
      >
        {product.pages.map((p) => (
          <div key={`stage-${p.id}`} className="mb-4">
            <PageRenderer
              page={p}
              format={product.format}
              totalPages={product.pages.length}
              interactive={false}
            />
          </div>
        ))}
      </div>

      {/* Save Version Modal */}
      {showVersionModal && (
        <div className="no-print fixed inset-0 z-50 bg-[#232321]/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E5DFD6] rounded-xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <h3 className="font-serif text-lg font-medium text-[#232321]">
              Save New Product Version
            </h3>
            <p className="text-xs text-[#575753]">
              Record a changelog snapshot for this workbook iteration.
            </p>
            <textarea
              rows={3}
              placeholder="e.g. Added vertical folding diagram on day 9 and refined nightstand checklists."
              value={versionNote}
              onChange={(e) => setVersionNote(e.target.value)}
              className="w-full text-xs p-3 rounded-md border border-[#E5DFD6] bg-[#FAF8F5] focus:outline-none focus:border-[#8A9A86]"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowVersionModal(false)}
                className="px-3 py-1.5 rounded text-xs text-[#575753] hover:bg-[#FAF8F5]"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveVersion}
                disabled={!versionNote.trim()}
                className="px-4 py-1.5 rounded bg-[#232321] text-white text-xs font-medium hover:bg-[#383835] disabled:opacity-40"
              >
                Save Version
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
