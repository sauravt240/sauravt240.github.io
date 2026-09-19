import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ['Design', 'Build', 'Ship'];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotating words cycling every 900ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(wordInterval);
  }, []);

  // requestAnimationFrame counter 000 -> 100 over 2700ms
  useEffect(() => {
    const duration = 2700;
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
        // On complete: 400ms delay, then onComplete()
        setTimeout(() => {
          onComplete();
        }, 400);
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
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 bg-[#0a0a0a] text-[#f5f5f5] select-none"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-[#89AACC] animate-ping" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#878787] font-medium">
            Portfolio
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-widest text-[#878787] uppercase"
        >
          Saurav Thakur
        </motion.div>
      </div>

      {/* Center Word Cycler */}
      <div className="flex items-center justify-center h-48 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
          <motion.div
            className="h-full rounded-full accent-gradient"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  );
};
