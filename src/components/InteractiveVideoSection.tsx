import React, { Suspense, lazy } from 'react';
import { Sparkles } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export const InteractiveVideoSection: React.FC = () => (
  <section
    className="relative min-h-[540px] md:min-h-[640px] flex items-center justify-center overflow-hidden border-y border-white/[0.08] my-12"
    aria-label="Interactive 3D design section"
  >
    {/* Spline 3D — full-bleed background */}
    <div className="absolute inset-0 z-0">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-[#E2C08D]/40 border-t-[#E2C08D] animate-spin" />
        </div>
      }>
        <Spline
          scene="https://prod.spline.design/qNgjR-5EktPe3lge/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>

    {/* Edge vignette */}
    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#050609]/70 via-transparent to-[#050609]/70" />
    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050609]/50 via-transparent to-[#050609]/50" />

    {/* Text overlay */}
    <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6 pointer-events-none">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-[#E2C08D]" />
        <span className="font-mono text-xs text-[#E2E8F0] uppercase tracking-wider">Interactive 3D — drag to explore</span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-[#F8FAFC] tracking-tight leading-[1.08]">
        Built with <span className="gradient-text">intention.</span><br />
        Shipped with <span className="gradient-text font-serif italic font-normal">precision.</span>
      </h2>

      <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
        From multi-agent AI pipelines to polished full-stack platforms — every project starts with a clear problem and ends with an experience people actually enjoy.
      </p>
    </div>
  </section>
);
