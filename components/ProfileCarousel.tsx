"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type ProfileItem = {
  image: string;
  alt: string;
  name: string;
  role: string;
  description: string;
};

type ProfileCarouselProps = {
  items: readonly ProfileItem[];
  variant?: "light" | "dark";
};

export default function ProfileCarousel({
  items,
  variant = "light",
}: ProfileCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dark = variant === "dark";

  const scrollByCard = (direction: "prev" | "next") => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.clientWidth * 0.82;
    scrollRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard("prev")}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
            dark
              ? "border border-white/18 bg-white/8 text-white hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
              : "border border-[color:var(--color-border-strong)] bg-white/86 text-[var(--color-ink)] hover:border-[var(--color-accent-strong)]"
          }`}
          aria-label="Previous profiles"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard("next")}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
            dark
              ? "border border-white/18 bg-white/8 text-white hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
              : "border border-[color:var(--color-border-strong)] bg-white/86 text-[var(--color-ink)] hover:border-[var(--color-accent-strong)]"
          }`}
          aria-label="Next profiles"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex snap-x gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const hasMeta = Boolean(item.name || item.role || item.description);

          return (
            <article
            key={`${item.image}-${index}`}
            className={`min-w-[82%] snap-start overflow-hidden rounded-[2rem] md:min-w-[47%] xl:min-w-[31%] ${
              dark ? "panel-dark" : "panel-light"
            }`}
          >
            <div className="relative aspect-[4/4.6]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 82vw, (max-width: 1280px) 47vw, 31vw"
                className="object-cover"
              />
            </div>
            {hasMeta ? (
              <div className="px-6 py-6">
                {item.role ? (
                  <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${dark ? "text-[var(--color-accent-soft)]" : "text-[var(--color-sage-deep)]"}`}>
                    {item.role}
                  </p>
                ) : null}
                {item.name ? (
                  <h3 className={`${item.role ? "mt-3" : ""} text-2xl font-semibold tracking-[-0.04em] ${dark ? "text-[var(--color-off-white)]" : "text-[var(--color-ink)]"}`}>
                    {item.name}
                  </h3>
                ) : null}
                {item.description ? (
                  <p className={`mt-4 text-sm leading-7 ${dark ? "text-white/76" : "text-[var(--color-muted)]"}`}>
                    {item.description}
                  </p>
                ) : null}
              </div>
            ) : null}
          </article>
          );
        })}
      </div>
    </div>
  );
}
