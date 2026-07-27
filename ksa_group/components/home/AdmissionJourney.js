import SectionHeader from "@/components/ui/SectionHeader";
import { Search, FileEdit, CheckSquare, Award, Compass, ArrowRight } from "lucide-react";

export default function AdmissionJourney({ onOpenApplyModal }) {
  const steps = [
    {
      number: "01",
      title: "Program Discovery",
      desc: "Explore degrees across Nursing, Pharmacy, or Maritime based on your career passion.",
      icon: Search
    },
    {
      number: "02",
      title: "Online Inquiry / Form",
      desc: "Submit your basic contact and academic credentials online through our quick admission portal.",
      icon: FileEdit
    },
    {
      number: "03",
      title: "Eligibility Verification",
      desc: "Counselors verify 10+2 marks, medical fitness (for Maritime), and entrance scores.",
      icon: CheckSquare
    },
    {
      number: "04",
      title: "Seat Allotment & Offer",
      desc: "Receive official provisional admission offer letter and fee structure details.",
      icon: Award
    },
    {
      number: "05",
      title: "Campus Orientation",
      desc: "Complete document verification, hostel room allocation, and begin your college journey!",
      icon: Compass
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Admissions Roadmap 2026-27"
          title="Simple & Transparent"
          highlightTitle="Admission Journey"
          description="Five straightforward steps from discovering your dream program to stepping onto KSA Group campuses."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((st, i) => {
            const IconComponent = st.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#D4AF37] transition-all relative flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-[#D4AF37] font-heading">
                      {st.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#0A192F] text-white group-hover:bg-[#D4AF37] group-hover:text-[#0A192F] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="font-bold text-[#0A192F] text-lg mb-2 font-heading">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenApplyModal}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8902A] text-[#0A192F] font-extrabold text-sm shadow-lg hover:brightness-110 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Begin Admission Process Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
