import SectionHeader from "@/components/ui/SectionHeader";
import { NEWS_ITEMS } from "@/lib/data/news";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block mb-2">
            KSA Media & Announcements
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Official <span className="text-gradient-gold">Newsroom</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Stay informed with institutional achievements, placement drives, simulator upgrades, and international bilateral MoUs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0A192F]/80 backdrop-blur-md text-[#D4AF37] text-[10px] font-bold uppercase">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {item.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-[#0A192F] font-heading leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <Link
                  href={`/news/${item.id}`}
                  className="text-xs font-bold text-[#0A192F] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
