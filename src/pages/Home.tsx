import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Impact from '../components/Impact';
import About from '../components/About';
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
      
      <About />

      <Impact />
      <section id="source">
        <Features />
      </section>

      <VisionMissionSection />
      <AppPromo />
      
      <FAQ />
    </main>
  );
}
