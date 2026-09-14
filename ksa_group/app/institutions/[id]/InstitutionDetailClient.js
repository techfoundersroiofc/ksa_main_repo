"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import QuickApplyModal from "@/components/ui/QuickApplyModal";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  Briefcase,
  Building2,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Quote,
  Sparkles,
  Target,
  ArrowRight,
  GraduationCap,
  Users,
  BadgeCheck,
  Compass,
  Search,
  BookOpen,
} from "lucide-react";

export default function InstitutionDetailClient({ institution }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [facultySearch, setFacultySearch] = useState("");

  const filteredFaculty = institution.facultyList
    ? institution.facultyList.filter(
        (f) =>
          f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
          f.designation.toLowerCase().includes(facultySearch.toLowerCase()) ||
          f.qualification.toLowerCase().includes(facultySearch.toLowerCase()),
      )
    : [];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. Hero Section */}
      <section className="relative bg-[#0A192F] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={institution.heroImage}
            alt={institution.name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#070F1E] via-[#0A192F]/90 to-[#0A192F]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-accent-gold text-[#0A192F] text-xs font-extrabold uppercase tracking-wider inline-block">
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
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-accent-gold shrink-0" />
                {institution.affiliation}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800 shadow-xs">
                <Award className="w-4 h-4 text-accent-gold shrink-0" />
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
                className="text-center p-5 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-md hover:border-accent-gold/40 transition-colors"
              >
                <span className="block text-2xl sm:text-4xl font-extrabold text-accent-gold font-heading mb-1">
                  {st.value}
                </span>
                <span className="text-xs text-slate-300 font-medium tracking-wide">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. About the College */}
      <section
        id="about"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <SectionHeader
          badge={`About ${institution.shortName}`}
          title="Excellence & Institutional"
          highlightTitle="Heritage"
          description={`Discover the vision, academic environment, and student growth at ${institution.name}.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] font-heading leading-tight">
              {institution.about?.heading || `Welcome to ${institution.name}`}
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {institution.about?.paragraph1 || institution.description}
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {institution.about?.paragraph2}
            </p>

            {/* Key Badges */}
            {institution.about?.keyBadges && (
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                {institution.about.keyBadges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-[#0A192F]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights List */}
            {institution.highlights && (
              <ul className="space-y-2.5 pt-2">
                {institution.highlights.map((hl, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-gold mt-1.5 shrink-0" />
                    <span className="font-medium">{hl}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
              <Image
                src={institution.campusImage}
                alt={institution.name}
                width={800}
                height={600}
                className="w-full h-96 sm:h-112 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A192F]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-[#0A192F]">
                <span className="text-xs font-extrabold uppercase text-accent-gold block mb-1">
                  Accredited & Statutory Approved
                </span>
                <p className="text-xs font-semibold text-slate-800">
                  {institution.accreditation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section id="vision-mission" className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Institutional Philosophy"
            title="Vision, Mission & Core"
            highlightTitle="Values"
            description="Guiding principles that inspire academic excellence and moral leadership across our student community."
          />

          {/* Motto Banner */}
          {institution.motto && (
            <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-r from-slate-900 via-[#0A192F] to-slate-900 border border-accent-gold/40 text-center relative overflow-hidden shadow-xl">
              <Quote className="w-12 h-12 text-accent-gold/20 absolute -top-2 left-6 pointer-events-none" />
              <span className="text-xs uppercase font-extrabold text-accent-gold tracking-widest block mb-2">
                Institutional Motto
              </span>
              <p className="text-xl sm:text-3xl font-heading font-extrabold text-white tracking-wide">
                &ldquo;{institution.motto}&rdquo;
              </p>
            </div>
          )}

          {/* Vision & Mission Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-accent-gold/40 transition-all flex flex-col justify-between space-y-4 shadow-lg group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase font-extrabold text-accent-gold tracking-wider block mb-2">
                  Our Strategic Vision
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mb-4">
                  Vision Statement
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {institution.vision}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-accent-gold/40 transition-all flex flex-col justify-between space-y-4 shadow-lg group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase font-extrabold text-accent-gold tracking-wider block mb-2">
                  Our Academic Commitment
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mb-4">
                  Mission Statement
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {institution.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Recognitions & Affiliations Section (When Available) */}
      {institution.recognitions && (
        <section
          id="recognitions"
          className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
        >
          <SectionHeader
            badge="Accredited. Approved. Trusted."
            title="Recognitions & Statutory"
            highlightTitle="Affiliations"
            description="Our academic programs operate in full accordance with apex national and state healthcare councils."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {institution.recognitions.map((rec, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-md space-y-3 hover:border-accent-gold/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-accent-gold flex items-center justify-center font-bold shrink-0">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A192F] text-base sm:text-lg">
                      {rec.title}
                    </h4>
                    {rec.subtitle && (
                      <span className="text-xs font-semibold text-accent-gold block">
                        {rec.subtitle}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {rec.description}
                </p>
              </div>
            ))}
          </div>

          {/* Why These Recognitions Matter */}
          {institution.whyRecognitionsMatter && (
            <div className="p-8 sm:p-10 rounded-3xl bg-primary-navy-deep text-white border border-slate-800 shadow-2xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-accent-gold text-center">
                Why These Recognitions Matter for Your Career
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                {institution.whyRecognitionsMatter.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-gold/20 text-accent-gold font-bold text-xs flex items-center justify-center mb-2">
                      0{idx + 1}
                    </div>
                    <h4 className="font-bold text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 5. Why Choose Institution (Strengths) */}
      {institution.whyChooseKCON && (
        <section
          id="why-choose"
          className="py-20 bg-slate-50 border-y border-slate-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeader
              badge={`Why Choose ${institution.shortName}`}
              title="14 Core Strengths & Campus"
              highlightTitle="Advantages"
              description={`Key campus features, security standards, and academic infrastructure at ${institution.name}.`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {institution.whyChooseKCON.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-2 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2.5 text-[#0A192F]">
                    <CheckCircle2 className="w-5 h-5 text-accent-gold shrink-0" />
                    <h4 className="font-bold text-sm sm:text-base text-[#0A192F]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Committees & Associations (When Available) */}
      {institution.committees && (
        <section
          id="committees"
          className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
        >
          <SectionHeader
            badge="Nurturing Growth Beyond the Classroom"
            title="College Committees & Student"
            highlightTitle="Associations"
            description="Active governance cells, student clubs, and extracurricular societies enriching student life."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Committees Grid */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-accent-gold flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] font-heading">
                  Institutional Committees & Cells
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {institution.committees.map((com, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                    <span>{com}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Associations */}
            {institution.associations && (
              <div className="lg:col-span-5 p-8 rounded-3xl bg-primary-navy-deep text-white border border-slate-800 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/20 text-accent-gold flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Student Associations & Clubs
                  </h3>
                </div>
                <div className="space-y-3 pt-2">
                  {institution.associations.map((asc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-bold text-accent-gold"
                    >
                      <Sparkles className="w-4 h-4 shrink-0 text-accent-gold" />
                      <span>{asc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. Courses Offered */}
      <section id="courses" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Curriculum & Programs"
            title="Courses Offered at"
            highlightTitle={institution.shortName}
            description="Explore course syllabi, duration, intake capacity, and eligibility guidelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {institution.programs.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-5 scroll-mt-28 flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-[#0A192F] text-accent-gold text-xs font-extrabold uppercase tracking-wider">
                      {prog.level}
                    </span>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                      Intake: {prog.intake} Seats
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0A192F] font-heading leading-tight">
                    {prog.name}
                  </h3>

                  {prog.duration && (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-gold">
                      <Clock className="w-4 h-4" /> Duration: {prog.duration}
                    </div>
                  )}

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 space-y-1">
                    <strong className="text-[#0A192F] block font-bold text-sm mb-1">
                      Eligibility Requirements:
                    </strong>
                    <p className="leading-relaxed text-slate-700">
                      {prog.eligibility}
                    </p>
                  </div>

                  {prog.highlights && (
                    <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                      {prog.highlights.map((hl, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    Admissions Open for 2026-27
                  </span>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="py-2.5 px-5 rounded-xl bg-[#0A192F] hover:bg-primary-navy-light text-accent-gold font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Scope of the Program & Leadership */}
      <section
        id="scope-leadership"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
      >
        {/* Scope of Program Sub-Section */}
        {institution.scopeOfProgram && (
          <div className="space-y-10">
            <SectionHeader
              badge="Career Scope & Demand"
              title="Scope of the Program & Industry"
              highlightTitle="Opportunities"
              description={`Understand the professional career mobility and employer demand for ${institution.shortName} graduates.`}
            />

            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-8">
              <div className="max-w-4xl space-y-3">
                <h3 className="text-2xl font-bold font-heading text-accent-gold">
                  {institution.scopeOfProgram.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {institution.scopeOfProgram.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Roles Card */}
                <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                  <div className="flex items-center gap-2.5 text-accent-gold">
                    <Briefcase className="w-5 h-5 shrink-0" />
                    <h4 className="font-bold text-base text-white">
                      Target Job Roles
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {institution.scopeOfProgram.roles.map((role, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 text-xs font-semibold border border-slate-700"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recruiters Card */}
                <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                  <div className="flex items-center gap-2.5 text-accent-gold">
                    <Building2 className="w-5 h-5 shrink-0" />
                    <h4 className="font-bold text-base text-white">
                      Top Recruiters & Partners
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {institution.scopeOfProgram.recruiters.map((rec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 text-accent-gold text-xs font-semibold border border-slate-700"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Package Card */}
                <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                  <div className="flex items-center gap-2.5 text-accent-gold">
                    <TrendingUp className="w-5 h-5 shrink-0" />
                    <h4 className="font-bold text-base text-white">
                      Career Salary Mobility
                    </h4>
                  </div>
                  <div className="pt-2">
                    <span className="block text-xs text-slate-400 mb-1">
                      Estimated Starting Package:
                    </span>
                    <span className="text-lg font-extrabold text-accent-gold">
                      {institution.scopeOfProgram.averageSalary}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HOD & Leadership Sub-Section */}
        {institution.dean && (
          <div className="space-y-8 pt-6">
            <SectionHeader
              badge="Institutional Leadership"
              title="Message from Principal &"
              highlightTitle="Course In Charge"
              description="Dedicated academic leadership inspiring excellence, discipline, and compassionate service."
            />

            <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xl space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 relative">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-accent-gold shadow-md">
                    <Image
                      src={institution.dean.avatar}
                      alt={institution.dean.name}
                      width={500}
                      height={600}
                      className="w-full h-80 sm:h-96 object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <span className="text-xs uppercase font-extrabold text-accent-gold tracking-wider block">
                    {institution.dean.title || "Head of Department & Principal"}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] font-heading">
                    {institution.dean.name}
                  </h3>

                  {institution.dean.subtitle && (
                    <p className="text-sm font-semibold text-accent-gold italic">
                      &ldquo;{institution.dean.subtitle}&rdquo;
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 text-xs text-slate-600 font-semibold">
                    <span className="bg-slate-200/80 px-3 py-1 rounded-lg">
                      {institution.dean.designation}
                    </span>
                    {institution.dean.qualification && (
                      <span className="bg-slate-200/80 px-3 py-1 rounded-lg">
                        {institution.dean.qualification}
                      </span>
                    )}
                    {institution.dean.experience && (
                      <span className="bg-accent-gold/20 text-[#0A192F] font-bold px-3 py-1 rounded-lg">
                        {institution.dean.experience}
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed pt-3 border-t border-slate-200">
                    {institution.dean.message
                      .split("\n\n")
                      .map((para, pIdx) => (
                        <p key={pIdx} className="leading-relaxed">
                          {para}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 9. FACULTY & STAFF DIRECTORY (When Available) */}
      {institution.facultyList && institution.facultyList.length > 0 && (
        <section
          id="faculty-directory"
          className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
        >
          <SectionHeader
            badge="Academic Roster"
            title="Faculty & Teaching"
            highlightTitle="Staff Directory"
            description={`Meet our ${institution.facultyList.length} dedicated professors, research guides, lecturers, and technical staff at ${institution.shortName}.`}
          />

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl space-y-6">
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by faculty name or designation..."
                  value={facultySearch}
                  onChange={(e) => setFacultySearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
                />
              </div>
              <span className="text-xs text-slate-500 font-semibold">
                Showing {filteredFaculty.length} of{" "}
                {institution.facultyList.length} Staff Members
              </span>
            </div>

            {/* Faculty Table / Grid */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[#0A192F] text-xs font-extrabold uppercase tracking-wider bg-slate-50/80">
                    <th className="py-3.5 px-4 rounded-l-xl">S.No</th>
                    <th className="py-3.5 px-4">Faculty Name</th>
                    <th className="py-3.5 px-4">Qualification</th>
                    <th className="py-3.5 px-4 rounded-r-xl">Designation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700 font-medium">
                  {filteredFaculty.map((fac, idx) => {
                    const snoNum = fac.sno || fac.id || idx + 1;
                    return (
                      <tr
                        key={fac.sno || fac.id || `faculty-${idx}-${fac.name}`}
                        className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="py-3.5 px-4 font-bold text-accent-gold">
                          {snoNum < 10 ? `0${snoNum}` : snoNum}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#0A192F]">
                          {fac.name}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-600">
                          {fac.qualification}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-[11px] font-bold inline-block",
                              fac.designation.includes("Principal") ||
                                fac.designation.includes("Head") ||
                                fac.designation.includes("HOD")
                                ? "bg-[#0A192F] text-accent-gold"
                                : fac.designation.includes("Professor")
                                  ? "bg-slate-100 text-slate-800 border border-slate-200"
                                  : "bg-slate-50 text-slate-600 border border-slate-100",
                            )}
                          >
                            {fac.designation}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 10. Facilities List */}
      {institution.facilities && institution.facilities.length > 0 && (
        <section
          id="facilities"
          className="py-20 bg-slate-50 border-t border-slate-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeader
              badge="Campus Infrastructure"
              title="Specialized Campus Facilities &"
              highlightTitle="Advanced Skill labs"
              description={`Modern labs, simulators, and practical infrastructure dedicated to ${institution.shortName} students.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {institution.facilities.map((fac) => (
                <div
                  key={fac.id}
                  className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={fac.image}
                      alt={fac.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A192F]/90 text-accent-gold text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                      {fac.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h4 className="text-xl font-bold text-[#0A192F] font-heading">
                      {fac.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>

                    {fac.specs && (
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <span className="text-xs font-bold text-[#0A192F] block">
                          Facility Highlights & Equipment:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {fac.specs.map((sp, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                              <span>{sp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. Contact Us Section */}
      <section
        id="contact"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A192F] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-extrabold text-accent-gold tracking-widest block">
              Admission Directory January 2027
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Contact {institution.shortName} Admission Desk
            </h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
              <span>{institution.contact.location}</span>
            </div>
            {institution.contact.officeHours && (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-accent-gold shrink-0" />
                <span>Office Hours: {institution.contact.officeHours}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">
            <a
              href={`tel:${institution.contact.phone.split("/")[0].trim().replace(/\s+/g, "")}`}
              className="px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs sm:text-sm font-bold text-accent-gold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" /> {institution.contact.phone}
            </a>
            <a
              href={`mailto:${institution.contact.email}`}
              className="px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs sm:text-sm font-bold text-accent-gold flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" /> {institution.contact.email}
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-linear-to-r from-accent-gold to-[#B8902A] text-[#0A192F] text-xs sm:text-sm font-extrabold shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Apply Online <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Apply Modal */}
      <QuickApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
