"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CAREER_OPENINGS } from "@/lib/data/careers";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  CheckCircle2,
  Send,
  X,
  Users,
  Award,
  Sparkles,
  Building2,
  Mail,
  Phone,
} from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filterCollege, setFilterCollege] = useState("all");
  const [applied, setApplied] = useState(false);

  const filteredJobs =
    filterCollege === "all"
      ? CAREER_OPENINGS
      : CAREER_OPENINGS.filter((job) => job.collegeId === filterCollege);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="bg-surface-alt min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-accent-gold/10 to-transparent opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs uppercase font-bold text-accent-gold tracking-wider block mb-2">
            Work With KSA Group of Institutions
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white mb-4">
            Faculty & Staff <span className="text-gradient-gold">Careers</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Join our esteemed academic council and clinical leadership across
            Kamarajar College of Nursing and Perunthalaivar Kamarajar Institute
            of Maritime Science and Engineering (PKIMSE).
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        <SectionHeader
          badge="Current Openings"
          title="Open Academic & Clinical"
          highlightTitle="Positions"
          description="Explore opportunities to teach, research, and mentor the next generation of healthcare and maritime professionals."
        />

        {/* Institution Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setFilterCollege("all")}
            className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all cursor-pointer ${
              filterCollege === "all"
                ? "bg-[#0A192F] text-accent-gold shadow-lg scale-105"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            All Openings ({CAREER_OPENINGS.length})
          </button>
          <button
            onClick={() => setFilterCollege("nursing")}
            className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all cursor-pointer ${
              filterCollege === "nursing"
                ? "bg-[#0A192F] text-accent-gold shadow-lg scale-105"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            Kamarajar College of Nursing (04)
          </button>
          <button
            onClick={() => setFilterCollege("maritime")}
            className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all cursor-pointer ${
              filterCollege === "maritime"
                ? "bg-[#0A192F] text-accent-gold shadow-lg scale-105"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            PKIMSE Maritime College (02)
          </button>
        </div>

        {/* Highlight Banner for Nursing Candidates */}
        {(filterCollege === "all" || filterCollege === "nursing") && (
          <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-r from-[#0A192F] to-[#162C4E] text-white shadow-xl border border-accent-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/20 text-accent-gold text-xs font-extrabold uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Special Recruitment Drive
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Kamarajar College of Nursing
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                We are looking for dedicated, qualified, and passionate nursing
                professionals to join our esteemed Nursing College /
                Institution!
              </p>
            </div>
            <a
              href="#nursing-vacancies"
              onClick={() => setFilterCollege("nursing")}
              className="px-6 py-3 rounded-xl bg-accent-gold hover:bg-[#e0b83b] text-[#0A192F] font-bold text-xs shrink-0 transition-colors shadow-md"
            >
              View Nursing Roles
            </a>
          </div>
        )}

        {/* Job Cards Grid */}
        <div
          id="nursing-vacancies"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#0A192F]/5 text-[#0A192F] text-xs font-extrabold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-accent-gold" />
                    {job.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                    {job.vacancies}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] font-heading leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-xs font-extrabold text-accent-gold mt-1">
                    {job.institution}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {job.description}
                </p>

                <div className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A192F]">Eligibility:</strong>{" "}
                      {job.qualification}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A192F]">Experience:</strong>{" "}
                      {job.experience}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-500 pt-1">
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-accent-gold" />{" "}
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-accent-gold" />{" "}
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setApplied(false);
                  }}
                  className="w-full py-3 rounded-xl bg-[#0A192F] hover:bg-primary-navy-light text-accent-gold font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" /> Apply For Position
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Contact / Resume Submission Box */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[#0A192F] font-heading">
            Direct Resume Submission
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Interested candidates may also send their updated CV with
            credentials directly to our Central HR desk or call for instant
            inquiry.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#0A192F] font-bold pt-2">
            <a
              href="mailto:ksaednltrust.nursing@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <Mail className="w-4 h-4 text-accent-gold" />
              ksaednltrust.nursing@gmail.com
            </a>
            <a
              href="tel:+919894064101"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-accent-gold" />
              +91-9894064101 / +91-9488178596
            </a>
          </div>
        </div>
      </div>

      {/* Career Application Dialog Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-primary-navy-deep border border-accent-gold/30 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl p-6 sm:p-8 text-slate-200 relative space-y-4">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="px-3 py-1 rounded-full bg-accent-gold/20 text-accent-gold text-xs font-bold uppercase inline-block mb-2">
                Application Form
              </span>
              <h3 className="text-xl font-bold text-white font-heading">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-accent-gold font-semibold">
                {selectedJob.institution} ({selectedJob.vacancies})
              </p>
            </div>

            {applied ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">
                  Application Submitted!
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thank you for applying. Our Academic Selection Committee will
                  review your credentials and contact you for interview details.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-2.5 rounded-xl bg-accent-gold text-[#0A192F] font-bold text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleApplySubmit}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Dr. / Prof. / Capt. / Mr. / Mrs."
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-gold"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="applicant@domain.com"
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">
                    Qualification & Key Specialization *
                  </label>
                  <input
                    required
                    type="text"
                    defaultValue={selectedJob.qualification}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-gold"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">
                    Years of Experience & Key Highlights
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Summary of teaching, clinical, or maritime experience..."
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-accent-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-accent-gold text-[#0A192F] font-bold text-sm hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" /> Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
