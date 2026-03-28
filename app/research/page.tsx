import type { Metadata } from 'next'
import PageHero from '../../components/PageHero'
import ScrollReveal from '../../components/ScrollReveal'
import SectionIntro from '../../components/SectionIntro'
import { contentData } from '../../content/data'

export const metadata: Metadata = {
  title: 'Research',
  description:
    "Explore Brain Bristle's growing research-building practice, public learning formats, and future research papers and resources.",
}

export default function ResearchPage() {
  const { research } = contentData

  return (
    <div>
      <PageHero
        label={research.label}
        title={research.headline}
        description={research.description}
        layout='centered'
        tone='soft'
        actions={[
          { label: 'View Media', href: '/media' },
          { label: 'Donate', href: '/donate', variant: 'secondary' },
        ]}
      />

      <section className='section-editorial border-b border-[color:var(--color-border)]'>
        <div className='mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label={research.intro.label}
              title={research.intro.headline}
              description={research.intro.description}
              align='center'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className='panel-light mt-12 rounded-[2.2rem] px-6 py-8 sm:px-8 sm:py-10'>
              <div className='mx-auto max-w-4xl text-center'>
                <p className='text-base leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9'>
                  {research.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className='section-turquoise'>
        <div className='mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <ScrollReveal>
            <SectionIntro
              label={research.resources.label}
              title={research.resources.headline}
              description={research.resources.description}
              align='center'
            />
          </ScrollReveal>
          <div className='mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {research.resources.links.map((link, index) => (
              <ScrollReveal key={link.title} delay={index * 0.08}>
                <div className='panel-light flex h-full min-h-[12rem] flex-col rounded-[1.8rem] p-6'>
                  <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]'>
                    WIP placeholder
                  </p>
                  <h3 className='mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]'>
                    {link.title}
                  </h3>
                  <p className='mt-auto pt-8 text-sm font-medium text-[var(--color-turquoise)]'>
                    Placeholder link
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
