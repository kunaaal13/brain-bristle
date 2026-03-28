import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { contentData, navigation } from "../content/data";
import BrandMark from "./BrandMark";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[rgba(255,250,242,0.12)] section-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div>
            <BrandMark tone="inverse" />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
              Brain Bristle builds autism inclusion through school-based intervention, educator partnership, public advocacy, and emerging research grounded in practice.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="https://linkedin.com/company/brain-bristle" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white transition duration-200 hover:border-[var(--color-accent-soft)] hover:bg-white/12">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/brainbristle" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white transition duration-200 hover:border-[var(--color-accent-soft)] hover:bg-white/12">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/channel/UCq0-SKbxJascPFedLh3PdeA" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white transition duration-200 hover:border-[var(--color-accent-soft)] hover:bg-white/12">
                <Youtube size={18} />
              </a>
              <a href="https://facebook.com/brainbristle" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white transition duration-200 hover:border-[var(--color-accent-soft)] hover:bg-white/12">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-soft)]">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/78 transition duration-200 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-soft)]">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-white/78">
              <p>{contentData.contact.city}</p>
              <p>{contentData.contact.hours}</p>
              <a href={`mailto:${contentData.contact.email}`} className="block transition duration-200 hover:text-white">
                {contentData.contact.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-soft)]">Newsletter</h3>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/72">
              Join the mailing list for field notes, research reflections, event updates, and new storytelling from Brain Bristle.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Brain Bristle. All rights reserved.</p>
          <p>Built for clarity, credibility, and long-term support.</p>
        </div>
      </div>
    </footer>
  );
}
