"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Nursing", "Pharmacy", "Maritime", "Graduation", "Campus Life"];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      title: "Clinical ICU Simulation Ward",
      category: "Nursing"
    },
    {
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
      title: "360° Transas Ship Simulator Bridge",
      category: "Maritime"
    },
    {
      url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
      title: "Pharma Analytical Instrument Suite",
      category: "Pharmacy"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      title: "Annual Degree Convocation Ceremony",
      category: "Graduation"
    },
    {
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
      title: "Central Digital Resource Library",
      category: "Campus Life"
    },
    {
      url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
      title: "Green Campus Hostels & Sports Ground",
      category: "Campus Life"
    },
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      title: "Pediatric Clinical Nursing Ward",
      category: "Nursing"
    },
    {
      url: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=800",
      title: "Herbal Pharmacognosy Research Lab",
      category: "Pharmacy"
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
      title: "Heavy Marine Engine Machining Bay",
      category: "Maritime"
    }
  ];

  const filteredImages =
    selectedFilter === "All"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block mb-2">
            Visual Media & Campus Life
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            KSA Campus <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            High-resolution visual archives of constituent college laboratories, graduation ceremonies, ship simulators, and campus life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                selectedFilter === f
                  ? "bg-[#0A192F] text-[#D4AF37] shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-900"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                  {img.category}
                </span>
                <h4 className="text-lg font-bold text-white font-heading">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
