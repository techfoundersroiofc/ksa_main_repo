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
                src="/college/collegeabout.png"
                alt="KSA Group Campus"
                className="w-full h-112.5 object-cover"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A192F]/60 to-transparent" />
            </div>
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

            <div className="space-y-4 text-black text-sm leading-relaxed">
              <p>
                The Trust employs nearly 100 dedicated staff members and has a
                strong focus on promoting education in the rural sector while
                nurturing young talent for careers in pharmacy, nursing,
                polytechnic, and marine science.
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
                    INC, TNNMC, PCI, AICTE, DoTE & DGS Approved
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <Compass className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0A192F] text-sm">
                    Industry & Hospital MoUs
                  </h4>
                  <p className="text-xs text-slate-500">
                    Govt Cuddalore Medical College Hospital & Top MNCs
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
