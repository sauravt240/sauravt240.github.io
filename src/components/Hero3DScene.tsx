import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Inner 3D Sculpture Component
const AbstractCore: React.FC<{ mousePos: { x: number; y: number }; isReducedMotion: boolean }> = ({
  mousePos,
  isReducedMotion,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particles for ambient subtle depth
  const [particlePositions, particleColors] = useMemo(() => {
    const count = 160;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color('#89AACC');
    const c2 = new THREE.Color('#4E85BF');

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.4 + Math.random() * 1.6;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixed = c1.clone().lerp(c2, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    return [positions, colors];
  }, []);

  useFrame((_state, delta) => {
    if (!meshRef.current || !wireframeRef.current) return;

    if (!isReducedMotion) {
      // Auto rotation
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.12;

      wireframeRef.current.rotation.y += delta * 0.25;
      wireframeRef.current.rotation.x += delta * 0.12;

      if (pointsRef.current) {
        pointsRef.current.rotation.y -= delta * 0.08;
        pointsRef.current.rotation.z += delta * 0.04;
      }

      // Parallax mouse tilt offset lerping
      const targetRotX = mousePos.y * 0.45;
      const targetRotY = mousePos.x * 0.55;

      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, meshRef.current.rotation.x + targetRotX * 0.05, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, meshRef.current.rotation.y + targetRotY * 0.05, 0.1);

      wireframeRef.current.rotation.x = meshRef.current.rotation.x;
      wireframeRef.current.rotation.y = meshRef.current.rotation.y;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Faceted dark glossy core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshPhysicalMaterial
          color="#0c1219"
          roughness={0.2}
          metalness={0.8}
          transmission={0.4}
          ior={1.4}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          wireframe={false}
          flatShading={true}
        />
      </mesh>

      {/* Futuristic accent wireframe */}
      <lineSegments ref={wireframeRef}>
        <wireframeGeometry args={[new THREE.IcosahedronGeometry(1.52, 1)]} />
        <lineBasicMaterial color="#89AACC" transparent opacity={0.65} linewidth={1.5} />
      </lineSegments>

      {/* Orbiting particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

export const Hero3DScene: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      mediaQuery.removeEventListener('change', handler);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.4} color="#89AACC" />
        <pointLight position={[-4, -3, -2]} intensity={1.8} color="#4E85BF" />
        <pointLight position={[0, 4, 2]} intensity={0.9} color="#ffffff" />

        <Float speed={isReducedMotion ? 0 : 1.6} rotationIntensity={0.4} floatIntensity={0.5}>
          <AbstractCore mousePos={mousePos} isReducedMotion={isReducedMotion} />
        </Float>
      </Canvas>
    </div>
  );
};
