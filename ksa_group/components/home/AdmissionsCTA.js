import { Sparkles, ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

export default function AdmissionsCTA({ onOpenApplyModal }) {
  return (
    <section className="py-20 bg-[#070F1E] text-white relative overflow-hidden border-t border-[#D4AF37]/30">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4" /> Academic Session 2026-2027 Admissions
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          Begin Your Journey With <br />
          <span className="text-gradient-gold">KSA Group of Institutions</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Join thousands of successful nurses, pharmaceutical scientists, and merchant navy officers trained under world-class faculty and simulators.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenApplyModal}
            className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8902A] text-[#0A192F] font-extrabold text-base shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Apply Online Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="tel:+914427458900"
            className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-base transition-colors flex items-center gap-2"
          >
            <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
            <span>Call Admissions Hotline</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> INC & PCI Approved
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> DGS Grade A1 Rated
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> 100% Placement Support
          </span>
        </div>

      </div>
    </section>
  );
}
