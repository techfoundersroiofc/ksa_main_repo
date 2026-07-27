import { use } from "react";
import { notFound } from "next/navigation";
import { INSTITUTIONS } from "@/lib/data/institutions";
import ProgramCard from "@/components/ui/ProgramCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  return INSTITUTIONS.map((inst) => ({
    id: inst.id,
  }));
}

export default async function InstitutionDetailPage({ params }) {
  const { id } = await params;
  const institution = INSTITUTIONS.find((i) => i.id === id);

  if (!institution) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* College Hero Section */}
      <section className="relative bg-[#0A192F] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={institution.heroImage}
            alt={institution.name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#070F1E] via-[#0A192F]/90 to-[#0A192F]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-accent-gold text-[#0A192F] text-xs font-extrabold uppercase tracking-wider">
              {institution.shortName} • Estd. {institution.established}
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight">
              {institution.name}
            </h1>
            <p className="text-accent-gold text-lg sm:text-xl font-semibold">
              {institution.tagline}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {institution.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-accent-gold" />{" "}
                {institution.affiliation}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-accent-gold" />{" "}
                {institution.accreditation}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary-navy-deep py-10 border-b border-accent-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {institution.stats.map((st, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800"
              >
                <span className="block text-2xl sm:text-3xl font-extrabold text-accent-gold font-heading">
                  {st.value}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dean Message & Leadership */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <Image
              src={institution.dean.avatar}
              alt={institution.dean.name}
              width={1920}
              height={1080}
              className="w-full h-64 sm:h-72 object-cover rounded-2xl border-2 border-accent-gold"
            />
          </div>
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs uppercase font-bold text-accent-gold tracking-wider block">
              Institutional Leadership Message
            </span>
            <h3 className="text-2xl font-bold text-[#0A192F] font-heading">
              {institution.dean.name}
            </h3>
            <span className="text-xs font-semibold text-slate-500 block">
              {institution.dean.designation}
            </span>
            <p className="text-slate-700 text-sm italic leading-relaxed">
              &ldquo;{institution.dean.message}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Offered Degree Programs */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Curriculum & Programs"
            title="Degree Programs Offered at"
            highlightTitle={institution.shortName}
            description="Explore course syllabi, duration, intake capacity, and eligibility guidelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {institution.programs.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3 scroll-mt-24"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0A192F]/5 text-[#0A192F] text-xs font-bold uppercase">
                    {prog.level}
                  </span>
                  <span className="text-xs font-semibold text-accent-gold">
                    Intake: {prog.intake} Seats
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#0A192F] font-heading">
                  {prog.name}
                </h4>
                {prog.duration && (
                  <p className="text-xs text-slate-500 font-medium">
                    Duration: {prog.duration}
                  </p>
                )}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {prog.description}
                </p>
                <div className="p-3 rounded-xl bg-slate-50 text-xs text-slate-700">
                  <strong>Eligibility:</strong> {prog.eligibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Contact Directory */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#0A192F] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white font-heading mb-1">
              Contact {institution.shortName} Admission Office
            </h4>
            <p className="text-xs text-slate-300">
              {institution.contact.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-accent-gold">
            <span className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
              📞 {institution.contact.phone}
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
              ✉️ {institution.contact.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
