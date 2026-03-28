import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore Brain Bristle's research-building practice, monthly newsletters, and the growing archive of autism and inclusion learnings from the ground.",
}

export default function ResearchPage() {
  const { research } = contentData;

  return (
    <div>
      <PageHero
        label={research.label}
        title={research.headline}
        description={research.description}
        layout="centered"
        tone="soft"
        actions={[
          { label: "View Media", href: "/media" },
          { label: "Donate", href: "/donate", variant: "secondary" },
        ]}
      />

      <section className="section-editorial border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={research.intro.label}
              title={research.intro.headline}
              description={research.intro.description}
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {research.currentPractice.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <article className="panel-light flex h-full flex-col rounded-[2rem] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-turquoise border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={research.resources.label}
              title={research.resources.headline}
              description={research.resources.description}
              align="center"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <div className="panel-soft mt-12 overflow-hidden rounded-[2.2rem]">
              <div className="relative aspect-[16/9] min-h-[20rem]">
                <Image
                  src={research.visual.image}
                  alt={research.visual.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,46,76,0.04)_0%,rgba(21,46,76,0.14)_46%,rgba(21,46,76,0.6)_100%)]" />
              </div>
              <div className="px-6 py-5 text-sm font-medium text-[var(--color-muted)]">
                {research.visual.title}
              </div>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {research.resources.links.map((link, index) => (
              <ScrollReveal key={link.title} delay={index * 0.08}>
                <div className="panel-light flex h-full min-h-[12rem] flex-col rounded-[1.8rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]">
                    WIP resource
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {link.title}
                  </h3>
                  <div className="mt-auto pt-8">
                    <Link href={link.href} className="text-sm font-medium text-[var(--color-turquoise)]">
                      Coming soon
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Monthly Newsletters"
              title="Our monthly newsletters are the clearest public archive of the research-building practice so far."
              description="These pieces sit at the intersection of reflection, advocacy, and research translation."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {research.journal.map((entry, index) => (
              <ScrollReveal key={entry.title} delay={index * 0.06}>
                <div className="panel-light flex h-full flex-col rounded-[1.8rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]">
                    {entry.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {entry.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                Research building
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-off-white)] sm:text-5xl">
                Research building here is designed to stay useful to educators, families, and collaborators.
              </h2>
              <Link
                href="/media"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-5 py-3 text-sm font-medium text-[var(--color-off-white)] transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
              >
                Explore Media
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
