interface EventCardProps {
  speaker: string;
  topic: string;
  description: string;
}

export default function EventCard({ speaker, topic, description }: EventCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-[color:var(--color-border)] bg-white/88 p-8 shadow-[0_22px_60px_rgba(16,35,63,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(16,35,63,0.12)]">
      <div className="mb-5 border-b border-[color:var(--color-border)] pb-5">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{speaker}</h4>
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{topic}</h3>
      </div>
      <p className="flex-grow text-base leading-8 text-[var(--color-muted)]">{description}</p>
    </div>
  );
}
