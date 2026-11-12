import React, { useRef, useState } from 'react';
import './About.css';
// Change this filename to whatever your real photo is called!
import profileImg from '../assets/profile.jpg';

const About = () => {
  const frameRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, spotX: 50, spotY: 50, active: false });

  const handleMouseMove = (e) => {
    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height; // 0 -> 1

    const maxTilt = 10; // degrees
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    setTilt({
      rotateX,
      rotateY,
      spotX: px * 100,
      spotY: py * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, spotX: 50, spotY: 50, active: false });
  };

  return (
    <section id="about" className="about-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">01.</span> About Me</h2>
      <div className="about-content glass-panel animate-on-scroll reveal-scale delay-1">

        {/* Profile Image Column — mouse-reactive 3D tilt card */}
        <div className="about-image-wrapper">
          <div
            ref={frameRef}
            className={`about-image-frame ${tilt.active ? 'about-image-frame--active' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.active ? 1.02 : 1})`,
              '--spot-x': `${tilt.spotX}%`,
              '--spot-y': `${tilt.spotY}%`,
            }}
          >
            <img src={profileImg} alt="Htet Aung Lwin" className="about-image" />
            {/* Cinematic gold spotlight that tracks the cursor */}
            <div className="about-image-spotlight"></div>
            {/* Subtle tint overlay */}
            <div className="about-image-overlay"></div>
          </div>
        </div>

        {/* Existing Text Column */}
        <div className="about-text">
          <p>
            I’m a software developer who recently completed a Diploma in ICT (Software Engineering)
            at Asia Pacific University in Kuala Lumpur. I build full-stack and AI-integrated
            applications end to end — from the data model and API through to the interface people
            actually use.
          </p>
          <p>
            My core stack is React and TypeScript on the frontend with Python/FastAPI and PostgreSQL
            behind it, and I’ve shipped with Node.js, Flutter, PHP and Supabase as well. Lately my
            focus has shifted towards AI engineering: LLM tool-calling loops, RAG memory with Chroma,
            guardrails that verify model output against real business rules, and the testing and CI
            discipline that makes those systems trustworthy.
          </p>
          <p>
            During my internship at MOCOF Sdn Bhd I built and deployed an AI sales chatbot that quotes
            live cabinetry prices and takes Stripe deposits, and I led the frontend on CareerSync AI,
            which placed in the Top 80 at the Talentbank Tech Hackathon 2026. With the internship and
            my diploma now complete, I’m looking for a remote software engineering role where I can
            keep building full-stack and AI-integrated products.
          </p>

          {/* Distinct Sections Grid */}
          <div className="about-details-grid">
            <div className="detail-box animate-on-scroll reveal-up delay-2">
              <h3>Education</h3>
              <p><strong>Asia Pacific University, Kuala Lumpur</strong></p>
              <p>Diploma in ICT (Software Engineering)</p>
              <p className="date">July 2024 – 2026 · Completed</p>
            </div>

            <div className="detail-box animate-on-scroll reveal-up delay-3">
              <h3>Core Focus</h3>
              <p><strong>Full Stack & AI Engineering</strong></p>
              <p>React, TypeScript, FastAPI, PostgreSQL</p>
              <p className="date">Growing into AI Engineering & MLOps</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
