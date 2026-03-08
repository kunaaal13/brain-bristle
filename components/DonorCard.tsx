interface DonorCardProps {
  name: string;
  role: string;
  description: string;
}

export default function DonorCard({ name, role, description }: DonorCardProps) {
  return (
    <div className="bg-soft-sage/20 p-8 border-2 border-navy hover:bg-yellow transition-colors h-full flex flex-col">
      <div className="mb-6 border-b-2 border-navy pb-4">
        <h3 className="text-2xl font-black font-heading text-navy mb-2 uppercase">{name}</h3>
        <p className="text-xs font-bold text-navy/60 uppercase tracking-widest">{role}</p>
      </div>
      <p className="text-navy/90 font-medium leading-relaxed">
        &quot;{description}&quot;
      </p>
    </div>
  );
}
