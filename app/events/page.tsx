import { contentData } from "../../content/data";
import ScrollReveal from "../../components/ScrollReveal";
import EventCard from "../../components/EventCard";

export default function Events() {
  const { events } = contentData;

  return (
    <div className="w-full bg-off-white min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-yellow text-navy text-center px-6 md:px-12 border-b-[6px] border-navy">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 tracking-tight uppercase">
              {events.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 max-w-2xl mx-auto font-bold border-2 border-navy inline-block px-6 py-3 bg-white">
              {events.hero.subheadline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Events Grid */}
      <section className="py-24 lg:py-32 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.featured.map((event, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <EventCard 
                  speaker={event.speaker}
                  topic={event.topic}
                  description={event.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-yellow text-center px-6 md:px-12 border-t-[6px] border-yellow">
        <ScrollReveal>
          <div className="container mx-auto max-w-3xl relative z-10">
            <h2 className="text-5xl md:text-6xl font-black font-heading mb-10 uppercase">Want to host an event with us?</h2>
            <p className="text-xl text-white/90 mb-12 font-medium">
              We frequently collaborate with schools, corporates, and communities to build awareness.
            </p>
            <a 
              href="mailto:hello@brainbristle.org"
              className="inline-block px-10 py-5 bg-yellow text-navy text-sm font-bold uppercase tracking-widest hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,250,242,1)] transition-all border-2 border-transparent"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
