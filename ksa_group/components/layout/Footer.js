import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe,
  Sparkles,
} from "lucide-react";
import { INSTITUTIONS } from "@/lib/data/institutions";

export default function Footer({ onOpenApplyModal }) {
  return (
    <footer className="bg-primary-navy-deep text-slate-300 border-t border-accent-gold/30 pt-16 pb-8 relative overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: KSA Brand Overview (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-xl w-fit"
              aria-label="KSA Group Home"
            >
              <div className="relative p-1.5 bg-white/95 rounded-xl border border-accent-gold/40 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
                <Image
                  src="/logo/Main_logo.PNG"
                  alt="KSA Group of Institutions Logo"
                  width={120}
                  height={48}
                  className="h-10 sm:h-12 w-auto object-contain"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  KSA <span className="text-accent-gold">GROUP</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  Institutions of Excellence
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-2">
              KSA Group of Institutions serves as the governing digital
              headquarters overseeing world-class education in Nursing,
              Pharmaceutical Sciences, and Maritime Nautical Sciences.
              Empowering future global leaders through rigorous academic
              standards and advanced simulation technology.
            </p>

            {/* Accreditations Seals */}
            <div className="pt-2">
              <span className="text-xs uppercase font-bold text-accent-gold tracking-wider block mb-2.5">
                Accreditations & Statutory Approvals
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-medium flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" /> INC &
                  TNNC
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-medium flex items-center gap-1.5 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-accent-gold" /> PCI & AICTE
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-medium flex items-center gap-1.5 shadow-sm">
                  <Globe className="w-3.5 h-3.5 text-accent-gold" /> DGS Grade
                  A1
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-medium flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" /> IMU &
                  MGR Univ
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Constituent Institutions (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-accent-gold/30 pb-2 inline-block">
              Constituent Colleges
            </h4>
            <ul className="space-y-3 text-sm">
              {INSTITUTIONS.map((inst) => (
                <li key={inst.id}>
                  <Link
                    href={`/institutions/${inst.id}`}
                    className="text-slate-400 hover:text-accent-gold transition-colors flex items-start gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                    <span className="leading-tight">{inst.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/institutions"
                  className="text-xs text-accent-gold hover:underline font-semibold flex items-center gap-1.5"
                >
                  Explore All Campuses <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-accent-gold/30 pb-2 inline-block">
              Quick Portals
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: "About KSA Group", href: "/about" },
                { name: "Academic Programs", href: "/academics" },
                { name: "Admission 2026", href: "/admissions" },
                { name: "Campus Facilities", href: "/facilities" },
                { name: "Photo Gallery", href: "/gallery" },
                { name: "News & Press", href: "/news" },
                { name: "Faculty Careers", href: "/careers" },
                { name: "Search FAQs", href: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors block py-0.5 hover:translate-x-0.5 transform duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Directory (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-accent-gold/30 pb-2 inline-block">
              Central Admissions
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  KSA Administrative Headquarters, Knowledge Corridor, South
                  Chennai, Tamil Nadu - 600126
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-gold shrink-0" />
                <a
                  href="tel:+914427458900"
                  className="hover:text-white transition-colors"
                >
                  +91 44 2745 8900 / 8901
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                <a
                  href="mailto:admissions@ksagroup.edu.in"
                  className="hover:text-white transition-colors"
                >
                  admissions@ksagroup.edu.in
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenApplyModal}
                className="w-full py-3 rounded-xl bg-linear-to-r from-accent-gold via-[#E5C158] to-[#B8902A] text-[#0A192F] font-bold text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0A192F]" />
                Inquire Admission Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} KSA Group of Institutions. All Rights
            Reserved.{" "}
            <span className="hidden sm:inline text-slate-600 mx-1">|</span>{" "}
            Developed with ❤️{" "}
            <a
              href="https://www.foundersroi.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-accent-gold transition-colors font-medium"
            >
              foundersroi
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Campus Locations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
