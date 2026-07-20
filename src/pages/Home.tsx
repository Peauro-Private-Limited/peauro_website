import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
// HIDDEN: Impact section - uncomment to re-enable
// import Impact from '../components/Impact';
import VisionMissionSection from '../components/VisionMissionSection';
import AppPromo from '../components/AppPromo';
import FAQ from '../components/FAQ';

interface HomeProps {
  onSubscribeClick: () => void;
}

export default function Home({ onSubscribeClick }: HomeProps) {
  return (
    <main>
      <Hero onSubscribeClick={onSubscribeClick} />
      
      {/* HIDDEN: Impact section - uncomment to re-enable
      <Impact />
      */}
      <section id="source">
        <Features />
      </section>

      <VisionMissionSection />
      <AppPromo />
      
      <FAQ />
    </main>
  );
}
