import { contentData } from "../../content/data";
import ScrollReveal from "../../components/ScrollReveal";
import PillarCard from "../../components/PillarCard";
import Link from "next/link";
import { Users, GraduationCap, Globe } from "lucide-react";

export default function Impact() {
  const { impact, home } = contentData;

  const icons = [
    <GraduationCap key="1" size={28} />,
    <Globe key="2" size={28} />,
    <Users key="3" size={28} />
  ];

  return (
    <div className="w-full bg-off-white min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-navy text-off-white text-center px-6 md:px-12 border-b-[6px] border-yellow">
        <div className="container mx-auto max-w-4xl relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 tracking-tight text-white uppercase">
              {impact.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-yellow font-bold max-w-2xl mx-auto tracking-wide border-2 border-yellow inline-block px-6 py-3">
              {impact.hero.subheadline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-24 px-6 md:px-12 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-navy bg-navy">
            {impact.pillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <PillarCard 
                  title={pillar.title}
                  description={pillar.description}
                  icon={icons[idx]}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 bg-soft-sage/20 px-6 md:px-12 border-y-2 border-navy">
        <div className="container mx-auto max-w-5xl text-center">
          <ScrollReveal>
            <h2 className="text-5xl font-black font-heading mb-16 text-navy uppercase">By The Numbers</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {home.impactNumbers.slice(0, 4).map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 border-2 border-navy bg-white hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(21,46,76,1)] transition-all h-full flex flex-col justify-center">
                  <div className="text-5xl lg:text-6xl font-black font-heading text-navy mb-4">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="w-full h-1 bg-yellow mx-auto mb-4" />
                  <p className="text-navy font-bold text-sm uppercase tracking-widest">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center px-6 md:px-12">
        <ScrollReveal>
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-5xl font-black font-heading mb-10 text-navy uppercase">Help us multiply our impact</h2>
            <Link href="/donate" className="inline-block px-10 py-5 bg-yellow text-navy text-sm font-bold tracking-widest uppercase border-2 border-navy hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(21,46,76,1)] transition-all">
              Support Our Programs
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
