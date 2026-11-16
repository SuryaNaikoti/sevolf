'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout?: () => void;
}

export function Navbar({ onOpenCheckout }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: "What's Inside", href: '#whats-inside' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Workbook Pages', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F2]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D6]/80 py-3.5'
            : 'bg-[#FAF8F2]/80 backdrop-blur-xs py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-[#292A26] uppercase transition-colors group-hover:text-[#586B4D]">
              SELVOF
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] font-sans uppercase font-medium text-[#77766F] border-l border-[#EAE3D6] pl-2.5">
              Living Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-sans font-medium text-[#77766F] hover:text-[#292A26] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCheckout}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#586B4D] text-[#FAF8F2] text-xs font-sans font-medium tracking-wide shadow-xs hover:bg-[#47573e] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E9EEE5]" />
              <span>Get Kit • ₹299</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#292A26] hover:text-[#586B4D] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F2] md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-[#EAE3D6] animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#292A26] hover:text-[#586B4D] transition-colors border-b border-[#EAE3D6]/60 pb-3"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout?.();
              }}
              className="w-full py-3.5 rounded-full bg-[#586B4D] text-[#FAF8F2] text-sm font-sans font-medium tracking-wide shadow-sm flex items-center justify-center gap-2"
            >
              <span>Get Your Home Reset Kit • ₹299</span>
            </button>
            <p className="text-center text-[11px] font-sans text-[#77766F]">
              Instant PDF Download • Printable A4 & US Letter
            </p>
          </div>
        </div>
      )}
    </>
  );
}
