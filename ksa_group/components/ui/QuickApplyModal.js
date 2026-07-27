"use client";

import { useState } from "react";
import { X, CheckCircle2, Sparkles, Send } from "lucide-react";
import { INSTITUTIONS } from "@/lib/data/institutions";
import { ALL_PROGRAMS } from "@/lib/data/programs";

export default function QuickApplyModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "nursing",
    program: "bsc-nursing",
    message: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  // Filter programs based on selected institution
  const filteredPrograms = ALL_PROGRAMS.filter(
    (p) => p.collegeId === formData.institution
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#070F1E] border border-[#D4AF37]/30 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative text-slate-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#0A192F] via-[#162C4E] to-[#0A192F] p-6 border-b border-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-xl bg-white/95 border border-[#D4AF37]/40 shadow-md flex items-center justify-center">
              <img
                src="/logo/Main_logo.PNG"
                alt="KSA Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                Official Admission Portal 2026-27
              </span>
              <h3 className="text-xl font-bold text-white font-heading">
                Apply to KSA Group
              </h3>
            </div>
          </div>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white">Application Received!</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Thank you for inquiring with KSA Group of Institutions. Our Senior Admission Counselor will contact you via phone and email within 24 hours.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 text-left space-y-1">
                <div><strong className="text-slate-200">Applicant:</strong> {formData.fullName}</div>
                <div><strong className="text-slate-200">Contact:</strong> {formData.phone} | {formData.email}</div>
                <div><strong className="text-slate-200">College:</strong> {INSTITUTIONS.find(i=>i.id===formData.institution)?.name}</div>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-[#D4AF37] text-[#0A192F] font-bold text-sm hover:brightness-110"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditi Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Select Constituent Institution *
                </label>
                <select
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                >
                  {INSTITUTIONS.map((inst) => (
                    <option key={inst.id} value={inst.id}>
                      {inst.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Preferred Program *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                >
                  {filteredPrograms.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.title} ({prog.level})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Questions / Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Inquire about hostel, fee structure, entrance exam guidelines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#D4AF37] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8902A] text-[#0A192F] font-bold text-sm shadow-lg hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Admission Inquiry
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center">
                🔒 Your personal data is confidential and protected by KSA Privacy Standards.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
