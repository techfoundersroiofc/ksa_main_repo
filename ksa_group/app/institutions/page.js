"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import InstitutionCard from "@/components/ui/InstitutionCard";
import QuickApplyModal from "@/components/ui/QuickApplyModal";
import { INSTITUTIONS, INSTITUTION_CATEGORIES } from "@/lib/data/institutions";
import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  Award,
  BookOpen,
  UserCheck,
  Sparkles,
  Target,
  ArrowRight,
  HeartHandshake,
  Briefcase,
  Building2,
  TrendingUp,
} from "lucide-react";

export default function InstitutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Institutions");
  const [modalOpen, setModalOpen] = useState(false);

  const filteredInstitutions =
    selectedCategory === "All Institutions"
      ? INSTITUTIONS
      : INSTITUTIONS.filter((inst) => inst.category === selectedCategory);

  return (
    <div className="bg-surface-alt min-h-screen pb-20">
      {/* Hero Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-800/40 via-[#0A192F]/90 to-[#070F1E] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs font-extrabold uppercase tracking-widest inline-block mb-4 shadow-xs">
            Governing Educational Directory
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white mb-4 tracking-tight leading-tight">
            KSA Constituent{" "}
            <span className="bg-linear-to-r from-[#FFE58F] via-[#E5C158] to-[#B8902A] bg-clip-text text-transparent">
              Colleges
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Governing accredited institutions in Healthcare, Nursing,
            Pharmaceutical Sciences, Polytechnic Engineering, and Maritime
            Nautical Studies.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-accent-gold font-heading">
                4
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Constituent Colleges
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-accent-gold font-heading">
                12+
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Accredited Programs
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-accent-gold font-heading">
                1,260
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Teaching Hospital Beds
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-accent-gold font-heading">
                96%
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Placement Rate
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* 1. ABOUT SECTION */}
        <section
          id="about-trust"
          className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-xl space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3.5 py-1 rounded-full bg-[#0A192F]/5 text-[#0A192F] border border-[#0A192F]/15 text-xs font-extrabold uppercase tracking-widest inline-block">
                About the Institution & Trust
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A192F] font-heading leading-tight">
                Nurturing Competent & Responsible{" "}
                <span className="text-accent-gold">
                  Healthcare & Technical Leaders
                </span>
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Kamarajar Group of Institutions continues to focus on creating a
                learning environment that combines quality education, practical
                training, clinical exposure, research, community engagement,
                and professional collaboration.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200/80 italic">
                &ldquo;By nurturing students across diploma, undergraduate,
                doctoral, and postgraduate programmes, the institution aims to
                develop competent and responsible pharmacy, nursing, engineering,
                and maritime professionals who can contribute meaningfully to
                healthcare, pharmaceutical industries, research, and
                society.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-accent-gold flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A192F] text-sm">
                  Quality Education
                </h4>
                <p className="text-xs text-slate-600">
                  INC, PCI, AICTE, and DGS statutory approved curricula.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-accent-gold flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A192F] text-sm">
                  Clinical & Workshop Exposure
                </h4>
                <p className="text-xs text-slate-600">
                  1,260-bed teaching hospital & 360° visual ship simulator.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-accent-gold flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A192F] text-sm">
                  Research Excellence
                </h4>
                <p className="text-xs text-slate-600">
                  2nd Place Awardee at TN M.G.R. University Research Day.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-accent-gold flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A192F] text-sm">
                  Community Outreach
                </h4>
                <p className="text-xs text-slate-600">
                  Empowering rural & underprivileged women through education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MISSION & VISION SECTION */}
        <section id="vision-mission" className="space-y-8">
          <SectionHeader
            badge="Institutional Philosophy"
            title="Vision & Mission"
            highlightTitle="Framework"
            description="Our foundational commitment to educational excellence, compassionate service, and innovative learning."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-accent-gold uppercase tracking-wider block">
                Our Foundational Vision
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Vision Statement
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To emerge as a distinguished epicenter of educational excellence
                across Healthcare, Pharmacy, Engineering, and Nautical
                Sciences—dedicating ourselves to sculpting ethical,
                compassionate, and globally competitive professionals.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-accent-gold uppercase tracking-wider block">
                Our Strategic Mission
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Mission Statement
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To provide quality education with innovative practice-based
                learning; develop competencies to meet evolving professional
                standards; foster industrial research; and empower rural and
                marginalized youth with life-changing professional skills.
              </p>
            </div>
          </div>
        </section>

        {/* 3. COLLEGES LIST & COURSES OFFERED SECTION */}
        <section id="colleges-grid" className="space-y-10">
          <SectionHeader
            badge="Constituent Directory"
            title="Colleges List & Courses"
            highlightTitle="Offered"
            description="Select a discipline to discover degree offerings, statutory approvals, campus infrastructure, and specialized laboratories."
          />

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {INSTITUTION_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer shadow-xs",
                  selectedCategory === cat
                    ? "bg-[#0A192F] text-accent-gold shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
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
        </section>

        {/* 4. SCOPE OF THE PROGRAM SECTION */}
        <section id="scope-program" className="space-y-8">
          <SectionHeader
            badge="Career Mobility"
            title="Scope of the Program &"
            highlightTitle="Opportunities"
            description="High-demand professional avenues and global employment pathways for KSA graduates."
          />

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-8">
            <div className="max-w-4xl space-y-3">
              <h3 className="text-2xl font-bold font-heading text-accent-gold">
                Global Career Scope Across Disciplines
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Graduates from Kamarajar Group of Institutions gain hands-on clinical and industrial exposure that translates directly into immediate placement in leading hospitals, pharmaceutical firms, engineering MNCs, and international shipping lines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Roles Card */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <div className="flex items-center gap-2.5 text-accent-gold">
                  <Briefcase className="w-5 h-5 shrink-0" />
                  <h4 className="font-bold text-base text-white">
                    Diverse Job Roles
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Clinical Nurse Specialist",
                    "Pharm.D Clinical Pharmacist",
                    "Formulation R&D Scientist",
                    "Automation Technician",
                    "Merchant Navy Officer",
                    "Quality Control Inspector",
                  ].map((role, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 text-xs font-semibold border border-slate-700"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recruiters Card */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <div className="flex items-center gap-2.5 text-accent-gold">
                  <Building2 className="w-5 h-5 shrink-0" />
                  <h4 className="font-bold text-base text-white">
                    Top Hiring Partners
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Apollo Hospitals",
                    "Sun Pharma",
                    "Larsen & Toubro",
                    "Maersk Line",
                    "Hyundai Motors",
                    "Govt Medical Colleges",
                  ].map((rec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 text-accent-gold text-xs font-semibold border border-slate-700"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Package Card */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <div className="flex items-center gap-2.5 text-accent-gold">
                  <TrendingUp className="w-5 h-5 shrink-0" />
                  <h4 className="font-bold text-base text-white">
                    Salary & Growth Scope
                  </h4>
                </div>
                <div className="pt-2">
                  <span className="block text-xs text-slate-400 mb-1">
                    Competitive Starting Salary:
                  </span>
                  <span className="text-lg font-extrabold text-accent-gold">
                    ₹3.5 LPA - ₹9.0 LPA (Domestic) | $800 - $3,500/Mo (Seafaring)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ELIGIBILITY CRITERIA SECTION */}
        <section id="eligibility" className="space-y-8">
          <SectionHeader
            badge="Admission Guidelines"
            title="General Academic Eligibility"
            highlightTitle="Criteria"
            description="Standard statutory entry guidelines for diploma, undergraduate, and professional programs."
          />

          <div className="p-8 sm:p-10 rounded-3xl bg-primary-navy-deep text-white border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Statutory 10+2 Qualifying Criteria
                </h3>
                <p className="text-xs text-accent-gold font-semibold">
                  Governed by AIU, INC, PCI & State Regulatory Bodies
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-8 h-8 rounded-full bg-accent-gold text-[#0A192F] font-extrabold text-sm flex items-center justify-center">
                  1
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">
                  10+2 Qualification
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Candidate shall have passed 10+2 examination conducted by the
                  respective state/central government authorities recognized as
                  equivalent to 10+2 examination by the Association of Indian
                  Universities (AIU) with English as one of the subjects and
                  Physics, Chemistry, Mathematics (P.C.M) and/or Biology (P.C.B
                  / P.C.M.B) as optional subjects individually.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-8 h-8 rounded-full bg-accent-gold text-[#0A192F] font-extrabold text-sm flex items-center justify-center">
                  2
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">
                  Minimum Aggregate Marks
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Candidate must secure a minimum aggregate of{" "}
                  <strong className="text-accent-gold">50% marks</strong> in
                  Physics, Chemistry, and Mathematics (PCM) or Physics,
                  Chemistry, and Biology (PCB).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-8 h-8 rounded-full bg-accent-gold text-[#0A192F] font-extrabold text-sm flex items-center justify-center">
                  3
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">
                  Age Requirement
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Completion of{" "}
                  <strong className="text-accent-gold">17 years of age</strong>{" "}
                  on or before 31st December of the year of admission. (Maritime
                  & ITI relaxation guidelines apply as per statutory norms).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION (CTA) SECTION */}
        <section id="cta" className="p-8 sm:p-12 rounded-3xl bg-linear-to-r from-[#0A192F] via-[#162C4E] to-[#0A192F] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-slate-800">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-extrabold text-accent-gold uppercase tracking-widest block">
              Admission Session 2026-27
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Ready to Join KSA Group of Institutions?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Submit your inquiry today for counseling, campus visits, and seat
              reservation across Nursing, Pharmacy, Polytechnic, and Maritime
              programs.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 rounded-2xl bg-linear-to-r from-accent-gold to-[#B8902A] text-[#0A192F] font-extrabold text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0 flex items-center gap-2"
          >
            Apply Online Now <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>

      <QuickApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
