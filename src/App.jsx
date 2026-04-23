import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import TechSlider from './sections/TechSlider';
import Features from './sections/Features';
import Milestones from './sections/Milestones';
import Domain from './sections/Domain';
import Team from './sections/Team';
import Contact from './sections/Contact';
import GridSection from './components/GridSection';
import CTABanner from './components/CTABanner';
import { Footer, BackToTop } from './components/Footer';
import { documents, presentations } from './data/content';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <TechSlider />
        <Features />
        
        <GridSection 
          id="documents" 
          title="Research Documents" 
          subtitle="Official project documentation and technical reports." 
          items={documents} 
        />
        
        <GridSection 
          id="presentations" 
          title="Slide Presentations" 
          subtitle="Visual summaries from various stages of our research." 
          items={presentations} 
          isPresentation={true}
        />

        <Milestones />
        <CTABanner />
        <Domain />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
