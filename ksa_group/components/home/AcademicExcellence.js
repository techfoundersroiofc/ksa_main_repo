"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProgramCard from "@/components/ui/ProgramCard";
import { ALL_PROGRAMS } from "@/lib/data/programs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AcademicExcellence({ onOpenApplyModal }) {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Nursing", "Pharmacy", "Maritime"];

  const filteredPrograms =
    activeTab === "All"
      ? ALL_PROGRAMS
      : ALL_PROGRAMS.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 sm:py-28 bg-surface-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Degree Catalog"
          title="World-Class Industry-Aligned"
          highlightTitle="Academic Programs"
          description="Explore our range of undergraduate, doctoral, postgraduate, and professional diploma degrees accredited by statutory bodies."
        />

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                activeTab === cat
                  ? "bg-[#0A192F] text-accent-gold shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200",
              )}
            >
              {cat} Programs
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPrograms.slice(0, 6).map((prog) => (
            <ProgramCard
              key={prog.id}
              program={prog}
              onOpenApplyModal={onOpenApplyModal}
            />
          ))}
        </div>

        {/* View All Programs Link */}
        <div className="text-center">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0A192F] text-accent-gold font-bold text-sm hover:bg-primary-navy-light transition-colors shadow-md"
          >
            <span>View Full Curriculum & Syllabus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
