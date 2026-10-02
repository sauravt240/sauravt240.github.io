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
    <section id="certifications" className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05] z-10">
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* Direct Confident Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]" />
              <span>Credentials &amp; Academics</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8FAFC]">
              Verified <span className="gradient-text font-serif italic font-normal">certifications</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-[#94A3B8] leading-relaxed font-light">
            Recognized academic and technical accomplishments in Applied Artificial Intelligence, system architecture, and machine learning.
          </p>
        </div>

        {/* Card-based Journal List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[#E2C08D] uppercase tracking-wider">
                    {item.type}
                  </span>
                  <Award className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-xl text-[#F8FAFC] leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                    <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>{item.issuer}</span>
                  </div>
                </div>

                <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                  {item.highlight}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E2C08D]" />
                  <span>{item.year}</span>
                </span>
                <span className="text-[#94A3B8] group-hover:text-white transition-colors">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
