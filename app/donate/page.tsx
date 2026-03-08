import { contentData } from "../../content/data";
import ScrollReveal from "../../components/ScrollReveal";
import DonorCard from "../../components/DonorCard";
import SectionHeading from "../../components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export default function Donate() {
  const { donate } = contentData;

  return (
    <div className="w-full bg-off-white min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-yellow text-navy text-center px-6 md:px-12 border-b-[6px] border-navy">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 bg-navy text-yellow text-xs font-bold tracking-widest mb-6 uppercase">
              {donate.hero.subheadline}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 tracking-tight uppercase">
              {donate.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-navy/90 max-w-3xl mx-auto font-medium leading-relaxed bg-white border-2 border-navy p-6">
              {donate.context}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Ask / Goals */}
      <section className="py-24 bg-white px-6 md:px-12 border-b-2 border-navy">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-4xl md:text-5xl font-black font-heading text-navy tracking-tight uppercase leading-[1.1] mb-10">We need your support to reach our goals</h2>
              <div className="space-y-6">
                {donate.goals.map((goal, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-off-white border-2 border-navy p-6">
                    <CheckCircle2 className="text-yellow flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                    <p className="text-lg text-navy font-medium">{goal}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-navy text-white p-10 border-2 border-navy text-center hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(245,202,1,1)] transition-all">
                <p className="text-sm font-bold tracking-widest text-yellow uppercase mb-6">Tax Benefits</p>
                <p className="text-white/90 font-medium mb-12 text-balance text-lg">
                  {donate.taxInfo}
                </p>
                <button className="w-full py-5 bg-yellow text-navy text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors border-2 border-transparent">
                  Donate Now
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Donors Wall */}
      <section className="py-24 bg-off-white px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading headline="Our Believers & Supporters" centered />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {donate.donors.map((donor, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <DonorCard 
                  name={donor.name}
                  role={donor.role}
                  description={donor.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
