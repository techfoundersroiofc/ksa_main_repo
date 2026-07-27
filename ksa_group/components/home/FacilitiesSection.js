"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FACILITIES } from "@/lib/data/facilities";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState(FACILITIES[0]);

  return (
    <section className="py-20 sm:py-28 bg-[#0A192F] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Infrastructure & Labs"
          title="State-of-the-Art Campus"
          highlightTitle="Facilities"
          description="From 360° full-mission ship simulators to high-fidelity nursing ICU wards and pharmaceutical R&D cleanrooms, KSA Group provides unprecedented practical exposure."
          dark={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Facility Select Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {FACILITIES.map((fac) => {
              const isSelected = selectedFacility.id === fac.id;
              return (
                <button
                  key={fac.id}
                  onClick={() => setSelectedFacility(fac)}
                  className={cn(
                    "w-full p-4 rounded-2xl text-left transition-all border cursor-pointer",
                    isSelected
                      ? "bg-[#070F1E] border-[#D4AF37] shadow-xl text-white scale-[1.02]"
                      : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider block">
                        {fac.category}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base font-heading">
                        {fac.title}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                      {fac.college.split(" ")[2] || "KSA"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Featured Facility Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#070F1E] border border-[#D4AF37]/30 overflow-hidden shadow-2xl">
              <div className="relative h-80 w-full">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#D4AF37] text-[#0A192F] text-xs font-bold uppercase tracking-wider">
                  {selectedFacility.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white font-heading">
                  {selectedFacility.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs font-bold uppercase text-[#D4AF37] tracking-wider block mb-2">
                    Key Technical Specifications
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {selectedFacility.specs.map((sp, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#D4AF37] text-[#0A192F] font-bold text-sm hover:bg-[#E5C158] transition-colors"
          >
            <span>Explore All Campus Infrastructure</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
