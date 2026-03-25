"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "../content/data";
import BrandMark from "./BrandMark";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[rgba(255,250,242,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <div onClick={handleLinkClick}>
          <BrandMark compact />
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const isDonate = item.name === "Donate";

            if (isDonate) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="ml-2 inline-flex items-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition duration-200 hover:bg-[var(--color-accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)]"
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)] ${
                  isActive
                    ? "bg-[rgba(160,185,163,0.26)] text-[var(--color-ink)]"
                    : "text-[var(--color-muted)] hover:bg-white/70 hover:text-[var(--color-ink)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          className="relative z-50 rounded-full border border-[color:var(--color-border)] bg-white/80 p-3 text-[var(--color-ink)] lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[color:var(--color-border)] bg-[rgba(255,250,242,0.97)] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-8">
              {navigation.map((item, i) => {
                const isActive = pathname === item.href;
                const isDonate = item.name === "Donate";
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`block rounded-[1.5rem] px-5 py-4 text-lg font-medium transition duration-200 ${
                        isDonate
                          ? "bg-[var(--color-accent)] text-[var(--color-ink)]"
                          : isActive
                            ? "bg-[rgba(160,185,163,0.26)] text-[var(--color-ink)]"
                            : "bg-white/70 text-[var(--color-ink)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-4 rounded-[1.5rem] border border-[color:var(--color-border)] bg-white/70 px-5 py-4"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sage-deep)]">
                  Contact
                </p>
                <a
                  href="mailto:hello@brainbristle.org"
                  className="text-lg font-medium text-[var(--color-ink)]"
                >
                  hello@brainbristle.org
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
