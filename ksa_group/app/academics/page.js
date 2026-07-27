"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProgramCard from "@/components/ui/ProgramCard";
import QuickApplyModal from "@/components/ui/QuickApplyModal";
import { ALL_PROGRAMS } from "@/lib/data/programs";
import { cn } from "@/lib/utils";

export default function AcademicsPage() {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);

  const levels = ["All", "Undergraduate", "Postgraduate", "Doctoral / Professional", "Diploma", "Certificate"];

  const filteredPrograms =
    selectedLevel === "All"
      ? ALL_PROGRAMS
      : ALL_PROGRAMS.filter((p) => p.level === selectedLevel);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block mb-2">
            Academic Excellence & Curriculum
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Degree & Professional <span className="text-gradient-gold">Programs</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Governed by INC, PCI, AICTE, and DGS statutory regulations. Explore curriculum highlights, duration, and degree levels.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Degree Level Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                selectedLevel === lvl
                  ? "bg-[#0A192F] text-[#D4AF37] shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              )}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <ProgramCard
              key={prog.id}
              program={prog}
              onOpenApplyModal={() => setModalOpen(true)}
            />
          ))}
        </div>

      </div>

      <QuickApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
