import React from 'react';
import { Code2, Brain, Database, Cloud } from 'lucide-react';

interface StackCategory {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  tags: string[];
}

const categories: StackCategory[] = [
  {
    category: 'Spatial & Web',
    title: 'Frontend & Creative UI',
    icon: Code2,
    summary: 'Building high-fidelity interactive interfaces, design systems, and silky WebGL/Three.js visual layers.',
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Three.js', 'Tailwind CSS', 'GSAP Motion', 'Figma'],
  },
  {
    category: 'Applied AI',
    title: 'Agentic Intelligence',
    icon: Brain,
    summary: 'Developing multi-agent orchestration pipelines, semantic similarity search, and automated prompt workflows.',
    tags: ['Multi-Agent AI', 'FastAPI', 'sentence-transformers', 'Prompt Engineering', 'LLM APIs', 'Vector Search'],
  },
  {
    category: 'Systems & Data',
    title: 'Backend & Databases',
    icon: Database,
    summary: 'Architecting robust REST services, session security, and relational/document persistence layers.',
    tags: ['Python', 'FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'MongoDB', 'SQLite', 'JWT Security'],
  },
  {
    category: 'Infrastructure',
    title: 'Cloud & Deployment',
    icon: Cloud,
    summary: 'Containerizing workloads with multi-stage Docker builds and automated AWS EC2 instance health management.',
    tags: ['Docker', 'AWS EC2', 'Linux / Bash', 'Git / GitHub', 'CI/CD Pipelines', 'Container Recovery'],
  },
];

export const TechStackMatrix: React.FC = () => {
  return (
    <section id="stack" className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-16 z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Direct Confident Section Header (No numbered labels or neon pills) */}
        <div className="max-w-2xl space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]" />
            <span>Capabilities &amp; Stack</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Core Technical Stack
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Prioritizing modern frontend design and applied AI, supported by rock-solid backend, database, and cloud infrastructure.
          </p>
        </div>

        {/* 4 Cards Grid with Clean Grouped Layout (Replacing individual glowing pill overload) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                      {cat.category}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E2E8F0] group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-xl text-[#F8FAFC]">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
                    {cat.summary}
                  </p>
                </div>

                {/* Clean Grouped Typography Layout (Subtle slash dividers instead of 30 glowing badge pills) */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-2">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs font-mono text-[#CBD5E1]">
                    {cat.tags.map((tag, i) => (
                      <span key={tag} className="inline-flex items-center gap-2">
                        <span className="hover:text-white transition-colors">{tag}</span>
                        {i < cat.tags.length - 1 && <span className="text-[#64748B]/50 select-none">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
