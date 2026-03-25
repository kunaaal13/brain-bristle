import Image from 'next/image'
import ImageCarousel from '../../components/ImageCarousel'
import MetricCard from '../../components/MetricCard'
import PageHero from '../../components/PageHero'
import ScrollReveal from '../../components/ScrollReveal'
import SectionIntro from '../../components/SectionIntro'
import { contentData } from '../../content/data'

export default function ImpactPage() {
  const { impact } = contentData

  return (
    <div>
      <PageHero
        label={impact.label}
        title={impact.headline}
        description={impact.description}
        layout='centered'
        tone='soft'
        actions={[
          { label: 'Work With Us', href: '/work-with-us' },
          { label: 'Donate', href: '/donate', variant: 'secondary' },
        ]}
      />

      <section className='section-navy border-b border-[rgba(255,250,242,0.12)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label='2026-27 Outlook'
              title='The impact frame is specific enough to be understood and judged.'
              description='The goals are visible in the number of schools, classrooms, students, and people reached through advocacy.'
              align='center'
              tone='inverse'
            />
          </ScrollReveal>
          <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {impact.metrics.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.06}>
                <MetricCard
                  value={item.value}
                  label={item.label}
                  note={item.note}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className='section-editorial border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label='Impact Pillars'
              title='Three connected ways the organisation changes outcomes.'
              description='School intervention, advocacy, and research should reinforce each other instead of operating as isolated tracks.'
              align='center'
            />
          </ScrollReveal>
          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            {impact.pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.08}>
                <article className='panel-light flex h-full flex-col rounded-[2rem] p-7'>
                  <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]'>
                    0{index + 1}
                  </p>
                  <h3 className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]'>
                    {pillar.title}
                  </h3>
                  <p className='mt-4 text-base leading-8 text-[var(--color-muted)]'>
                    {pillar.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className='section-soft-sage border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label='Three Key Levers'
              title="The organisation's impact is catalyzed through three levers that constantly inform one another."
              description='Direct intervention, implementation systems, and shared blueprints together turn school work into wider public learning.'
              align='center'
            />
          </ScrollReveal>
          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            {impact.levers.map((lever, index) => (
              <ScrollReveal key={lever.title} delay={index * 0.08}>
                <article className='panel-light flex h-full flex-col overflow-hidden rounded-[2rem]'>
                  <div className='relative aspect-[16/11]'>
                    <Image
                      src={lever.image}
                      alt={lever.alt}
                      fill
                      sizes='(max-width: 1024px) 100vw, 31vw'
                      className='object-cover'
                    />
                  </div>
                  <div className='flex flex-grow flex-col px-6 py-6'>
                    <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]'>
                      Lever 0{index + 1}
                    </p>
                    <h3 className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]'>
                      {lever.title}
                    </h3>
                    <p className='mt-4 text-base leading-8 text-[var(--color-muted)]'>
                      {lever.description}
                    </p>
                  </div>
                </article>
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
              title='The impact looks different when you see the settings where it is built.'
              description='These images bring the impact story back to classrooms, field routines, and the public moments where learning is carried outward.'
              align='center'
            />
          </ScrollReveal>
          <div className='mt-12'>
            <ScrollReveal delay={0.08}>
              <ImageCarousel
                slides={impact.fellowGallery}
                aspectClassName='aspect-[16/10] lg:aspect-[16/8.5]'
                sizes='100vw'
                eyebrow='Impact gallery'
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className='section-highlight'>
        <div className='mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-12'>
          <ScrollReveal>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-sage-deep)]'>
              Closing line
            </p>
            <h2 className='mt-6 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl'>
              {impact.closingLine}
            </h2>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
