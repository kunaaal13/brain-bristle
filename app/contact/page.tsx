import { contentData } from "../../content/data";
import ScrollReveal from "../../components/ScrollReveal";
import NewsletterForm from "../../components/NewsletterForm";
import { Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const { contact } = contentData;

  return (
    <div className="w-full bg-off-white min-h-screen">
      <section className="py-24 md:py-32 px-6 md:px-12 border-b-[6px] border-navy bg-yellow">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 text-navy uppercase">
                {contact.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl text-navy/90 font-bold border-2 border-navy inline-block px-6 py-3 bg-white">
                {contact.hero.subheadline}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal direction="right">
              <div className="bg-white border-2 border-navy p-10 md:p-12 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(21,46,76,1)] transition-all">
                <h3 className="text-3xl font-black font-heading text-navy mb-8 uppercase">Send a Message</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:bg-soft-sage/10 transition-colors bg-white font-medium"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:bg-soft-sage/10 transition-colors bg-white font-medium"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:bg-soft-sage/10 transition-colors resize-none bg-white font-medium"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-navy text-yellow text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-navy border-2 border-navy transition-colors mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-10 h-full flex flex-col">
                <div className="bg-soft-sage/20 p-10 md:p-12 border-2 border-navy flex-grow">
                  <h3 className="text-2xl font-black font-heading text-navy mb-8 uppercase">Contact Info</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <Mail className="text-navy mt-1" size={24} strokeWidth={2.5} />
                      <div>
                        {contact.emails.map(email => (
                          <a key={email} href={`mailto:${email}`} className="block text-xl font-bold text-navy hover:text-grey-turquoise transition-colors mb-2">
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="text-navy" size={24} strokeWidth={2.5} />
                      <p className="text-xl font-bold text-navy">{contact.hours}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="text-navy" size={24} strokeWidth={2.5} />
                      <p className="text-xl font-bold text-navy">{contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-navy p-10 md:p-12 text-white border-2 border-navy hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,250,242,1)] transition-all">
                  <h3 className="text-2xl font-black font-heading mb-4 text-yellow uppercase">Stay Updated</h3>
                  <p className="text-white/80 mb-6 font-medium text-lg leading-relaxed">Subscribe to our monthly newsletter for stories of impact.</p>
                  <NewsletterForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
