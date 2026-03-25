import Image from "next/image";

type StripItem = {
  image: string;
  alt: string;
  label: string;
};

type ImageStripProps = {
  items: readonly StripItem[];
};

export default function ImageStrip({ items }: ImageStripProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.image}
          className="panel-light overflow-hidden rounded-[1.75rem]"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-5 py-4 text-sm font-medium text-[var(--color-muted)]">
            {item.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
