"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import InstitutionCard from "@/components/ui/InstitutionCard";
import QuickApplyModal from "@/components/ui/QuickApplyModal";
import { INSTITUTIONS, INSTITUTION_CATEGORIES } from "@/lib/data/institutions";
import { cn } from "@/lib/utils";

export default function InstitutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Institutions");
  const [modalOpen, setModalOpen] = useState(false);

  const filteredInstitutions =
    selectedCategory === "All Institutions"
      ? INSTITUTIONS
      : INSTITUTIONS.filter((inst) => inst.category === selectedCategory);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block mb-2">
            Governing Educational Directory
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            KSA Constituent <span className="text-gradient-gold">Colleges</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Select your institution to explore specialized degree programs, research labs, clinical wards, and maritime simulators.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {INSTITUTION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                selectedCategory === cat
                  ? "bg-[#0A192F] text-[#D4AF37] shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInstitutions.map((inst) => (
            <InstitutionCard
              key={inst.id}
              institution={inst}
              onOpenApplyModal={() => setModalOpen(true)}
            />
          ))}
        </div>

      </div>

      <QuickApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
