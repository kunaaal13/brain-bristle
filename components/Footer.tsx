import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { navigation } from '../content/data';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-off-white pt-20 pb-10 mt-auto border-t-[8px] border-yellow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold font-heading text-white tracking-tight flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-yellow flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-navy"></div>
              </div>
              BRAIN BRISTLE
            </Link>
            <p className="text-off-white/80 text-sm leading-relaxed mb-8">
              Autism. Inclusion. Education. Equity.<br/>
              Empowering children on the autism spectrum in low-income schools through early intervention and inclusion.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/brain-bristle" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow hover:text-navy transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/brainbristle" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow hover:text-navy transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/channel/UCq0-SKbxJascPFedLh3PdeA" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow hover:text-navy transition-all">
                <Youtube size={18} />
              </a>
              <a href="https://facebook.com/brainbristle" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow hover:text-navy transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-yellow tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-off-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-grey-turquoise opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-yellow tracking-wide uppercase">More</h3>
            <ul className="space-y-3">
              {navigation.slice(4).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-off-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-grey-turquoise opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold font-heading mb-6 text-yellow tracking-wide uppercase">Subscribe</h3>
            <p className="text-off-white/70 text-sm mb-6">
              Join our monthly newsletter for updates on autism, inclusion, and advocacy.
            </p>
            <NewsletterForm />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-off-white/50">
            &copy; {currentYear} Brain Bristle. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-off-white/50">
            <a href="mailto:hello@brainbristle.org" className="hover:text-white transition-colors">
              hello@brainbristle.org
            </a>
            <span>Monday - Saturday</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
