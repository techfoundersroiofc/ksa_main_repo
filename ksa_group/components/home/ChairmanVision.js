import SectionHeader from "@/components/ui/SectionHeader";
import { Quote, Sparkles } from "lucide-react";

export default function ChairmanVision() {
  return (
    <section className="py-20 bg-[#0A192F] text-white relative overflow-hidden">
      {/* Background Decorative Gold Accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Chairman Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                alt="Chairman KSA Group"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#070F1E]/80 backdrop-blur-md border border-[#D4AF37]/30">
                <h4 className="text-xl font-bold text-white font-heading">
                  Thiru. K. S. Arumugam
                </h4>
                <p className="text-xs text-[#D4AF37] font-semibold">
                  Founder & Chairman, KSA Group of Institutions
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Chairman&apos;s Vision & Philosophy
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              &ldquo;Education is Not Just Acquisition of Knowledge, But the Building of Character, Integrity & Global Competence.&rdquo;
            </h2>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                When we established KSA Group of Institutions, our goal was simple yet profound: to create educational institutions that offer world-class practical training without compromising on moral principles.
              </p>
              <p>
                Whether it is a nurse managing a critical ICU patient, a pharmacist synthesizing life-saving therapeutics, or a nautical cadet navigating an ocean-going vessel through stormy seas—KSA graduates carry the hallmark of discipline, skill, and human empathy.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                  KSA Group Governing Body
                </span>
                <span className="text-sm font-bold text-[#D4AF37]">
                  Building Future Generations Since 2004
                </span>
              </div>
              <div className="text-slate-500 font-serif italic text-lg">
                K.S. Arumugam
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
