import React from 'react';
import { Bot, Palette, Layers, Zap } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  emoji: string;
  title: string;
  desc: string;
  glowColor: string;
}

const features: Feature[] = [
  {
    icon: Bot,
    emoji: '🤖',
    title: 'AI-Native',
    desc: 'Building multi-agent LLM pipelines, prompt engineering workflows, and vector embeddings, not just simple single prompt calls.',
    glowColor: 'from-[#8B7CFF]/20 to-transparent',
  },
  {
    icon: Palette,
    emoji: '🎨',
    title: 'Frontend & UI/UX',
    desc: 'Comfortable across React, Next.js, and Three.js with deep UI/UX sensitivity, design tokens, and glassmorphism craft.',
    glowColor: 'from-[#4CE0B3]/20 to-transparent',
  },
  {
    icon: Layers,
    emoji: '🧩',
    title: 'Full-Stack Ownership',
    desc: 'From FastAPI/Flask backends and relational/document databases to production deployments, owning features end-to-end.',
    glowColor: 'from-[#5B4CFF]/20 to-transparent',
  },
  {
    icon: Zap,
    emoji: '⚡',
    title: 'Fast Shipping',
    desc: 'High velocity and fresh-graduate drive — moving fast, writing clean maintainable code, and shipping real working software.',
    glowColor: 'from-[#FBBF24]/20 to-transparent',
  },
];

export const FeaturesPhilosophy: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#050609]/40 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8B7CFF] uppercase tracking-[0.15em] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#8B7CFF] shadow-[0_0_8px_#8B7CFF]" />
            ENGINEERING &amp; DESIGN FOUNDATION
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Built for intelligence, craft &amp; real impact.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Combining rigorous Computer Science (AI) depth with modern frontend engineering, intuitive UI/UX design, and full-stack ownership.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#8B7CFF]/40 backdrop-blur-xl transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                {/* Subtle top glow on hover */}
                <div className={`absolute top-0 inset-x-0 h-24 bg-gradient-to-b ${item.glowColor} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <span>{item.emoji}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#4CE0B3] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
