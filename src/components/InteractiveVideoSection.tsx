import React, { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';

export const InteractiveVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let cleanupMouse: (() => void) | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isVisible = entry.isIntersecting;
        const video = videoRef.current;

        if (isVisible) {
          // Lazy-load video stream on demand
          if (!videoSrc) {
            setVideoSrc(
              'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'
            );
          }

          if (window.innerWidth < 1024 && video) {
            video.loop = true;
            video.play().catch(() => {});
          } else if (window.innerWidth >= 1024) {
            // Setup mouse scrubbing only when in view
            let targetTime = 0;
            let prevX: number | null = null;
            let isReady = false;
            let ticking = false;

            const handleLoadedMetadata = () => {
              isReady = true;
            };

            if (video) {
              video.addEventListener('loadedmetadata', handleLoadedMetadata);
              if (video.readyState >= 1) isReady = true;
            }

            const handleMouseMove = (e: MouseEvent) => {
              if (!isReady || !video || !video.duration) return;

              const rect = section.getBoundingClientRect();
              if (e.clientY < rect.top - 150 || e.clientY > rect.bottom + 150) {
                prevX = null;
                setIsScrubbing(false);
                return;
              }

              setIsScrubbing(true);

              if (prevX === null) {
                prevX = e.clientX;
                return;
              }

              const delta = e.clientX - prevX;
              prevX = e.clientX;

              const scrubAmount = (delta / window.innerWidth) * 1.1 * video.duration;
              targetTime = Math.max(0, Math.min(video.duration, targetTime + scrubAmount));

              if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                  if (video) {
                    video.currentTime = targetTime;
                  }
                  ticking = false;
                });
              }
            };

            const handleMouseLeave = () => {
              prevX = null;
              setIsScrubbing(false);
            };

            window.addEventListener('mousemove', handleMouseMove, { passive: true });
            section.addEventListener('mouseleave', handleMouseLeave);

            cleanupMouse = () => {
              if (video) video.removeEventListener('loadedmetadata', handleLoadedMetadata);
              window.removeEventListener('mousemove', handleMouseMove);
              section.removeEventListener('mouseleave', handleMouseLeave);
            };
          }
        } else {
          // Offscreen: pause video and remove mouse listener
          if (video && !video.paused) {
            video.pause();
          }
          if (cleanupMouse) {
            cleanupMouse();
            cleanupMouse = null;
          }
          setIsScrubbing(false);
        }
      },
      { rootMargin: '150px' }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (cleanupMouse) cleanupMouse();
    };
  }, [videoSrc]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[480px] md:min-h-[580px] flex items-center justify-center overflow-hidden border-y border-white/[0.08] my-12"
      aria-label="Interactive design philosophy panel"
    >
      {/* Background Video (lazy loaded) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          src={videoSrc || undefined}
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        />
      </div>

      {/* Dark Gradient Overlay for optimal contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050609] via-black/40 to-[#050609] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 z-10 pointer-events-none" />

      {/* Foreground Interactive Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]" />
          <span className="font-mono text-xs text-[#E2E8F0] uppercase tracking-wider font-normal">
            Move cursor to scrub frames
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-[#F8FAFC] tracking-tight leading-[1.08]">
          Built with <span className="gradient-text">intention.</span><br />
          Shipped with <span className="gradient-text font-serif italic font-normal">precision.</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#94A3B8] leading-relaxed font-light">
          From multi-agent AI pipelines to polished full-stack platforms — every project starts with a clear problem and ends with an experience people actually enjoy.
        </p>

        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] bg-black/50 px-4 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-sm">
          <RotateCcw className={`w-3.5 h-3.5 text-[#E2C08D] ${isScrubbing ? 'animate-spin' : ''}`} />
          <span>Move cursor left &amp; right to scrub video timeline</span>
        </div>
      </div>
    </section>
  );
};
