import { ExternalLink } from "lucide-react";

interface PressCardProps {
  publication: string;
  title: string;
  url: string;
}

export default function PressCard({ publication, title, url }: PressCardProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer" 
      className="group bg-white p-8 border-2 border-navy hover:bg-grey-turquoise hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(21,46,76,1)] transition-all flex flex-col h-full"
    >
      <div className="mb-auto">
        <span className="inline-block py-1.5 px-3 bg-navy text-yellow text-xs font-bold tracking-widest mb-6 uppercase">
          {publication}
        </span>
        <h3 className="text-xl font-black font-heading text-navy group-hover:text-white transition-colors leading-snug uppercase">
          {title}
        </h3>
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm font-bold text-navy group-hover:text-white uppercase tracking-widest">
        Read Article <ExternalLink size={16} />
      </div>
    </a>
  );
}
