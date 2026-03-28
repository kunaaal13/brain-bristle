import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  tone?: "default" | "inverse";
};

export default function BrandMark({
  compact = false,
  tone = "default",
}: BrandMarkProps) {
  const inverse = tone === "inverse";

  return (
    <Link href="/" className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)]">
      <span className={`relative overflow-hidden rounded-full border border-[color:var(--color-border-strong)] shadow-[0_8px_20px_rgba(21,46,76,0.12)] ${compact ? "h-10 w-10" : "h-12 w-12"}`}>
        <Image
          src="/brand/brain-bristle-mark.svg"
          alt="Brain Bristle logo"
          fill
          sizes={compact ? "40px" : "48px"}
          className="object-cover"
          priority
        />
      </span>
      <span className="flex flex-col">
        <span className={`font-heading font-semibold uppercase tracking-[0.18em] ${inverse ? "text-[var(--color-off-white)]" : "text-[var(--color-ink)]"} ${compact ? "text-sm" : "text-base"}`}>
          Brain Bristle
        </span>
        {!compact ? (
          <span className={`text-xs uppercase tracking-[0.24em] ${inverse ? "text-white/72" : "text-[var(--color-muted)]"}`}>
            Autism Inclusion Initiative
          </span>
        ) : null}
      </span>
    </Link>
  );
}
