import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUp, ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactFooter: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const email = 'sauravthakur240@gmail.com';

  // GSAP infinite marquee animation
  useEffect(() => {
    if (!marqueeRef.current) return;
    const el = marqueeRef.current;

    const tween = gsap.to(el, {
      xPercent: -50,
      repeat: -1,
      duration: 22,
      ease: 'none',
    });

    return () => {
      tween.kill();
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#050609] pt-24 pb-12 overflow-hidden border-t border-white/10 z-10">
      
      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#0c0f17] border border-[#4CE0B3]/50 text-white font-mono text-xs shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <Check className="w-4 h-4 text-[#4CE0B3]" />
          <span>Email copied to clipboard: {email}</span>
        </div>
      )}

      {/* Infinite GSAP Marquee: "BUILDING THE FUTURE • " */}
      <div className="w-full overflow-hidden border-y border-white/5 py-4 mb-20 bg-white/[0.01]">
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-4">
              <span className="text-3xl md:text-5xl font-display font-bold tracking-widest text-[#F3F4F6]/15 uppercase select-none">
                BUILDING THE FUTURE
              </span>
              <span className="text-xl md:text-2xl text-[#8B7CFF]/40 select-none">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-20">
        {/* Main CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Availability */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pulsing beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-[#4CE0B3]">
              <span className="status-dot mint" />
              <span>Available for projects &amp; full-time engineering roles</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Let's create something <span className="gradient-text font-serif italic font-normal">exceptional</span>.
            </h2>

            <p className="max-w-xl text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Whether you are looking to deploy multi-agent AI systems, scale high-performance web applications, or build bespoke interactive products, my inbox is always open.
            </p>
          </div>

          {/* Right Column: Email CTA Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8B7CFF] font-mono font-semibold">
                Direct Contact
              </span>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/50 border border-white/5">
                <span className="font-mono text-xs sm:text-sm text-white truncate">
                  {email}
                </span>
                <button
                  onClick={copyToClipboard}
                  title="Copy email address"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-[#4CE0B3]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="group relative flex items-center justify-center gap-2 w-full py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#8B7CFF] to-[#5B4CFF] hover:opacity-95 transition-all shadow-lg shadow-[#5B4CFF]/30 cursor-pointer overflow-hidden"
              >
                <Mail className="w-4 h-4" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <p className="text-center text-[11px] font-mono text-[#64748B]">
                Typically responds within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Navigation Row */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sauravt240"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#94A3B8] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all group"
            >
              <GithubIcon className="w-4 h-4 group-hover:text-white transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#8B7CFF]" />
            </a>

            <a
              href="https://linkedin.com/in/saurav-thakur-068aa6256"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#94A3B8] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all group"
            >
              <LinkedinIcon className="w-4 h-4 group-hover:text-[#4CE0B3] transition-colors" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#4CE0B3]" />
            </a>
          </div>

          {/* Operational Status badge from old portfolio */}
          <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8]">
            <span className="status-dot mint" />
            <span>All Systems Operational</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-3.5 h-3.5 text-[#8B7CFF]" />
            </div>
          </button>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#64748B] pt-6 border-t border-white/5">
          <p>© {new Date().getFullYear()} Saurav Thakur. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">React 19 • Vite • Three.js • GSAP • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
