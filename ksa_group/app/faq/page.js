"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQS, FAQ_CATEGORIES } from "@/lib/data/faqs";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All FAQs");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "All FAQs" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block mb-2">
            Help Center & Knowledge Base
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Instant answers about admissions, course accreditations, campus hostels, entrance exams, and fee structures.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. Nursing, Hostels, DGS, Fees)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                activeCategory === cat
                  ? "bg-[#0A192F] text-[#D4AF37] shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className={cn(
                    "rounded-2xl border transition-all overflow-hidden",
                    isOpen
                      ? "bg-white border-[#D4AF37] shadow-md"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-base sm:text-lg text-[#0A192F] font-heading flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0",
                        isOpen && "rotate-180 text-[#D4AF37]"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>

    </div>
  );
}
