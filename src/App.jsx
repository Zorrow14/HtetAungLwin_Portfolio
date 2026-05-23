import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDemo from './components/ProjectDemo';
import StarBackground from './components/StarBackground'; // <-- IMPORT NEW COMPONENT
import BootScreen from './components/BootScreen';
import ChatBot from './components/ChatBot';

function App() {
  const [booted, setBooted] = useState(false);

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
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      {/* Background Gradients */}
      <div className="bg-animation"></div>
      
      {/* Interactive Cursor Stars */}
      <StarBackground /> 
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProjectDemo />
        <Contact />
      </main>
      <ChatBot />
    </>
  )
}

export default App;