import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">01.</span> About Me</h2>
      <div className="about-content glass-panel animate-on-scroll reveal-scale delay-1">
        <div className="about-text">
          <p>
            Hello! I'm Htet Aung Lwin, a student at Asia Pacific University in Kuala Lumpur, 
            currently pursuing a Diploma in Information and Communication Technology with a 
            specialism in Software Engineering.
          </p>
          <p>
            My journey into programming has fueled my passion for building practical, 
            impactful solutions. I love bridging the gap between design and engineering—combining 
            my technical skills in web development and databases with a keen eye for aesthetics.
          </p>
          <div className="education-box animate-on-scroll reveal-right delay-2">
            <h3>Education</h3>
            <p><strong>Asia Pacific University, Kuala Lumpur</strong></p>
            <p>Diploma in ICT (Software Engineering)</p>
            <p className="date">July 2024 – Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
