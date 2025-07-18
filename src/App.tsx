import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Workshops from './components/Workshops';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact'; // ✅ use this one
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Workshops/>
        <Skills />
        <Certifications />
        <Contact /> {/* ✅ This is the section with full form */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
