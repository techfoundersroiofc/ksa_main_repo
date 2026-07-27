import Link from "next/link";
import { GraduationCap, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#0A192F] text-white min-h-[80vh] flex items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto text-[#D4AF37]">
          <GraduationCap className="w-10 h-10" />
        </div>

        <h1 className="text-6xl font-extrabold text-[#D4AF37] font-heading tracking-tight">
          404
        </h1>

        <h2 className="text-2xl font-bold text-white font-heading">
          Page Not Found
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          The campus page or resource you are searching for might have been relocated or updated.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#0A192F] font-bold text-xs flex items-center gap-2 hover:bg-[#E5C158] transition-colors"
          >
            <Home className="w-4 h-4" /> Return to Digital HQ
          </Link>
        </div>
      </div>
    </div>
  );
}
