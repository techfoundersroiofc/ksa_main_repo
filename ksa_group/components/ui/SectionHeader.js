import { cn } from "@/lib/utils";

export default function SectionHeader({
  badge,
  title,
  highlightTitle,
  description,
  centered = true,
  dark = false,
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16 relative z-10",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {/* Badge Pill */}
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-widest mb-4 border transition-all shadow-xs backdrop-blur-md",
            dark
              ? "bg-accent-gold/10 text-accent-gold border-accent-gold/30 shadow-accent-gold/10"
              : "bg-[#0A192F]/5 text-[#0A192F] border-[#0A192F]/15 shadow-slate-200/50",
          )}
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full shrink-0",
              dark ? "bg-accent-gold animate-pulse" : "bg-[#0A192F]",
            )}
          />
          <span>{badge}</span>
        </div>
      )}

      {/* Main Section Heading */}
      {title && (
        <h2
          className={cn(
            "font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-4",
            dark ? "text-white" : "text-[#0A192F]",
          )}
        >
          {title}{" "}
          {highlightTitle && (
            <span
              className={cn(
                "inline-block font-extrabold",
                dark
                  ? "bg-linear-to-r from-[#FFE58F] via-[#E5C158] to-[#B8902A] bg-clip-text text-transparent"
                  : "bg-linear-to-r from-[#D4AF37] via-[#B8902A] to-[#8C6B16] bg-clip-text text-transparent",
              )}
            >
              {highlightTitle}
            </span>
          )}
        </h2>
      )}

      {/* Subtitle Description */}
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal max-w-2xl",
            centered ? "mx-auto" : "",
            dark ? "text-slate-300" : "text-slate-600",
          )}
        >
          {description}
        </p>
      )}

      {/* Decorative Gold Accent Divider */}
      {centered && (
        <div className="flex items-center justify-center gap-1.5 mt-6">
          <span className="w-2 h-1 rounded-full bg-accent-gold/40" />
          <span className="w-16 h-1 rounded-full bg-linear-to-r from-accent-gold via-[#E5C158] to-[#B8902A] shadow-xs shadow-accent-gold/20" />
          <span className="w-2 h-1 rounded-full bg-accent-gold/40" />
        </div>
      )}
    </div>
  );
}
