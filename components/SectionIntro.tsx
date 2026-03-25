type SectionIntroProps = {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

export default function SectionIntro({
  label,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionIntroProps) {
  const centered = align === "center";
  const inverse = tone === "inverse";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.28em] ${inverse ? "text-[var(--color-accent-soft)]" : "text-[var(--color-sage-deep)]"}`}>
        {label}
      </p>
      <h2 className={`max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${inverse ? "text-[var(--color-off-white)]" : "text-[var(--color-ink)]"}`}>
        {title}
      </h2>
      <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${inverse ? "text-white/76" : "text-[var(--color-muted)]"}`}>
        {description}
      </p>
    </div>
  );
}
