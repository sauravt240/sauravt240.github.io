import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: string;
  highlight: string;
}

const certifications: Certification[] = [
  {
    id: 'icaai-2024',
    title: 'International Conference on Applied Artificial Intelligence',
    issuer: 'Shoolini University',
    year: '2024',
    type: 'Academic Conference',
    highlight: 'Paper & technical exchange covering state-of-the-art applied artificial intelligence and machine learning architectures.',
  },
  {
    id: 'hr-conclave-2024',
    title: 'HR Conclave: Harnessing the Power of AI for HR Excellence',
    issuer: 'Industry Summit',
    year: '2024',
    type: 'AI Conclave',
    highlight: 'Explored multi-agent systems, automated talent matching, and ethical AI integration within enterprise workflows.',
  },
  {
    id: 'swayam-comp-arch',
    title: 'SWAYAM — Computer Architecture',
    issuer: 'Ministry of Education / NPTEL',
    year: 'Academic Certification',
    type: 'Core CS Foundations',
    highlight: 'In-depth mastery of instruction set architectures, memory hierarchies, pipeline hazard resolution, and hardware performance optimization.',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#878787] font-semibold">
                Credentials &amp; Academics
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#f5f5f5]">
              Verified <span className="font-display italic text-[#89AACC]">certifications</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#878787] leading-relaxed">
            Recognized academic and technical accomplishments in Applied Artificial Intelligence, system architecture, and machine learning.
          </p>
        </div>

        {/* Card-based Journal List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((item, index) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#141414]/70 border border-white/10 hover:border-[#89AACC]/40 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#4E85BF]/10"
            >
              {/* Subtle accent hover indicator */}
              <div className="absolute top-0 left-8 right-8 h-[1.5px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-6">
                {/* Top: Index & Type pill */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#89AACC] font-semibold">
                    0{index + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-[#878787] border border-white/5 group-hover:border-white/10 transition-colors">
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#f5f5f5] group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#89AACC]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.issuer}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#878787] leading-relaxed">
                  {item.highlight}
                </p>
              </div>

              {/* Bottom: Date stamp */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#878787]">
                <span className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#89AACC]" />
                  {item.year}
                </span>
                <Award className="w-4 h-4 text-[#89AACC] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
