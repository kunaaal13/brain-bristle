import Link from "next/link";
import { contentData } from "../content/data";
import ScrollReveal from "../components/ScrollReveal";
import FAQItem from "../components/FAQItem";
import NewsletterForm from "../components/NewsletterForm";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { home } = contentData;

  return (
    <div className="w-full">
      {/* 1. Hero Section - Editorial Redesign */}
      <section className="relative w-full bg-off-white flex flex-col lg:flex-row border-b border-navy/10 overflow-hidden min-h-[85vh]">
        
        {/* Left: Typography & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 lg:py-0 relative z-10">
          <ScrollReveal direction="left">
            <span className="inline-block py-1.5 px-4 bg-navy text-yellow text-xs font-bold tracking-[0.2em] mb-8 uppercase">
              {home.hero.tagline}
            </span>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black font-heading text-navy tracking-tight leading-[1.05] mb-8">
              Autism <br className="hidden lg:block"/>
              <span className="text-grey-turquoise italic font-light">Demystified.</span>
            </h1>
            <p className="text-lg md:text-xl text-navy/80 font-medium leading-relaxed max-w-lg mb-12 border-l-[3px] border-yellow pl-6">
              &quot;{home.hero.stat}&quot;
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={home.hero.primaryCta.href}
                className="px-8 py-4 bg-yellow text-navy text-sm font-bold tracking-widest uppercase hover:bg-navy hover:text-yellow transition-colors text-center border-2 border-transparent"
              >
                {home.hero.primaryCta.label}
              </Link>
              <Link 
                href={home.hero.secondaryCta.href}
                className="px-8 py-4 bg-transparent border-2 border-navy text-navy text-sm font-bold tracking-widest uppercase hover:bg-navy/5 transition-colors text-center"
              >
                {home.hero.secondaryCta.label}
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Abstract Vector / Prompt Container */}
        <div className="w-full lg:w-1/2 bg-soft-sage/20 relative flex items-center justify-center p-8 lg:p-20 border-l border-navy/10">
          <ScrollReveal direction="right" className="w-full h-full relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow/10 to-transparent pointer-events-none" />
            
            {/* Image Placeholder / Prompt Box for User */}
            <div className="w-full h-full min-h-[400px] border-2 border-dashed border-grey-turquoise/50 bg-white/50 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow via-grey-turquoise to-navy" />
              <div className="bg-white px-4 py-2 rounded-full border border-navy/10 text-xs font-bold tracking-widest text-navy uppercase mb-6 shadow-sm">
                Illustration Placeholder
              </div>
              <h3 className="text-2xl font-bold font-heading text-navy mb-4">Generate with Nano Banana</h3>
              <p className="text-sm font-mono text-navy/60 bg-off-white p-4 rounded-xl text-left border border-navy/5 w-full max-w-md mx-auto select-all selection:bg-yellow selection:text-navy">
                <span className="font-bold text-navy block mb-2">Prompt:</span>
                A minimalist, editorial vector illustration representing neurodiversity and the &apos;malleable mind&apos;. Flat editorial style, using a restricted palette of Navy (#152E4C), Grey Turquoise (#5B938E), Yellow (#F5CA01), and Soft Sage (#A0B9A3). Abstract, sophisticated, avoiding generic puzzle pieces or brain gears. Organic flowing lines representing paths of learning, gentle overlaps showing inclusion and structural support. High contrast, clean vector aesthetic.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Marquee: Articles & Newsletters */}
      <div className="w-full bg-navy py-12 border-b-[6px] border-yellow overflow-hidden flex relative">
        <div className="flex animate-marquee whitespace-nowrap min-w-max hover:animation-play-state-paused cursor-default gap-6 px-6">
          {[...home.newsletters, ...home.newsletters, ...home.newsletters].map((item, idx) => (
            <div key={idx} className="inline-flex flex-col bg-white border-2 border-navy p-6 w-80 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(245,202,1,1)] transition-all whitespace-normal group">
              <span className="text-navy/50 text-xs font-bold tracking-widest uppercase mb-4 block">
                {item.date}
              </span>
              <h3 className="text-xl font-black font-heading text-navy leading-snug group-hover:text-grey-turquoise transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Why Brain Bristle (Editorial Quote Layout) */}
      <section className="py-24 lg:py-32 bg-white border-b border-navy/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <ScrollReveal>
                <div className="text-[12rem] leading-none font-black font-heading text-yellow opacity-20 absolute -top-16 -left-8 pointer-events-none select-none">
                  &quot;
                </div>
                <h2 className="text-4xl md:text-6xl font-black font-heading text-navy leading-tight relative z-10">
                  {home.whyBrainBristle.meaning}
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-8">
              <ScrollReveal delay={0.1}>
                <div className="p-8 border-l-4 border-grey-turquoise bg-off-white">
                  <p className="text-lg md:text-xl text-navy/80 leading-relaxed font-medium">
                    {home.whyBrainBristle.philosophy1}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-navy/60 leading-relaxed pl-8">
                  {home.whyBrainBristle.philosophy2}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do - Brutalist Card Grid */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b-2 border-navy pb-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-black font-heading text-navy uppercase tracking-tight">{home.whatWeDo.headline}</h2>
              </div>
              <p className="text-lg text-navy/70 max-w-xl font-medium">
                {home.whatWeDo.copy}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-navy bg-navy">
            {home.whatWeDo.pillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="bg-white border-[1px] border-navy p-10 hover:bg-yellow hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 group">
                <div className="text-sm font-bold tracking-widest text-navy/40 mb-8 font-mono">0{idx + 1}</div>
                <h3 className="text-2xl font-black font-heading mb-6 text-navy uppercase leading-snug group-hover:text-navy">
                  {pillar.title}
                </h3>
                <p className="text-navy/70 font-medium leading-relaxed group-hover:text-navy/90">
                  {pillar.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Model in Tiers (Asymmetrical) */}
      <section className="py-24 lg:py-32 bg-navy text-off-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-grey-turquoise/10 clip-path-slant" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal direction="right">
              <h2 className="text-4xl md:text-6xl font-black font-heading text-yellow mb-8 tracking-tight">
                Our Model <br/>in Tiers
              </h2>
              <p className="text-xl text-white/70 max-w-md font-light mb-12">
                We orchestrate a comprehensive 5-phase pipeline, turning passionate graduates into specialized social workers embedded in schools.
              </p>
              <Link href="/our-model" className="inline-flex items-center gap-4 text-yellow font-bold uppercase tracking-widest hover:text-white transition-colors group">
                View the Full Journey
                <span className="w-10 h-10 rounded-full border-2 border-yellow flex items-center justify-center group-hover:border-white transition-colors">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="flex flex-col gap-4">
                {[
                  "Recruit from top colleges",
                  "Train in inclusive practices & ABA",
                  "Place in low-income schools",
                  "Provide daily on-ground supervision",
                  "Build parent advocacy"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-2xl font-black font-heading text-soft-sage opacity-50">0{i + 1}</div>
                    <p className="text-xl font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Impact Numbers (Bold Data Visualization) */}
      <section className="py-24 lg:py-32 bg-yellow text-navy border-b-8 border-navy">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-widest uppercase mb-16 text-center">Foreseeable Impact 25-26</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 text-center divide-x-0 md:divide-x-2 divide-navy/10">
            {home.impactNumbers.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-5xl lg:text-7xl font-black font-heading mb-4 text-navy">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="font-bold text-sm uppercase tracking-wider text-navy/70 max-w-[120px]">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Autism Prevalence Data Grid */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 border-l-8 border-yellow pl-8">
              <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
                {home.autismPrevalence.headline}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {home.autismPrevalence.stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 border-2 border-navy/10 bg-white hover:border-grey-turquoise hover:shadow-lg transition-all h-full">
                  <h4 className="text-xl font-bold font-heading text-navy mb-4 uppercase">{stat.title}</h4>
                  <p className="text-navy/70 leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs on Homepage */}
      <section className="py-24 lg:py-32 bg-soft-sage/20 border-t border-navy/10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-navy text-center mb-16 uppercase tracking-tight">
              Frequently Asked
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 md:p-12 border-2 border-navy shadow-md">
              {home.faq.map((item, idx) => (
                <FAQItem key={idx} question={item.question} answer={item.answer} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Newsletter Section */}
      <section className="py-24 lg:py-32 bg-yellow border-t-2 border-navy px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-black font-heading text-navy uppercase tracking-tight mb-8">
              Stay in the Loop
            </h2>
            <p className="text-xl md:text-2xl text-navy/80 font-bold mb-12">
              Join our monthly newsletter for stories of inclusion, education, and advocacy.
            </p>
            <div className="bg-white p-8 md:p-12 border-2 border-navy shadow-[8px_8px_0px_0px_rgba(21,46,76,1)] max-w-2xl mx-auto transform rotate-1">
              <NewsletterForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
