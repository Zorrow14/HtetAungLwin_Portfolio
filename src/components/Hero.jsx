import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Software Engineering Graduate.',
    'Full Stack Developer.',
    'AI-Integrated App Builder.',
  ];

  useEffect(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-text-content animate-on-scroll reveal-left">
          <p className="greeting delay-1">Hello, I'm</p>

          <h1 className="name delay-2">Htet Aung Lwin.</h1>

          <h2 className="title delay-3">
            <span className="gradient-text">{text}</span>
            <span className="typewriter-cursor">|</span>
          </h2>

          <p className="description delay-3">
            Software Engineering graduate (Diploma in ICT, Asia Pacific University) who builds
            full-stack and AI-integrated applications end to end. Strong in React, TypeScript,
            Python/FastAPI and PostgreSQL, with a growing focus on AI engineering and MLOps.
          </p>

          <div className="hero-status-card delay-3">
            <span className="hero-status-card__dot"></span>
            <span className="hero-status-card__text">
              <strong>Software Dev Intern</strong> at <strong>MOCOF Sdn Bhd</strong>
              {' '}· Top 80, Talentbank Tech Hackathon 2026
            </span>
          </div>

          <div className="cta-buttons delay-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>

            <a
              href="https://drive.google.com/file/d/1Cz2UIch-SMzFw90sd6QiacLskCBb83mO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn hero-cv-btn"
            >
              Download CV
            </a>

            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>

        <div className="hero-photo-wrapper animate-on-scroll reveal-right delay-2">
          <div className="hero-photo-frame">
            <img src={profileImg} alt="Htet Aung Lwin" className="hero-photo" />
            <div className="hero-photo-overlay"></div>
          </div>
          <div className="hero-photo-ring"></div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <span className="hero-scroll-cue__label">Scroll</span>
        <span className="hero-scroll-cue__line"></span>
      </a>
    </section>
  );
};

export default Hero;