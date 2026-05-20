import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.svg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        
        {/* Left Column: Hero Text */}
        <div className="hero-text-content animate-on-scroll reveal-left">
          <p className="greeting delay-1">Hi, my name is</p>
          <h1 className="name delay-2">Htet Aung Lwin.</h1>
          <h2 className="title delay-3">I build <span className="gradient-text">futuristic solutions.</span></h2>
          <p className="description delay-3">
            I'm an Aspiring Software Developer and ICT student specializing in Software Engineering. 
            I am passionate about crafting dynamic, modern web applications and expanding my 
            technical expertise through hands-on projects.
          </p>
          <div className="cta-buttons delay-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>

        {/* Right Column: Premium Interactive Profile Space */}
        <div className="hero-avatar-wrapper animate-on-scroll reveal-scale delay-2">
          <div className="avatar-container">
            {/* Ambient Background Glow */}
            <div className="avatar-ambient-glow"></div>
            
            {/* Outer Decorative Tech Ring (Spinning Counter-Clockwise) */}
            <div className="avatar-ring-outer"></div>
            
            {/* Inner Decorative Tech Ring (Spinning Clockwise) */}
            <div className="avatar-ring-inner"></div>

            {/* Glowing Corner Accents */}
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>

            {/* Interactive Portrait Box */}
            <div className="avatar-frame">
              <img src={profileImg} alt="Htet Aung Lwin" className="avatar-image" />
              {/* Scanline Animation Effect */}
              <div className="avatar-scanline"></div>
              {/* Mesh overlay */}
              <div className="avatar-mesh"></div>
            </div>

            {/* HUD Status Badges */}
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

