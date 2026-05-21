import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-content">
        <div className="logo gradient-text">HAL.</div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><a href="#about" className="neon-hover">About</a></li>
          <li><a href="#skills" className="neon-hover">Skills</a></li>
          <li><a href="#projects" className="neon-hover">Projects</a></li>
          <li><a href="#demos" className="neon-hover">Projects Demo</a></li>
          <li><a href="#contact" className="btn">Contact Me</a></li>
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <ul className={`mobile-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#demos" onClick={closeMenu}>Projects Demo</a></li>
        <li><a href="#contact" className="btn" onClick={closeMenu}>Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
