import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface SculptureProps {
  materialTheme: 'titanium' | 'obsidian' | 'champagne';
  isDragging: boolean;
  dragDelta: { x: number; y: number };
  /** Normalised cursor offset within canvas (-1..1 on each axis) */
  hoverOffset: { x: number; y: number };
  isReducedMotion: boolean;
}

const SculpturalObject: React.FC<SculptureProps> = ({
  materialTheme,
  isDragging,
  dragDelta,
  hoverOffset,
  isReducedMotion,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const rotVelRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  // Smooth lerp target for hover tilt (world-space extra rotation)
  const tiltRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Material palettes tuned for studio lighting & rich specular highlights
  const materialProps = React.useMemo(() => {
    switch (materialTheme) {
      case 'obsidian':
        return {
          color: '#1a1f2c',
          roughness: 0.15,
          metalness: 0.9,
          clearcoat: 1.0,
          clearcoatRoughness: 0.08,
          reflectivity: 1.0,
        };
      case 'champagne':
        return {
          color: '#524332',
          roughness: 0.2,
          metalness: 0.82,
          clearcoat: 0.9,
          clearcoatRoughness: 0.12,
          reflectivity: 0.9,
        };
      case 'titanium':
      default:
        return {
          color: '#333d4e',
          roughness: 0.22,
          metalness: 0.85,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          reflectivity: 0.95,
        };
    }
  }, [materialTheme]);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;

    if (isDragging) {
      // Drag overrides hover — apply velocity from pointer delta
      rotVelRef.current.x = dragDelta.y * 0.007;
      rotVelRef.current.y = dragDelta.x * 0.007;
      // Relax hover tilt while dragging
      tiltRef.current.x *= 0.9;
      tiltRef.current.y *= 0.9;
    } else {
      // Decay drag momentum
      rotVelRef.current.x *= 0.92;
      rotVelRef.current.y *= 0.92;

      // Smoothly lerp hover tilt toward cursor position (±0.32 rad max)
      if (!isReducedMotion) {
        const targetX = -hoverOffset.y * 0.32;
        const targetY =  hoverOffset.x * 0.32;
        const lerpSpeed = 1 - Math.pow(0.04, delta);
        tiltRef.current.x += (targetX - tiltRef.current.x) * lerpSpeed;
        tiltRef.current.y += (targetY - tiltRef.current.y) * lerpSpeed;
      }
    }

    meshRef.current.rotation.x += rotVelRef.current.x;
    meshRef.current.rotation.y += rotVelRef.current.y;

    // Apply subtle hover tilt on top of base auto-rotation
    if (!isReducedMotion && !isDragging) {
      meshRef.current.rotation.y += delta * 0.24;
      meshRef.current.rotation.x += delta * 0.1;
    }

    // Blend hover tilt additively (separate from auto-rotation velocity)
    // We update position instead to keep tilt purely positional
    meshRef.current.position.x = tiltRef.current.y * 0.12;
    meshRef.current.position.y = -tiltRef.current.x * 0.12;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
      {/* Centered, bold tactile knot sculpture with optimal framing */}
      <torusKnotGeometry args={[1.05, 0.36, 220, 36, 2, 3]} />
      <meshPhysicalMaterial
        {...materialProps}
        wireframe={false}
        flatShading={false}
      />
    </mesh>
  );
};

export const Hero3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const [materialTheme, setMaterialTheme] = useState<'titanium' | 'obsidian' | 'champagne'>('titanium');
  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 });
  const [hoverOffset, setHoverOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqHandler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener('change', mqHandler);

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0]?.isIntersecting ?? true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    return () => {
      mq.removeEventListener('change', mqHandler);
      observer.disconnect();
    };
  }, []);

  /** Compute normalised hover offset (-1..1) from cursor position in canvas */
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) return;
    const el = canvasWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 2 - 1;  // -1 left → +1 right
    const y = ((e.clientY - rect.top)  / rect.height) * 2 - 1;  // -1 top  → +1 bottom
    setHoverOffset({ x, y });
  }, [isDragging]);

  const handleMouseLeave = useCallback(() => {
    // Gently reset to centre when cursor leaves
    setHoverOffset({ x: 0, y: 0 });
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    setDragDelta({ x: 0, y: 0 });
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    setDragDelta({ x: dx, y: dy });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] lg:max-w-none mx-auto h-[440px] sm:h-[480px] lg:h-[520px] flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden select-none group"
    >
      {/* Studio Header Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-5 text-xs font-mono text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E2C08D] animate-pulse" />
          <span className="tracking-wider uppercase text-[11px] font-medium text-white/90">
            Tactile 3D Core
          </span>
        </div>
        <span className="text-[10px] tracking-widest text-[#64748B] uppercase">
          Studio PBR Light
        </span>
      </div>

      {/* Interactive 3D Canvas Area — hover to tilt, drag to spin */}
      <div
        ref={canvasWrapRef}
        className={`relative flex-1 w-full h-full cursor-${isDragging ? 'grabbing' : 'grab'} active:cursor-grabbing flex items-center justify-center`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Canvas
          camera={{ position: [0, 0, 5.0], fov: 42 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 1.5]}
          frameloop={isVisible ? 'always' : 'never'}
        >
          {/* Studio 3-Point Lighting with Tone & Specular Contrast */}
          <ambientLight intensity={0.9} />
          <hemisphereLight
            color="#A5C4E8"
            groundColor="#111827"
            intensity={1.1}
          />
          {/* Key Light: Warm Champagne studio highlight */}
          <directionalLight position={[5, 7, 5]} intensity={4.2} color="#FFF2E2" />
          {/* Rim Light: High-contrast electric blue edge silhouette */}
          <directionalLight position={[-6, -4, -4]} intensity={5.0} color="#7CA2FF" />
          {/* Front Soft Fill */}
          <pointLight position={[0, 2, 4]} intensity={2.2} color="#FFFFFF" />
          {/* Bottom Warm Accent Rim */}
          <pointLight position={[2, -4, 2]} intensity={1.8} color="#E2C08D" />

          <Float
            speed={isReducedMotion || isDragging ? 0 : 1.5}
            rotationIntensity={0.2}
            floatIntensity={0.3}
          >
            <SculpturalObject
              materialTheme={materialTheme}
              isDragging={isDragging}
              dragDelta={dragDelta}
              hoverOffset={hoverOffset}
              isReducedMotion={isReducedMotion}
            />
          </Float>
        </Canvas>
      </div>

      {/* Studio Footer Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 pb-5 pt-3 border-t border-white/[0.05] bg-black/25">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
          <span className="inline-block transition-transform duration-300 group-hover:rotate-45">
            ↺
          </span>
          <span>Hover to tilt · drag to spin</span>
        </div>

        {/* Skiper-UI Tactile Finish Switcher */}
        <div className="flex items-center gap-1 p-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
          {(['titanium', 'obsidian', 'champagne'] as const).map((theme) => {
            const isActive = materialTheme === theme;
            return (
              <button
                key={theme}
                onClick={() => setMaterialTheme(theme)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider capitalize transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {theme}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
