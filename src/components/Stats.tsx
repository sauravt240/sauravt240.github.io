import React from 'react';
import { Layers, Gamepad2, Cpu } from 'lucide-react';

interface StatItem {
  number: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: StatItem[] = [
  {
    number: '05',
    label: 'Projects Shipped',
    description: 'From multi-agent AI systems to production container deployments on AWS EC2.',
    icon: Layers,
  },
  {
    number: '06',
    label: 'Games Supported',
    description: 'Real-time tournament registration platform for competitive esports titles.',
    icon: Gamepad2,
  },
  {
    number: '05',
    label: 'Agent AI Pipeline',
    description: 'Orchestrated end-to-end job prep: JD analysis, matching, tailoring, & interview prep.',
    icon: Cpu,
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative group p-8 rounded-2xl bg-[#141414]/50 border border-white/8 hover:border-[#89AACC]/30 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Subtle top accent border line on hover */}
                <div className="absolute top-0 inset-x-8 h-[1px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display italic text-6xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f5f5f5] via-[#89AACC] to-[#4E85BF] tabular-nums">
                      {stat.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#89AACC] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-lg font-semibold text-[#f5f5f5] tracking-tight">
                      {stat.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#878787] leading-relaxed">
                      {stat.description}
                    </p>
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
