import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Work', href: '#work' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-8 px-4 md:px-6 py-2.5 rounded-full transition-all duration-500 border ${
          scrolled
            ? 'bg-[#090A0E]/85 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/60'
            : 'bg-[#090A0E]/40 backdrop-blur-md border-white/[0.07]'
        }`}
      >
        {/* Logo: Monogram "ST" with clean tactile ring */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] border border-white/15 p-[1px] group-hover:border-white/30 transition-colors">
            <span className="font-display italic text-xs font-semibold tracking-tighter text-[#F8FAFC]">
              ST
            </span>
          </div>
          <span className="hidden sm:inline-block font-medium text-xs tracking-wider uppercase text-[#E2E8F0]">
            Saurav Thakur
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.05] transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* "Say hi" tactile button */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, '#contact')}
          className="group inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium text-[#F8FAFC] bg-white/[0.06] hover:bg-white/[0.12] transition-all duration-300 border border-white/10 hover:border-white/20"
        >
          <span>Say hi</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </nav>
    </header>
  );
};
