import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'ai-productivity', label: 'AI & Productivity' },
  { id: 'projects', label: 'Featured Projects' },
  { id: 'demos', label: 'System Demos' },
  { id: 'contact', label: 'Get In Touch' },
];

// Must match the breakpoint in Navbar.css where the hamburger takes over.
const MOBILE_BREAKPOINT = 1024;
// How far below the navbar a section's top must be before it counts as "active".
const ACTIVE_OFFSET = 140;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef(null);

  // Track scroll position (throttled to one update per animation frame).
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;

      const y = window.scrollY;
      setScrolled(y > 50);

      const probe = y + ACTIVE_OFFSET;
      let current = 'hero';

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const top = section.getBoundingClientRect().top + y;
        if (top <= probe) current = item.id;
      });

      // At the very bottom of the page, always highlight the last nav item
      // so a short final section can still be reached.
      const atBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = navItems[navItems.length - 1].id;

      setActiveSection(current);
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  // While the mobile menu is open: close on Escape, on an outside tap,
  // or when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`);
    const onMediaChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    mq.addEventListener('change', onMediaChange);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      mq.removeEventListener('change', onMediaChange);
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const navClass = [
    'navbar',
    scrolled ? 'scrolled' : '',
    menuOpen ? 'menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const renderLink = (item, extraProps = {}) => {
    const isActive = activeSection === item.id;
    return (
      <a
        href={`#${item.id}`}
        className={isActive ? 'active' : undefined}
        aria-current={isActive ? 'true' : undefined}
        {...extraProps}
      >
        {item.label}
      </a>
    );
  };

  return (
    <nav ref={navRef} className={navClass} aria-label="Primary">
      <div className="nav-content">
        <a
          href="#hero"
          className="logo gradient-text"
          onClick={closeMenu}
          aria-label="HAL. Back to top"
        >
          HAL.
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>{renderLink(item)}</li>
          ))}
        </ul>

        <button
          type="button"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul
        id="mobile-nav"
        className={`mobile-links ${menuOpen ? 'open' : ''}`}
      >
        {navItems.map((item) => (
          <li key={item.id}>{renderLink(item, { onClick: closeMenu })}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
