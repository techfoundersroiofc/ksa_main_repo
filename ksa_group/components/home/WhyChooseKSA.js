import SectionHeader from "@/components/ui/SectionHeader";
import { Award, Compass, ShieldCheck, HeartHandshake, Zap, Globe } from "lucide-react";

export default function WhyChooseKSA() {
  const reasons = [
    {
      title: "100% Placement Assistance",
      description: "Dedicated corporate relations cells with campus recruitment drives by Apollo Hospitals, Sun Pharma, and Maersk Line.",
      icon: Award
    },
    {
      title: "Simulators & High-Tech Labs",
      description: "Train on 360° nautical bridge simulators, ICU patient mannequins, and class 1000 pharmaceutical cleanrooms.",
      icon: Zap
    },
    {
      title: "Statutory Approvals",
      description: "All constituent institutions carry top approvals from Indian Nursing Council, PCI, AICTE, and DGS Grade A1.",
      icon: ShieldCheck
    },
    {
      title: "Global Overseas Pathways",
      description: "Dedicated NCLEX-RN and OET coaching for UK NHS nursing careers, and international merchant fleet berths.",
      icon: Globe
    },
    {
      title: "Holistic Cadet & Student Life",
      description: "Eco-friendly residential campuses, swimming pools, multi-cuisine dining, and 24/7 campus health clinic.",
      icon: Compass
    },
    {
      title: "Transparent & Accessible Fees",
      description: "Merit scholarships, sports quotas, and government education loan assistance for deserving students.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="The KSA Advantage"
          title="Why Choose"
          highlightTitle="KSA Group of Institutions?"
          description="Designed to set the benchmark for modern professional education in India, blending academic rigor with real-world clinical and industrial mastery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => {
            const IconComp = r.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3.5 rounded-2xl bg-[#0A192F] text-[#D4AF37] w-fit mb-6 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-[#0A192F] font-heading mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
