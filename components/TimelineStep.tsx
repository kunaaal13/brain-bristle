interface TimelineStepProps {
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineStep({ title, description, isLast = false }: TimelineStepProps) {
  return (
    <div className="relative flex gap-8 pb-16 last:pb-0">
      {!isLast && (
        <div className="absolute left-[27px] top-14 bottom-0 w-[2px] bg-navy" />
      )}
      <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-yellow border-2 border-navy text-navy flex items-center justify-center font-bold text-xl">
        <div className="w-3 h-3 bg-navy" />
      </div>
      <div className="pt-2 border-t-2 border-navy flex-grow">
        <h3 className="text-2xl font-black font-heading text-navy mb-4 uppercase mt-4">{title}</h3>
        <p className="text-navy/80 font-medium leading-relaxed text-lg text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
}
