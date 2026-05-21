import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-content">
        <div className="logo gradient-text">HAL.</div>
        <ul className="nav-links">
          <li><a href="#about" className="neon-hover">About</a></li>
          <li><a href="#skills" className="neon-hover">Skills</a></li>
          <li><a href="#projects" className="neon-hover">Projects</a></li>
          <li><a href="#demos" className="neon-hover">Projects Demo</a></li>
          <li><a href="#contact" className="btn">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
