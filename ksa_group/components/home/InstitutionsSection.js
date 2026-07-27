import SectionHeader from "@/components/ui/SectionHeader";
import InstitutionCard from "@/components/ui/InstitutionCard";
import { INSTITUTIONS } from "@/lib/data/institutions";
import Link from "next/link";
import { PlusCircle, ArrowRight } from "lucide-react";

export default function InstitutionsSection({ onOpenApplyModal }) {
  return (
    <section className="py-14 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Constituent Colleges"
          title="Explore Our constituent"
          highlightTitle="Colleges"
          description="Explore specialized programs in Healthcare, Pharmacy, and Maritime Nautical Sciences offered by KSA Group's affiliated colleges."
          centered={true}
        />

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {INSTITUTIONS.map((inst) => (
            <InstitutionCard
              key={inst.id}
              institution={inst}
              onOpenApplyModal={onOpenApplyModal}
            />
          ))}
        </div>

        {/* KSA Expansion Vision Callout */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-linear-to-r from-primary-navy-deep via-primary-navy-light to-primary-navy-deep text-white border border-accent-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase font-bold text-accent-gold tracking-wider flex items-center justify-center md:justify-start gap-1.5">
              <PlusCircle className="w-4 h-4" /> Academic Expansion
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              New Academic Programs & Colleges
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We are actively expanding our campuses to include schools of
              Allied Health Sciences, Engineering, and Business Management in
              upcoming academic cycles.
            </p>
          </div>

          <Link
            href="/institutions"
            className="px-6 py-3 rounded-xl bg-accent-gold hover:bg-accent-gold-hover text-primary-navy font-bold text-sm transition-all hover:scale-102 active:scale-98 shrink-0 flex items-center gap-2"
          >
            <span>View All Campuses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
