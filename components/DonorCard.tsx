interface DonorCardProps {
  name: string;
  role: string;
  description: string;
}

export default function DonorCard({ name, role, description }: DonorCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-[color:var(--color-border)] bg-[rgba(216,226,219,0.28)] p-8 shadow-[0_20px_40px_rgba(16,35,63,0.05)] transition duration-300 hover:-translate-y-1 hover:bg-[rgba(216,226,219,0.45)]">
      <div className="mb-5 border-b border-[color:var(--color-border)] pb-5">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{name}</h3>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]">{role}</p>
      </div>
      <p className="text-base leading-8 text-[var(--color-muted)]">{description}</p>
    </div>
  );
}
