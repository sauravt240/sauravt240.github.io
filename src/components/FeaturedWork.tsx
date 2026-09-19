import React from 'react';
import { ExternalLink, Bot, Globe2, Gamepad2, Cloud, HeartPulse } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Card3DTilt } from './Card3DTilt';

interface Project {
  id: string;
  title: string;
  tag: 'Still working on it' | 'Live' | 'Deployed';
  tagBadgeText?: string;
  subtitle: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  bentoSpan: string;
  hasPipeline?: boolean;
}

const projects: Project[] = [
  {
    id: 'career-copilot',
    title: 'Career Copilot',
    tag: 'Still working on it',
    tagBadgeText: 'FLAGSHIP AI PIPELINE',
    subtitle: 'Autonomous Multi-Agent Job Search Orchestrator',
    description:
      'An intelligent multi-agent AI product engineered to orchestrate autonomous job description analysis, compute resume match similarity scores, dynamically tailor resumes, and generate interactive mock interview preparation paths.',
    stack: ['Python', 'FastAPI', 'React', 'SQLite', 'LLM API', 'sentence-transformers'],
    githubUrl: 'https://github.com/sauravt240/Career-Copilot',
    liveUrl: 'https://career-copilot-eta.vercel.app',
    icon: Bot,
    gradient: 'from-[#8B7CFF]/20 via-[#5B4CFF]/10 to-transparent',
    bentoSpan: 'col-span-1 lg:col-span-8',
    hasPipeline: true,
  },
  {
    id: 'opportunity',
    title: 'University Opportunities Platform (OpportUnity)',
    tag: 'Live',
    tagBadgeText: 'FULL-STACK ACADEMIC PORTAL',
    subtitle: 'Role-Based Collaborative Platform',
    description:
      'Full-stack university platform featuring MongoDB, JWT auth, interactive world maps with Leaflet.js, and a role-based system for students and faculty to post, browse and apply for research, internship and project roles.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT Auth', 'Leaflet.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sauravt240/UNITY-university-opportunities-platform-',
    liveUrl: 'https://client-eight-gamma-45.vercel.app',
    icon: Globe2,
    gradient: 'from-[#4CE0B3]/20 via-[#1e3a5f]/15 to-transparent',
    bentoSpan: 'col-span-1 lg:col-span-4',
  },
  {
    id: 'triple-threat-esports',
    title: 'TripleThreatEsports',
    tag: 'Live',
    tagBadgeText: '6 GAMES LIVE SYNC',
    subtitle: 'Esports Tournament Registration Platform',
    description:
      'Tournament registration platform for 6 games (BGMI, Tekken 7, Tekken 8, Mortal Kombat, Call of Duty, Free Fire), each with a uniquely themed registration page. Live slot tracking backed by PostgreSQL.',
    stack: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sauravt240/TripleThreat-Esports',
    liveUrl: 'https://triple-threat-esports.vercel.app',
    icon: Gamepad2,
    gradient: 'from-[#5B4CFF]/20 via-[#2b4c7e]/15 to-transparent',
    bentoSpan: 'col-span-1 lg:col-span-4',
  },
  {
    id: 'cloud-python-app',
    title: 'Cloud-Based Python Application Deployment',
    tag: 'Deployed',
    tagBadgeText: 'AWS EC2 • DOCKER',
    subtitle: 'Containerized Production Infrastructure',
    description:
      'Flask application containerized with Docker and deployed to an AWS EC2 instance, covering the full build-to-production workflow with automatic container restart policies.',
    stack: ['Python', 'Flask', 'Docker', 'AWS EC2', 'Git'],
    githubUrl: 'https://github.com/sauravt240/python-cloud-app-aws-docker',
    icon: Cloud,
    gradient: 'from-[#38BDF8]/20 via-[#1f3045]/15 to-transparent',
    bentoSpan: 'col-span-1 lg:col-span-4',
  },
  {
    id: 'alzzaid',
    title: 'Alzzaid — Alzheimer Care Website',
    tag: 'Deployed',
    tagBadgeText: 'ACCESSIBLE HEALTHCARE UI',
    subtitle: 'Patient-Centric Care Platform',
    description:
      'Healthcare-focused website for Alzheimer’s patients and caregivers, built with accessibility-conscious design, simplified contrast navigation, and responsive typography.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    icon: HeartPulse,
    gradient: 'from-[#4CE0B3]/15 via-[#16252e]/20 to-transparent',
    bentoSpan: 'col-span-1 lg:col-span-4',
  },
];

export const FeaturedWork: React.FC = () => {
  const getStatusPill = (project: Project) => {
    switch (project.tag) {
      case 'Live':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#4CE0B3]/10 text-[#4CE0B3] border border-[#4CE0B3]/30">
            <span className="status-dot mint" />
            <span>LIVE</span>
          </span>
        );
      case 'Still working on it':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <span className="status-dot amber" />
            <span>IN ACTIVE DEV</span>
          </span>
        );
      case 'Deployed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#8B7CFF]/10 text-[#8B7CFF] border border-[#8B7CFF]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] shadow-[0_0_6px_#8B7CFF]" />
            <span>DEPLOYED</span>
          </span>
        );
    }
  };

  return (
    <section id="work" className="relative py-32 px-4 sm:px-6 md:px-12 bg-[#050609]/80 overflow-hidden z-10">
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8B7CFF] uppercase tracking-[0.15em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#8B7CFF] shadow-[0_0_8px_#8B7CFF]" />
              FEATURED PRODUCTION WORK
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Products, systems &amp; <span className="gradient-text font-serif italic font-normal">interfaces</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Curated selection of multi-agent AI pipelines, high-throughput esports engines, and containerized cloud services.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className={project.bentoSpan}>
                <Card3DTilt
                  intensity={10}
                  className="group h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#8B7CFF]/40 transition-colors duration-500 shadow-2xl"
                >
                  {/* Background Gradient & Halftone overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className="absolute inset-0 bg-halftone-pattern opacity-10 pointer-events-none" />

                  {/* Card Content */}
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px] space-y-6">
                    
                    {/* Top Row: Header & Status Pill */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#8B7CFF] group-hover:scale-110 group-hover:border-[#8B7CFF]/40 transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-mono text-[11px] font-semibold text-[#64748B] block">
                              {project.tagBadgeText}
                            </span>
                          </div>
                        </div>

                        <div>{getStatusPill(project)}</div>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#4CE0B3] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-[#8B7CFF]">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Special Interactive Pipeline Diagram for Career Copilot */}
                      {project.hasPipeline && (
                        <div className="pt-2">
                          <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] mb-2">
                            <span>Agent Orchestration Pipeline</span>
                            <span className="text-amber-400">4 Connected Agents</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10">
                            <div className="flex flex-col items-center gap-1">
                              <div className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                                JD
                              </div>
                              <span className="text-[10px] text-[#94A3B8]">Analysis</span>
                            </div>
                            <span className="text-xs text-[#64748B]">➔</span>
                            <div className="flex flex-col items-center gap-1">
                              <div className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                                MT
                              </div>
                              <span className="text-[10px] text-[#94A3B8]">Matching</span>
                            </div>
                            <span className="text-xs text-[#64748B]">➔</span>
                            <div className="flex flex-col items-center gap-1">
                              <div className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                                TL
                              </div>
                              <span className="text-[10px] text-[#94A3B8]">Tailoring</span>
                            </div>
                            <span className="text-xs text-[#64748B]">➔</span>
                            <div className="flex flex-col items-center gap-1">
                              <div className="px-2.5 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-xs font-bold shadow-[0_0_8px_rgba(139,124,255,0.3)]">
                                IP
                              </div>
                              <span className="text-[10px] text-[#94A3B8]">Interview</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom: Stack & Action Links */}
                    <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tag-chip text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-1">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/[0.06] hover:bg-[#4CE0B3]/20 hover:text-[#4CE0B3] border border-white/10 hover:border-[#4CE0B3]/40 transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#94A3B8] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </Card3DTilt>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
