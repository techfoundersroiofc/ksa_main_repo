import SectionHeader from "@/components/ui/SectionHeader";
import { Award, Briefcase, Globe, TrendingUp } from "lucide-react";

export default function PlacementsSection() {
  const recruiters = [
    { name: "Maersk Line", category: "Maritime Fleet" },
    { name: "Apollo Hospitals", category: "Healthcare Super-Specialty" },
    { name: "Sun Pharma", category: "Pharma R&D" },
    { name: "Fleet Management", category: "Merchant Navy" },
    { name: "Fortis Healthcare", category: "Nursing & ICU" },
    { name: "Cipla Laboratories", category: "Pharmaceuticals" },
    { name: "UK NHS Trust", category: "International Healthcare" },
    { name: "Synergy Marine Group", category: "Ship Management" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0A192F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Global Career Outcomes"
          title="Industry Partners &"
          highlightTitle="Campus Placements"
          description="Our graduates step directly into high-growth global careers across leading hospital networks, multinational pharmaceutical laboratories, and ocean-going shipping fleets."
          dark={true}
        />

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-accent-gold font-heading block mb-1">
              98%
            </span>
            <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              Overall Campus Placement
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-accent-gold font-heading block mb-1">
              ₹14.5 LPA
            </span>
            <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              Highest Officer / Specialist Package
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-accent-gold font-heading block mb-1">
              45+
            </span>
            <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              Annual Corporate Recruiters
            </span>
          </div>
        </div>

        {/* Recruiters Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {recruiters.map((rec, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-accent-gold/50 text-center transition-all flex flex-col justify-center items-center group"
            >
              <span className="text-base font-bold text-white group-hover:text-accent-gold transition-colors font-heading">
                {rec.name}
              </span>
              <span className="text-[11px] text-slate-400 mt-1">
                {rec.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
