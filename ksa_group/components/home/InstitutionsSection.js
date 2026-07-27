import SectionHeader from "@/components/ui/SectionHeader";
import InstitutionCard from "@/components/ui/InstitutionCard";
import { INSTITUTIONS } from "@/lib/data/institutions";
import Link from "next/link";
import { PlusCircle, ArrowRight } from "lucide-react";

export default function InstitutionsSection({ onOpenApplyModal }) {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Constituent Colleges"
          title="Choose Your Preferred"
          highlightTitle="Institution"
          description="Explore our specialized colleges offering accredited undergraduate, postgraduate, and diploma degrees in Nursing, Pharmacy, and Maritime Nautical Sciences."
        />

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {INSTITUTIONS.map((inst) => (
            <InstitutionCard
              key={inst.id}
              institution={inst}
              onOpenApplyModal={onOpenApplyModal}
            />
          ))}
        </div>

        {/* Future Scalable Architecture Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0A192F] via-[#162C4E] to-[#0A192F] text-white border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider flex items-center justify-center md:justify-start gap-1.5">
              <PlusCircle className="w-4 h-4" /> KSA Expansion Vision
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              New Constituent Colleges Joining KSA Group Soon
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Our digital architecture is engineered to integrate upcoming schools of Allied Health, Engineering, and Management under the unified KSA brand umbrella.
            </p>
          </div>

          <Link
            href="/institutions"
            className="px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A192F] font-bold text-sm transition-colors shrink-0 flex items-center gap-2"
          >
            <span>View All Campuses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
