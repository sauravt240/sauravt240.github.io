import React from 'react';
import { ExternalLink, Bot, Globe2, Gamepad2, Cloud, HeartPulse } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Card3DTilt } from './Card3DTilt';
import { CareerCopilotPipeline } from './CareerCopilotPipeline';

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
  bentoSpan: string;
  hasPipeline?: boolean;
}

const projects: Project[] = [
  {
    id: 'career-copilot',
    title: 'Career Copilot',
    tag: 'Still working on it',
    tagBadgeText: 'Flagship Multi-Agent System',
    subtitle: 'Autonomous Multi-Agent Job Search Orchestrator',
    description:
      'An intelligent multi-agent AI product engineered to orchestrate autonomous job description analysis, compute resume match similarity scores, dynamically tailor resumes, and generate interactive mock interview preparation paths.',
    stack: ['Python', 'FastAPI', 'React', 'SQLite', 'LLM API', 'sentence-transformers'],
    githubUrl: 'https://github.com/sauravt240/Career-Copilot',
    liveUrl: 'https://career-copilot-eta.vercel.app',
    icon: Bot,
    bentoSpan: 'col-span-1 lg:col-span-12',
    hasPipeline: true,
  },
  {
    id: 'opportunity',
    title: 'University Opportunities Platform (OpportUnity)',
    tag: 'Live',
    tagBadgeText: 'Full-Stack Academic Portal',
    subtitle: 'Role-Based Collaborative Platform',
    description:
      'Full-stack university platform featuring MongoDB, JWT auth, interactive world maps with Leaflet.js, and a role-based system for students and faculty to post, browse and apply for research, internship and project roles.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT Auth', 'Leaflet.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sauravt240/UNITY-university-opportunities-platform-',
    liveUrl: 'https://client-eight-gamma-45.vercel.app',
    icon: Globe2,
    bentoSpan: 'col-span-1 lg:col-span-6',
  },
  {
    id: 'triple-threat-esports',
    title: 'TripleThreatEsports',
    tag: 'Live',
    tagBadgeText: 'Esports Platform',
    subtitle: 'Tournament Registration Engine',
    description:
      'Tournament registration platform for 6 games (BGMI, Tekken 7, Tekken 8, Mortal Kombat, Call of Duty, Free Fire), each with a uniquely themed registration page. Live slot tracking backed by PostgreSQL.',
    stack: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sauravt240/TripleThreat-Esports',
    liveUrl: 'https://triple-threat-esports.vercel.app',
    icon: Gamepad2,
    bentoSpan: 'col-span-1 lg:col-span-6',
  },
  {
    id: 'cloud-python-app',
    title: 'Cloud-Based Python Application Deployment',
    tag: 'Deployed',
    tagBadgeText: 'Cloud Infrastructure',
    subtitle: 'Containerized Production Infrastructure',
    description:
      'Flask application containerized with Docker and deployed to an AWS EC2 instance, covering the full build-to-production workflow with automatic container restart policies.',
    stack: ['Python', 'Flask', 'Docker', 'AWS EC2', 'Git'],
    githubUrl: 'https://github.com/sauravt240/python-cloud-app-aws-docker',
    icon: Cloud,
    bentoSpan: 'col-span-1 lg:col-span-6',
  },
  {
    id: 'alzzaid',
    title: 'Alzzaid — Alzheimer Care Website',
    tag: 'Deployed',
    tagBadgeText: 'Accessible Healthcare UI',
    subtitle: 'Patient-Centric Care Platform',
    description:
      'Healthcare-focused website for Alzheimer’s patients and caregivers, built with accessibility-conscious design, simplified contrast navigation, and responsive typography.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    icon: HeartPulse,
    bentoSpan: 'col-span-1 lg:col-span-6',
  },
];

export const FeaturedWork: React.FC = () => {
  const getStatusPill = (project: Project) => {
    switch (project.tag) {
      case 'Live':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>LIVE</span>
          </span>
        );
      case 'Still working on it':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#E2C08D]/10 text-[#E2C08D] border border-[#E2C08D]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]" />
            <span>ACTIVE DEV</span>
          </span>
        );
      case 'Deployed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.05] text-[#94A3B8] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
            <span>DEPLOYED</span>
          </span>
        );
    }
  };

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-16 z-10 border-t border-white/[0.05]">
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* Direct Confident Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]" />
              <span>Selected Work</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8FAFC]">
              Products, systems &amp; <span className="gradient-text font-serif italic font-normal">interfaces</span>.
            </h2>
          </div>
          <p className="max-w-md text-base text-[#94A3B8] leading-relaxed font-light">
            Curated selection of multi-agent AI pipelines, high-throughput esports engines, and containerized cloud services.
          </p>
        </div>

        {/* Bento Grid: Restrained editorial containers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className={project.bentoSpan}>
                <Card3DTilt
                  intensity={6}
                  className="group h-full bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.07] hover:border-white/20 transition-all duration-500 rounded-3xl shadow-xl overflow-hidden"
                >
                  <div className="relative z-10 p-7 sm:p-9 flex flex-col justify-between h-full space-y-6">
                    
                    {/* Top Row: Header & Status Pill */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E2E8F0] group-hover:text-white group-hover:border-white/25 transition-all">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block">
                            {project.tagBadgeText}
                          </span>
                        </div>

                        <div>{getStatusPill(project)}</div>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="space-y-1">
                        <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-[#F8FAFC]">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-[#94A3B8]">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Special Interactive Pipeline Simulation for Career Copilot */}
                      {project.hasPipeline && <CareerCopilotPipeline />}
                    </div>

                    {/* Bottom: Stack & Action Links */}
                    <div className="space-y-4 pt-5 border-t border-white/[0.06]">
                      {/* Clean Grouped Typography Stack */}
                      <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs font-mono text-[#CBD5E1]">
                        {project.stack.map((tech, i) => (
                          <span key={tech} className="inline-flex items-center gap-2">
                            <span className="text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors">{tech}</span>
                            {i < project.stack.length - 1 && <span className="text-[#64748B]/40 select-none">·</span>}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-1">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#090A0F] bg-[#F8FAFC] hover:bg-white shadow-[0_0_16px_rgba(255,255,255,0.12)] hover:shadow-[0_0_24px_rgba(255,255,255,0.22)] transition-all cursor-pointer"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source</span>
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
