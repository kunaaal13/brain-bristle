import Image from "next/image";
import FeatureCard from "../../components/FeatureCard";
import ImageStrip from "../../components/ImageStrip";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export default function TeamsPage() {
  const { teams } = contentData;

  return (
    <div>
      <PageHero
        label={teams.label}
        title={teams.headline}
        description={teams.description}
        layout="centered"
        actions={[
          { label: "Work with us", href: "/careers" },
          { label: "Support the mission", href: "/donate", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="Inside the organisation"
            title="A visual rhythm for the people and functions behind the work."
            description="This section supports the story of the organisation's internal culture, shared effort, and day-to-day coordination."
          />
        </ScrollReveal>
        <div className="mt-12">
          <ImageStrip
            items={teams.imageRow.map((image, index) => ({
              image,
              alt: `Team and organisation image ${index + 1}`,
              label: `Team environment ${index + 1}`,
            }))}
          />
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Team categories"
              title="The organisation is structured across several connected working groups."
              description="Each category represents a different part of the system that helps Brain Bristle operate with clarity, care, and consistency."
            />
          </ScrollReveal>
          <div className="mt-12 space-y-12">
            {teams.categories.map((category, categoryIndex) => (
              <ScrollReveal key={category.title} delay={categoryIndex * 0.08}>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {category.title}
                  </h3>
                  <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {category.people.map((person) => (
                      <div
                        key={person.name}
                        className="overflow-hidden rounded-[1.75rem] border border-[color:var(--color-border)] bg-white shadow-[0_20px_40px_rgba(16,35,63,0.05)]"
                      >
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={person.image}
                            alt={`Placeholder portrait for ${person.name}`}
                            fill
                            sizes="(max-width: 1280px) 50vw, 30vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="px-5 py-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                            {person.role}
                          </p>
                          <h4 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                            {person.name}
                          </h4>
                          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                            {person.summary}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="How the team works"
            title="Values that keep the work credible and humane."
            description="These values are what help the work stay useful to children, families, educators, and funders over time."
            align="center"
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {teams.values.map((item, index) => (
            <ScrollReveal key={item} delay={index * 0.08}>
              <FeatureCard title={item} description="" />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
