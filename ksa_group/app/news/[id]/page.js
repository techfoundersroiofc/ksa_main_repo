import { notFound } from "next/navigation";
import { NEWS_ITEMS } from "@/lib/data/news";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";

export async function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({
    id: item.id
  }));
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const article = NEWS_ITEMS.find((n) => n.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Article Header */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Newsroom
          </Link>

          <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#0A192F] text-xs font-extrabold uppercase tracking-wider block w-fit mb-4">
            {article.category}
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-800 pt-4">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#D4AF37]" /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#D4AF37]" /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D4AF37]" /> {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Main Article Image & Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-8">
          <img src={article.image} alt={article.title} className="w-full h-[400px] object-cover" />
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base leading-relaxed">
          <p className="font-semibold text-lg text-[#0A192F] leading-snug">
            {article.summary}
          </p>
          
          <div className="whitespace-pre-line leading-relaxed text-sm sm:text-base">
            {article.content}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
          <Link href="/news" className="text-sm font-bold text-[#0A192F] hover:text-[#D4AF37]">
            ← Return to News Index
          </Link>
        </div>
      </div>

    </div>
  );
}
