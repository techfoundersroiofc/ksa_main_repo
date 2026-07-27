import Link from "next/link";
import { Clock, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProgramCard({ program, onOpenApplyModal }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Level Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#0A192F]/5 text-[#0A192F] text-xs font-bold uppercase tracking-wider">
            {program.level}
          </span>
          <span className="text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {program.duration}
          </span>
        </div>

        {/* Program Title & College */}
        <h3 className="text-xl font-bold text-[#0A192F] font-heading leading-snug mb-1">
          {program.title}
        </h3>
        <p className="text-xs font-medium text-slate-500 mb-4">
          {program.collegeName}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {program.overview}
        </p>

        {/* Eligibility Preview */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-4">
          <strong className="text-slate-900 block mb-0.5">Eligibility:</strong>
          <span>{program.eligibility}</span>
        </div>

        {/* Highlights */}
        {program.highlights && (
          <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
            {program.highlights.map((hl, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
        <Link
          href={`/institutions/${program.collegeId}`}
          className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center flex items-center justify-center gap-1 transition-colors"
        >
          Curriculum <ArrowRight className="w-3 h-3" />
        </Link>
        <button
          onClick={onOpenApplyModal}
          className="py-2.5 px-3 rounded-xl bg-[#0A192F] hover:bg-[#162C4E] text-[#D4AF37] font-bold text-xs text-center transition-colors cursor-pointer"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
