import React from 'react';

const technologies = [
  'JavaScript',
  'React',
  'Next.js',
  'Python',
  'FastAPI',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'AWS EC2',
  'Three.js',
  'GSAP Motion',
  'Multi-Agent AI',
  'Tailwind CSS',
  'Figma Systems',
];

export const TechMarquee: React.FC = () => {
  return (
    <div id="marquee" className="relative w-full py-5 border-y border-white/[0.06] bg-[#050609]/70 backdrop-blur-md overflow-hidden z-20">
      {/* Left and Right Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-44 bg-gradient-to-r from-[#050609] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-44 bg-gradient-to-l from-[#050609] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Track Loop 1 */}
        <div className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14">
          {technologies.map((tech, i) => (
            <div
              key={`t1-${i}`}
              className="flex items-center gap-3 font-display font-semibold text-sm sm:text-base text-[#94A3B8] hover:text-white transition-all hover:scale-105 cursor-default select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CE0B3] shadow-[0_0_8px_#4CE0B3]" />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Track Loop 2 for seamless continuation */}
        <div className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14" aria-hidden="true">
          {technologies.map((tech, i) => (
            <div
              key={`t2-${i}`}
              className="flex items-center gap-3 font-display font-semibold text-sm sm:text-base text-[#94A3B8] hover:text-white transition-all hover:scale-105 cursor-default select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CE0B3] shadow-[0_0_8px_#4CE0B3]" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
