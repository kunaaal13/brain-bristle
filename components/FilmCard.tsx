interface FilmCardProps {
  title: string;
  description: string;
  videoId: string;
}

export default function FilmCard({ title, description, videoId }: FilmCardProps) {
  return (
    <div className="bg-white border-2 border-navy flex flex-col h-full hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(21,46,76,1)] transition-all">
      <div className="relative w-full pt-[56.25%] bg-navy border-b-2 border-navy">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-black font-heading text-navy uppercase mb-4">{title}</h3>
        <p className="text-navy/80 font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
