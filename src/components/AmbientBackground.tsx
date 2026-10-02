import React, { useRef, useEffect } from 'react';

// ── Brand palette (matches CSS custom properties) ──────────────────────────
// --color-accent: #E2C08D  champagne warm
// --color-accent-blue: #60A5FA  slate cool
const WARM = { r: 226, g: 192, b: 141 };
const COOL = { r: 96,  g: 165, b: 250 };
const BG   = '#08090D';

// ── Icosahedron geometry ───────────────────────────────────────────────────
// Standard icosahedron: 12 vertices defined by golden ratio PHI = (1+√5)/2.
// Vertex sets: (0, ±1, ±PHI), (±1, ±PHI, 0), (±PHI, 0, ±1)  — all normalised.
const PHI = (1 + Math.sqrt(5)) / 2;
const ICO_VERTS_RAW: [number, number, number][] = [
  [ 0,  1,  PHI], [ 0, -1,  PHI], [ 0,  1, -PHI], [ 0, -1, -PHI],
  [ 1,  PHI,  0], [-1,  PHI,  0], [ 1, -PHI,  0], [-1, -PHI,  0],
  [ PHI,  0,  1], [-PHI,  0,  1], [ PHI,  0, -1], [-PHI,  0, -1],
];
// Normalise to unit sphere
const ICO_LEN = Math.sqrt(1 + PHI * PHI);
const ICO_VERTS: [number, number, number][] = ICO_VERTS_RAW.map(
  ([x, y, z]) => [x / ICO_LEN, y / ICO_LEN, z / ICO_LEN]
);

// 30 edges: connect vertices whose distance ≈ 2/ICO_LEN (unit-sphere edge length)
const EDGE_THRESH = (2 / ICO_LEN) * 1.001; // small tolerance
const ICO_EDGES: [number, number][] = [];
for (let i = 0; i < 12; i++) {
  for (let j = i + 1; j < 12; j++) {
    const [ax, ay, az] = ICO_VERTS[i];
    const [bx, by, bz] = ICO_VERTS[j];
    const d = Math.sqrt((ax-bx)**2 + (ay-by)**2 + (az-bz)**2);
    if (d < EDGE_THRESH) ICO_EDGES.push([i, j]);
  }
}

// ── Particle seed (fixed layout for consistency) ───────────────────────────
const PARTICLE_COUNT = 55;
const rng = (seed: number) => {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };
};
const rand = rng(42);
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, () => ({
  r:      0.9 + rand() * 0.65,
  theta:  rand() * Math.PI * 2,
  phi_sph: Math.acos(2 * rand() - 1),  // spherical phi (not golden ratio)
  driftT: rand() * Math.PI * 2,
  driftS: 0.015 + rand() * 0.025,
  driftA: 0.02 + rand() * 0.04,
  size:   0.8 + rand() * 1.6,
}));

// ── 3-D math helpers ────────────────────────────────────────────────────────
type V3 = [number, number, number];

const rotX = ([x, y, z]: V3, a: number): V3 => {
  const c = Math.cos(a), s = Math.sin(a);
  return [x, y * c - z * s, y * s + z * c];
};
const rotY = ([x, y, z]: V3, a: number): V3 => {
  const c = Math.cos(a), s = Math.sin(a);
  return [x * c + z * s, y, -x * s + z * c];
};

/** Perspective project a 3-D point to canvas 2-D pixel coords. */
const project = (
  [x, y, z]: V3,
  cx: number, cy: number,
  scale: number,
  fov = 3.8,
): [number, number, number] => {
  const d = fov / (fov + z);           // depth factor (perspective divide)
  return [cx + x * scale * d, cy - y * scale * d, d];
};

/**
 * AmbientBackground
 *
 * Single Canvas 2D element (position:fixed, z=0) combining:
 *   1. Gradient glow blobs  — warm champagne follows cursor with lag
 *   2. Wireframe icosahedron — rotates slowly, tilts subtly toward cursor
 *   3. Particle field        — 55 dots drifting in a sphere shell around it
 *
 * All drawn on ONE canvas, ONE RAF loop, zero new dependencies.
 * Three.js is NOT used here — pure 3-D math keeps this layer free of any
 * extra WebGL context (the hero R3F canvas is the only GL surface).
 *
 * Performance budget:
 *   - 30 fps cap (FPS_GATE)
 *   - Pauses on tab-hidden (visibilitychange)
 *   - position:fixed → compositor layer, no layout/paint
 *   - Passive mousemove
 */
export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── State ──────────────────────────────────────────────────────────────
    let raf = 0;
    let lastTs = 0;
    const FPS_GATE = 1000 / 30;
    let hidden = false;
    let time = 0;

    // Mouse (normalised 0→1), starts centred
    const mouse  = { x: 0.5, y: 0.42 };
    // Lerped positions (lag behind mouse)
    const glowL  = { x: 0.5, y: 0.42 };   // gradient glow follows
    const tiltL  = { x: 0.0, y: 0.0  };   // icosahedron tilt offset

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // ── Soft radial gradient blob ──────────────────────────────────────────
    const blob = (
      cx: number, cy: number, r: number,
      col: { r: number; g: number; b: number }, alpha: number,
    ) => {
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0,    `rgba(${col.r},${col.g},${col.b},${alpha})`);
      g.addColorStop(0.38, `rgba(${col.r},${col.g},${col.b},${alpha * 0.32})`);
      g.addColorStop(0.72, `rgba(${col.r},${col.g},${col.b},${alpha * 0.07})`);
      g.addColorStop(1,    `rgba(${col.r},${col.g},${col.b},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // ── Resize ─────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    // ── Mouse ──────────────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const onVis = () => { hidden = document.hidden; };
    document.addEventListener('visibilitychange', onVis);

    // ── Render loop ────────────────────────────────────────────────────────
    const render = (ts: number) => {
      raf = requestAnimationFrame(render);
      if (hidden) return;

      const dt = ts - lastTs;
      if (dt < FPS_GATE) return;
      lastTs = ts - (dt % FPS_GATE);
      time += dt * 0.001;              // seconds

      const W = canvas.width;
      const H = canvas.height;
      const R = Math.max(W, H);

      // Lerp glow toward cursor (slow, ~1.8 s lag)
      glowL.x = lerp(glowL.x, mouse.x, 0.025);
      glowL.y = lerp(glowL.y, mouse.y, 0.025);

      // Tilt offset: cursor deviation from centre, mapped to rotation nudge
      tiltL.x = lerp(tiltL.x, (mouse.x - 0.5) * 0.4, 0.03);
      tiltL.y = lerp(tiltL.y, (mouse.y - 0.5) * 0.3, 0.03);

      // ── Clear ─────────────────────────────────────────────────────────
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);

      // ── 1. Gradient glow foundation ────────────────────────────────────
      ctx.globalCompositeOperation = 'lighter';

      // Warm champagne: follows cursor
      blob(glowL.x * W, glowL.y * H, R * 0.68, WARM, 0.11);

      // Cool blue: slow autonomous drift, bottom-right quadrant
      const cX = (0.64 + Math.sin(time * 0.13) * 0.17) * W;
      const cY = (0.68 + Math.cos(time * 0.10) * 0.13) * H;
      blob(cX, cY, R * 0.54, COOL, 0.07);

      // Warm anchor at top-centre (barely moves)
      blob((0.42 + Math.sin(time * 0.06) * 0.05) * W, H * -0.04, R * 0.55, WARM, 0.07);

      ctx.globalCompositeOperation = 'source-over';

      // ── 2 & 3. Wireframe icosahedron + particles ───────────────────────
      // Centre: slightly right of viewport centre, vertically centred in hero
      const cx = W * 0.70;
      const cy = H * 0.50;
      // Scale so icosahedron is large but clearly behind the hero card.
      // On mobile fall to 0.28 * W so it doesn't dominate small screens.
      const scale = Math.min(W * 0.22, H * 0.32, 260);

      // Rotation angles: slow auto-spin + cursor tilt offset
      const rotA = time * 0.09 + tiltL.x;   // around Y (yaw)
      const rotB = time * 0.055 + tiltL.y;  // around X (pitch)

      // Project all 12 vertices ─────────────────────────────────────────
      const proj = ICO_VERTS.map((v) => {
        let p = rotY(v, rotA);
        p = rotX(p, rotB);
        return project(p, cx, cy, scale);
      });

      // Draw edges (back → front ordering by average depth)
      const sortedEdges = ICO_EDGES
        .map(([a, b]) => ({ a, b, z: (proj[a][2] + proj[b][2]) / 2 }))
        .sort((e1, e2) => e1.z - e2.z);

      sortedEdges.forEach(({ a, b, z }) => {
        const [ax, ay] = proj[a];
        const [bx, by] = proj[b];
        // Edges facing away (small z / behind) are dimmer → depth cue
        const depthFade = Math.max(0.25, (z - 0.5) * 2.0);
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        // Titanium-tinted: near-white at low opacity
        ctx.strokeStyle = `rgba(220, 210, 200, ${0.18 * depthFade})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      });

      // ── Vertex dots (small, same colour) ──────────────────────────────
      proj.forEach(([px, py, d]) => {
        const fade = Math.max(0.2, (d - 0.5) * 2.0);
        ctx.beginPath();
        ctx.arc(px, py, 1.5 * d, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 192, 141, ${0.22 * fade})`;  // champagne vertex
        ctx.fill();
      });

      // ── Particle field ─────────────────────────────────────────────────
      PARTICLES.forEach((p) => {
        const r = p.r + Math.sin(time * p.driftS + p.driftT) * p.driftA;
        const sinPhi = Math.sin(p.phi_sph);
        let pv: V3 = [
          r * sinPhi * Math.cos(p.theta),
          r * sinPhi * Math.sin(p.theta),
          r * Math.cos(p.phi_sph),
        ];
        pv = rotY(pv, rotA * 0.6);
        pv = rotX(pv, rotB * 0.6);

        const [px, py, pd] = project(pv, cx, cy, scale);
        if (pd < 0.1) return;

        const depthAlpha = Math.max(0.1, (pd - 0.5) * 1.8);
        ctx.beginPath();
        ctx.arc(px, py, p.size * pd * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 205, 200, ${0.13 * depthAlpha})`;
        ctx.fill();
      });
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <>
      {/* Single fixed canvas: gradient glow + wireframe icosahedron + particles */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Film-grain noise over canvas for analogue texture */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
};


