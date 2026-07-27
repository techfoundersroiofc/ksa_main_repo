"use client";

import { useEffect, useState } from "react";

export default function CounterStat({ value, label, subtitle, icon: Icon, dark = false }) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
        dark
          ? "bg-slate-900/80 border border-slate-800 text-white hover:border-[#D4AF37]/50"
          : "bg-white border border-slate-200/80 text-[#0A192F] shadow-lg hover:shadow-xl"
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        {Icon && (
          <div
            className={`p-3 rounded-2xl ${
              dark
                ? "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30"
                : "bg-[#0A192F] text-[#D4AF37]"
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>
        )}
        <span
          className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight ${
            dark ? "text-gradient-gold" : "text-[#0A192F]"
          }`}
        >
          {value}
        </span>
      </div>

      <h4
        className={`font-bold text-base sm:text-lg mb-1 ${
          dark ? "text-white" : "text-[#0A192F]"
        }`}
      >
        {label}
      </h4>

      {subtitle && (
        <p
          className={`text-xs ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
