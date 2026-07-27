"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CAREER_OPENINGS } from "@/lib/data/careers";
import { Briefcase, MapPin, Clock, GraduationCap, CheckCircle2, Send, X } from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#0A192F] text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block mb-2">
            Work With KSA Group
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Faculty & Staff <span className="text-gradient-gold">Careers</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Join our distinguished academic council and operational leadership across Nursing, Pharmacy, and Maritime constituent colleges.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <SectionHeader
          badge="Current Vacancies"
          title="Open Academic & Admin"
          highlightTitle="Positions"
          description="Explore opportunities to teach, research, and mentor the next generation of global leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAREER_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0A192F]/5 text-[#0A192F] text-xs font-bold">
                    {job.type}
                  </span>
                  <span className="text-xs text-[#D4AF37] font-semibold">
                    Deadline: {job.deadline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A192F] font-heading">
                  {job.title}
                </h3>
                <p className="text-xs font-bold text-slate-500">{job.institution}</p>

                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div><strong>Qualification:</strong> {job.qualification}</div>
                  <div><strong>Experience:</strong> {job.experience}</div>
                  <div className="flex items-center gap-1 text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {job.location}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setApplied(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#162C4E] text-[#D4AF37] font-bold text-xs transition-colors cursor-pointer"
                >
                  Apply For Position
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Application Dialog Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#070F1E] border border-[#D4AF37]/30 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl p-6 text-slate-200 relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-1 font-heading">
              Apply for {selectedJob.title}
            </h3>
            <p className="text-xs text-[#D4AF37] mb-4">{selectedJob.institution}</p>

            {applied ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Application Submitted!</h4>
                <p className="text-xs text-slate-300">
                  Our HR & Governing Council will review your resume and contact you for interview rounds.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-[#0A192F] font-bold text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Full Name *</label>
                  <input required type="text" placeholder="Dr. / Prof. / Capt." className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#D4AF37]" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Email & Phone *</label>
                  <input required type="text" placeholder="email@domain.com | +91 9876543210" className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#D4AF37]" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Years of Experience & Key Specialization *</label>
                  <textarea rows={2} required placeholder="Summary of academic, clinical, or maritime experience..." className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#D4AF37]" />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-[#D4AF37] text-[#0A192F] font-bold text-sm hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer">
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
