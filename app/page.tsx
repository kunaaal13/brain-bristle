import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FAQItem from "../components/FAQItem";
import FeatureCard from "../components/FeatureCard";
import ImageCarousel from "../components/ImageCarousel";
import NewsletterForm from "../components/NewsletterForm";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import SectionIntro from "../components/SectionIntro";
import { contentData } from "../content/data";

export default function Home() {
  const { home } = contentData;

  return (
    <div>
      <PageHero
        label={home.label}
        title={home.headline}
        description={home.description}
        actions={[
          { label: home.primaryCta.label, href: home.primaryCta.href },
          { label: home.secondaryCta.label, href: home.secondaryCta.href, variant: "secondary" },
        ]}
        aside={
          <div className="w-full overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-white/88 shadow-[0_30px_80px_rgba(16,35,63,0.1)] backdrop-blur-sm">
            <div className="relative aspect-[4/5] min-h-[28rem] sm:aspect-[16/11] sm:min-h-[24rem] lg:aspect-[4/5] lg:min-h-[36rem]">
              <Image
                src={home.heroImage.image}
                alt={home.heroImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,35,63,0.04)_0%,rgba(16,35,63,0.18)_42%,rgba(16,35,63,0.62)_100%)]" />
              <div className="absolute inset-x-0 top-0 p-4">
                <div className="inline-flex rounded-full bg-[rgba(16,35,63,0.68)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
                  From the classroom
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="max-w-lg rounded-[1.5rem] border border-white/14 bg-[linear-gradient(135deg,rgba(16,35,63,0.46),rgba(183,103,60,0.26))] p-4 backdrop-blur-md sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                    {home.heroImage.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/86">
                    {home.heroImage.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <SectionIntro
              label="Mission"
              title="Brain Bristle exists to build practical inclusion where children already live and learn."
              description={home.intro}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="grid gap-5 sm:grid-cols-2">
              {home.proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-[color:var(--color-border)] bg-white/90 p-6 shadow-[0_20px_40px_rgba(16,35,63,0.05)]"
                >
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                    {item.value}
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sage-deep)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Core commitments"
              title="Three commitments guide how the organisation works."
              description="Balanced ambition, equitable education, and inclusion are not slogans here. They are the operating frame for the work on the ground."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {home.commitments.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <FeatureCard eyebrow={`0${index + 1}`} title={item.title} description={item.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="Why Brain Bristle"
            title="A philosophy of careful, deliberate growth."
            description={home.why}
          />
        </ScrollReveal>
        <div className="grid gap-5">
          {home.modelSummary.map((item, index) => (
            <ScrollReveal key={item} delay={index * 0.08}>
              <div className="flex gap-4 rounded-[1.5rem] border border-[color:var(--color-border)] bg-[var(--color-surface-alt)] p-5 shadow-[0_18px_40px_rgba(16,35,63,0.05)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(216,226,219,0.72)] text-sm font-semibold text-[var(--color-ink)]">
                  0{index + 1}
                </div>
                <p className="pt-1 text-base leading-8 text-[var(--color-muted)]">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[rgba(216,226,219,0.24)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Problem statements"
              title="The scale of the challenge is real, and it is already inside ordinary school systems."
              description="These are the realities the organisation is responding to, each of them grounded in how autism is currently experienced and supported in India."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {home.problemStatements.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <FeatureCard title={item.title} description={item.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="On the ground"
            title="A closer visual look at Brain Bristle's day-to-day work."
            description="These images show the texture of the work: classroom support, reading, observation, guided interaction, and the ordinary spaces where inclusion is built."
          />
        </ScrollReveal>
        <div className="mt-12">
          <ScrollReveal delay={0.08}>
            <ImageCarousel
              slides={home.gallery}
              aspectClassName="aspect-[16/11] lg:aspect-[16/9]"
              sizes="100vw"
              eyebrow="Home gallery"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <FeatureCard
              eyebrow="Newsletter"
              title="Subscribe to our newsletter"
              description="Join the mailing list for updates on Brain Bristle's field work, advocacy, research notes, and events."
            >
              <div className="max-w-md">
                <NewsletterForm variant="light" />
              </div>
            </FeatureCard>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <FeatureCard
              eyebrow="Explore next"
              title="Move deeper into the work."
              description="The rest of the site is organised around impact, careers, research, media, teams, and donation pathways."
            >
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Impact", href: "/impact" },
                  { label: "Careers", href: "/careers" },
                  { label: "Research", href: "/research" },
                  { label: "Media", href: "/media" },
                  { label: "Teams", href: "/teams" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </FeatureCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)] bg-[rgba(255,255,255,0.6)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Frequently asked"
              title="Questions people often ask before they support or collaborate."
              description="A quick orientation to how the organisation works, where it operates, and why school-based inclusion matters so much."
            />
          </ScrollReveal>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-white shadow-[0_24px_60px_rgba(16,35,63,0.06)]">
            {home.faqs.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
