import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
};

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)]">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-[linear-gradient(135deg,var(--color-surface)_0%,rgba(160,185,163,0.38)_100%)] shadow-[0_6px_18px_rgba(21,46,76,0.08)]">
        <span className="h-4 w-4 rounded-full bg-[var(--color-accent)]" />
        <span className="absolute inset-[6px] rounded-full border border-[color:var(--color-border)]" />
      </span>
      <span className="flex flex-col">
        <span className={`font-heading font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] ${compact ? "text-sm" : "text-base"}`}>
          Brain Bristle
        </span>
        {!compact ? (
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Autism Inclusion Initiative
          </span>
        ) : null}
      </span>
    </Link>
  );
}
