"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Nursing",
    "Pharmacy",
    "Maritime",
    "Graduation",
    "Campus Life",
  ];

  const images = [
    {
      url: "/faclities/5.JPG",
      title: "Clinical ICU Simulation Ward",
      category: "Nursing",
    },
    {
      url: "/faclities/4.jpg",
      title: "360° Transas Ship Simulator Bridge",
      category: "Maritime",
    },
    {
      url: "/college/3.jpg",
      title: "Training Center",
      category: "Maritime",
    },
    {
      url: "/college/DJI_0542.webp",
      title: "Annual Degree Convocation Ceremony",
      category: "Graduation",
    },
    {
      url: "/college/0M5A8639.JPG",
      title: "Central Digital Resource Library",
      category: "Campus Life",
    },
    {
      url: "/faclities/7.JPG",
      title: "Eco-Friendly Campus & Sports Center",
      category: "Campus Life",
    },
    {
      url: "/college/1.JPG",
      title: "Students Life",
      category: "Nursing",
    },
    {
      url: "/college/0M5A8793.JPG",
      title: "Herbal Pharmacognosy Research Lab",
      category: "Pharmacy",
    },
    {
      url: "/faclities/6.JPG",
      title: "Heavy Marine Engine Machining Bay",
      category: "Maritime",
    },
  ];

  const filteredImages =
    selectedFilter === "All"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  return (
    <div className="bg-surface-alt min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-primary-navy text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-accent-gold tracking-wider block mb-2">
            Visual Media & Campus Life
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            KSA Campus <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            High-resolution visual archives of constituent college laboratories,
            graduation ceremonies, ship simulators, and campus life.
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
                  ? "bg-primary-navy text-accent-gold shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200",
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
              <Image
                src={img.url}
                alt={img.title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-navy/90 via-primary-navy/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider block">
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
