import { ReactNode } from "react";

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function FeatureCard({
  eyebrow,
  title,
  description,
  children,
}: FeatureCardProps) {
  return (
    <div className="group h-full rounded-[2rem] border border-[color:var(--color-border)] bg-white/88 p-7 shadow-[0_24px_60px_rgba(16,35,63,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-border-strong)] hover:shadow-[0_32px_80px_rgba(16,35,63,0.12)]">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
        {title}
      </h3>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{description}</p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
