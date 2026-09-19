import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <>
      {/* Drifting Ambient Colored Glow Orbs */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      {/* Grid Lines with Radial Mask */}
      <div className="grid-lines" aria-hidden="true" />

      {/* Fractal Noise Texture Overlay */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
};
