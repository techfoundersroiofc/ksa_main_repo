import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Stethoscope, Pill, Anchor, Building2 } from "lucide-react";

export default function InstitutionCard({ institution, onOpenApplyModal }) {
  const getIcon = (id) => {
    switch (id) {
      case "nursing":
        return <Stethoscope className="w-4 h-4 text-accent-gold" />;
      case "pharmacy":
        return <Pill className="w-4 h-4 text-accent-gold" />;
      case "maritime":
        return <Anchor className="w-4 h-4 text-accent-gold" />;
      default:
        return <Building2 className="w-4 h-4 text-accent-gold" />;
    }
  };

  return (
    <div className="group relative rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1">
      {/* Top Banner Image */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-primary-navy-deep">
        <Image
          src={institution.heroImage}
          alt={institution.name}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary-navy via-primary-navy/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1.5 rounded-xl bg-primary-navy-deep/80 backdrop-blur-md text-white text-xs font-bold border border-white/10 flex items-center gap-1.5 shadow-lg">
            {getIcon(institution.id)}
            {institution.shortName}
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-accent-gold text-primary-navy-deep text-xs font-extrabold uppercase tracking-wider shadow-lg">
            Estd. {institution.established}
          </span>
        </div>

        {/* College Name & Tagline Overlay */}
        <div className="absolute bottom-4 left-5 right-5 z-10">
          <span className="text-[10px] font-bold text-accent-gold uppercase tracking-widest block mb-0.5">
            {institution.category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
            {institution.name}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-5">
        <p className="text-xs sm:text-sm text-black leading-relaxed">
          {institution.description}
        </p>

        {/* Quick Stats Separator Grid */}
        <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-center">
          {institution.stats.slice(0, 2).map((st, i) => (
            <div key={i} className={i === 0 ? "border-r border-slate-100" : ""}>
              <span className="block text-xl font-extrabold font-heading text-gradient-gold">
                {st.value}
              </span>
              <span className="text-[10px] uppercase font-bold text-black tracking-wider">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Programs Count */}
        <div className="text-[11px] text-black flex items-center justify-between">
          <span>
            Offering {institution.programs.length} Specialized Programs
          </span>
          <span className="font-semibold text-black uppercase tracking-wider text-[9px] bg-slate-100 px-2 py-0.5 rounded-md">
            UG • PG • Certificate
          </span>
        </div>

        {/* Card Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <Link
            href={`/institutions/${institution.id}`}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-primary-navy text-primary-navy hover:text-white font-bold text-xs transition-colors text-center flex items-center justify-center gap-1 group/btn"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={onOpenApplyModal}
            className="w-full py-2.5 px-4 rounded-xl bg-linear-to-r from-accent-gold to-accent-gold-hover text-primary-navy font-bold text-xs text-center hover:brightness-110 shadow-md cursor-pointer active:scale-95 transition-transform"
          >
            Apply Admission
          </button>
        </div>
      </div>
    </div>
  );
}
