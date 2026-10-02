import React from 'react';
import { Bot, Palette, Layers, Zap } from 'lucide-react';

export const FeaturesPhilosophy: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]" />
            <span>Philosophy &amp; Foundation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Built for intelligence, craft &amp; real impact.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
            Combining rigorous Computer Science (AI) depth with modern frontend engineering, intuitive UI/UX design, and full-stack ownership.
          </p>
        </div>

        {/*
         * 4-card grid — each card has a deliberate layout variation
         * so they read as a curated set, not 4 clones.
         *
         * Layout map (lg breakpoint, 4-column grid):
         *   [AI-Native · col-1] [Frontend · col-2 + col-3 (featured)] [Full-Stack · col-4]
         *   [Velocity & Delivery · col-1 + col-2 (second row)]
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* ── 1. AI-Native Systems ─────────────────────────────────────────
              Icon lives at the BOTTOM-RIGHT + live-indicator dot.
              Signals "always-on pipeline" through the layout itself.       */}
          <div className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.18] hover:bg-white/[0.035] transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-2">
              {/* Category + live dot */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse shrink-0" />
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">Applied AI</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-[#F8FAFC] group-hover:text-white transition-colors leading-snug">
                AI-Native Systems
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                Multi-agent LLM pipelines, prompt engineering workflows, and vector embeddings — not just simple prompt calls.
              </p>
            </div>
            {/* Icon anchored bottom-right */}
            <div className="flex justify-end mt-5">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] group-hover:text-white group-hover:border-white/20 transition-all">
                <Bot className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* ── 2. Frontend & UI/UX — FEATURED (lg: spans 2 cols) ───────────
              Primary differentiator — bigger card, accent tag strip,
              icon larger and top-left.                                     */}
          <div className="group relative lg:col-span-2 p-7 rounded-2xl bg-white/[0.025] border border-white/[0.10] hover:border-[#E2C08D]/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-4">
              {/* Icon top-left + category inline */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E2C08D]/[0.08] border border-[#E2C08D]/20 flex items-center justify-center text-[#E2C08D] group-hover:bg-[#E2C08D]/[0.14] transition-all shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">Spatial &amp; Web</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-2xl text-[#F8FAFC] group-hover:text-white transition-colors leading-snug">
                  Frontend &amp; Creative UI
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed font-light max-w-md">
                  React, Next.js, and Three.js with deep UI/UX sensitivity — design tokens, restrained editorial craft, and production-ready 3D.
                </p>
              </div>
            </div>
            {/* Subtle stack tag strip */}
            <div className="flex flex-wrap gap-2 mt-5">
              {['React / Next.js', 'Three.js / R3F', 'Design Systems', 'GSAP'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-[#94A3B8] group-hover:border-white/[0.12] transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── 3. Full-Stack Ownership ──────────────────────────────────────
              Icon is inline with category label (top row), not floating.
              Signals "integrated, end-to-end" ownership.                  */}
          <div className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.18] hover:bg-white/[0.035] transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-4">
              {/* Icon + category inline */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] group-hover:text-white group-hover:border-white/20 transition-all shrink-0">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">Architecture</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-xl text-[#F8FAFC] group-hover:text-white transition-colors leading-snug">
                  Full-Stack Ownership
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                  FastAPI/Flask backends, relational &amp; document databases, production deployments — owning features end-to-end.
                </p>
              </div>
            </div>
          </div>

          {/* ── 4. Velocity & Delivery ──────────────────────────────────────
              Most compact card. No icon box — just a thin accent line and
              tighter text. Reads as the "execution" ethos card.           */}
          <div className="group relative sm:col-span-2 lg:col-span-1 p-7 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all duration-300 flex flex-col gap-4 min-h-[160px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">Execution</span>
              <Zap className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#E2C08D] transition-colors" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-xl text-[#F8FAFC] group-hover:text-white transition-colors leading-snug">
                Velocity &amp; Delivery
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                Fresh-graduate drive — moving fast, writing clean maintainable code, and shipping real working software.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

