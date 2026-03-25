import Image from "next/image";
import FAQItem from "../../components/FAQItem";
import PageHero from "../../components/PageHero";
import ProfileCarousel from "../../components/ProfileCarousel";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export default function WorkWithUsPage() {
  const { workWithUs } = contentData;

  return (
    <div>
      <PageHero
        label={workWithUs.label}
        title={workWithUs.headline}
        description={workWithUs.description}
        layout="centered"
        tone="editorial"
        actions={[
          { label: "Request the application form", href: workWithUs.application.cta.href },
          { label: "Donate", href: "/donate", variant: "secondary" },
        ]}
      />

      <section id="our-team" className="section-soft-sage border-b border-[color:var(--color-border)] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={workWithUs.team.label}
              title={workWithUs.team.headline}
              description={workWithUs.team.description}
              align="center"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {workWithUs.team.photos.map((photo, index) => (
              <ScrollReveal key={photo.image} delay={index * 0.08}>
                <div className="panel-light flex h-full flex-col overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-5 py-4 text-sm font-medium text-[var(--color-muted)]">
                    {photo.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {workWithUs.team.groups.map((group, index) => (
              <ScrollReveal key={group.title} delay={index * 0.06}>
                <article className="panel-light flex h-full flex-col overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={group.people[0].image}
                      alt={`Placeholder image for ${group.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 32vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-grow flex-col px-6 py-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]">
                      {group.people[0].role}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {group.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {group.people[0].summary}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="fellows" className="section-editorial border-b border-[color:var(--color-border)] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={workWithUs.fellows.label}
              title={workWithUs.fellows.headline}
              description={workWithUs.fellows.description}
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12">
            <ScrollReveal delay={0.08}>
              <ProfileCarousel items={workWithUs.fellows.items} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="fellow-journey" className="section-navy border-b border-[rgba(255,250,242,0.12)] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Social Work Fellow Journey"
              title="A process pathway translated into a clear web system."
              description="This is the full journey the site should communicate clearly: from recruitment to placement beyond the fellowship year."
              align="center"
              tone="inverse"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-5">
            {workWithUs.journey.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.08}>
                <div className="panel-dark grid gap-4 rounded-[1.9rem] p-6 lg:grid-cols-[96px_1fr] lg:items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[var(--color-accent)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ink)]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-off-white)]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-white/76">{step.description}</p>
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
              label={workWithUs.jobOpenings.label}
              title={workWithUs.jobOpenings.headline}
              description={workWithUs.jobOpenings.description}
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {workWithUs.jobOpenings.roles.map((role, index) => (
              <ScrollReveal key={role.title} delay={index * 0.08}>
                <article className="panel-light flex h-full flex-col rounded-[2rem] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]">
                    Role cluster
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {role.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{role.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy border-b border-[rgba(255,250,242,0.12)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                {workWithUs.application.label}
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-off-white)] sm:text-5xl">
                {workWithUs.application.headline}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/76">{workWithUs.application.description}</p>
              <a
                href={workWithUs.application.cta.href}
                className="mt-8 inline-flex items-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-accent-soft)]"
              >
                {workWithUs.application.cta.label}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="faqs" className="section-highlight border-b border-[color:var(--color-border)] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="FAQs"
              title="Questions prospective fellows and collaborators are likely to ask."
              description="This section is designed to make the role, expectations, and next steps legible before someone reaches out."
              align="center"
            />
          </ScrollReveal>
          <div className="panel-light mt-10 overflow-hidden rounded-[2rem]">
            {workWithUs.faqs.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-editorial">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sage-deep)]">
              {workWithUs.support.label}
            </p>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              {workWithUs.support.headline}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {workWithUs.support.description}
            </p>
            <a
              href={workWithUs.support.cta.href}
              className="mt-8 inline-flex items-center rounded-full border border-[color:var(--color-border-strong)] bg-white/92 px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent-strong)] hover:bg-white"
            >
              {workWithUs.support.cta.label}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
