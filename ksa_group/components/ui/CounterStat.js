"use client";

export default function CounterStat({
  value,
  label,
  subtitle,
  icon: Icon,
  dark = false,
}) {
  return (
    <div
      className={`h-full p-4 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-md ${
        dark
          ? "bg-slate-900/80 border border-slate-800 text-white hover:border-gold/40 shadow-xl"
          : "bg-white border border-slate-200/80 text-primary hover:border-gold/30 hover:shadow-xl"
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-4">
        <span
          className={`font-heading font-semibold text-xl sm:text-3xl tracking-tight leading-none ${
            dark ? "text-gradient-gold" : "text-primary"
          }`}
        >
          {value}
        </span>

        {Icon && (
          <div
            className={`p-2.5 sm:p-3 rounded-2xl shrink-0 ${
              dark
                ? "bg-gold/10 text-gold border border-gold/30"
                : "bg-primary text-gold"
            }`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        )}
      </div>

      <h4
        className={`font-bold text-sm sm:text-base mb-1.5 leading-snug ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {label}
      </h4>

      {subtitle && (
        <p
          className={`text-xs sm:text-sm leading-relaxed ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
