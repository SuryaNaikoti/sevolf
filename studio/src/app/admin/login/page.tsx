'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Invalid credentials.');
      }

      window.location.href = '/admin/studio';
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-5 selection:bg-[#E9EEE5] selection:text-[#586B4D]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE3D6] shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#E9EEE5] text-[#586B4D] flex items-center justify-center mx-auto mb-3 shadow-xs">
            <Lock className="w-6 h-6" />
          </div>
          <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-[#292A26] uppercase block">
            SELVOF
          </span>
          <h2 className="font-serif text-xl text-[#292A26] font-normal">
            Store Owner Authentication
          </h2>
          <p className="text-xs font-sans text-[#77766F]">
            This production studio is restricted to the store owner and internal team.
          </p>
        </div>

        {error && (
          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-sans font-medium text-[#292A26]">
              Owner Security Key / Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter owner access password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] text-sm font-sans focus:outline-none focus:border-[#586B4D] bg-[#FAF8F2]/60 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-full bg-[#586B4D] text-[#FAF8F2] font-sans font-medium text-sm tracking-wide shadow-md hover:bg-[#47573e] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Verifying Access...</span>
            ) : (
              <>
                <span>Access Digital Product Studio</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="pt-4 border-t border-[#EAE3D6] text-center">
          <a href="/" className="text-xs font-sans text-[#77766F] hover:text-[#292A26] underline">
            Return to Public Storefront
          </a>
        </div>
      </div>
    </div>
  );
}
