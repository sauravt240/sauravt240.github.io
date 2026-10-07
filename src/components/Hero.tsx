import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const Hero3DScene = React.lazy(() =>
  import('./Hero3DScene').then((m) => ({ default: m.Hero3DScene }))
);

const roles = ['AI Engineer', 'Frontend Engineer', 'Full-Stack Developer', 'UI/UX-minded Builder'];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (leftColRef.current) {
        tl.fromTo(leftColRef.current.children, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.0, stagger: 0.1, delay: 0.1 });
      }
      if (rightColRef.current) {
        tl.fromTo(rightColRef.current, { opacity: 0, scale: 0.96, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1.1 }, '-=0.7');
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-28 pb-14 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <span className="status-dot active" />
              <span className="text-xs font-mono text-[#94A3B8] font-normal tracking-wide">
                Available for AI, Frontend &amp; Full-Stack roles
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] tracking-tight text-[#F8FAFC] leading-[1.05]">
                I design &amp; build <br />
                <span className="font-serif italic font-normal text-white gradient-text">AI-powered products</span> <br />
                people actually enjoy.
              </h1>
            </div>

            <div className="text-base sm:text-lg md:text-xl font-light text-[#94A3B8] flex flex-wrap items-center gap-2">
              <span className="text-[#64748B]">Specializing as</span>
              <span className="relative inline-flex items-center px-3 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-white font-mono text-sm sm:text-base font-medium transition-all duration-300">
                {roles[roleIndex]}
              </span>
              <span>— building things that ship.</span>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
              Computer Science (AI) graduate blending applied AI, clean frontend engineering, and thoughtful UI/UX — with full-stack and database skills to bring it all together.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => scrollToSection('work')}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F8FAFC] text-[#090A0F] font-medium text-sm transition-all duration-300 hover:bg-white hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:shadow-[0_0_32px_rgba(255,255,255,0.25)] cursor-pointer"
              >
                <span>See my work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <a
                href="https://github.com/sauravt240"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] text-[#E2E8F0] font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="pt-5 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div>
                <p className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider mb-0.5">Applied AI</p>
                <p className="text-xs text-[#CBD5E1] font-medium">Multi-agent pipelines &amp; RAG</p>
              </div>
              <div>
                <p className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider mb-0.5">Frontend Craft</p>
                <p className="text-xs text-[#CBD5E1] font-medium">React, 3D &amp; responsive UI</p>
              </div>
              <div>
                <p className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider mb-0.5">Full-Stack Core</p>
                <p className="text-xs text-[#CBD5E1] font-medium">Python, FastAPI &amp; SQL</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="lg:col-span-5 w-full">
            <React.Suspense fallback={<div className="w-full min-h-[460px] rounded-3xl bg-white/[0.02] border border-white/[0.06] animate-pulse" />}>
              <Hero3DScene />
            </React.Suspense>
          </div>

        </div>
      </div>

      <div
        onClick={() => scrollToSection('about')}
        className="mt-14 lg:mt-16 flex flex-col items-center justify-center gap-2 cursor-pointer group z-20 text-[#64748B] hover:text-[#CBD5E1] transition-colors"
      >
        <span className="text-[10px] uppercase font-mono font-medium tracking-[0.25em]">Scroll to explore</span>
        <div className="w-4 h-7 rounded-full border border-white/15 p-1 flex justify-center">
          <div className="w-1 h-2 rounded-full bg-[#E2C08D] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
