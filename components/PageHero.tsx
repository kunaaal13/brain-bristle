import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  actions?: HeroAction[];
  aside?: ReactNode;
  layout?: "split" | "centered";
  tone?: "editorial" | "soft" | "navy";
};

export default function PageHero({
  label,
  title,
  description,
  actions = [],
  aside,
  layout = "split",
  tone = "editorial",
}: PageHeroProps) {
  const isCentered = layout === "centered";
  const isNavy = tone === "navy";
  const sectionClass =
    tone === "navy"
      ? "section-navy border-[rgba(255,250,242,0.12)]"
      : tone === "soft"
        ? "section-soft-sage"
        : "section-editorial";

  return (
    <section className={`relative overflow-hidden border-b border-[color:var(--color-border)] ${sectionClass}`}>
      <div
        className={`absolute inset-x-0 top-0 h-[32rem] ${
          isNavy
            ? "bg-[radial-gradient(circle_at_top_left,rgba(245,202,1,0.12),transparent_38%),radial-gradient(circle_at_top_right,rgba(160,185,163,0.14),transparent_34%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(160,185,163,0.24),transparent_38%),radial-gradient(circle_at_top_right,rgba(245,202,1,0.12),transparent_34%)]"
        }`}
      />
      <div
        className={`relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 ${
          isCentered
            ? ""
            : "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)]"
        }`}
      >
        <div className={isCentered ? "mx-auto max-w-5xl text-center" : "max-w-3xl"}>
          <p className={`mb-6 text-xs font-semibold uppercase tracking-[0.3em] ${isCentered ? "text-center" : ""} ${isNavy ? "text-[var(--color-accent-soft)]" : "text-[var(--color-sage-deep)]"}`}>
            {label}
          </p>
          <h1 className={`text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[3.5rem] lg:text-[4.5rem] ${isCentered ? "mx-auto max-w-5xl lg:text-[4.2rem]" : "max-w-4xl"} ${isNavy ? "text-[var(--color-off-white)]" : "text-[var(--color-ink)]"}`}>
            {title}
          </h1>
          <p className={`mt-8 text-lg leading-8 ${isCentered ? "mx-auto max-w-3xl" : "max-w-2xl"} ${isNavy ? "text-white/76" : "text-[var(--color-muted)]"}`}>
            {description}
          </p>
          {actions.length ? (
            <div className={`mt-10 flex flex-col gap-4 sm:flex-row ${isCentered ? "justify-center" : ""}`}>
              {actions.map((action) => {
                const isPrimary = action.variant !== "secondary";

                return (
                  <Link
                    key={`${action.href}-${action.label}`}
                    href={action.href}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)] ${
                      isPrimary
                        ? "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)]"
                        : isNavy
                          ? "border border-white/20 bg-white/6 text-[var(--color-off-white)] hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
                          : "border border-[color:var(--color-border-strong)] bg-white/75 text-[var(--color-ink)] hover:border-[var(--color-accent-strong)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    <span>{action.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
        {!isCentered ? <div className="w-full lg:justify-self-end">{aside}</div> : null}
      </div>
    </section>
  );
}
