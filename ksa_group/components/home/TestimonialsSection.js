import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Voices of Success"
          title="What Our Alumni & Parents"
          highlightTitle="Say About KSA"
          description="Real stories from graduates sailing worldwide, serving in international healthcare trusts, and pioneering pharma research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((tm) => (
            <div
              key={tm.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(tm.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#D4AF37]/30" />

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{tm.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-4 mt-6">
                <img
                  src={tm.avatar}
                  alt={tm.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-bold text-[#0A192F] text-base font-heading">
                    {tm.name}
                  </h4>
                  <span className="text-xs text-slate-500 block">
                    {tm.role}
                  </span>
                  <span className="text-[11px] font-semibold text-[#D4AF37]">
                    {tm.college} • {tm.program}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
