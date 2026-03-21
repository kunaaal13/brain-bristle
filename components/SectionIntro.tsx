type SectionIntroProps = {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionIntro({
  label,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-sage-deep)]">
        {label}
      </p>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
