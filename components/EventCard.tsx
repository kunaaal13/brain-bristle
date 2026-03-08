interface EventCardProps {
  speaker: string;
  topic: string;
  description: string;
}

export default function EventCard({ speaker, topic, description }: EventCardProps) {
  return (
    <div className="bg-white p-8 border-2 border-navy hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(21,46,76,1)] transition-all h-full flex flex-col">
      <div className="mb-6 border-b-2 border-navy pb-4">
        <h4 className="text-sm font-bold text-grey-turquoise tracking-widest uppercase mb-2">{speaker}</h4>
        <h3 className="text-3xl font-black font-heading text-navy leading-tight uppercase">{topic}</h3>
      </div>
      <p className="text-navy/80 font-medium leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}
