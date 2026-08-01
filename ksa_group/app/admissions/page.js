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

export const ALL_PROGRAMS = [
  {
    id: "bsc-nursing",
    title: "B.Sc Nursing",
    collegeId: "nursing",
    collegeName: "Kamarajar College of Nursing",
    category: "Nursing",
    level: "Undergraduate",
    duration: "4 Years",
    fees: "₹1,20,000 / Year",
    seats: 100,
    rating: "4.9/5",
    eligibility: "10+2 with Physics, Chemistry, Biology & English (Min 50%)",
    highlights: [
      "Clinical simulation labs",
      "Attached multi-specialty hospital",
      "NCLEX-RN coaching",
    ],
    overview:
      "Designed according to Indian Nursing Council (INC) guidelines to produce competent professional nurses capable of working across acute and primary healthcare settings worldwide.",
  },
  {
    id: "gp-rating",
    title: "General Purpose (GP) Rating",
    collegeId: "maritime",
    collegeName: "Kamarajar College of Maritime",
    category: "Maritime",
    level: "Certificate",
    duration: "6 Months",
    fees: "₹1,50,000 Total",
    seats: 50,
    rating: "4.8/5",
    eligibility: "10th Standard with 40% aggregate and 40% in English",
    highlights: [
      "DGS Approved Course",
      "Seamanship training",
      "Merchant vessel placement",
    ],
    overview:
      "Intensive practical seamanship training preparing deck and engine room ratings for merchant vessels.",
  },
  {
    id: "bst",
    title: "Basic STCW Safety Training Course (BST)",
    collegeId: "maritime",
    collegeName: "Kamarajar College of Maritime",
    category: "Maritime",
    level: "Certificate",
    duration: "11 Days",
    fees: "₹15,000 Total",
    seats: 40,
    rating: "4.8/5",
    eligibility: "10th Standard or equivalent + Medical Fitness Certificate",
    highlights: [
      "Mandatory DGS approved STCW course",
      "PST, FPFF, EFA & PSSR modules",
      "Essential for CDC & sailing",
    ],
    overview:
      "Mandatory safety training program for all prospective seafarers, covering PST, FPFF, EFA, and PSSR in accordance with DGS and STCW guidelines.",
  },
  {
    id: "d-pharm",
    title: "Diploma in Pharmacy (D.Pharm)",
    collegeId: "pharmacy",
    collegeName: "Kamarajar College of Pharmacy",
    category: "Pharmacy",
    level: "Diploma",
    duration: "2 Years",
    fees: "₹80,000 / Year",
    seats: 60,
    rating: "4.7/5",
    eligibility:
      "10+2 with Physics, Chemistry & Biology / Mathematics (Min 50%)",
    highlights: [
      "PCI approved syllabus",
      "Hands-on hospital pharmacy training",
      "Well-equipped formulation labs",
    ],
    overview:
      "A foundational course designed to train students in drug dispensing, storage, and pharmacy administration for retail and hospital sectors.",
  },
  {
    id: "b-pharm",
    title: "Bachelor of Pharmacy (B.Pharm)",
    collegeId: "pharmacy",
    collegeName: "Kamarajar College of Pharmacy",
    category: "Pharmacy",
    level: "Undergraduate",
    duration: "4 Years",
    fees: "₹1,40,000 / Year",
    seats: 100,
    rating: "4.9/5",
    eligibility:
      "10+2 with Physics, Chemistry & Biology / Mathematics (Min 50%)",
    highlights: [
      "Advanced R&D instrumentation labs",
      "Industrial formulation internship",
      "100% placement assistance",
    ],
    overview:
      "A comprehensive degree program covering drug synthesis, analysis, clinical pharmacology, and pharmaceutical technology.",
  },
  {
    id: "m-pharm",
    title: "Master of Pharmacy (M.Pharm)",
    collegeId: "pharmacy",
    collegeName: "Kamarajar College of Pharmacy",
    category: "Pharmacy",
    level: "Postgraduate",
    duration: "2 Years",
    fees: "₹1,80,000 / Year",
    seats: 18,
    rating: "4.8/5",
    eligibility:
      "B.Pharm from a PCI-approved institution with minimum 55% marks",
    highlights: [
      "HPLC & FTIR research labs",
      "MOU with active pharmaceutical companies",
      "Patent filing & research paper guidance",
    ],
    overview:
      "An advanced PG course focusing on specialized research in drug delivery systems, pharmacology, and quality assurance.",
  },
  {
    id: "pharm-d",
    title: "Doctor of Pharmacy (Pharm.D)",
    collegeId: "pharmacy",
    collegeName: "Kamarajar College of Pharmacy",
    category: "Pharmacy",
    level: "Doctoral / Professional",
    duration: "5 Years",
    fees: "₹2,50,000 / Year",
    seats: 30,
    rating: "4.9/5",
    eligibility:
      "10+2 with Physics, Chemistry & Biology / Mathematics (Min 50%) or D.Pharm",
    highlights: [
      "Attached multi-specialty clinical residency",
      "Direct patient counseling experience",
      "Advanced pharmacotherapeutics study",
    ],
    overview:
      "A professional doctoral program training clinical pharmacists in therapeutic drug monitoring, hospital rounds, and patient care management.",
  },
];

export default function AdmissionsPage() {
  const [modalOpen, setModalOpen] = useState(false);

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
              {ALL_PROGRAMS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#0A192F]">
                    {row.title} {row.duration && `(${row.duration})`}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 font-medium">
                    {row.collegeName}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    {row.eligibility}
                  </td>
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
