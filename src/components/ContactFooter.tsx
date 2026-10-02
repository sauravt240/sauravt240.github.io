import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'sauravthakur240@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-14 border-t border-white/[0.06] z-10">
      
      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#141720] border border-white/20 text-[#F8FAFC] font-mono text-xs shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-300">
          <Check className="w-4 h-4 text-[#34D399]" />
          <span>Email copied to clipboard: {email}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 space-y-20">
        
        {/* Main Editorial CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Availability */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#94A3B8]">
              <span className="status-dot active" />
              <span>Available for AI, Frontend &amp; Full-Stack engineering roles</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F8FAFC] leading-[1.05]">
              Let's create something <span className="gradient-text font-serif italic font-normal">exceptional</span>.
            </h2>

            <p className="max-w-xl text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
              Whether you are looking to deploy multi-agent AI systems, scale high-performance web applications, or build bespoke interactive products, my inbox is always open.
            </p>
          </div>

          {/* Right Column: Clean Editorial Direct Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-white/[0.02] border border-white/[0.08] shadow-2xl space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#E2C08D] font-mono font-medium">
                Direct Inquiries
              </span>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/[0.06]">
                <span className="font-mono text-xs sm:text-sm text-[#F8FAFC] truncate">
                  {email}
                </span>
                <button
                  onClick={copyToClipboard}
                  title="Copy email address"
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-[#34D399]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="group relative flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-medium text-[#090A0F] bg-[#F8FAFC] hover:bg-white shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:shadow-[0_0_36px_rgba(255,255,255,0.22)] transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <p className="text-center text-[11px] font-mono text-[#64748B]">
                Typically responds within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Navigation Row */}
        <div className="pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sauravt240"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-[#94A3B8] hover:text-white transition-all cursor-pointer"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/sauravthakur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-[#94A3B8] hover:text-white transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="text-xs font-mono text-[#64748B]">
            © {new Date().getFullYear()} Saurav Thakur. Crafted with intention.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
