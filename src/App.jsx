import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import Hero from './components/sections/Hero';
import PainPoints from './components/sections/PainPoints';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Workflow from './components/sections/Workflow';
import FAQ from './components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Services />
        <Portfolio />
        <Workflow />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
