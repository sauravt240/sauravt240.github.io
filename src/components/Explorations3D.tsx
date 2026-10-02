import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Layers, Server, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExplorationCard {
  category: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const explorations: ExplorationCard[] = [
  {
    category: 'Applied AI',
    title: 'Multi-Agent AI Pipelines & LLM Orchestration',
    description:
      'Designing cooperative multi-agent workflows with specialized roles: resume matching, JD extraction, tailoring agents, and automated interview question generation with semantic similarity search.',
    tags: ['FastAPI', 'sentence-transformers', 'Prompt Engineering', 'LangChain Patterns'],
    icon: Cpu,
  },
  {
    category: 'System Architecture',
    title: 'Full-Stack & Role-Authenticated Platforms',
    description:
      'Architecting secure role-based portals for university-wide collaboration and high-concurrency esports tournament platforms with live slot synchronization.',
    tags: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'JWT Security', 'Leaflet.js'],
    icon: Layers,
  },
  {
    category: 'Cloud & DevOps',
    title: 'Containerized Cloud Deployments',
    description:
      'Containerizing Python and web workloads with multi-stage Docker builds, hosting on AWS EC2 with systemd and container health-monitoring restart policies.',
    tags: ['Docker', 'AWS EC2', 'Linux / Bash', 'Git Actions', 'Reverse Proxy'],
    icon: Server,
  },
  {
    category: 'Creative Engineering',
    title: 'Spatial Web & Interactive 3D Interfaces',
    description:
      'Merging WebGL, Three.js, and kinetic typography to deliver immersive, silky-smooth 60fps web experiences that respect device performance and accessibility.',
    tags: ['Three.js', 'React Three Fiber', 'GSAP ScrollTrigger', 'Tailwind CSS'],
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
      if (leftColRef.current && rightColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          {
            y: 40,
            rotateX: 3,
            rotateY: -4,
          },
          {
            y: -60,
            rotateX: -2,
            rotateY: 3,
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
            y: -30,
            rotateX: -3,
            rotateY: 4,
          },
          {
            y: 70,
            rotateX: 2,
            rotateY: -3,
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

  const renderCard = (item: ExplorationCard) => {
    const Icon = item.icon;
    return (
      <div
        key={item.category}
        className="group relative rounded-3xl p-8 bg-white/[0.02] border border-white/[0.07] hover:border-white/20 transition-all duration-300 shadow-xl overflow-hidden"
      >
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#E2C08D] font-medium uppercase tracking-wider">
              {item.category}
            </span>
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E2E8F0] group-hover:text-white transition-transform">
              <Icon className="w-5 h-5" />
            </div>
          </div>

          <h3 className="font-display font-semibold text-2xl text-[#F8FAFC]">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-light">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-x-2.5 gap-y-1 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#CBD5E1]">
            {item.tags.map((tag, i) => (
              <span key={tag} className="inline-flex items-center gap-2">
                <span className="text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors">{tag}</span>
                {i < item.tags.length - 1 && <span className="text-[#64748B]/40 select-none">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden perspective-[1200px] border-t border-white/[0.05]"
    >
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* Direct Confident Section Header */}
        <div className="max-w-2xl space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]" />
            <span>Architecture &amp; Focus</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8FAFC]">
            Engineering <span className="gradient-text font-serif italic font-normal">pillars</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Depth across applied artificial intelligence, high-throughput web applications, and resilient cloud architectures.
          </p>
        </div>

        {/* 2-Column Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Left Column */}
          <div ref={leftColRef} className="space-y-8" style={{ transformStyle: 'preserve-3d' }}>
            {[explorations[0], explorations[2]].map(renderCard)}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="space-y-8 md:mt-12" style={{ transformStyle: 'preserve-3d' }}>
            {[explorations[1], explorations[3]].map(renderCard)}
          </div>

        </div>
      </div>
    </section>
  );
};
