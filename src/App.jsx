import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDemo from './components/ProjectDemo';
import ChatBot from './components/ChatBot';
import BackToTop from './components/BackToTop';
import EndingQuote from './components/EndingQuote';
import CustomCursor from './components/CustomCursor';
import AIProductivity from './components/AIProductivity';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-animation"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <AIProductivity />
        <Projects />
        <ProjectDemo />
        <Contact />
        <EndingQuote />
      </main>

      <ChatBot />
      <BackToTop />
      <CustomCursor />
    </>
  );
}

export default App;