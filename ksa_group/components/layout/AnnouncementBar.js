"use client";

import { useState } from "react";
import { Sparkles, ChevronRight, PhoneCall, X } from "lucide-react";

export default function AnnouncementBar({ onOpenApplyModal }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary-navy-deep border-b border-accent-gold/30 text-white text-xs sm:text-sm py-2 px-3 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left Section: Badge & Main Text */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 overflow-hidden w-full md:w-auto">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent-gold text-[#0A192F] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider shrink-0 animate-pulse">
            <Sparkles className="w-3 h-3" /> Admissions 2026-27 Open
          </span>
          <p className="text-slate-300 text-[11px] sm:text-xs truncate max-w-full">
            Enrolling for Nursing, Pharmacy & Maritime Programs. Merit
            Scholarships Available!
          </p>
        </div>

        {/* Right Section: Contact, Apply CTA & Close Button */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 shrink-0 w-full md:w-auto pt-1 md:pt-0 border-t border-slate-800/80 md:border-t-0">
          <a
            href="tel:+914427458900"
            className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-accent-gold transition-colors text-xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-accent-gold" />
            <span>+91 44 2745 8900</span>
          </a>

          <button
            onClick={onOpenApplyModal}
            className="inline-flex items-center gap-1 text-accent-gold font-semibold hover:underline cursor-pointer text-xs"
          >
            Apply Online <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setVisible(false)}
            aria-label="Close notification"
            className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1 ml-1 rounded-lg hover:bg-white/5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
