import React, { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AmbientBackground } from './components/AmbientBackground';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { FeaturesPhilosophy } from './components/FeaturesPhilosophy';
import { TechStackMatrix } from './components/TechStackMatrix';
import { FeaturedWork } from './components/FeaturedWork';
import { Stats } from './components/Stats';
import { ContactFooter } from './components/ContactFooter';

// Code-split below-the-fold heavy sections
const InteractiveVideoSection = lazy(() =>
  import('./components/InteractiveVideoSection').then((m) => ({ default: m.InteractiveVideoSection }))
);
const Explorations3D = lazy(() =>
  import('./components/Explorations3D').then((m) => ({ default: m.Explorations3D }))
);
const Certifications = lazy(() =>
  import('./components/Certifications').then((m) => ({ default: m.Certifications }))
);

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050609] text-[#F3F4F6] selection:bg-[#8B7CFF]/30 selection:text-white relative">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Atmospheric Ambient Background: Drifting Glow Orbs, Grid & Noise Overlay */}
      <AmbientBackground />

      {/* Loading Screen Overlay (dissolves cleanly on complete) */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <FeaturesPhilosophy />
          <TechStackMatrix />
          <FeaturedWork />
          <Suspense fallback={<div className="min-h-[480px] my-12" />}>
            <InteractiveVideoSection />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px] py-32" />}>
            <Explorations3D />
          </Suspense>
          <Stats />
          <Suspense fallback={<div className="min-h-[300px] py-28" />}>
            <Certifications />
          </Suspense>
        </main>
        <ContactFooter />
      </div>
    </div>
  );
};

export default App;
