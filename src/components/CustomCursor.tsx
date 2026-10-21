import React, { useEffect, useRef } from 'react';

// Accent: matches --color-accent: #E2C08D
const ACCENT_R = 226, ACCENT_G = 192, ACCENT_B = 141;
const TRAIL_LENGTH = 14;   // history points kept
const TRAIL_RADIUS = 3.5;  // max dot radius at head of trail

export const CustomCursor: React.FC = () => {
  const cursorRef  = useRef<HTMLDivElement>(null);
  const dotRef     = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const isHoveringRef = useRef(false);
  const rafRef     = useRef<number | null>(null);

  useEffect(() => {
    // Only on desktop with fine pointer
    if (window.innerWidth <= 900 || !window.matchMedia('(pointer: fine)').matches) return;

    const cursorEl = cursorRef.current;
    const dotEl    = dotRef.current;
    const canvas   = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── Canvas sizing ──────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Trail state ────────────────────────────────────────────────────────
    let tx = -200, ty = -200;
    let sx = -200, sy = -200;
    const trail: { x: number; y: number }[] = [];
    let visible = false;
    let isRunning = false;
    let idleFrames = 0;

    // ── Render ─────────────────────────────────────────────────────────────
    const render = () => {
      // Update smooth dot position (lerp — creates the gentle lag)
      const dx = tx - sx;
      const dy = ty - sy;
      sx += dx * 0.18;
      sy += dy * 0.18;

      // Update ring + DOM dot position
      if (cursorEl) cursorEl.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      if (dotEl)    dotEl.style.transform    = `translate3d(${tx}px, ${ty}px, 0)`;

      // Push current smooth position into trail
      trail.push({ x: sx, y: sy });
      if (trail.length > TRAIL_LENGTH) trail.shift();

      // Draw trail on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (visible && trail.length >= 2) {
        trail.forEach((pt, i) => {
          const t = i / (trail.length - 1);
          const r = TRAIL_RADIUS * t;
          const a = t * t * (isHoveringRef.current ? 0.55 : 0.35);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(r, 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${a})`;
          ctx.fill();
        });
      }

      // If settled and idle, suspend RAF loop until next mouse move
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) {
        idleFrames++;
        if (idleFrames > 30) {
          isRunning = false;
          rafRef.current = null;
          return;
        }
      } else {
        idleFrames = 0;
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const startLoop = () => {
      idleFrames = 0;
      if (!isRunning) {
        isRunning = true;
        rafRef.current = requestAnimationFrame(render);
      }
    };

    // ── Mouse events ───────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;

      if (!visible) {
        visible = true;
        sx = tx; sy = ty;
        if (cursorEl) cursorEl.style.opacity = '1';
        if (dotEl)    dotEl.style.opacity    = '1';
      }

      startLoop();

      const target = e.target as HTMLElement | null;
      const interactive = !!(
        target && (
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button')
        )
      );

      if (interactive !== isHoveringRef.current) {
        isHoveringRef.current = interactive;
        cursorEl?.classList.toggle('hovering', interactive);
      }
    };

    const onLeave = () => {
      visible = false;
      trail.length = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (cursorEl) cursorEl.style.opacity = '0';
      if (dotEl)    dotEl.style.opacity    = '0';
      isRunning = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    startLoop();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      {/* Canvas trail — sits above ambient (z:2), below UI (z:10+) */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Ring cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      {/* Centre dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
    </>
  );
};

