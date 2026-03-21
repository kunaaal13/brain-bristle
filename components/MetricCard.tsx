type MetricCardProps = {
  value: string;
  label: string;
  note?: string;
};

export default function MetricCard({ value, label, note }: MetricCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-[color:var(--color-border)] bg-[var(--color-surface-alt)] p-6 shadow-[0_20px_40px_rgba(16,35,63,0.05)]">
      <div className="text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-5xl">
        {value}
      </div>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-sage-deep)]">
        {label}
      </p>
      {note ? <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{note}</p> : null}
    </div>
  );
}
