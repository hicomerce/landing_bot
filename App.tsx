
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Features from './components/Features';
import Security from './components/Security';
import Deliverables from './components/Deliverables';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <Security />
        <Deliverables />
      </main>
      <Footer />
    </div>
  );
};

export default App;
