import CounterStat from "@/components/ui/CounterStat";
import { Award, Users, ShieldCheck, Building2 } from "lucide-react";

export default function QuickStatsSection() {
  const stats = [
    {
      value: "98%",
      label: "Placement Rate",
      subtitle: "Secured with top MNCs, NHS UK, & Shipping Lines",
      icon: Award
    },
    {
      value: "15,000+",
      label: "Global Alumni",
      subtitle: "Professionals serving across 30+ countries",
      icon: Users
    },
    {
      value: "50+",
      label: "Advanced Labs",
      subtitle: "360° Ship Simulator, ICU Ward, HPLC Pharma R&D",
      icon: ShieldCheck
    },
    {
      value: "Grade A1",
      label: "Accreditation & Rating",
      subtitle: "INC, PCI, AICTE & DGS Outstanding Certification",
      icon: Building2
    }
  ];

  return (
    <section className="py-12 bg-[#070F1E] border-y border-[#D4AF37]/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, i) => (
            <CounterStat key={i} {...st} dark={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
