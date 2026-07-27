"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import AdmissionJourney from "@/components/home/AdmissionJourney";
import FAQSection from "@/components/home/FAQSection";
import QuickApplyModal from "@/components/ui/QuickApplyModal";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function AdmissionsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const eligibilityTable = [
    {
      course: "B.Sc Nursing (4 Yrs)",
      college: "Kamarajar Nursing",
      criteria: "10+2 with Physics, Chemistry, Biology & English (Min 50%)",
      fees: "₹1,20,000 / Year",
    },
    {
      course: "General Purpose (GP) Rating (6 Months)",
      college: "Kamarajar Maritime",
      criteria: "10+2 with PCM (40%) & English (40%) + DGS Medical",
      fees: "₹2,25,000 / Year",
    },
  ];

  return (
    <div className="bg-surface-alt min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-accent-gold tracking-wider block mb-2">
            Admissions Session 2026-2027
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Join{" "}
            <span className="text-gradient-gold">
              KSA Group of Institutions
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Clear eligibility criteria, merit-based scholarships, transparent
            fee structures, and immediate online application support.
          </p>

          <div className="mt-8">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-linear-to-r from-[#D4AF37] to-[#B8902A] text-[#0A192F] font-bold text-sm shadow-xl hover:brightness-110 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Submit Online Admission Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Admission Step Timeline */}
      <AdmissionJourney onOpenApplyModal={() => setModalOpen(true)} />

      {/* Course Eligibility & Fee Matrix */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Fee Structure & Criteria"
          title="Eligibility & Tuition Fee"
          highlightTitle="Overview"
          description="Transparent program details for candidate evaluation before applying."
        />

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0A192F] text-accent-gold text-xs uppercase font-bold tracking-wider">
                <th className="p-4 sm:p-5">Program Title</th>
                <th className="p-4 sm:p-5">Constituent College</th>
                <th className="p-4 sm:p-5">Eligibility Criteria</th>
                <th className="p-4 sm:p-5 text-right">Annual Tuition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
              {eligibilityTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#0A192F]">
                    {row.course}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 font-medium">
                    {row.college}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">{row.criteria}</td>
                  <td className="p-4 sm:p-5 text-right font-extrabold text-[#0A192F]">
                    {row.fees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <QuickApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
