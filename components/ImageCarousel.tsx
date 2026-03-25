"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  image: string;
  alt: string;
  title: string;
  caption?: string;
};

type ImageCarouselProps = {
  slides: readonly Slide[];
  intervalMs?: number;
  aspectClassName?: string;
  sizes?: string;
  eyebrow?: string;
};

export default function ImageCarousel({
  slides,
  intervalMs = 5000,
  aspectClassName = "aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]",
  sizes = "(max-width: 1024px) 100vw, 34vw",
  eyebrow = "Stories from the field",
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);

    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused || slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, isPaused, reducedMotion, slides.length]);

  const goTo = (index: number) => {
    const normalized = (index + slides.length) % slides.length;
    setActiveIndex(normalized);
  };

  const handleTouchStart = (clientX: number) => {
    touchStartX.current = clientX;
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX.current === null) {
      return;
    }

    const delta = clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < 40) {
      return;
    }

    if (delta < 0) {
      goTo(activeIndex + 1);
      return;
    }

    goTo(activeIndex - 1);
  };

  return (
    <div
      className="panel-light group relative overflow-hidden rounded-[2rem]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={(event) => handleTouchStart(event.touches[0]?.clientX ?? 0)}
      onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
    >
      <div className={`relative ${aspectClassName}`}>
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes={sizes}
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,35,63,0.02)_0%,rgba(16,35,63,0.32)_54%,rgba(16,35,63,0.64)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="max-w-lg rounded-[1.5rem] border border-white/14 bg-[linear-gradient(135deg,rgba(21,46,76,0.58),rgba(91,147,142,0.36))] p-4 backdrop-blur-md sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                    {slide.title}
                  </p>
                  {slide.caption ? (
                    <p className="mt-3 text-sm leading-7 text-white/86">
                      {slide.caption}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <div className="rounded-full bg-[rgba(16,35,63,0.68)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
          {eyebrow}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(21,46,76,0.7)] text-white transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(21,46,76,0.7)] text-white transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)]"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-4">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={activeIndex === index}
            className={`h-2.5 rounded-full transition ${
              activeIndex === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
