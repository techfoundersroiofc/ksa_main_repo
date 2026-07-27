import { cn } from "@/lib/utils";

export default function SectionHeader({
  badge,
  title,
  highlightTitle,
  description,
  centered = true,
  dark = false,
  className
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border",
            dark
              ? "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30"
              : "bg-[#0A192F]/5 text-[#0A192F] border-[#0A192F]/15"
          )}
        >
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={cn(
          "font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4",
          dark ? "text-white" : "text-[#0A192F]"
        )}
      >
        {title}{" "}
        {highlightTitle && (
          <span className={dark ? "text-gradient-gold" : "text-[#D4AF37]"}>
            {highlightTitle}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}

      {centered && (
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8902A] mx-auto rounded-full mt-6" />
      )}
    </div>
  );
}
