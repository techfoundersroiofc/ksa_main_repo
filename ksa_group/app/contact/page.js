"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { INSTITUTIONS } from "@/lib/data/institutions";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    campus: "central",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface-alt min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-primary-navy text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-accent-gold tracking-wider block mb-2">
            Get In Touch
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Contact <span className="text-gradient-gold">KSA Group</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Connect with our Central Admission Secretariat or reach individual constituent campus offices directly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-primary-navy font-heading mb-2">
              Send an Online Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below and an official KSA representative will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-2xl font-bold text-primary-navy">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-600">
                  Thank you for reaching out to KSA Group. We have dispatched your request to the concerned department.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-primary-navy text-accent-gold font-bold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-accent-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-accent-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-accent-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Department / Institution *
                  </label>
                  <select
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-accent-gold focus:outline-none"
                  >
                    <option value="central">KSA Central Headquarters Secretariat</option>
                    <option value="nursing">Kamarajar College of Nursing (Chidambaram)</option>
                    <option value="pharmacy">Kamarajar College of Pharmacy (Chidambaram)</option>
                    <option value="polytechnic">Kamarajar Polytechnic College</option>
                    <option value="maritime">Kamarajar College of Maritime</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Request *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry (Admissions, Campus Visit, Document Verification)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-accent-gold focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary-navy hover:bg-primary-navy-light text-accent-gold font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Campus Addresses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-primary-navy text-white border border-accent-gold/30 space-y-4 shadow-xl">
              <h4 className="text-xl font-bold font-heading text-accent-gold border-b border-slate-800 pb-2">
                Central Admission Desk
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                KSA Educational and Charitable Trust Central Desk, Tamil Nadu
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-gold" /> +91 94876 08775 (CEO)
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-gold" /> +91 94864 19779 (Principal)
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-gold" /> +91 87782 74072 (Admission Committee)
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent-gold" /> admissions@ksagroup.edu.in
                </div>
              </div>
            </div>


            {INSTITUTIONS.map((inst) => (
              <div key={inst.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h5 className="font-bold text-base text-primary-navy font-heading">{inst.name}</h5>
                <p className="text-xs text-slate-500">{inst.contact.location}</p>
                <div className="text-xs font-semibold text-accent-gold flex items-center justify-between pt-1">
                  <span>📞 {inst.contact.phone}</span>
                  <span>✉️ {inst.contact.email}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
