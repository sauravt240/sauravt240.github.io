import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { Hero3DScene } from './Hero3DScene';

const roles = [
  'AI Engineer',
  'Frontend Engineer',
  'Full-Stack Developer',
  'UI/UX-minded Builder',
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  // Role cycling every 2s
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (leftColRef.current) {
        tl.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 35, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, stagger: 0.12, delay: 0.1 }
        );
      }

      if (rightColRef.current) {
        tl.fromTo(
          rightColRef.current.children,
          { opacity: 0, scale: 0.9, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.15 },
          '-=0.8'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 pt-28 pb-16 overflow-hidden"
    >
      {/* Three.js Interactive 3D Canvas Background */}
      <Hero3DScene />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-lg">
              <span className="status-dot mint" />
              <span className="text-xs font-mono tracking-wider text-[#F3F4F6] font-medium">
                Open to AI, Frontend &amp; Full-Stack roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] tracking-tight text-white leading-[1.05]">
                I design &amp; build <br />
                <span className="gradient-text font-serif italic font-normal">AI-powered products</span> <br />
                people actually enjoy.
              </h1>
            </div>

            {/* Cycling Role Subheading */}
            <p className="text-base sm:text-lg md:text-xl font-light text-[#94A3B8] flex flex-wrap items-center gap-2">
              <span>A</span>
              <span className="inline-block font-medium text-white px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-sm sm:text-base font-mono">
                {roles[roleIndex]}
              </span>
              <span>building things that ship.</span>
            </p>

            {/* Description */}
            <p className="max-w-xl text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Computer Science (AI) graduate blending applied AI, clean frontend engineering, and thoughtful UI/UX — with full-stack and database skills to bring it all together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('work')}
                className="btn btn-primary cursor-pointer"
              >
                <span>See my work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href="https://github.com/sauravt240"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Cpu className="w-4 h-4 text-[#8B7CFF]" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Glass Mockup Cards */}
          <div ref={rightColRef} className="lg:col-span-5 relative flex flex-col gap-5 justify-center py-6">
            
            {/* Mockup Card 1: Career Copilot Live Pipeline */}
            <div className="group relative rounded-2xl p-5 bg-[#0c0f17]/80 backdrop-blur-xl border border-amber-500/25 shadow-2xl hover:border-amber-500/40 transition-all duration-300 animate-float-1">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="status-dot amber" />
                  <span className="font-display font-semibold text-sm text-white">Career Copilot</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  5 AGENTS
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-3">
                <span>Agents: 5 Active</span>
                <span className="text-amber-400">Pipeline: Sequential</span>
              </div>

              {/* Animated Mini Pipeline */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px] font-bold border border-amber-500/40">
                  <span>JD</span>
                  <span className="text-[9px] font-normal text-white/70">Analyze</span>
                </div>
                <span className="text-xs text-[#64748B]">➔</span>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px] font-bold border border-amber-500/40">
                  <span>MT</span>
                  <span className="text-[9px] font-normal text-white/70">Match</span>
                </div>
                <span className="text-xs text-[#64748B]">➔</span>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px] font-bold border border-amber-500/40">
                  <span>TL</span>
                  <span className="text-[9px] font-normal text-white/70">Tailor</span>
                </div>
                <span className="text-xs text-[#64748B]">➔</span>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-purple-500/20 text-purple-300 font-mono text-[11px] font-bold border border-purple-500/30">
                  <span>IP</span>
                  <span className="text-[9px] font-normal text-white/70">Prep</span>
                </div>
              </div>
            </div>

            {/* Mockup Card 2: Design System & Architecture */}
            <div className="group relative rounded-2xl p-5 bg-[#0c0f17]/80 backdrop-blur-xl border border-[#8B7CFF]/30 shadow-2xl hover:border-[#8B7CFF]/50 transition-all duration-300 animate-float-2 sm:ml-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="status-dot mint" />
                  <span className="font-display font-semibold text-sm text-white">Design Systems &amp; 3D</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-[#4CE0B3] border border-[#4CE0B3]/30">
                  SPATIAL UI
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-3">
                <span>Components: Token-Driven</span>
                <span className="text-[#4CE0B3]">Craft: 60fps</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-white/90 border border-white/10">
                  Three.js
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-white/90 border border-white/10">
                  GSAP Motion
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-white/90 border border-white/10">
                  Figma Systems
                </span>
              </div>
            </div>

            {/* Mockup Card 3: Core Technology Matrix */}
            <div className="group relative rounded-2xl p-5 bg-[#0c0f17]/80 backdrop-blur-xl border border-[#4CE0B3]/25 shadow-2xl hover:border-[#4CE0B3]/40 transition-all duration-300 animate-float-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#8B7CFF]" />
                  <span className="font-display font-semibold text-sm text-white">Core Technology Matrix</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#8B7CFF]/10 text-[#8B7CFF] border border-[#8B7CFF]/30">
                  FULL-STACK
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2.5">
                <span>Frontend: React &amp; Next.js</span>
                <span className="text-[#4CE0B3]">Cloud: AWS &amp; Docker</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                <span className="tag-chip">React</span>
                <span className="tag-chip">Next.js</span>
                <span className="tag-chip">Python</span>
                <span className="tag-chip">FastAPI</span>
                <span className="tag-chip">PostgreSQL</span>
                <span className="tag-chip">Docker</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => scrollToSection('marquee')}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-20"
      >
        <span className="text-[10px] uppercase font-mono font-semibold tracking-[0.25em] text-[#64748B] group-hover:text-white transition-colors">
          SCROLL
        </span>
        <div className="w-4 h-8 rounded-full border border-white/20 p-1 flex justify-center">
          <div className="w-1 h-2 rounded-full bg-[#4CE0B3] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
