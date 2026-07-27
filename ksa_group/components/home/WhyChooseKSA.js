import SectionHeader from "@/components/ui/SectionHeader";
import {
  Award,
  Compass,
  ShieldCheck,
  HeartHandshake,
  Zap,
  Globe,
} from "lucide-react";

export default function WhyChooseKSA() {
  const reasons = [
    {
      title: "100% Placement Support",
      description:
        "Dedicated placement cell helping students secure local and entry-level jobs in hospitals, pharmacies, and shipping sectors.",
      icon: Award,
    },
    {
      title: "Practical Training Labs",
      description:
        "Well-equipped practical labs and training rooms for nursing, pharmacy, and maritime studies to gain hands-on skills.",
      icon: Zap,
    },
    {
      title: "Recognized Approvals",
      description:
        "Approved by relevant government and statutory councils to ensure your degree is valid for employment.",
      icon: ShieldCheck,
    },
    {
      title: "Job Guidance & Prep",
      description:
        "Guidance for interviews, communication skills, and basic career training to help you step confidently into the workforce.",
      icon: Globe,
    },
    {
      title: "Comfortable Campus Life",
      description:
        "Clean classrooms, hostel facilities, sports areas, and a supportive environment for student growth.",
      icon: Compass,
    },
    {
      title: "Affordable Fee Structure",
      description:
        "Easy fee payment options, scholarship guidance, and education loan support for deserving students.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface-alt relative overflow-hidden">
      {/* Background Ambient Glow Accent using your theme colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="The KSA Advantage"
          title="Why Choose"
          highlightTitle="KSA Group of Institutions?"
          description="Designed to provide a reliable, grounded educational experience blending solid academic foundations with essential career readiness."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => {
            const IconComp = r.icon;
            return (
              <div
                key={i}
                className="relative p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-accent-gold/50 transition-all duration-500 group flex flex-col justify-between hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Accent Line (Transitions from Navy to Gold on Hover) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-navy via-accent-gold to-primary-navy opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Icon Container with Primary Navy & Gold Hover Effect */}
                  <div className="p-4 rounded-2xl bg-primary-navy text-accent-gold w-fit mb-6 group-hover:bg-accent-gold group-hover:text-primary-navy group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary-navy/10">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-primary-navy mb-2.5 group-hover:text-accent-gold transition-colors">
                    {r.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {r.description}
                  </p>
                </div>

                {/* Bottom card footer accent */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="group-hover:text-primary-navy transition-colors">
                    KSA Advantage
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold group-hover:scale-150 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
