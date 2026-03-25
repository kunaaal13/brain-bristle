interface DonorCardProps {
  name: string;
  role: string;
  description: string;
}

export default function DonorCard({ name, role, description }: DonorCardProps) {
  return (
    <div className="panel-dark flex h-full flex-col rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.1)]">
      <div className="mb-5 border-b border-[color:var(--color-border)] pb-5">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-off-white)]">{name}</h3>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">{role}</p>
      </div>
      <p className="text-base leading-8 text-white/76">{description}</p>
    </div>
  );
}
