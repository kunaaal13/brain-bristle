import FeatureCard from "../../components/FeatureCard";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export default function CareersPage() {
  const { careers, contact } = contentData;

  return (
    <div>
      <PageHero
        label={careers.label}
        title={careers.headline}
        description={careers.description}
        layout="centered"
        actions={[
          { label: "Email the team", href: `mailto:${contact.email}` },
          { label: "Support the mission", href: "/donate", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <SectionIntro
              label="Work with us"
              title="The organisation needs people across strategy, operations, communication, research, and field work."
              description="The career architecture starts broad, but the deepest role pathway currently lives inside the Social Work Fellow model."
            />
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {careers.roleFamilies.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.06}>
                <div className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-white p-5 text-sm font-medium text-[var(--color-ink)] shadow-[0_18px_40px_rgba(16,35,63,0.05)]">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Social Work Fellow journey"
              title="A process infographic translated into a readable web system."
              description="This is the full journey the site should communicate clearly: from recruitment to placement beyond the fellowship year."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-5">
            {careers.fellowship.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.08}>
                <div className="grid gap-4 rounded-[1.75rem] border border-[color:var(--color-border)] bg-[var(--color-surface-alt)] p-6 shadow-[0_18px_40px_rgba(16,35,63,0.05)] lg:grid-cols-[104px_1fr] lg:items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[var(--color-ink)] text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                      {step.description}
                    </p>
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
            label="What we value"
            title="The standard is warm, rigorous, and dependable."
            description="The work asks for emotional intelligence, but it also asks for discipline, documentation, and steadiness inside complex human settings."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {careers.principles.map((item, index) => (
            <ScrollReveal key={item} delay={index * 0.08}>
              <FeatureCard title={item} description="" />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)] bg-[rgba(216,226,219,0.28)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="rounded-[2rem] bg-[var(--color-ink)] p-8 text-white shadow-[0_32px_80px_rgba(16,35,63,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-soft)]">
                Applications
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
                {careers.applicationCta}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition duration-200 hover:bg-[var(--color-accent-soft)]"
              >
                Apply or enquire
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
