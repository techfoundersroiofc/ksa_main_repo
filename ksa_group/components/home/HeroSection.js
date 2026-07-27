"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Search,
  Award,
  ShieldCheck,
  Building2,
  Bell,
} from "lucide-react";
import { INSTITUTIONS } from "@/lib/data/institutions";
import { ALL_PROGRAMS } from "@/lib/data/programs";
import Image from "next/image";

export default function HeroSection({ onOpenApplyModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedInstitution, setSelectedInstitution] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState("all");

  const slides = [
    {
      id: 1,
      tag: "OVER 20 YEARS OF ACADEMIC LEADERSHIP",
      title: "KSA GROUP OF INSTITUTIONS",
      highlight: "DIGITAL HEADQUARTERS",
      subtitle:
        "Governing Premier Accredited Colleges in Healthcare, Pharmacy & Maritime Nautical Sciences.",
      bgImage: "/college/1.JPG",
      badge: "INC • PCI • AICTE • DGS A1 RATED",
      stat: "98% Global Placements",
    },
    {
      id: 2,
      tag: "ELITE MERCHANT NAVY ACADEMY",
      title: "KAMARAJAR COLLEGE OF MARITIME",
      highlight: "NAUTICAL EXCELLENCE",
      subtitle:
        "Featuring 360° Full-Mission Bridge Simulator, Heavy Engine Workshop & DGS Grade A1 Rating.",
      bgImage: "/college/2.JPG",
      badge: "APPROVED BY DGS & IMU AFFILIATED",
      stat: "100% Sailing Sponsorship",
    },
    {
      id: 3,
      tag: "HEALTHCARE & PHARMA RESEARCH",
      title: "NURSING & PHARMACEUTICAL",
      highlight: "CLINICAL MASTERY",
      subtitle:
        "High-Fidelity Simulation ICUs, Advanced HPLC R&D Cleanrooms & UK NHS Placement Pathways.",
      bgImage: "/college/3.JPG",
      badge: "INC, TNNC & PCI APPROVED",
      stat: "1,200+ Clinical Bed Tie-ups",
    },
  ];

  const newsTicker = [
    "Admissions Open for Academic Session 2026-2027 Across All Constituent Colleges.",
    "KSA Group Achieves Record 98% Placement Rate with 45+ Global Recruiters.",
    "Kamarajar College of Maritime Re-Certified with DGS Grade 'A1 Outstanding' Rating.",
    "Kamarajar College of Nursing Signs MoU with UK NHS Healthcare Trust for Direct Global Recruitment.",
  ];
  const [tickerIndex, setTickerIndex] = useState(0);

  // Auto slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Auto news ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % newsTicker.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [newsTicker.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleExploreSearch = (e) => {
    e.preventDefault();
    if (selectedProgram !== "all") {
      const prog = ALL_PROGRAMS.find((p) => p.id === selectedProgram);
      if (prog) {
        window.location.href = `/institutions/${prog.collegeId}#${selectedProgram}`;
      }
    } else if (selectedInstitution !== "all") {
      window.location.href = `/institutions/${selectedInstitution}`;
    } else {
      window.location.href = "/academics";
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0A192F]">
      {/* 1. NEWS UPDATE TICKER BAR (Top Bar like Sathyabama format) */}
      <div className="border-b border-accent-gold/30 text-white text-xs py-2 px-4 flex items-center relative z-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center gap-3">
          <div className="bg-accent-gold text-[#0A192F] px-3 py-1 font-extrabold uppercase tracking-wider text-[11px] flex items-center gap-1.5 shrink-0 rounded-sm">
            <Bell className="w-3.5 h-3.5 animate-bounce" />
            <span>NEWS UPDATE</span>
          </div>

          <div className="flex-1 flex items-center justify-center overflow-hidden h-5 text-white">
            <p className="truncate font-medium text-xs sm:text-sm animate-fadeIn">
              {newsTicker[tickerIndex]}
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-[12px] text-accent-gold shrink-0 font-bold">
            <button
              onClick={onOpenApplyModal}
              className="hover:underline cursor-pointer"
            >
              Direct Application Portal 2026 →
            </button>
          </div>
        </div>
      </div>

      {/* 2. HERO CAROUSEL SLIDER BANNERS */}
      <div className="relative h-130 sm:h-145 lg:h-160 xl:h-250 w-full overflow-hidden">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Image & Dark Gradient Overlay */}
              <Image
                src={slide.bgImage}
                alt={slide.title}
                unoptimized
                width={1920}
                height={1080}
                className="w-full h-full object-cover scale-105 transition-transform duration-10000"
              />
              <div className="absolute inset-0 " />
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] bg-size-[24px_24px] opacity-15" />

              {/* Content Overlay */}
              <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center relative z-20">
                <div className="max-w-3xl space-y-4 sm:space-y-6 pt-4">
                  {/* Top Category Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-gold/50 text-accent-gold text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
                    <Sparkles className="w-4 h-4" />
                    <span>{slide.tag}</span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                    {slide.title} <br />
                    <span className="text-gradient-gold">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-slate-200 text-sm sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </p>

                  {/* Badges & Stats */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700 text-xs font-bold text-slate-200 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-accent-gold" />
                      {slide.badge}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-accent-gold/15 border border-accent-gold/40 text-xs font-extrabold text-accent-gold flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent-gold" />
                      {slide.stat}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={onOpenApplyModal}
                      className="px-7 py-3.5 rounded-xl bg-linear-to-r from-[#D4AF37] via-[#E5C158] to-[#B8902A] text-[#0A192F] font-extrabold text-sm sm:text-base shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Apply Online 2026</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <Link
                      href="/institutions"
                      className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md transition-all"
                    >
                      Constituent Colleges
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Hero Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#0A192F]/60 border border-accent-gold/30 text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Hero Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#0A192F]/60 border border-[#D4AF37]/30 text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators Pagination Dots */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide
                  ? "w-8 bg-[#D4AF37]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 3. QUICK PROGRAM FINDER BAR OVERLAY ("YOUR FUTURE BEGINS AT KSA") */}
      <div className="relative z-30  border-t-2 border-[#D4AF37] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleExploreSearch}
            className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between"
          >
            {/* Left Block: "YOUR FUTURE BEGINS AT KSA" */}
            <div className=" py-4 px-6 lg:py-6 border-b lg:border-b-0 lg:border-r border-slate-800 flex items-center gap-3 shrink-0">
              <div className="w-3 h-8 bg-[#D4AF37] rounded-sm hidden sm:block" />
              <div>
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block">
                  Interactive Course Finder
                </span>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-white uppercase tracking-tight">
                  YOUR FUTURE BEGINS AT KSA
                </h3>
              </div>
            </div>

            {/* Middle Selectors */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 lg:py-0 lg:px-6">
              {/* Institution Selector */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Constituent Institution
                </label>
                <select
                  value={selectedInstitution}
                  onChange={(e) => {
                    setSelectedInstitution(e.target.value);
                    setSelectedProgram("all");
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="all">All Constituent Colleges</option>
                  {INSTITUTIONS.map((inst) => (
                    <option key={inst.id} value={inst.id}>
                      {inst.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Selector */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Course / Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="all">All Courses / Programs</option>
                  {(selectedInstitution === "all"
                    ? ALL_PROGRAMS
                    : ALL_PROGRAMS.filter(
                        (p) => p.collegeId === selectedInstitution,
                      )
                  ).map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Action Button: EXPLORE → */}
            <div className="p-4 lg:py-0 lg:pl-0 shrink-0">
              <button
                type="submit"
                className="w-full lg:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8902A] text-[#0A192F] font-extrabold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4 text-[#0A192F]" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 4. STICKY SIDE ADMISSION ENQUIRY TAB (Right edge float like Sathyabama format) */}
      <button
        onClick={onOpenApplyModal}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-[#D4AF37] to-[#B8902A] text-[#0A192F] font-extrabold text-xs tracking-wider uppercase py-4 px-2.5 rounded-l-2xl shadow-2xl hover:scale-105 transition-all cursor-pointer flex flex-col items-center gap-2 border-l border-t border-b border-[#0A192F]/30"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <div className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 rotate-90" />
          <span>ADMISSION ENQUIRY 2026</span>
        </div>
      </button>
    </div>
  );
}
