import FeatureCard from "../../components/FeatureCard";
import ImageStrip from "../../components/ImageStrip";
import MetricCard from "../../components/MetricCard";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export default function ImpactPage() {
  const { impact } = contentData;

  return (
    <div>
      <PageHero
        label={impact.label}
        title={impact.headline}
        description={impact.description}
        layout="centered"
        actions={[
          { label: "Support this work", href: "/donate" },
          { label: "View careers", href: "/careers", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="2026-27 outlook"
            title="The impact frame is specific enough to be understood and judged."
            description="The goals are not abstract. They are visible in the number of schools, classrooms, students, and people reached through advocacy."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {impact.metrics.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.06}>
              <MetricCard value={item.value} label={item.label} note={item.note} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Impact pillars"
              title="Three connected ways the organisation changes outcomes."
              description="Direct intervention, advocacy, and research should reinforce each other instead of operating as isolated programs."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {impact.pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.08}>
                <FeatureCard eyebrow={`0${index + 1}`} title={pillar.title} description={pillar.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="Across the work"
            title="A broader look at how impact takes shape across classrooms, advocacy, and research."
            description="These frames support the story of Brain Bristle's school footprint, public reach, and knowledge-building work across the year."
          />
        </ScrollReveal>
        <div className="mt-12">
          <ImageStrip items={impact.visuals} />
        </div>
      </section>
    </div>
  );
}
