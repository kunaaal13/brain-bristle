import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FAQItem from '../components/FAQItem'
import ImageCarousel from '../components/ImageCarousel'
import NewsletterForm from '../components/NewsletterForm'
import PageHero from '../components/PageHero'
import ScrollReveal from '../components/ScrollReveal'
import SectionIntro from '../components/SectionIntro'
import { contentData } from '../content/data'

export const metadata: Metadata = {
  title: 'Brain Bristle',
  description:
    'Brain Bristle builds equitable education, inclusion, and opportunity for autistic children in India through direct intervention, advocacy, and research.',
}

export default function Home() {
  const { home } = contentData

  return (
    <div>
      <PageHero
        label={home.label}
        title={home.headline}
        description={home.description}
        tone='editorial'
        actions={[
          { label: home.primaryCta.label, href: home.primaryCta.href },
          {
            label: home.secondaryCta.label,
            href: home.secondaryCta.href,
            variant: 'secondary',
          },
        ]}
        aside={
          <div className='panel-light w-full overflow-hidden rounded-[2.2rem]'>
            <div className='relative aspect-[4/5] min-h-[28rem] sm:aspect-[16/11] sm:min-h-[24rem] lg:aspect-[4/5] lg:min-h-[36rem]'>
              <Image
                src={home.heroImage.image}
                alt={home.heroImage.alt}
                fill
                sizes='(max-width: 1024px) 100vw, 34vw'
                className='object-cover object-center'
                priority
              />
              <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(21,46,76,0.04)_0%,rgba(21,46,76,0.16)_40%,rgba(21,46,76,0.72)_100%)]' />
              <div className='absolute inset-x-0 top-0 p-4'>
                <div className='eyebrow eyebrow-dark'>From the classroom</div>
              </div>
              <div className='absolute inset-x-0 bottom-0 p-6 sm:p-7'>
                <div className='panel-dark max-w-lg rounded-[1.5rem] p-5'>
                  <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]'>
                    {home.heroImage.title}
                  </p>
                  <p className='mt-3 text-sm leading-7 text-white/82'>
                    {home.heroImage.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className='section-navy border-b border-[rgba(255,250,242,0.12)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label={home.problem.label}
              title={home.problem.headline}
              description={home.problem.description}
              align='center'
              tone='inverse'
            />
          </ScrollReveal>
          <div className='mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
            {home.problem.stats.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.06}>
                <div className='flex h-full flex-col rounded-[1.9rem] border border-[rgba(255,250,242,0.14)] bg-[rgba(255,255,255,0.08)] p-6 shadow-[0_24px_60px_rgba(6,18,34,0.16)]'>
                  <div className='text-4xl font-semibold tracking-[-0.06em] text-[var(--color-accent-soft)] sm:text-5xl'>
                    {item.value}
                  </div>
                  <p className='mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-off-white)]'>
                    {item.label}
                  </p>
                  <p className='mt-4 text-sm leading-7 text-white/72'>
                    {item.note}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.12}>
            <div className='panel-dark mt-8 overflow-hidden rounded-[2.2rem]'>
              <div className='grid items-stretch lg:grid-cols-[1.08fr_0.92fr]'>
                <div className='relative min-h-[22rem] lg:min-h-[30rem]'>
                  <Image
                    src={home.problem.visual.image}
                    alt={home.problem.visual.alt}
                    fill
                    sizes='(max-width: 1024px) 100vw, 54vw'
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(21,46,76,0.08)_0%,rgba(21,46,76,0.18)_42%,rgba(21,46,76,0.74)_100%)]' />
                  <div className='absolute inset-x-0 top-0 p-5 sm:p-6'>
                    <div className='eyebrow eyebrow-dark'>From the ground</div>
                  </div>
                </div>
                <div className='flex flex-col justify-center bg-[linear-gradient(135deg,rgba(9,22,40,0.96),rgba(21,46,76,0.88))] px-6 py-8 sm:px-8 sm:py-10 lg:px-10'>
                  <p className='text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-soft)]'>
                    {home.problem.visual.title}
                  </p>
                  <p className='mt-5 max-w-xl text-lg leading-8 text-white/82 sm:text-xl sm:leading-9'>
                    {home.problem.closing}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className='section-editorial border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label={home.why.label}
              title={home.why.headline}
              description={home.why.description}
              align='center'
            />
          </ScrollReveal>
          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            <ScrollReveal delay={0.08}>
              <div className='panel-light flex h-full flex-col rounded-[2rem] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]'>
                  Why the name matters
                </p>
                <p className='mt-4 text-base leading-8 text-[var(--color-muted)]'>
                  The organisation&apos;s name speaks to careful, repeated,
                  transformative effort: a mind that can be supported, shaped,
                  and made more reachable through consistency.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className='panel-light flex h-full flex-col rounded-[2rem] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]'>
                  Direct intervention
                </p>
                <p className='mt-4 text-base leading-8 text-[var(--color-muted)]'>
                  Work begins with children in schools and grows outward from
                  the everyday reality of educational access, support, and
                  participation.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <div className='panel-light flex h-full flex-col rounded-[2rem] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]'>
                  Public voice
                </p>
                <p className='mt-4 text-base leading-8 text-[var(--color-muted)]'>
                  Awareness, advocacy, and public language help keep autism,
                  inclusion, and systems accountability visible beyond the
                  classroom.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className='section-soft-sage border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label={home.whatWeDo.label}
              title={home.whatWeDo.headline}
              description={home.whatWeDo.description}
              align='center'
            />
          </ScrollReveal>
          <div className='mt-12 grid gap-6 lg:grid-cols-2'>
            {home.whatWeDo.items.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <article className='panel-light flex h-full flex-col overflow-hidden rounded-[2rem]'>
                  <div className='relative aspect-[16/10]'>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes='(max-width: 1024px) 100vw, 48vw'
                      className='object-cover'
                    />
                  </div>
                  <div className='flex flex-grow flex-col px-6 py-6'>
                    <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]'>
                      0{index + 1}
                    </p>
                    <h3 className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]'>
                      {item.title}
                    </h3>
                    <p className='mt-4 text-base leading-8 text-[var(--color-muted)]'>
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className='section-turquoise border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label={home.philosophy.label}
              title={home.philosophy.headline}
              description={home.philosophy.description}
              align='center'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <div className='panel-soft mt-12 overflow-hidden rounded-[2rem]'>
              <div className='relative aspect-[16/8]'>
                <Image
                  src={home.philosophy.visual.image}
                  alt={home.philosophy.visual.alt}
                  fill
                  sizes='100vw'
                  className='object-cover'
                />
              </div>
              <div className='px-6 py-5 text-sm font-medium text-[var(--color-muted)]'>
                {home.philosophy.visual.title}
              </div>
            </div>
          </ScrollReveal>
          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            {home.philosophy.beliefs.map((belief, index) => (
              <ScrollReveal key={belief.title} delay={index * 0.08}>
                <div className='panel-light flex h-full flex-col rounded-[1.8rem] p-6'>
                  <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]'>
                    Belief 0{index + 1}
                  </p>
                  <h3 className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]'>
                    {belief.title}
                  </h3>
                  <p className='mt-4 text-base leading-8 text-[var(--color-muted)]'>
                    {belief.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className='section-navy border-b border-[rgba(255,250,242,0.12)]'>
        <div className='mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label={home.newsletter.label}
              title={home.newsletter.headline}
              description={home.newsletter.description}
              align='center'
              tone='inverse'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className='panel-dark rounded-[2rem] p-7'>
              <NewsletterForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className='section-editorial border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label='On the Ground'
              title="A closer visual look at Brain Bristle's day-to-day work."
              description='These images show the texture of the work: classroom support, observation, guided interaction, and the ordinary school spaces where inclusion is built.'
              align='center'
            />
          </ScrollReveal>
          <div className='mt-12'>
            <ScrollReveal delay={0.08}>
              <ImageCarousel
                slides={home.gallery}
                aspectClassName='aspect-[16/11] lg:aspect-[16/9]'
                sizes='100vw'
                eyebrow='Home gallery'
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className='section-highlight border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label='Frequently Asked'
              title='A quick orientation to how the organisation works.'
              description='These questions offer a short, practical introduction to where Brain Bristle works and why school-based inclusion matters.'
              align='center'
            />
          </ScrollReveal>
          <div className='panel-light mt-10 overflow-hidden rounded-[2rem]'>
            {home.faqs.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <div className='mt-12 flex flex-wrap justify-center gap-3'>
            {[
              { label: 'Explore Impact', href: '/impact' },
              { label: 'Research', href: '/research' },
              { label: 'Work With Us', href: '/work-with-us' },
              { label: 'Media', href: '/media' },
              { label: 'Donate', href: '/donate' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-white/92 px-4 py-2.5 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-accent-strong)] hover:bg-white'
              >
                {link.label}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
