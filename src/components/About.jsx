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
            I’m a final-semester Diploma in Software Engineering student at Asia Pacific University in Kuala Lumpur,
            with a strong focus on Full Stack Development. My journey in technology is driven by a desire
            to build functional, clean, and highly responsive web applications that solve real problems across
            various industries.
          </p>
          <p>
            In my technical approach, I prioritize a deep understanding of core mechanics. I firmly believe
            in mastering backend fundamentals—particularly with Node.js and Express.js—before scaling up to
            frontend frameworks like React. This philosophy ensures that the applications I build are
            supported by robust, scalable architectures rather than relying purely on surface-level aesthetics.
            My primary ecosystem revolves around React, JavaScript, Node.js, Express.js, and MongoDB.
          </p>
          <p>
            As I approach the conclusion of my diploma, I am actively seeking an internship opportunity as a React
            or Full Stack Developer. I am eager to contribute to meaningful projects, refine my engineering
            practices, and continue growing alongside a dedicated team.
          </p>

          {/* Distinct Sections Grid */}
          <div className="about-details-grid">
            <div className="detail-box animate-on-scroll reveal-up delay-2">
              <h3>Education</h3>
              <p><strong>Asia Pacific University, Kuala Lumpur</strong></p>
              <p>Diploma in ICT (Software Eng.)</p>
              <p className="date">July 2024 – Present</p>
            </div>

            <div className="detail-box animate-on-scroll reveal-up delay-3">
              <h3>Core Focus</h3>
              <p><strong>Full Stack Development</strong></p>
              <p>React Ecosystem & Node.js</p>
              <p className="date">Frontend & Backend</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
