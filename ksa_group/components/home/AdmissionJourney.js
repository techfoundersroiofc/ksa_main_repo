"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import {
  Search,
  FileEdit,
  CheckSquare,
  Award,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AdmissionJourney({ onOpenApplyModal }) {
  const steps = [
    {
      number: "01",
      title: "Program Discovery",
      desc: "Explore degrees across Nursing, Pharmacy, or Maritime based on your career passion.",
      icon: Search,
    },
    {
      number: "02",
      title: "Online Inquiry / Form",
      desc: "Submit your basic contact and academic credentials online through our quick admission portal.",
      icon: FileEdit,
    },
    {
      number: "03",
      title: "Eligibility Verification",
      desc: "Counselors verify 10+2 marks, medical fitness (for Maritime), and entrance scores.",
      icon: CheckSquare,
    },
    {
      number: "04",
      title: "Seat Allotment & Offer",
      desc: "Receive official provisional admission offer letter and fee structure details.",
      icon: Award,
    },
    {
      number: "05",
      title: "Campus Orientation",
      desc: "Complete document verification, hostel room allocation, and begin your college journey!",
      icon: Compass,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Light-shaded glowing circle orb positioned on the left side */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Admissions Roadmap 2026-27"
          title="Simple, Transparent & Guided"
          highlightTitle="Admission Journey"
          description="Five straightforward steps from discovering your dream program to stepping onto KSA Group campuses."
        />

        {/* Roadmap Grid with Connected Flow */}
        <div className="relative mt-12 mb-14">
          {/* Desktop Connecting Roadmap Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-0.5 bg-linear-to-r from-gold/20 via-gold to-gold/20 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((st, i) => {
              const IconComponent = st.icon;
              return (
                <div
                  key={i}
                  className="group relative p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-gold shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
                >
                  <div>
                    {/* Step Number & Floating Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-gold font-heading tracking-tight">
                        {st.number}
                      </span>
                      <div className="p-3 rounded-2xl bg-primary text-gold group-hover:bg-gold group-hover:text-primary transition-colors shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-heading font-bold text-primary text-base sm:text-lg mb-2 group-hover:text-gold transition-colors">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  {/* Step Progress Accent Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Step {st.number} of 05</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Trigger */}
        <div className="text-center">
          <button
            onClick={onOpenApplyModal}
            className="px-8 py-4 rounded-2xl bg-gold text-primary font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:bg-gold-light active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2.5"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Begin Admission Process Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
