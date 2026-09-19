import React from 'react';
import { Code2, Brain, Database, Cloud } from 'lucide-react';

interface StackCategory {
  badge: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

const categories: StackCategory[] = [
  {
    badge: '01 • FRONTEND & 3D',
    title: 'Frontend & Spatial UI',
    icon: Code2,
    tags: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Figma', 'GSAP'],
  },
  {
    badge: '02 • INTELLIGENCE',
    title: 'AI & Applied Tools',
    icon: Brain,
    tags: ['Multi-Agent AI', 'FastAPI', 'sentence-transformers', 'Prompt Engineering', 'LLM APIs', 'Vector Search'],
  },
  {
    badge: '03 • SYSTEMS',
    title: 'Backend & Database',
    icon: Database,
    tags: ['Python', 'Flask', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'SQLite', 'JWT Security'],
  },
  {
    badge: '04 • INFRASTRUCTURE',
    title: 'Cloud & DevOps',
    icon: Cloud,
    tags: ['Docker', 'AWS EC2', 'Git / GitHub', 'Linux / Bash', 'CI/CD Pipelines', 'Container Restarts'],
  },
];

export const TechStackMatrix: React.FC = () => {
  return (
    <section id="stack" className="relative py-24 px-4 sm:px-6 md:px-12 bg-[#050609]/60 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#4CE0B3] uppercase tracking-[0.15em] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#4CE0B3] shadow-[0_0_8px_#4CE0B3]" />
            MODULAR CAPABILITIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Core Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Prioritizing modern frontend design and applied AI, supported by rock-solid backend, database, and cloud infrastructure.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group relative p-7 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#4CE0B3]/35 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] group-hover:text-[#4CE0B3] transition-colors">
                      {cat.badge}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#8B7CFF] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-6">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="tag-chip text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
