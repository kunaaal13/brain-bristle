import { contentData } from "../../content/data";
import ScrollReveal from "../../components/ScrollReveal";
import TimelineStep from "../../components/TimelineStep";
import Link from "next/link";

export default function OurModel() {
  const { ourModel } = contentData;

  return (
    <div className="w-full bg-off-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 border-b-2 border-navy bg-yellow">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black font-heading mb-8 tracking-tight text-navy uppercase">
              {ourModel.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-navy font-bold max-w-2xl mx-auto border-2 border-navy inline-block px-6 py-3 bg-white">
              {ourModel.hero.subheadline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal delay={0.2}>
            <div className="bg-white border-2 border-navy p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(21,46,76,1)]">
              {ourModel.phases.map((phase, idx) => (
                <TimelineStep 
                  key={idx}
                  title={phase.title}
                  description={phase.description}
                  isLast={idx === ourModel.phases.length - 1}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-off-white text-center px-6 md:px-12 border-t-2 border-yellow">
        <ScrollReveal>
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-black font-heading mb-10 uppercase">Ready to be part of the journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="px-8 py-4 bg-yellow text-navy text-sm font-bold tracking-widest uppercase hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,250,242,1)] transition-all border-2 border-transparent">
                Join as a Social Worker
              </Link>
              <Link href="/donate" className="px-8 py-4 bg-transparent border-2 border-yellow text-yellow text-sm font-bold tracking-widest uppercase hover:bg-yellow/10 transition-colors">
                Fund a Placement
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
