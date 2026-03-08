export default function SectionHeading({ 
  headline, 
  subheadline, 
  centered = false 
}: { 
  headline: string; 
  subheadline?: string; 
  centered?: boolean; 
}) {
  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${centered ? 'items-center text-center' : 'max-w-4xl'}`}>
      {subheadline && (
        <span className="inline-block py-1.5 px-4 bg-navy text-yellow text-xs font-bold tracking-widest mb-6 uppercase">
          {subheadline}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-navy tracking-tight text-balance uppercase leading-[1.05]">
        {headline}
      </h2>
    </div>
  );
}
