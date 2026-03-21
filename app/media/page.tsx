import EventCard from "../../components/EventCard";
import FilmCard from "../../components/FilmCard";
import ImageStrip from "../../components/ImageStrip";
import PageHero from "../../components/PageHero";
import PressCard from "../../components/PressCard";
import ScrollReveal from "../../components/ScrollReveal";
import SectionIntro from "../../components/SectionIntro";
import { contentData } from "../../content/data";

export default function MediaPage() {
  const { media } = contentData;

  return (
    <div>
      <PageHero
        label={media.label}
        title={media.headline}
        description={media.description}
        layout="centered"
        actions={[
          { label: "Jump to films", href: "#films" },
          { label: "Jump to events", href: "#events", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="Media gallery"
            title="A visual thread connecting film, events, and public storytelling."
            description="This section supports the broader media narrative around documentary work, live conversations, and Brain Bristle's public voice."
          />
        </ScrollReveal>
        <div className="mt-12">
          <ImageStrip items={media.gallery} />
        </div>
      </section>

      <section id="films" className="border-y border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Films"
              title="Documentary and story-led work that makes autism more legible to wider audiences."
              description="These films move between awareness, lived experience, and the everyday realities of inclusion inside schools and communities."
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

      <section id="events" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionIntro
            label="Events"
            title="Public conversations that hold complexity without losing clarity."
            description="Brain Bristle's events bring together writers, educators, artists, parents, and public thinkers to talk about autism with more honesty and range."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {media.events.map((event, index) => (
            <ScrollReveal key={event.topic} delay={index * 0.08}>
              <EventCard speaker={event.speaker} topic={event.topic} description={event.description} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="press" className="border-t border-[color:var(--color-border)] bg-[rgba(255,255,255,0.58)] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionIntro
              label="Selected press"
              title="Coverage and writing that extend Brain Bristle's public voice."
              description="Articles and interviews that help place the work inside larger conversations about education, neurodiversity, and public systems."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {media.press.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <PressCard publication={item.publication} title={item.title} url={item.url} />
              </ScrollReveal>
            ))}
          </div>

          {media.pressReleases?.length ? (
            <>
              <div className="mt-20">
                <ScrollReveal>
                  <SectionIntro
                    label="Press releases"
                    title="Formal announcements that mark major organisational milestones."
                    description="A record of key public announcements from Brain Bristle's growth as an organisation."
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
                      ctaLabel="Read Release"
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
