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
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/12 shadow-2xl shadow-black/50'
            : 'bg-[#141414]/60 backdrop-blur-md border-white/8'
        }`}
      >
        {/* Logo: Circular avatar/initials "ST" with accent gradient ring, reverses direction on hover */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#0a0a0a] p-[1.5px] overflow-hidden">
            {/* Spinning accent gradient ring (reverses on hover) */}
            <div className="absolute inset-0 rounded-full accent-gradient animate-spin group-hover:[animation-direction:reverse] transition-all duration-700" />
            <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-[#0e0e0e] border border-white/10 group-hover:border-white/25 transition-colors">
              <span className="font-display italic text-sm font-semibold tracking-tighter text-[#f5f5f5] group-hover:text-white">
                ST
              </span>
            </div>
          </div>
          <span className="hidden sm:inline-block font-medium text-xs tracking-wider uppercase text-[#f5f5f5]/90">
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
              className="px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-medium text-[#878787] hover:text-[#f5f5f5] hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* "Say hi" button -> scrolls to contact, with gradient hover border */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, '#contact')}
          className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold text-[#f5f5f5] bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-transparent overflow-hidden"
        >
          {/* Accent hover border layer */}
          <span className="absolute inset-0 rounded-full p-[1px] opacity-0 group-hover:opacity-100 transition-opacity accent-gradient -z-10" />
          <span>Say hi</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#89AACC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </nav>
    </header>
  );
};
