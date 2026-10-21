import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', step: '01' },
  { label: 'About', href: '#about', step: '02' },
  { label: 'Stack', href: '#stack', step: '03' },
  { label: 'Work', href: '#work', step: '04' },
  { label: 'Certifications', href: '#certifications', step: '05' },
  { label: 'Contact', href: '#contact', step: '06' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-3.5 sm:top-5 inset-x-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <nav
            aria-label="Main Navigation"
            className={`pointer-events-auto w-full sm:w-auto flex items-center justify-between gap-2 sm:gap-4 md:gap-8 px-3.5 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 border ${
              scrolled || isMobileMenuOpen
                ? 'bg-[#090A0E]/90 backdrop-blur-xl border-white/12 shadow-2xl shadow-black/70'
                : 'bg-[#090A0E]/50 backdrop-blur-md border-white/[0.08]'
            }`}
          >
            {/* Logo: Monogram "ST" with clean tactile ring */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="group flex items-center gap-2.5 sm:gap-3 select-none shrink-0"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] border border-white/15 p-[1px] group-hover:border-white/35 transition-colors">
                <span className="font-display italic text-xs font-semibold tracking-tighter text-[#F8FAFC]">
                  ST
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#34D399] border-2 border-[#090A0E]" />
              </div>
              <span className="hidden min-[380px]:inline-block font-medium text-xs tracking-wider uppercase text-[#E2E8F0] whitespace-nowrap">
                Saurav Thakur
              </span>
            </a>

            {/* Desktop Nav Links (hidden on mobile, visible from md up) */}
            <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/[0.08] shadow-sm'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E2C08D]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop "Say hi" CTA button */}
            <div className="hidden md:flex items-center shrink-0">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-[#F8FAFC] bg-white/[0.06] hover:bg-white/[0.12] transition-all duration-300 border border-white/10 hover:border-white/25 shadow-sm"
              >
                <span>Say hi</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Controls (compact CTA + tactile Hamburger Menu toggle) */}
            <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-[#F8FAFC] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 active:scale-95 transition-all"
              >
                <span>Say hi</span>
                <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] active:bg-white/[0.18] text-[#F8FAFC] border border-white/10 transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Menu className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto w-full mt-2.5 max-w-sm sm:max-w-md md:hidden rounded-2xl sm:rounded-3xl bg-[#090A0E]/95 backdrop-blur-2xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 sm:p-5 overflow-hidden"
              >
                {/* Menu Header with status indicator */}
                <div className="flex items-center justify-between pb-3.5 mb-2.5 border-b border-white/[0.07]">
                  <div className="flex items-center gap-2">
                    <span className="status-dot active" />
                    <span className="text-xs font-mono text-[#94A3B8]">
                      Available for hire
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2C08D]">
                    Navigation
                  </span>
                </div>

                {/* Mobile Links List */}
                <div className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-white/[0.08] text-white border border-white/12 font-medium'
                            : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-[11px] font-mono ${
                              isActive ? 'text-[#E2C08D]' : 'text-[#64748B]'
                            }`}
                          >
                            {item.step}
                          </span>
                          <span className="text-sm tracking-wide">
                            {item.label}
                          </span>
                        </div>
                        <ArrowUpRight
                          className={`w-3.5 h-3.5 transition-all ${
                            isActive
                              ? 'text-[#E2C08D] opacity-100'
                              : 'text-[#64748B] opacity-40 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                          }`}
                        />
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Drawer Footer Actions */}
                <div className="pt-3.5 mt-2.5 border-t border-white/[0.07] flex items-center justify-between gap-2.5">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-[#090A0F] bg-[#F8FAFC] hover:bg-white active:scale-[0.98] transition-all shadow-md"
                  >
                    <span>Get in touch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://github.com/sauravt240"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-white active:bg-white/10 transition-colors"
                      title="GitHub Profile"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com/in/sauravthakur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-white active:bg-white/10 transition-colors"
                      title="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Dimmed backdrop for mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden pointer-events-auto"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

