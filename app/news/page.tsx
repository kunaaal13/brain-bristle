import { contentData } from "../../content/data";
import ScrollReveal from "../../components/ScrollReveal";
import PressCard from "../../components/PressCard";
import SectionHeading from "../../components/SectionHeading";

export default function News() {
  const { news } = contentData;

  return (
    <div className="w-full bg-off-white min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white text-center border-b-2 border-navy px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 tracking-tight text-navy uppercase">
              {news.hero.headline}
            </h1>
            <div className="text-[10rem] leading-none font-black font-heading text-yellow opacity-30 select-none h-10">
              &quot;
            </div>
            <p className="text-xl md:text-3xl text-navy/90 max-w-3xl mx-auto font-medium leading-relaxed bg-off-white border-2 border-navy p-8 relative z-10">
              {news.hero.quote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Press */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading headline="Featured Press" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.featuredPress.map((article, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} className="h-full">
                <PressCard 
                  publication={article.publication}
                  title={article.title}
                  url={article.url}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-soft-sage/20 px-6 md:px-12 border-t-2 border-navy">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <SectionHeading headline="Press Releases" centered />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {news.pressReleases.map((release, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-10 border-2 border-navy h-full hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(21,46,76,1)] transition-all flex flex-col">
                  <span className="inline-block py-1.5 px-3 bg-navy text-yellow text-xs font-bold tracking-widest mb-6 uppercase self-start">
                    {release.date}
                  </span>
                  <h3 className="text-2xl font-black font-heading text-navy mb-4 uppercase">{release.title}</h3>
                  <p className="text-navy/80 font-medium mb-8 line-clamp-3">
                    {release.excerpt}
                  </p>
                  <a 
                    href={release.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-bold text-navy hover:text-grey-turquoise uppercase tracking-widest transition-colors inline-flex items-center gap-2"
                  >
                    Read Release &rarr;
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Note on Archive */}
      <section className="py-16 bg-navy text-center text-yellow px-6 border-t-[6px] border-yellow">
        <div className="container mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest">For media inquiries, please reach out to <a href="mailto:hello@brainbristle.org" className="underline hover:text-white transition-colors">hello@brainbristle.org</a></p>
        </div>
      </section>
    </div>
  );
}
