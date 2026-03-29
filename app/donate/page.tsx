import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import ProfileCarousel from "../../components/ProfileCarousel";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Brain Bristle's school inclusion work, advocacy, and research by making a monthly or one-time donation to Alag Par Ek.",
}

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

      <section className="section-editorial border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={donate.options.label}
              title={donate.options.headline}
              description={donate.options.description}
              align="center"
            />
          </ScrollReveal>

          <div className="panel-light mt-12 overflow-hidden rounded-[2.4rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.94))]">
            <div className="grid gap-0 lg:grid-cols-2">
              <ScrollReveal delay={0.06}>
                <div className="flex h-full flex-col px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]">
                    {donate.options.monthly.title}
                  </p>
                  <div className="mt-5 h-px w-full bg-[color:var(--color-border-strong)]" />

                  <ul className="mt-8 space-y-4">
                    {donate.options.monthly.amounts.map((amount) => (
                      <li key={amount} className="flex items-center gap-3 text-[1.8rem] leading-none text-[var(--color-ink)] sm:text-[2rem]">
                        <span
                          aria-hidden="true"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg text-[var(--color-ink)] shadow-[0_10px_24px_rgba(245,202,1,0.28)]"
                        >
                          +
                        </span>
                        <span className="tracking-[-0.04em]">{amount}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={donate.options.monthly.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex w-fit items-center rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ink)] transition hover:bg-[var(--color-accent-soft)]"
                  >
                    {donate.options.monthly.cta.label}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="flex h-full flex-col border-t border-[color:var(--color-border)] px-6 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-t-0 lg:px-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]">
                    {donate.options.oneTime.title}
                  </p>
                  <div className="mt-5 h-px w-full bg-[color:var(--color-border-strong)]" />

                  <p className="mt-8 max-w-md text-[2rem] leading-[1.28] tracking-[-0.05em] text-[var(--color-ink)] sm:text-[2.4rem]">
                    {donate.options.oneTime.description}
                  </p>

                  <a
                    href={donate.options.oneTime.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex w-fit items-center rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ink)] transition hover:bg-[var(--color-accent-soft)]"
                  >
                    {donate.options.oneTime.cta.label}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-highlight border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={donate.context.label}
              title={donate.context.headline}
              description={donate.context.description}
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {donate.context.allocations.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.08}>
                <div className="panel-light flex h-full flex-col rounded-[1.8rem] px-6 py-6">
                  <p className="text-base leading-8 text-[var(--color-muted)]">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft-sage border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={donate.tax.label}
              title={donate.tax.headline}
              description={donate.tax.description}
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {donate.tax.highlights.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.08}>
                <div className="panel-light flex h-full flex-col rounded-[1.8rem] px-6 py-6">
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
