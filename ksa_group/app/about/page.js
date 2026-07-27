"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ChairmanVision from "@/components/home/ChairmanVision";
import QuickApplyModal from "@/components/ui/QuickApplyModal";
import { Award, ShieldCheck, CheckCircle2, Users, Compass, BookOpen, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const milestones = [
    { year: "2004", title: "Founding of KSA Group", desc: "Established Kamarajar College of Nursing with first clinical bed tie-up." },
    { year: "2006", title: "Kamarajar College of Pharmacy Established", desc: "Approved by PCI & AICTE with advanced analytical instrumentation laboratories." },
    { year: "2008", title: "Kamarajar College of Maritime Inauguration", desc: "Commissioned 360° Transas Ship Simulator and DGS A1 Outstanding rating." },
    { year: "2018", title: "International NHS UK MoU Signed", desc: "Direct pathway program for clinical nursing placements in London trusts." },
    { year: "2026", title: "Digital Headquarters & Expansion", desc: "Consolidating constituent colleges under unified digital headquarters architecture." }
  ];

  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      
      {/* Hero Header */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block mb-3">
            Digital Headquarters & Governing Body
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white mb-6">
            About <span className="text-gradient-gold">KSA Group of Institutions</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Governing world-class constituent colleges in Nursing, Pharmaceutical Sciences, and Maritime Studies with statutory approvals, hands-on simulation centers, and global career pathways.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="p-3.5 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] w-fit">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Our Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To be recognized globally as a premier educational group that fosters academic rigor, clinical empathy, scientific innovation, and elite maritime discipline across all constituent institutions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#070F1E] text-white border border-[#D4AF37]/30 shadow-xl space-y-4">
            <div className="p-3.5 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] w-fit">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Our Mission</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Provide state-of-the-art simulation infrastructure and hands-on clinical/industrial training.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Maintain 100% statutory compliance and highest accreditation standards.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Nurture ethically grounded professionals who excel in international career placements.</span>
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
            description="Two decades of institutional expansion, research grants, and statutory accreditations."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-extrabold text-[#D4AF37] font-heading shrink-0">
                  {m.year}
                </span>
                <div>
                  <h4 className="font-bold text-lg text-[#0A192F]">{m.title}</h4>
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
