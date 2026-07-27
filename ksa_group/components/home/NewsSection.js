import SectionHeader from "@/components/ui/SectionHeader";
import { NEWS_ITEMS } from "@/lib/data/news";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="KSA Newsroom & Media"
          title="Latest Campus News &"
          highlightTitle="Announcements"
          description="Stay updated with research breakthroughs, placement highlights, campus events, and international institutional MoUs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0A192F]/80 backdrop-blur-md text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {item.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#0A192F] font-heading line-clamp-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-4">
                <Link
                  href={`/news/${item.id}`}
                  className="text-xs font-bold text-[#0A192F] group-hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                >
                  <span>Read Full Press Release</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0A192F] text-[#D4AF37] font-bold text-sm hover:bg-[#162C4E] transition-colors"
          >
            <span>Browse Complete Newsroom Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
