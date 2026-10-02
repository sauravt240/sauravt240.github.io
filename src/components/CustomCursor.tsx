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
    // Ring cursor target position (snaps instantly via RAF)
    let tx = -200, ty = -200;
    // Smooth dot position (lerps toward ring — slight lag gives it life)
    let sx = -200, sy = -200;
    // Trail history [{x, y}, ...]
    const trail: { x: number; y: number }[] = [];
    let visible = false;

    // ── Render ─────────────────────────────────────────────────────────────
    const render = () => {
      rafRef.current = requestAnimationFrame(render);

      // Update smooth dot position (lerp — creates the gentle lag)
      sx += (tx - sx) * 0.18;
      sy += (ty - sy) * 0.18;

      // Update ring + DOM dot position
      if (cursorEl) cursorEl.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      if (dotEl)    dotEl.style.transform    = `translate3d(${tx}px, ${ty}px, 0)`;

      // Push current smooth position into trail
      trail.push({ x: sx, y: sy });
      if (trail.length > TRAIL_LENGTH) trail.shift();

      // Draw trail on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!visible || trail.length < 2) return;

      trail.forEach((pt, i) => {
        const t = i / (trail.length - 1);           // 0 = oldest, 1 = newest
        const r = TRAIL_RADIUS * t;                  // radius shrinks toward tail
        const a = t * t * (isHoveringRef.current ? 0.55 : 0.35); // opacity
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, Math.max(r, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${a})`;
        ctx.fill();
      });
    };

    // ── Mouse events ───────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;

      if (!visible) {
        visible = true;
        // Teleport smooth pos to avoid initial sweep from corner
        sx = tx; sy = ty;
        if (cursorEl) cursorEl.style.opacity = '1';
        if (dotEl)    dotEl.style.opacity    = '1';
      }

      const target = e.target as HTMLElement | null;
      const interactive = !!(
        target && (
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[data-cursor="pointer"]')
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
      if (cursorEl) cursorEl.style.opacity = '0';
      if (dotEl)    dotEl.style.opacity    = '0';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    rafRef.current = requestAnimationFrame(render);

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

