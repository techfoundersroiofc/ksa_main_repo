"use client";

import { useState } from "react";
import { Sparkles, ChevronRight, PhoneCall, X } from "lucide-react";

export default function AnnouncementBar({ onOpenApplyModal }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-linear-to-r from-[#071120] via-primary-navy-deep to-[#071120] border-b border-accent-gold/25 text-white py-2 px-6 md:px-16 lg:px-26 relative z-50 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left Section: Badge & Text */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent-gold text-[#0A192F] font-extrabold text-[9px] sm:text-[10px] uppercase tracking-wider shrink-0 animate-pulse">
            <Sparkles className="w-2.5 h-2.5 text-[#0A192F]" /> Admissions
            2026-27
          </span>
          <p className="text-slate-300 text-[10px] sm:text-xs truncate font-medium">
            <span className="hidden md:inline">
              Enrolling for Nursing, Pharmacy & Maritime Programs.{" "}
            </span>
            <span className="text-accent-gold font-semibold">
              Merit Scholarships Available!
            </span>
          </p>
        </div>

        {/* Right Section: Contact, Apply & Close */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href="tel:+914427458900"
            className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-accent-gold transition-colors text-xs font-semibold"
          >
            <PhoneCall className="w-3 h-3 text-accent-gold" />
            <span>+91 44 2745 8900</span>
          </a>

          <button
            onClick={onOpenApplyModal}
            className="inline-flex items-center gap-0.5 bg-accent-gold/20 border border-accent-gold/40 px-2.5 py-1 rounded-md text-accent-gold font-bold hover:bg-accent-gold hover:text-[#0A192F] transition-all cursor-pointer text-[11px] sm:text-xs shrink-0 group"
          >
            <span>Apply Online</span>
            <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => setVisible(false)}
            aria-label="Close notification"
            className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-md hover:bg-white/5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
