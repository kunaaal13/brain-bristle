import { ExternalLink } from "lucide-react";

interface PressCardProps {
  publication: string;
  title: string;
  url: string;
  meta?: string;
  ctaLabel?: string;
}

export default function PressCard({
  publication,
  title,
  url,
  meta,
  ctaLabel = "Read Article",
}: PressCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="panel-light group flex h-full flex-col rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-border-strong)]"
    >
      <div className="mb-auto">
        <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
          {publication}
        </span>
        <h3 className="text-2xl font-semibold leading-snug tracking-[-0.04em] text-[var(--color-ink)]">
          {title}
        </h3>
        {meta ? (
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {meta}
          </p>
        ) : null}
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--color-sage-deep)] transition duration-200 group-hover:text-[var(--color-accent)]">
        {ctaLabel} <ExternalLink size={16} />
      </div>
    </a>
  );
}
