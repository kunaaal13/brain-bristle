import DonorCard from "../../components/DonorCard";
import PageHero from "../../components/PageHero";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export default function DonatePage() {
  const { donate } = contentData;

  return (
    <div>
      <PageHero
        label={donate.label}
        title={donate.headline}
        description={donate.description}
        layout="centered"
        actions={[{ label: donate.cta.label, href: donate.cta.href }]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="What funding enables"
            title="Giving supports both direct service and the systems around it."
            description="The strongest inclusion work depends on people, training, supervision, and the ability to stay present long enough for change to hold."
          />
        </ScrollReveal>
        <div className="space-y-4">
          {donate.allocations.map((item, index) => (
            <ScrollReveal key={item} delay={index * 0.08}>
              <div className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[var(--color-surface-alt)] px-5 py-5 text-base leading-8 text-[var(--color-muted)] shadow-[0_18px_40px_rgba(16,35,63,0.05)]">
                {item}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Tax and giving"
              title="Giving should feel clear, compliant, and easy to act on."
              description={donate.taxInfo}
            />
          </ScrollReveal>
          <div className="grid gap-4">
            {donate.taxHighlights.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.08}>
                <div className="rounded-[1.75rem] border border-[color:var(--color-border)] bg-white/88 px-6 py-6 shadow-[0_18px_50px_rgba(16,35,63,0.06)] backdrop-blur-sm">
                  <p className="text-base leading-8 text-[var(--color-muted)]">{item}</p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.24}>
              <a
                href={donate.cta.href}
                className="inline-flex w-fit items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition duration-200 hover:bg-[var(--color-accent)]"
              >
                {donate.cta.label}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Supporters"
              title="The mission has been carried forward by people who believed early."
              description="A few of the organisations and individuals who have helped Brain Bristle widen its reach and deepen its school-based work."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {donate.donors.map((donor, index) => (
              <ScrollReveal key={donor.name} delay={index * 0.08}>
                <DonorCard name={donor.name} role={donor.role} description={donor.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
