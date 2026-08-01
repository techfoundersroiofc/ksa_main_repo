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

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (props) => (
      <svg
        {...props}
        className={`${props.className} fill-current`}
        viewBox="0 0 24 24"
      >
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (props) => (
      <svg
        {...props}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (props) => (
      <svg
        {...props}
        className={`${props.className} fill-current`}
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (props) => (
      <svg
        {...props}
        className={`${props.className} fill-current`}
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (props) => (
      <svg
        {...props}
        className={`${props.className} fill-current`}
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer({ onOpenApplyModal }) {
  return (
    <footer className="bg-primary-navy-deep text-slate-300 border-t border-accent-gold/20 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Premium Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      {/* Background Subtle Ambient Glows */}
      <div
        className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: KSA Brand Overview (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-xl w-fit"
              aria-label="KSA Group Home"
            >
              <div className="relative p-1.5 bg-white/95 rounded-2xl border border-accent-gold/45 shadow-[0_0_15px_rgba(229,193,88,0.1)] group-hover:scale-105 group-hover:border-accent-gold group-hover:shadow-[0_0_20px_rgba(229,193,88,0.25)] transition-all duration-300 flex items-center justify-center">
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
              <span className="text-xs uppercase font-extrabold text-accent-gold tracking-widest block mb-3">
                Accreditations & Statutory Approvals
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-accent-gold/40 text-[11px] text-slate-300 font-semibold flex items-center gap-1.5 shadow-md hover:shadow-accent-gold/5 hover:bg-slate-900/80 transition-all duration-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-gold drop-shadow-[0_0_4px_rgba(229,193,88,0.4)]" />{" "}
                  INC & TNNC
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-accent-gold/40 text-[11px] text-slate-300 font-semibold flex items-center gap-1.5 shadow-md hover:shadow-accent-gold/5 hover:bg-slate-900/80 transition-all duration-300">
                  <Award className="w-3.5 h-3.5 text-accent-gold drop-shadow-[0_0_4px_rgba(229,193,88,0.4)]" />{" "}
                  PCI & AICTE
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-accent-gold/40 text-[11px] text-slate-300 font-semibold flex items-center gap-1.5 shadow-md hover:shadow-accent-gold/5 hover:bg-slate-900/80 transition-all duration-300">
                  <Globe className="w-3.5 h-3.5 text-accent-gold drop-shadow-[0_0_4px_rgba(229,193,88,0.4)]" />{" "}
                  DGS Grade A1
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-accent-gold/40 text-[11px] text-slate-300 font-semibold flex items-center gap-1.5 shadow-md hover:shadow-accent-gold/5 hover:bg-slate-900/80 transition-all duration-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-gold drop-shadow-[0_0_4px_rgba(229,193,88,0.4)]" />{" "}
                  IMU & MGR Univ
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800/40">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900/40 border border-white/5 text-slate-400 hover:text-accent-gold hover:border-accent-gold/30 hover:bg-slate-900/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_10px_rgba(212,175,55,0.1)]"
                      aria-label={`KSA Group on ${social.name}`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
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
                    className="text-slate-400 hover:text-accent-gold transition-all duration-300 flex items-start gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-accent-gold/60 group-hover:text-accent-gold shrink-0 mt-1 group-hover:translate-x-1.5 transition-all duration-300" />
                    <span className="leading-tight group-hover:translate-x-0.5 transition-transform duration-300">
                      {inst.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/institutions"
                  className="text-xs text-accent-gold hover:text-white transition-colors duration-300 font-bold flex items-center gap-1.5 group"
                >
                  Explore All Campuses{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
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
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-1.5 group py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-gold/0 group-hover:bg-accent-gold/80 transition-all duration-300 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 leading-none">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Directory (Span 3) - Styled as a premium glassmorphic card */}
          <div className="lg:col-span-3">
            <div className="relative p-5 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-accent-gold/25 transition-all duration-500 space-y-4 shadow-2xl shadow-black/20 group/card overflow-hidden">
              {/* Card Ambient Background Glow */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-accent-gold/5 rounded-full blur-xl pointer-events-none group-hover/card:bg-accent-gold/10 transition-all duration-500" />

              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-accent-gold/30 pb-2 inline-block">
                Central Admissions
              </h4>
              <ul className="space-y-4 text-xs text-slate-400 relative z-10">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5 drop-shadow-[0_0_3px_rgba(229,193,88,0.25)]" />
                  <span className="leading-relaxed hover:text-slate-300 transition-colors duration-300">
                    KSA Administrative Headquarters, Knowledge Corridor, South
                    Chennai, Tamil Nadu - 600126
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-accent-gold shrink-0 drop-shadow-[0_0_3px_rgba(229,193,88,0.25)]" />
                  <a
                    href="tel:+914427458900"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +91 44 2745 8900 / 8901
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-accent-gold shrink-0 drop-shadow-[0_0_3px_rgba(229,193,88,0.25)]" />
                  <a
                    href="mailto:admissions@ksagroup.edu.in"
                    className="hover:text-white transition-colors duration-300"
                  >
                    admissions@ksagroup.edu.in
                  </a>
                </li>
              </ul>

              <div className="pt-2 relative z-10">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full py-3 rounded-xl bg-linear-to-r from-accent-gold via-[#E5C158] to-[#B8902A] text-[#0A192F] font-bold text-xs shadow-lg hover:shadow-accent-gold/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#0A192F]" />
                  Inquire Admission Online
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Golden Gradient Divider */}
        <div className="relative w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent blur-[1px]" />
        </div>

        {/* Bottom Bar & Legal Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <p className="flex flex-wrap items-center justify-center gap-1">
            <span>
              © {new Date().getFullYear()} KSA Group of Institutions. All Rights
              Reserved.
            </span>
            <span className="hidden sm:inline text-slate-700 mx-1">|</span>
            <span className="flex items-center">
              Developed with ❤️{" "}
              <a
                href="https://www.foundersroi.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2.5 py-1 rounded-lg bg-linear-to-r from-accent-gold via-[#E5C158] to-[#B8902A] text-[#0A192F] font-extrabold text-[10px] hover:brightness-110 active:scale-95 shadow-[0_0_8px_rgba(229,193,88,0.2)] hover:shadow-[0_0_15px_rgba(229,193,88,0.45)] transition-all duration-300 ml-1.5 tracking-wider uppercase"
              >
                FoundersROI
              </a>
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              Campus Locations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
