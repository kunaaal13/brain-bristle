interface FilmCardProps {
  title: string;
  description: string;
  videoId: string;
}

export default function FilmCard({ title, description, videoId }: FilmCardProps) {
  return (
    <div className="panel-light flex h-full flex-col overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1">
      <div className="relative w-full bg-[var(--color-ink)] pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-grow flex-col p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
          Film
        </p>
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{title}</h3>
        <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{description}</p>
      </div>
    </div>
  );
}
