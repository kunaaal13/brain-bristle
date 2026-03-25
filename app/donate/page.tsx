import PageHero from "../../components/PageHero";
import ProfileCarousel from "../../components/ProfileCarousel";
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
        tone="navy"
        actions={[{ label: donate.cta.label, href: donate.cta.href }]}
      />

      <section className="section-highlight border-b border-[color:var(--color-border)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={donate.context.label}
              title={donate.context.headline}
              description={donate.context.description}
              align="center"
            />
          </ScrollReveal>
          <div className="grid gap-4">
            {donate.context.allocations.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.08}>
                <div className="panel-light rounded-[1.8rem] px-5 py-5 text-base leading-8 text-[var(--color-muted)]">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft-sage border-b border-[color:var(--color-border)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={donate.tax.label}
              title={donate.tax.headline}
              description={donate.tax.description}
              align="center"
            />
          </ScrollReveal>
          <div className="grid gap-4">
            {donate.tax.highlights.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.08}>
                <div className="panel-light rounded-[1.8rem] px-6 py-6">
                  <p className="text-base leading-8 text-[var(--color-muted)]">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Supporters"
              title="The mission has been carried forward by people who believed early."
              description="This section acknowledges the people and institutions that have helped Brain Bristle keep the work moving."
              align="center"
              tone="inverse"
            />
          </ScrollReveal>
          <div className="mt-12">
            <ScrollReveal delay={0.08}>
              <ProfileCarousel
                items={donate.donors.map((donor) => ({
                  image: donor.image,
                  alt: donor.alt,
                  name: donor.name,
                  role: donor.role,
                  description: donor.description,
                }))}
                variant="dark"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
