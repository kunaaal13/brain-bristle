import { ReactNode } from "react";

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  tone?: "light" | "soft" | "dark";
};

export default function FeatureCard({
  eyebrow,
  title,
  description,
  children,
  tone = "light",
}: FeatureCardProps) {
  const toneClass =
    tone === "dark"
      ? "panel-dark text-[var(--color-off-white)]"
      : tone === "soft"
        ? "panel-soft"
        : "panel-light";

  return (
    <div className={`group h-full rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 ${toneClass}`}>
      {eyebrow ? (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.26em] ${tone === "dark" ? "text-[var(--color-accent-soft)]" : "text-[var(--color-sage-deep)]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h3 className={`text-2xl font-semibold tracking-[-0.04em] ${tone === "dark" ? "text-[var(--color-off-white)]" : "text-[var(--color-ink)]"}`}>
        {title}
      </h3>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${tone === "dark" ? "text-white/76" : "text-[var(--color-muted)]"}`}>{description}</p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
