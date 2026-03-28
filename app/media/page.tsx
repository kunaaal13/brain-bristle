import type { Metadata } from "next";
import EventCard from "../../components/EventCard";
import FilmCard from "../../components/FilmCard";
import ImageStrip from "../../components/ImageStrip";
import PageHero from "../../components/PageHero";
import PressCard from "../../components/PressCard";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Watch Brain Bristle films, explore public events, and read press, articles, and public writing connected to autism, education, and inclusion.",
}

export default function MediaPage() {
  const { media } = contentData;

  return (
    <div>
      <PageHero
        label={media.label}
        title={media.headline}
        description={media.description}
        layout="centered"
        tone="editorial"
        actions={[
          { label: "Jump to films", href: "#films" },
          { label: "Jump to press", href: "#press", variant: "secondary" },
        ]}
      />

      <section className="section-turquoise border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Media gallery"
              title="A visual rhythm for documentary work, conversations, and public voice."
              description="These images connect the public-facing work to the school spaces, gatherings, and conversations that shape Brain Bristle's voice."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12">
            <ImageStrip items={media.gallery} />
          </div>
        </div>
      </section>

      <section id="films" className="section-editorial border-b border-[color:var(--color-border)] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Films"
              title="Documentary and story-led work that makes autism more legible to wider audiences."
              description="These films move between awareness, lived experience, and the everyday realities of inclusion inside schools and communities."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {media.films.map((film, index) => (
              <ScrollReveal key={film.title} delay={index * 0.08}>
                <FilmCard title={film.title} description={film.description} videoId={film.videoId} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="section-soft-sage border-b border-[color:var(--color-border)] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Events"
              title="Public conversations that hold complexity without losing clarity."
              description="Brain Bristle's events bring together educators, artists, writers, parents, and public thinkers to talk about autism with more honesty and range."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {media.events.map((event, index) => (
              <ScrollReveal key={event.topic} delay={index * 0.08}>
                <EventCard speaker={event.speaker} topic={event.topic} description={event.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="press" className="section-editorial scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Press, Readings and Articles"
              title="Coverage and public writing that extend Brain Bristle's voice."
              description="Articles, interviews, and press features that help place the work inside larger conversations about education, neurodiversity, and public systems."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {media.press.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <PressCard publication={item.publication} title={item.title} url={item.url} />
              </ScrollReveal>
            ))}
          </div>

          {media.pressReleases.length ? (
            <>
              <div className="mt-20">
                <ScrollReveal>
                  <SectionIntro
                    label="Press releases"
                    title="Formal announcements that mark organisational milestones."
                    description="These releases help preserve a record of major public moments in Brain Bristle's development."
                    align="center"
                  />
                </ScrollReveal>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {media.pressReleases.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.08}>
                    <PressCard
                      publication={item.publication}
                      title={item.title}
                      url={item.url}
                      meta={item.meta}
                      ctaLabel="Read release"
                    />
                  </ScrollReveal>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </div>
  );
}
