import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Stethoscope, Pill, Anchor, Building2 } from "lucide-react";

export default function InstitutionCard({ institution, onOpenApplyModal }) {
  const getIcon = (id) => {
    switch (id) {
      case "nursing":
        return <Stethoscope className="w-6 h-6 text-[#D4AF37]" />;
      case "pharmacy":
        return <Pill className="w-6 h-6 text-[#D4AF37]" />;
      case "maritime":
        return <Anchor className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="group relative rounded-3xl bg-white border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1">
      {/* Top Banner Image */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-950">
        <img
          src={institution.heroImage}
          alt={institution.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-[#0A192F]/80 backdrop-blur-md text-white text-xs font-bold border border-[#D4AF37]/30 flex items-center gap-1.5">
            {getIcon(institution.id)}
            {institution.shortName}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#0A192F] text-xs font-extrabold uppercase tracking-wider shadow">
            Estd. {institution.established}
          </span>
        </div>

        {/* College Name & Tagline Overlay */}
        <div className="absolute bottom-4 left-6 right-6 z-10">
          <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">
            {institution.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-tight">
            {institution.name}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {institution.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Key Institutional Strengths
          </span>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {institution.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Stats Pills */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100">
          {institution.stats.slice(0, 2).map((st, i) => (
            <div key={i} className="text-center">
              <span className="block text-lg font-extrabold text-[#0A192F] font-heading">
                {st.value}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">{st.label}</span>
            </div>
          ))}
        </div>

        {/* Programs Count */}
        <div className="text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3">
          <span>Offering {institution.programs.length} Specialized Programs</span>
          <span className="font-semibold text-slate-700">UG • PG • Diploma</span>
        </div>

        {/* Card Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Link
            href={`/institutions/${institution.id}`}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#0A192F] text-[#0A192F] hover:text-white font-bold text-xs transition-colors text-center flex items-center justify-center gap-1 group/btn"
          >
            <span>Explore College</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={onOpenApplyModal}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8902A] text-[#0A192F] font-bold text-xs text-center hover:brightness-110 shadow-md cursor-pointer"
          >
            Apply Admission
          </button>
        </div>
      </div>
    </div>
  );
}
