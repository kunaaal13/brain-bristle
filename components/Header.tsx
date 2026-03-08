"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '../content/data';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-off-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold font-heading text-navy tracking-tight z-50 relative flex items-center gap-2"
          onClick={handleLinkClick}
        >
          <div className="w-6 h-6 rounded-full bg-yellow flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-navy"></div>
          </div>
          BRAIN BRISTLE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const isDonate = item.name === 'Donate';
            
            if (isDonate) {
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="px-6 py-2.5 bg-yellow text-navy font-semibold rounded-full hover:bg-yellow/90 transition-colors shadow-sm"
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors relative group py-2 ${
                  isActive ? 'text-grey-turquoise' : 'text-navy hover:text-grey-turquoise'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-grey-turquoise transform origin-left transition-transform duration-300 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-navy p-2 z-50 relative focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-20 bg-navy z-40 lg:hidden overflow-y-auto border-t-4 border-yellow"
          >
            <div className="flex flex-col px-8 py-12 gap-8 h-full min-h-[calc(100vh-5rem)] pb-24">
              {navigation.map((item, i) => {
                const isActive = pathname === item.href;
                const isDonate = item.name === 'Donate';
                
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
                      className={`block text-4xl font-black font-heading uppercase tracking-widest ${
                        isActive ? 'text-yellow' : 'text-white hover:text-grey-turquoise'
                      } ${isDonate ? 'mt-8 text-navy bg-yellow inline-block px-8 py-4' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-auto pt-8 border-t border-white/20"
              >
                <p className="text-sm font-bold text-white/50 mb-2 uppercase tracking-widest">Contact Us</p>
                <a href="mailto:hello@brainbristle.org" className="text-xl font-bold text-white hover:text-yellow transition-colors">
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
