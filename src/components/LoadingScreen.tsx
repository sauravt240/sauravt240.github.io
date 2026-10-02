import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ['Design', 'Build', 'Ship'];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [progress, setProgress] = useState(() => (isReduced ? 100 : 0));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotating words cycling every 300ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 280);
    return () => clearInterval(wordInterval);
  }, []);

  // Snappy requestAnimationFrame counter 000 -> 100
  useEffect(() => {
    if (isReduced) {
      onComplete();
      return;
    }

    const duration = 650;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const currentVal = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentVal);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animateCounter);
      } else {
        setProgress(100);
        setTimeout(() => {
          onComplete();
        }, 120);
      }
    };

    animationFrameId = requestAnimationFrame(animateCounter);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  const formattedProgress = progress.toString().padStart(3, '0');

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
      className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 bg-[#050609] text-[#f5f5f5] select-none"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#89AACC] animate-ping" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#878787] font-medium">
            Portfolio
          </span>
        </div>
        <div className="text-xs tracking-widest text-[#878787] uppercase">
          Saurav Thakur
        </div>
      </div>

      {/* Center Word Cycler */}
      <div className="flex items-center justify-center h-48 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="text-center"
          >
            <span className="font-display italic text-6xl sm:text-7xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f5f5f5] via-[#89AACC] to-[#4E85BF]">
              {words[currentWordIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Bar: Status, Counter & Progress */}
      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <div className="text-xs tracking-widest text-[#878787] uppercase flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4E85BF]" />
            Initializing Experience
          </div>
          <div className="font-display italic text-5xl md:text-6xl tabular-nums text-[#f5f5f5]">
            {formattedProgress}
            <span className="text-lg md:text-xl font-normal text-[#878787] ml-1">%</span>
          </div>
        </div>

        {/* Bottom progress bar with accent gradient fill */}
        <div className="w-full h-1 bg-[#1f1f1f] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full accent-gradient transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};
