import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        tone="soft"
        actions={[
          { label: "View Media", href: "/media" },
          { label: "Donate", href: "/donate", variant: "secondary" },
        ]}
      />

      <section className="section-editorial border-b border-[color:var(--color-border)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label={research.intro.label}
              title={research.intro.headline}
              description={research.intro.description}
            />
          </ScrollReveal>
          <div className="grid gap-5">
            {research.currentPractice.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <article className="panel-light flex h-full flex-col rounded-[1.9rem] p-6">
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
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-12">
          <ScrollReveal>
            <div className="panel-soft overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[16/12]">
                <Image
                  src={research.visual.image}
                  alt={research.visual.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-5 text-sm font-medium text-[var(--color-muted)]">
                {research.visual.title}
              </div>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <SectionIntro
                label={research.resources.label}
                title={research.resources.headline}
                description={research.resources.description}
              />
            </ScrollReveal>
            <div className="mt-10 grid gap-4">
              {research.resources.links.map((link, index) => (
                <ScrollReveal key={link.title} delay={index * 0.08}>
                  <div className="panel-light flex min-h-[11rem] h-full flex-col rounded-[1.8rem] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]">
                      WIP resource
                    </p>
                    <div className="mt-3 flex flex-grow flex-col items-start justify-between gap-6">
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                        {link.title}
                      </h3>
                      <Link href={link.href} className="text-sm font-medium text-[var(--color-turquoise)]">
                        Coming soon
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Monthly Newsletters"
              title="Existing newsletters already show the tone and direction of the knowledge work."
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
                Research and public voice
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-off-white)] sm:text-5xl">
                Research building here is designed to stay useful to educators, families, and collaborators.
              </h2>
              <Link
                href="/media#press"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-5 py-3 text-sm font-medium text-[var(--color-off-white)] transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
              >
                Explore public writing
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
