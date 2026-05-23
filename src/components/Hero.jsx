import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.svg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Aspiring Software Engineer.",
    "Junior Full Stack Developer.",
    "Problem Solver."
  ];

  useEffect(() => {
    let i = loopNum % roles.length;
    let fullText = roles[i];

    const timeout = setTimeout(() => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Adjust typing speed based on action
      setTypingSpeed(isDeleting ? 50 : 120);

      // If word is fully typed, pause before deleting
      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000); // 2-second pause at the end of the word
        setIsDeleting(true);
      } 
      // If word is completely deleted, move to the next word
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Short pause before typing the next word
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        
        {/* Left Column: Hero Text */}
        <div className="hero-text-content animate-on-scroll reveal-left">
          <p className="greeting delay-1">Hello, I'm</p>
          <h1 className="name delay-2">Htet Aung Lwin.</h1>
          
          {/* Dynamic Typewriter Text */}
          <h2 className="title delay-3">
            <span className="gradient-text">{text}</span>
            <span className="typewriter-cursor">|</span>
          </h2>
          
          <p className="description delay-3">
            I'm a final-semester Software Engineering student at Asia Pacific University and an aspiring Full Stack Developer. 
            I specialize in crafting seamless front-end designs and building highly functional, responsive web applications 
            across diverse industries using React, Node.js, and modern web technologies.
          </p>
          <div className="cta-buttons delay-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>

        {/* Right Column: Premium Interactive Profile Space */}
        <div className="hero-avatar-wrapper animate-on-scroll reveal-scale delay-2">
          <div className="avatar-container">
            <div className="avatar-ambient-glow"></div>
            <div className="avatar-ring-outer"></div>
            <div className="avatar-ring-inner"></div>
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>

            <div className="avatar-frame">
              <img src={profileImg} alt="Htet Aung Lwin" className="avatar-image" />
              <div className="avatar-scanline"></div>
              <div className="avatar-mesh"></div>
            </div>

            <div className="hud-badge hud-top">
              <span className="hud-dot"></span>
              <span className="hud-text">STATUS: ACTIVE</span>
            </div>
            <div className="hud-badge hud-bottom">
              <span className="hud-text">SEC_NODE: OK</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;