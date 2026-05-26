import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.svg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Aspiring Software Engineer.',
    'Junior Full Stack Developer.',
    'Problem Solver.',
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
            Final-semester Diploma in Software Engineering student focused on React, Node.js,
            and full-stack web development. I build clean, responsive applications
            with strong backend foundations and practical user-focused design.
          </p>

          <div className="hero-internship-card delay-3">
            <div className="hero-internship-card__top">
              <span className="hero-internship-card__dot"></span>
              <span>Open to Internship</span>
            </div>

            <div className="hero-internship-card__content">
              <div>
                <small>Role</small>
                <strong>Software / React / Full Stack Developer</strong>
              </div>

              <div>
                <small>Available</small>
                <strong>20 July 2026 – 9 October 2026</strong>
              </div>

              <div>
                <small>Location</small>
                <strong>Kuala Lumpur / Remote</strong>
              </div>
            </div>
          </div>

          <div className="cta-buttons delay-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>

            <a
              href="https://drive.google.com/file/d/1Q-J7Do9MWsBPV_i6qEPotjVK-MZdO9ss/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn hero-cv-btn"
            >
              Download CV
            </a>

            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>

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
              <span className="hud-text">AVAILABLE</span>
            </div>

            <div className="hud-badge hud-bottom">
              <span className="hud-text">FULL STACK FOCUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;