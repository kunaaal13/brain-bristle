interface EventCardProps {
  speaker: string;
  topic: string;
  description: string;
}

export default function EventCard({ speaker, topic, description }: EventCardProps) {
  return (
    <div className="panel-light flex h-full flex-col rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1">
      <div className="mb-5 border-b border-[color:var(--color-border)] pb-5">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{speaker}</h4>
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{topic}</h3>
      </div>
      <p className="flex-grow text-base leading-8 text-[var(--color-muted)]">{description}</p>
    </div>
  );
}
