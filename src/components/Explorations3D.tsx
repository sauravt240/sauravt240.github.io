import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Layers, Server, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExplorationCard {
  number: string;
  category: string;
  title: string;
  description: string;
  badges: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const explorations: ExplorationCard[] = [
  {
    number: '01',
    category: 'Applied AI',
    title: 'Multi-Agent AI Pipelines & LLM Orchestration',
    description:
      'Designing cooperative multi-agent workflows with specialized roles: resume matching, JD extraction, tailoring agents, and automated interview question generation with semantic similarity search.',
    badges: ['FastAPI', 'Sentence-Transformers', 'Prompt Engineering', 'LangChain Patterns'],
    icon: Cpu,
  },
  {
    number: '02',
    category: 'System Architecture',
    title: 'Full-Stack & Role-Authenticated Platforms',
    description:
      'Architecting secure role-based portals for university-wide collaboration and high-concurrency esports tournament platforms with live slot synchronization.',
    badges: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'JWT Security', 'Leaflet.js'],
    icon: Layers,
  },
  {
    number: '03',
    category: 'Cloud & DevOps',
    title: 'Containerized Cloud Deployments',
    description:
      'Containerizing Python and web workloads with multi-stage Docker builds, hosting on AWS EC2 with systemd and container health-monitoring restart policies.',
    badges: ['Docker', 'AWS EC2', 'Linux / Bash', 'Git Actions', 'Reverse Proxy'],
    icon: Server,
  },
  {
    number: '04',
    category: 'Creative Engineering',
    title: 'Spatial Web & Interactive 3D Interfaces',
    description:
      'Merging WebGL, Three.js, and kinetic typography to deliver immersive, silky-smooth 60fps web experiences that respect device performance and accessibility.',
    badges: ['Three.js', 'React Three Fiber', 'GSAP ScrollTrigger', 'Tailwind CSS'],
    icon: Sparkles,
  },
];

export const Explorations3D: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 3D Parallax scroll effect on column cards
      if (leftColRef.current && rightColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          {
            y: 50,
            rotateX: 4,
            rotateY: -6,
            z: 0,
          },
          {
            y: -80,
            rotateX: -3,
            rotateY: 4,
            z: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          rightColRef.current,
          {
            y: -40,
            rotateX: -4,
            rotateY: 6,
            z: -20,
          },
          {
            y: 90,
            rotateX: 3,
            rotateY: -5,
            z: 30,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.4,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] overflow-hidden perspective-[1200px]"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#4E85BF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#878787] font-semibold">
              Explorations &amp; Architecture
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#f5f5f5]">
            Engineering <span className="font-display italic text-[#89AACC]">pillars</span>
          </h2>
          <p className="text-sm sm:text-base text-[#878787] leading-relaxed">
            Depth across applied artificial intelligence, high-throughput web applications, and resilient cloud architectures.
          </p>
        </div>

        {/* 2-Column Parallax Grid with 3D Depth Shift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" style={{ transformStyle: 'preserve-3d' }}>
          {/* Left Column */}
          <div ref={leftColRef} className="space-y-8" style={{ transformStyle: 'preserve-3d' }}>
            {[explorations[0], explorations[2]].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="group relative rounded-2xl p-7 md:p-8 bg-[#141414]/80 border border-white/10 hover:border-[#89AACC]/40 backdrop-blur-md transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#89AACC]/10 to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#89AACC] font-semibold tracking-wider">
                        {item.number} — {item.category}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#89AACC] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-medium text-[#f5f5f5] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#878787] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] text-[#878787] border border-white/5"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="space-y-8 md:mt-14" style={{ transformStyle: 'preserve-3d' }}>
            {[explorations[1], explorations[3]].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="group relative rounded-2xl p-7 md:p-8 bg-[#141414]/80 border border-white/10 hover:border-[#89AACC]/40 backdrop-blur-md transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4E85BF]/10 to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#89AACC] font-semibold tracking-wider">
                        {item.number} — {item.category}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#89AACC] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-medium text-[#f5f5f5] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#878787] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] text-[#878787] border border-white/5"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
