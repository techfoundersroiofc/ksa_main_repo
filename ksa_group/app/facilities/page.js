import SectionHeader from "@/components/ui/SectionHeader";
import { FACILITIES } from "@/lib/data/facilities";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block mb-2">
            Infrastructure & Simulators
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Campus <span className="text-gradient-gold">Facilities</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            From 360-degree full mission ship simulators to high-fidelity nursing ICU wards and pharmaceutical R&D cleanrooms.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((fac) => (
            <div key={fac.id} className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-64 w-full">
                  <img src={fac.image} alt={fac.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0A192F] text-[#D4AF37] text-xs font-bold uppercase">
                    {fac.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold text-slate-400 block">{fac.college}</span>
                  <h3 className="text-2xl font-bold text-[#0A192F] font-heading">{fac.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{fac.description}</p>
                  
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">Technical Features</span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {fac.specs.map((sp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{sp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
