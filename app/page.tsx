import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
  const metricStats = home.problem.stats.filter(
    (item): item is (typeof home.problem.stats)[number] & { emphasis: string } =>
      'emphasis' in item
  )
  const narrativeStats = home.problem.stats.filter(
    (item) => !('emphasis' in item)
  )

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
              <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(21,46,76,0.02)_0%,rgba(21,46,76,0.08)_42%,rgba(21,46,76,0.22)_100%)]' />
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
          <div className='mt-12 grid gap-5 xl:grid-cols-3'>
            {metricStats.map((item, index) => (
              <ScrollReveal key={`${item.emphasis}-${item.text}`} delay={index * 0.06}>
                <div className='flex h-full flex-col rounded-[2rem] border border-[rgba(255,250,242,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.06))] p-6 shadow-[0_24px_60px_rgba(6,18,34,0.16)] sm:p-7'>
                  <div className='text-4xl font-semibold tracking-[-0.06em] text-[var(--color-accent-soft)] sm:text-5xl'>
                    {item.emphasis}
                  </div>
                  <p className='mt-4 max-w-[18rem] text-lg leading-8 text-white/84'>
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.14}>
              <div className='flex h-full flex-col rounded-[2rem] border border-[rgba(255,250,242,0.14)] bg-[rgba(255,255,255,0.05)] p-5 shadow-[0_24px_60px_rgba(6,18,34,0.16)] sm:p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]'>
                  Where children are today
                </p>
                <div className='mt-5 grid gap-4'>
                  {narrativeStats.map((item) => (
                    <div
                      key={item.text}
                      className='rounded-[1.5rem] border border-[rgba(255,250,242,0.12)] bg-[rgba(8,18,32,0.18)] px-4 py-4'
                    >
                      <p className='text-base leading-7 text-white/82'>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
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
                </div>
                <div className='flex flex-col justify-center bg-[linear-gradient(135deg,rgba(9,22,40,0.96),rgba(21,46,76,0.88))] px-6 py-8 sm:px-8 sm:py-10 lg:px-10'>
                  <p className='text-2xl font-semibold tracking-[-0.04em] text-[var(--color-off-white)] sm:text-[2rem]'>
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
            <div className='mx-auto max-w-3xl text-center'>
              <p className='mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-sage-deep)]'>
                {home.why.label}
              </p>
              <h2 className='text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl'>
                {home.why.headline}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className='panel-light mt-12 rounded-[2.2rem] px-6 py-8 sm:px-8 sm:py-10'>
              <div className='mx-auto max-w-4xl text-center'>
                <div className='space-y-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9'>
                  {home.why.paragraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={index === 0 ? 'font-medium text-[var(--color-ink)]' : ''}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
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
                    <h3 className='text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]'>
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
                aspectClassName='aspect-[4/5] sm:aspect-[16/11] lg:aspect-[16/9]'
                sizes='100vw'
                eyebrow='Home gallery'
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className='section-soft-sage border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label='FAQs'
              title='Frequently Asked Questions'
              description='A few common questions about where Brain Bristle works, why the work matters, and what the organisation’s outreach includes.'
              align='center'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className='panel-light mt-12 overflow-hidden rounded-[2rem]'>
              {home.faqs.map((item) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className='section-highlight border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-12'>
          <ScrollReveal>
            <div className='panel-light rounded-[2.2rem] px-6 py-10 sm:px-10 lg:px-12 lg:py-12'>
              <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
                <div className='text-center lg:text-left'>
                  <p className='text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-sage-deep)]'>
                    {home.donateReference.label}
                  </p>
                  <h2 className='mt-5 text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl'>
                    {home.donateReference.headline}
                  </h2>
                  <p className='mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]'>
                    {home.donateReference.description}
                  </p>
                  <Link
                    href={home.donateReference.cta.href}
                    className='mt-8 inline-flex items-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-accent-soft)]'
                  >
                    {home.donateReference.cta.label}
                  </Link>
                </div>
                <div className='rounded-[1.8rem] border border-[color:var(--color-border)] bg-[rgba(255,255,255,0.82)] p-5 text-left shadow-[0_20px_55px_rgba(21,46,76,0.08)]'>
                  <div className='grid gap-5 md:grid-cols-2'>
                    <div>
                      <p className='border-b border-[color:var(--color-border-strong)] pb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]'>
                        Monthly Donation
                      </p>
                      <div className='mt-4 space-y-3 text-lg font-medium text-[var(--color-ink)]'>
                        {['₹300 / month', '₹500 / month', '₹700 / month'].map((amount) => (
                          <div key={amount} className='rounded-full bg-[rgba(245,202,1,0.14)] px-4 py-2.5'>
                            {amount}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className='border-b border-[color:var(--color-border-strong)] pb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]'>
                        One-Time Donation
                      </p>
                      <p className='mt-4 text-base leading-8 text-[var(--color-muted)]'>
                        You can also support Brain Bristle with a one-time contribution of any amount through the donate tab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
    </div>
  )
}
