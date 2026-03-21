import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeatureCard from "../../components/FeatureCard";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export default function ResearchPage() {
  const { research } = contentData;

  return (
    <div>
      <PageHero
        label={research.label}
        title={research.headline}
        description={research.description}
        layout="centered"
        actions={[
          { label: "Support research", href: "/donate" },
          { label: "Meet the team", href: "/teams", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="Research priorities"
            title="A research posture shaped by usefulness, not performance."
            description="The work should stay readable to educators, families, and collaborators while remaining grounded in serious inquiry."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {research.themes.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <FeatureCard eyebrow={`0${index + 1}`} title={item.title} description={item.description} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="How research is built"
              title="A clear path from field observation to usable public insight."
              description="The future research vertical should feel both methodical and accessible, turning on-ground experience into knowledge others can actually use."
            />
          </ScrollReveal>
          <div className="space-y-4">
            {research.workflow.map((step, index) => (
              <ScrollReveal key={step} delay={index * 0.08}>
                <div className="flex gap-4 rounded-[1.5rem] border border-[color:var(--color-border)] bg-[var(--color-surface-alt)] p-5 shadow-[0_18px_40px_rgba(16,35,63,0.05)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(216,226,219,0.72)] text-sm font-semibold text-[var(--color-ink)]">
                    0{index + 1}
                  </div>
                  <p className="text-base leading-8 text-[var(--color-muted)]">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-12">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-white shadow-[0_24px_60px_rgba(16,35,63,0.06)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={research.visual.image}
                alt={research.visual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-5 text-sm font-medium text-[var(--color-muted)]">
              {research.visual.label}
            </div>
          </div>
        </ScrollReveal>
        <div>
          <ScrollReveal>
            <SectionIntro
              label="Journal and archive"
              title="Existing writing already shows the tone and direction of the knowledge work."
              description="These pieces reflect the blend of reflection, advocacy, and inquiry that shapes Brain Bristle's research-facing voice."
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-5">
            {research.journal.map((entry, index) => (
              <ScrollReveal key={entry.title} delay={index * 0.06}>
                <div className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-white p-5 shadow-[0_18px_40px_rgba(16,35,63,0.05)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {entry.date}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {entry.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.24}>
            <div className="mt-10 rounded-[2rem] bg-[var(--color-ink)] p-8 text-white shadow-[0_32px_80px_rgba(16,35,63,0.2)]">
              <p className="max-w-3xl text-lg leading-8 text-white/80">
                Want to collaborate on research, writing, or knowledge translation? Brain Bristle welcomes aligned institutions, scholars, and practitioners.
              </p>
              <Link href="/careers" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-soft)]">
                Explore opportunities <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
