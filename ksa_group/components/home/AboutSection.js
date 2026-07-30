import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, Award, Compass } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Campus Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/college/DJI_0542.webp"
                alt="KSA Group Campus"
                className="w-full h-112.5 object-cover"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A192F]/60 to-transparent" />
            </div>

            {/* Overlapping Floating Badge */}
            {/* <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-6 bg-[#0A192F] text-white p-6 rounded-3xl shadow-2xl border border-[#D4AF37]/30 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-white font-heading">
                    20+ Years
                  </span>
                  <span className="text-xs text-slate-400 block">
                    Academic Excellence
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Governing constituent institutions with statutory approvals
                across Healthcare, Pharma & Marine studies.
              </p>
            </div> */}
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="About KSA Group"
              title="A Unified Legacy of"
              highlightTitle="Educational Excellence"
              description="Founded with the vision to create world-class technical and professional institutions, KSA Group of Institutions manages premier constituent colleges designed to bridge academic learning with global industry demands."
              centered={false}
            />

            <div className="space-y-4 text-black  text-sm leading-relaxed">
              <p>
                Our constituent campuses—spanning Nursing, Pharmaceutical
                Sciences, and Maritime Nautical Sciences—feature multi-specialty
                clinical simulation centers, advanced chemical analytics
                laboratories, and 360-degree full-mission ship simulators.
              </p>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <Shield className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0A192F] text-sm">
                    Recognized Standards
                  </h4>
                  <p className="text-xs text-slate-500">
                    INC, PCI, AICTE, DGS & University Affiliated
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <Compass className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0A192F] text-sm">
                    Industry Immersion
                  </h4>
                  <p className="text-xs text-slate-500">
                    Direct hospital wards, pharma R&D & shipping fleets
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl bg-[#0A192F] hover:bg-primary-navy-light text-accent-gold font-bold text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Read Full KSA Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
