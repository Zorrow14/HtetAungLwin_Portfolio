import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'ai-productivity', label: 'AI & Productivity' },
  { id: 'projects', label: 'Featured Projects' },
  { id: 'demos', label: 'System Demos' },
  { id: 'contact', label: 'Get In Touch' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 140;

      let current = 'hero';

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-content">
        <a href="#hero" className="logo gradient-text" onClick={closeMenu}>
          HAL.
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`neon-hover ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`mobile-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={closeMenu}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;