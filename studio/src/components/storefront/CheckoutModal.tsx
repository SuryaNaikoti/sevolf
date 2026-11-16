'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShieldCheck, Download, Sparkles, Lock, AlertCircle, RefreshCw } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [formatPreference, setFormatPreference] = useState<'both' | 'a4' | 'letter'>('both');
  const [status, setStatus] = useState<'idle' | 'initiating' | 'pending_payment' | 'verifying' | 'paid' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [downloadLinks, setDownloadLinks] = useState<{ a4?: string; letter?: string } | null>(null);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage(null);
    setDownloadLinks(null);
    setConfirmedOrderId(null);
    onClose();
  };

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleInitiateCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid delivery email.');
      return;
    }

    setErrorMessage(null);
    setStatus('initiating');

    try {
      // 1. Create real order on server with Razorpay
      const res = await fetch('/api/checkout/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          format: formatPreference,
          productId: 'selvof-home-reset-kit-v1',
        }),
      });

      const orderData = await res.json();
      if (!res.ok || !orderData.success) {
        throw new Error(orderData.error || 'Failed to initiate secure order.');
      }

      // 2. Load official Razorpay Checkout SDK
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load secure Razorpay gateway. Please check your network connection.');
      }

      setStatus('pending_payment');

      // 3. Open actual Razorpay Checkout SDK Modal
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'SELVOF',
        description: 'The 14-Day Home Reset Kit',
        image: '/favicon.ico',
        order_id: orderData.razorpayOrderId,
        prefill: {
          email: email.trim(),
        },
        notes: {
          orderId: orderData.orderId,
          format: formatPreference,
        },
        theme: {
          color: '#586B4D',
        },
        modal: {
          ondismiss: () => {
            if (status !== 'paid') {
              setStatus('idle');
              setErrorMessage('Checkout was cancelled. No charges were made.');
            }
          },
        },
        handler: async (response: any) => {
          // 4. Server-Side Signature & Credentials Verification
          setStatus('verifying');
          try {
            const verifyRes = await fetch('/api/checkout/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                internalOrderId: orderData.orderId,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.error || 'Payment signature verification failed.');
            }

            // Server-verified success: display verified download links
            setDownloadLinks(verifyData.downloads);
            setConfirmedOrderId(verifyData.orderId);
            setStatus('paid');
          } catch (vErr: any) {
            console.error('Verification failure:', vErr);
            setStatus('failed');
            setErrorMessage(vErr.message || 'Payment verification failed.');
          }
        },
      };

      const rzpInstance = new (window as any).Razorpay(options);

      rzpInstance.on('payment.failed', (failResp: any) => {
        console.error('Razorpay payment failed:', failResp?.error);
        setStatus('failed');
        setErrorMessage(
          failResp?.error?.description ||
            failResp?.error?.reason ||
            'Payment transaction failed. Please try a different payment method.'
        );
      });

      rzpInstance.open();
    } catch (err: any) {
      console.error('Checkout error:', err);
      setStatus('idle');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#292A26]/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
          onClick={handleReset}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border border-[#EAE3D6]"
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FAF8F2] text-[#77766F] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {status !== 'paid' ? (
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2 border-b border-[#EAE3D6] pb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E9EEE5] text-[#586B4D] text-[10.5px] font-mono font-semibold uppercase">
                    <Sparkles className="w-3 h-3" />
                    <span>Secure Razorpay Checkout</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#292A26] font-normal">
                    Complete Your Order
                  </h3>
                  <p className="text-xs font-sans text-[#77766F]">
                    The 14-Day Home Reset Kit • 22-page illustrated workbook
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium block">Notice:</strong>
                      <span className="leading-relaxed">{errorMessage}</span>
                    </div>
                  </div>
                )}

                {/* Summary Row */}
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#EAE3D6] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-sans font-semibold text-[#292A26] block">
                      The 14-Day Home Reset Kit
                    </span>
                    <span className="text-[11px] font-sans text-[#77766F]">
                      22-Page Illustrated Print & Digital PDF
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-[#586B4D]">
                      ₹299
                    </span>
                    <span className="text-[10px] font-sans text-[#77766F] block">
                      One-time payment
                    </span>
                  </div>
                </div>

                {/* Progress / Spinner State */}
                {(status === 'initiating' || status === 'pending_payment' || status === 'verifying') && (
                  <div className="p-4 rounded-xl bg-[#E9EEE5]/70 border border-[#899A7E]/40 flex items-center gap-3">
                    <RefreshCw className="w-5 h-5 text-[#586B4D] animate-spin shrink-0" />
                    <div className="text-xs font-sans">
                      <span className="font-semibold text-[#292A26] block">
                        {status === 'initiating' && 'Connecting to Razorpay gateway...'}
                        {status === 'pending_payment' && 'Awaiting Razorpay Checkout...'}
                        {status === 'verifying' && 'Verifying payment signature with server...'}
                      </span>
                      <span className="text-[#586B4D]">
                        Please complete payment in the Razorpay window. Download links will unlock immediately upon server verification.
                      </span>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleInitiateCheckout} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans font-medium text-[#292A26]">
                      Delivery Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      disabled={status === 'initiating' || status === 'pending_payment' || status === 'verifying'}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] text-sm font-sans focus:outline-none focus:border-[#586B4D] bg-white transition-colors disabled:opacity-60"
                    />
                    <span className="text-[10.5px] font-sans text-[#77766F] block">
                      Your time-limited download links and receipt will be dispatched to this email.
                    </span>
                  </div>

                  {/* Format Choice */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans font-medium text-[#292A26]">
                      Preferred Print Format
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'both', label: 'Both (A4 & Letter)' },
                        { id: 'a4', label: 'ISO A4' },
                        { id: 'letter', label: 'US Letter' },
                      ].map((fmt) => (
                        <button
                          key={fmt.id}
                          type="button"
                          disabled={status === 'initiating' || status === 'pending_payment' || status === 'verifying'}
                          onClick={() => setFormatPreference(fmt.id as any)}
                          className={`py-2 px-2 text-[11px] font-sans font-medium rounded-lg border text-center transition-all ${
                            formatPreference === fmt.id
                              ? 'border-[#586B4D] bg-[#E9EEE5] text-[#586B4D]'
                              : 'border-[#EAE3D6] bg-white text-[#77766F] hover:bg-[#FAF8F2]'
                          } disabled:opacity-60`}
                        >
                          {fmt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'initiating' || status === 'pending_payment' || status === 'verifying'}
                      className="w-full py-4 rounded-full bg-[#586B4D] text-[#FAF8F2] font-sans font-medium text-sm tracking-wide shadow-md hover:bg-[#47573e] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Lock className="w-4 h-4" />
                      <span>
                        {status === 'verifying'
                          ? 'Verifying Server Signature...'
                          : status === 'initiating'
                          ? 'Preparing Secure Checkout...'
                          : status === 'pending_payment'
                          ? 'Awaiting Payment...'
                          : 'Pay Securely with Razorpay • ₹299'}
                      </span>
                    </button>
                  </div>
                </form>

                {/* Footer Assurance */}
                <div className="pt-2 border-t border-[#EAE3D6] flex items-center justify-center gap-4 text-[10.5px] font-sans text-[#77766F]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#899A7E]" /> Razorpay 256-Bit SSL
                  </span>
                  <span>•</span>
                  <span>Server-Verified Digital Delivery</span>
                </div>
              </div>
            ) : (
              /* Verified Payment & Time-Limited Download State */
              <div className="text-center py-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#E9EEE5] text-[#586B4D] flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#899A7E] font-semibold">
                    PAYMENT VERIFIED • ORDER #{confirmedOrderId?.slice(0, 14)}
                  </span>
                  <h3 className="font-serif text-3xl text-[#292A26] font-normal">
                    Thank You for Your Order
                  </h3>
                  <p className="text-xs font-sans text-[#77766F] max-w-sm mx-auto">
                    Your payment was confirmed. An email with secure download links has been dispatched to <strong className="text-[#292A26]">{email}</strong>.
                  </p>
                </div>

                {/* Secure Download Links */}
                <div className="space-y-2.5 max-w-sm mx-auto text-left">
                  {downloadLinks?.a4 && (
                    <a
                      href={downloadLinks.a4}
                      className="p-3.5 rounded-xl border border-[#899A7E] bg-[#FAF8F2] hover:bg-[#E9EEE5] transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <span className="text-xs font-sans font-semibold text-[#292A26] block">
                          Download A4 Workbook (22 Pages)
                        </span>
                        <span className="text-[10px] font-mono text-[#77766F]">
                          Time-Limited Secure Token • 24hr Validity
                        </span>
                      </div>
                      <Download className="w-4 h-4 text-[#586B4D] group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {downloadLinks?.letter && (
                    <a
                      href={downloadLinks.letter}
                      className="p-3.5 rounded-xl border border-[#899A7E] bg-[#FAF8F2] hover:bg-[#E9EEE5] transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <span className="text-xs font-sans font-semibold text-[#292A26] block">
                          Download US Letter Workbook (22 Pages)
                        </span>
                        <span className="text-[10px] font-mono text-[#77766F]">
                          Time-Limited Secure Token • 24hr Validity
                        </span>
                      </div>
                      <Download className="w-4 h-4 text-[#586B4D] group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                <div className="pt-2 text-[11px] font-sans text-[#77766F]">
                  <span>Links expire in 24 hours. For re-downloads, check your confirmation email.</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs font-sans text-[#77766F] hover:text-[#292A26] underline"
                  >
                    Return to Storefront
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
