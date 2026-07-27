"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQS } from "@/lib/data/faqs";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Got Questions?"
          title="Frequently Asked"
          highlightTitle="Questions"
          description="Find quick answers regarding 2026 admissions, entrance eligibility, campus hostels, and degree accreditations."
        />

        <div className="space-y-4 mb-12">
          {FAQS.slice(0, 5).map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all overflow-hidden",
                  isOpen
                    ? "bg-slate-50 border-[#D4AF37] shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
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
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A192F] hover:text-[#D4AF37] transition-colors"
          >
            <span>Have More Questions? Visit Searchable FAQ Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
