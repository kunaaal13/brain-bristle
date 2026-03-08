import { ReactNode } from "react";

interface PillarCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function PillarCard({ title, description, icon }: PillarCardProps) {
  return (
    <div className="group p-8 bg-white border-2 border-navy hover:bg-yellow hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(21,46,76,1)] transition-all duration-300 h-full flex flex-col">
      <div className="w-14 h-14 bg-navy flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
        {icon || <div className="w-4 h-4 bg-yellow" />}
      </div>
      <h3 className="text-2xl font-black font-heading mb-4 text-navy uppercase">{title}</h3>
      <p className="text-navy/80 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}
