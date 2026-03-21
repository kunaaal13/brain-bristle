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
};

export default function PageHero({
  label,
  title,
  description,
  actions = [],
  aside,
  layout = "split",
}: PageHeroProps) {
  const isCentered = layout === "centered";

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--color-border)]">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(200,214,207,0.75),transparent_45%),radial-gradient(circle_at_top_right,rgba(210,171,103,0.24),transparent_34%)]" />
      <div
        className={`relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 ${
          isCentered
            ? ""
            : "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)]"
        }`}
      >
        <div className={isCentered ? "mx-auto max-w-5xl text-center" : "max-w-3xl"}>
          <p className={`mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-sage-deep)] ${isCentered ? "text-center" : ""}`}>
            {label}
          </p>
          <h1 className={`text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-ink)] sm:text-[3.5rem] lg:text-[4.5rem] ${isCentered ? "mx-auto max-w-5xl lg:text-[4.2rem]" : "max-w-4xl"}`}>
            {title}
          </h1>
          <p className={`mt-8 text-lg leading-8 text-[var(--color-muted)] ${isCentered ? "mx-auto max-w-3xl" : "max-w-2xl"}`}>
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
                        ? "bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent)]"
                        : "border border-[color:var(--color-border-strong)] bg-white/75 text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
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
