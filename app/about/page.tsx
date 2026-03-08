import { contentData } from "../../content/data";
import ScrollReveal from "../../components/ScrollReveal";
import SectionHeading from "../../components/SectionHeading";
import Link from "next/link";

export default function About() {
  const { about } = contentData;

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="py-24 md:py-32 bg-navy text-off-white text-center px-6 md:px-12 border-b-2 border-yellow">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight text-yellow uppercase">
              {about.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl font-bold tracking-widest text-white/90 uppercase border-2 border-yellow inline-block px-6 py-3">
              &quot;{about.hero.subheadline}&quot;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. What We Do */}
      <section className="py-24 bg-off-white border-b-2 border-navy">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <ScrollReveal>
            <SectionHeading headline={about.whatWeDo.headline} />
            <p className="text-xl md:text-2xl text-navy font-medium leading-relaxed text-pretty border-l-[6px] border-grey-turquoise pl-6">
              {about.whatWeDo.copy}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Founder & 4. Philosophy */}
      <section className="py-24 bg-soft-sage/10 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal direction="right">
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-navy/5 h-full">
                <span className="inline-block py-1 px-3 rounded-full bg-yellow/20 text-yellow text-sm font-bold tracking-wider mb-6 uppercase">
                  {about.founder.headline}
                </span>
                <h3 className="text-3xl font-bold font-heading text-navy mb-6">{about.founder.name}</h3>
                <p className="text-lg text-navy/70 leading-relaxed">
                  {about.founder.credentials}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-navy p-10 md:p-12 rounded-[2.5rem] shadow-xl text-white h-full relative overflow-hidden">
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-grey-turquoise/40 rounded-full blur-3xl" />
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 text-sm font-bold tracking-wider mb-6 uppercase relative z-10">
                  Our Philosophy
                </span>
                <h3 className="text-3xl font-bold font-heading text-yellow mb-6 relative z-10">Creative & Kind</h3>
                <p className="text-lg text-white/80 leading-relaxed relative z-10">
                  {contentData.home.whyBrainBristle.philosophy2}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-yellow text-navy text-center px-6 md:px-12 border-t-2 border-navy">
        <ScrollReveal>
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-black font-heading mb-10 uppercase tracking-tight">See how we create change</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/our-model" className="px-10 py-5 bg-navy text-yellow text-sm font-bold tracking-widest uppercase hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,250,242,1)] transition-all border-2 border-navy">
                Explore Our Model
              </Link>
              <Link href="/donate" className="px-10 py-5 bg-transparent border-2 border-navy text-navy text-sm font-bold tracking-widest uppercase hover:bg-navy/5 transition-colors">
                Support the Work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
