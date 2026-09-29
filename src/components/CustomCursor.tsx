import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.innerWidth <= 900 || !window.matchMedia('(pointer: fine)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let isVisible = false;

    const cursorEl = cursorRef.current;
    const dotEl = dotRef.current;

    const render = () => {
      if (cursorEl && dotEl) {
        cursorEl.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        dotEl.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
      rafRef.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (cursorEl) cursorEl.style.opacity = '1';
        if (dotEl) dotEl.style.opacity = '1';
      }

      const target = e.target as HTMLElement | null;
      const isInteractive = !!(
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[data-cursor="pointer"]'))
      );

      if (isInteractive !== isHoveringRef.current) {
        isHoveringRef.current = isInteractive;
        if (cursorEl) {
          if (isInteractive) {
            cursorEl.classList.add('hovering');
          } else {
            cursorEl.classList.remove('hovering');
          }
        }
      }

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(render);
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (cursorEl) cursorEl.style.opacity = '0';
      if (dotEl) dotEl.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
    </>
  );
};
