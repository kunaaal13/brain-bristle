import { contentData } from "../../content/data";
import ScrollReveal from "../../components/ScrollReveal";
import FilmCard from "../../components/FilmCard";
import { Youtube } from "lucide-react";

export default function Films() {
  const { films } = contentData;

  return (
    <div className="w-full bg-off-white min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-off-white text-center border-b-[6px] border-navy">
        <div className="container mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 tracking-tight text-navy uppercase">
              {films.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 font-bold max-w-2xl mx-auto border-2 border-navy inline-block px-6 py-3 bg-yellow">
              {films.hero.subheadline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Film Grid */}
      <section className="py-24 lg:py-32 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {films.videos.map((video, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <FilmCard 
                  title={video.title}
                  description={video.description}
                  videoId={video.videoId}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center px-6 md:px-12 border-t-[6px] border-yellow">
        <ScrollReveal>
          <div className="container mx-auto max-w-3xl">
            <Youtube size={64} strokeWidth={1.5} className="mx-auto text-yellow mb-10" />
            <h2 className="text-5xl md:text-6xl font-black font-heading mb-10 uppercase">Discover More Stories</h2>
            <a 
              href="https://youtube.com/channel/UCq0-SKbxJascPFedLh3PdeA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-white text-navy text-sm font-bold tracking-widest uppercase border-2 border-transparent hover:border-yellow hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(245,202,1,1)] transition-all"
            >
              Visit Our YouTube Channel
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
