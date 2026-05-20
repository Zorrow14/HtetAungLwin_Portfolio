import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">04.</span> Get In Touch</h2>
      <div className="contact-content glass-panel animate-on-scroll reveal-scale delay-1">
        <p>
          I am currently looking for new opportunities and my inbox is always open. 
          Whether you have a question, a project idea, or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <div className="contact-links">
          <a href="mailto:htetaunglwin223@gmail.com" className="btn btn-primary">Say Hello</a>
          <div className="social-links">
            <a href="https://github.com/Zorrow14" target="_blank" rel="noreferrer" className="neon-hover">GitHub</a>
            <a href="https://www.linkedin.com/in/htet-aung-lwin-6010683b0/" target="_blank" rel="noreferrer" className="neon-hover">LinkedIn</a>
          </div>
        </div>
      </div>
      <footer className="animate-on-scroll reveal-up delay-2">
        <p>Built with React & Vite. Designed by Htet Aung Lwin.</p>
      </footer>
    </section>
  );
};

export default Contact;
