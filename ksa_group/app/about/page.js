"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ChairmanVision from "@/components/home/ChairmanVision";
import QuickApplyModal from "@/components/ui/QuickApplyModal";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const milestones = [
    {
      year: "2017",
      title: "D.Pharm – Diploma in Pharmacy",
      desc: "Equivalent qualification recognized under the applicable Pharmacy Council of India and State Government regulations.",
    },
    {
      year: "2020",
      title: "B.Pharm – Bachelor of Pharmacy",
      desc: "PCI-approved degree program offering comprehensive pharmaceutical education.",
    },
    {
      year: "2025",
      title: "Pharm.D – Doctor of Pharmacy",
      desc: "Advanced clinical pharmacy program initiated under KSA Educational and Charitable Trust.",
    },
    {
      year: "2013",
      title: "Diploma in Electrical & Electronics Engg.",
      desc: "Diploma program recognized by competent state and technical education authorities.",
    },
    {
      year: "2013",
      title: "Diploma in Mechanical Engg.",
      desc: "Comprehensive engineering curriculum preparing students for industry requirements.",
    },
    {
      year: "2013",
      title: "Diploma in Automobile Engg.",
      desc: "Specialized technical training in modern automotive design and mechanics.",
    },
    {
      year: "2021",
      title: "Bachelor of Science in Nursing (B.Sc Nursing)",
      desc: "Approved by Tamil Nadu Nurses & Midwives Council (TNNMC) and Indian Nursing Council (INC), New Delhi.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      {/* Hero Header */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase font-bold text-accent-gold tracking-wider block mb-3">
            KSA Educational and Charitable Trust
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white mb-6">
            About{" "}
            <span className="text-gradient-gold">
              KSA Group of Institutions
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Governing premier constituent colleges in Nursing (Chidambaram),
            Pharmacy (Chidambaram), Polytechnic Engineering, and Maritime Studies
            with statutory approvals, clinical hospital MoUs, and career
            pathways.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="p-3.5 rounded-2xl bg-accent-gold/20 text-accent-gold w-fit">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Our Vision
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To become Pioneers in Pharmacy Education and Research by preparing
              skilled, ethical and compassionate pharmacists who can meet global
              healthcare needs.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-primary-navy-deep text-white border border-accent-gold/30 shadow-xl space-y-4">
            <div className="p-3.5 rounded-2xl bg-accent-gold/20 text-accent-gold w-fit">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Our Mission
            </h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span>
                  To provide quality Pharmacy education with innovative learning
                  and practices.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span>
                  To develop competencies among the students and empower them to
                  meet the changing needs of the profession
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span>
                  Innovative Research with an Industrial Focus. Practicing
                  Pharmacy approach at the community level through
                  pharmaceutical health care.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chairman Vision Section */}
      <ChairmanVision />

      {/* Milestones Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Historical Roadmap"
            title="Our Journey of"
            highlightTitle="Academic Growth"
            description="A continuous legacy of constituent college expansion, university awards, and statutory recognitions."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <span className="text-2xl font-extrabold text-accent-gold font-heading shrink-0">
                  {m.year}
                </span>
                <div>
                  <h4 className="font-bold text-lg text-[#0A192F]">
                    {m.title}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
