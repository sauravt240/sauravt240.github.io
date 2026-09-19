import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AmbientBackground } from './components/AmbientBackground';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { FeaturesPhilosophy } from './components/FeaturesPhilosophy';
import { TechStackMatrix } from './components/TechStackMatrix';
import { FeaturedWork } from './components/FeaturedWork';
import { InteractiveVideoSection } from './components/InteractiveVideoSection';
import { Explorations3D } from './components/Explorations3D';
import { Stats } from './components/Stats';
import { Certifications } from './components/Certifications';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050609] text-[#F3F4F6] selection:bg-[#8B7CFF]/30 selection:text-white relative">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Atmospheric Ambient Background: Drifting Glow Orbs, Grid & Noise Overlay */}
      <AmbientBackground />

      {/* Loading Screen Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10"
      >
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <FeaturesPhilosophy />
          <TechStackMatrix />
          <FeaturedWork />
          <InteractiveVideoSection />
          <Explorations3D />
          <Stats />
          <Certifications />
        </main>
        <ContactFooter />
      </motion.div>
    </div>
  );
};

export default App;
