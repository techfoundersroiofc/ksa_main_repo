"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  Stethoscope,
  Pill,
  Anchor,
  Sparkles,
  ArrowRight,
  GraduationCap,
  PhoneCall,
} from "lucide-react";
import { INSTITUTIONS } from "@/lib/data/institutions";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar({ onOpenApplyModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change & lock background scroll when mobile menu is open
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setMegaMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const getInstitutionIcon = (id) => {
    switch (id) {
      case "nursing":
        return <Stethoscope className="w-4 h-4 text-rose-400" />;
      case "pharmacy":
        return <Pill className="w-4 h-4 text-emerald-400" />;
      case "maritime":
        return <Anchor className="w-4 h-4 text-sky-400" />;
      default:
        return <Building2 className="w-4 h-4 text-accent-gold" />;
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About KSA", href: "/about" },
    { name: "Institutions", href: "/institutions", hasMega: true },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-primary-navy/95 backdrop-blur-md border-b border-accent-gold/20 shadow-2xl py-2"
          : "bg-primary-navy py-3 border-b border-white/10",
      )}
    >
      {/* Optimized max-width container with balanced padding for laptops */}
      <div className="max-w-7xl mx-auto px-2 lg:px-0 w-full">
        <div className="flex items-center justify-between gap-2">
          {/* Logo with proper Semantic SEO structure */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-xl"
            aria-label="KSA Group of Institutions Home"
          >
            <div className="relative p-1 bg-white/95 rounded-xl border border-accent-gold/40 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <Image
                src="/logo/Main_logo.PNG"
                alt="KSA Group of Institutions Official Logo"
                className="h-8 sm:h-9 w-auto object-contain"
                width={90}
                height={90}
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1 leading-none">
                KSA{" "}
                <span className="text-accent-gold font-semibold">GROUP</span>
              </span>
              <span className="text-[7px] sm:text-[8px] text-slate-300 uppercase tracking-widest font-medium mt-0.5">
                Institutions of Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - finely spaced for all laptop resolutions */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasMega) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={cn(
                        "flex items-center gap-1 px-2 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold",
                        isActive || pathname.startsWith("/institutions")
                          ? "text-accent-gold bg-white/10"
                          : "text-slate-200 hover:text-accent-gold hover:bg-white/5",
                      )}
                      aria-expanded={megaMenuOpen}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          megaMenuOpen && "rotate-180 text-accent-gold",
                        )}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {megaMenuOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-135 z-50">
                        <div className="bg-primary-navy-deep border border-accent-gold/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-2.5">
                            <span className="text-[11px] uppercase font-bold text-accent-gold tracking-wider flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5" /> Constituent
                              Institutions
                            </span>
                            <Link
                              href="/institutions"
                              onClick={() => setMegaMenuOpen(false)}
                              className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                            >
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-1 gap-2">
                            {INSTITUTIONS.map((inst) => (
                              <Link
                                key={inst.id}
                                href={`/institutions/${inst.id}`}
                                onClick={() => setMegaMenuOpen(false)}
                                className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-accent-gold/30 transition-all"
                              >
                                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 group-hover/item:border-accent-gold/40 shrink-0">
                                  {getInstitutionIcon(inst.id)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-xs font-semibold text-white group-hover/item:text-accent-gold transition-colors truncate">
                                      {inst.name}
                                    </h4>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-accent-gold/10 text-accent-gold shrink-0">
                                      {inst.shortName}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                    {inst.tagline}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-2 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold",
                    isActive
                      ? "text-accent-gold bg-white/10"
                      : "text-slate-200 hover:text-accent-gold hover:bg-white/5",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-linear-to-r from-accent-gold via-[#E5C158] to-[#B8902A] text-[#0A192F] font-bold text-xs xl:text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0A192F]" />
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Action Elements */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenApplyModal}
              className="px-3 py-1.5 rounded-lg bg-linear-to-r from-accent-gold to-[#B8902A] text-[#0A192F] text-xs font-bold shadow-md active:scale-95 transition-transform"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-accent-gold" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Redesigned Premium Mobile Full-Screen/Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14.25 bottom-0 bg-primary-navy-deep/98 backdrop-blur-2xl border-t border-slate-800 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top duration-300">
          <div className="p-4 sm:p-5 flex flex-col gap-4 pb-10">
            {/* Quick Action Banner Header inside Mobile Drawer */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-linear-to-r from-accent-gold/15 to-transparent border border-accent-gold/30">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-accent-gold text-primary-navy">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    Admissions Open 2026
                  </div>
                  <div className="text-[10px] text-slate-300">
                    Secure your seat today
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="px-3 py-1.5 rounded-lg bg-accent-gold text-primary-navy font-bold text-xs shadow"
              >
                Apply Online
              </button>
            </div>

            {/* Core Links Grid / List */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold px-3 pb-1">
                Explore Navigation
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors border text-center sm:text-left",
                        isActive
                          ? "bg-accent-gold/20 border-accent-gold/40 text-accent-gold"
                          : "bg-slate-900/40 border-slate-800/80 text-slate-200 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Constituent Colleges Section in Mobile */}
            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold px-3 block mb-2">
                Constituent Institutions
              </span>
              <div className="flex flex-col gap-2">
                {INSTITUTIONS.map((inst) => (
                  <Link
                    key={inst.id}
                    href={`/institutions/${inst.id}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-accent-gold/50 shrink-0">
                        {getInstitutionIcon(inst.id)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white group-hover:text-accent-gold transition-colors truncate">
                          {inst.name}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {inst.tagline}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-accent-gold transition-colors shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Call Action Bar inside Mobile Drawer */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-accent-gold" /> Need
                  Assistance?
                </span>
                <a
                  href="tel:+914427458900"
                  className="text-accent-gold font-semibold hover:underline"
                >
                  Contact Admissions
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-accent-gold via-[#E5C158] to-[#B8902A] text-[#0A192F] font-bold text-center shadow-xl text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4 text-[#0A192F]" /> Start Admission
                Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
