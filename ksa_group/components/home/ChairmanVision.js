import SectionHeader from "@/components/ui/SectionHeader";
import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";

export default function ChairmanVision() {
  return (
    <section className="py-20 bg-[#0A192F] text-white relative overflow-hidden">
      {/* Background Decorative Gold Accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Chairman Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-accent-gold/40 shadow-2xl">
              <Image
                src="/chairman/2.jpeg"
                alt="Thiru K. S. Alagiri - Chairman KSA Group"
                width={1200}
                height={1500}
                className="w-full h-180 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#070F1E] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-primary-navy-deep/80 backdrop-blur-md border border-accent-gold/30">
                <h4 className="text-xl font-bold text-white font-heading">
                  Thiru K. S. Alagiri
                </h4>
                <p className="text-xs text-accent-gold font-semibold">
                  Ex-MP | Founder & Chairman, KSA Group of Institutions
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Chairman&apos;s Vision &amp;
              Philosophy
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              &ldquo;Inspired by Karmaveerar Kamarajar, we believe true
              education is not merely acquiring knowledge, but illuminating
              lives, building noble character, and serving humanity.&rdquo;
            </h2>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Following the visionary ideals of Perunthalaivar Kamarajar—who
                opened the doors of education for all—the KSA Group of
                Institutions was established with a singular mission: to make
                world-class professional training accessible without
                compromising on moral principles and social responsibility.
              </p>
              <p>
                Whether it is a dedicated nurse managing critical care, a
                skilled pharmacist developing life-saving solutions, or a
                nautical cadet navigating ocean vessels across the globe—KSA
                graduates embody the spirit of discipline, excellence, and
                selfless service to the nation.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                  KSA Group Governing Body
                </span>
                <span className="text-sm font-bold text-accent-gold">
                  Carrying Forward Kamarajar&apos;s Educational Legacy
                </span>
              </div>
              <div className="text-right">
                <div className="text-slate-200 font-serif italic text-base sm:text-lg">
                  Thiru K. S. Alagiri
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Ex-MP &amp; Former TNCC President
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
