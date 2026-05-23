import React, { useState, useEffect } from 'react';
import './BootScreen.css';

const BOOT_LINES = [
  { text: "INITIALISING HAL.PORTFOLIO v2.0.0 ......", delay: 500 },
  { text: "LOADING: skills_matrix.json ............. OK", delay: 900,  dim: true },
  { text: "LOADING: projects_showcase.json ......... OK", delay: 1200, dim: true },
  { text: "LOADING: star_background.glsl ........... OK", delay: 1480, dim: true },
  { text: "MOUNTING: React components .............. OK", delay: 1720, dim: true },
  { text: "STATUS: Available for opportunities ..... ✓", delay: 2050 },
  { text: "RENDERING PORTFOLIO ..................... ✓", delay: 2400 },
];

function BootScreen({ onDone }) {
  const [progress, setProgress]       = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [glitch, setGlitch]           = useState(false);
  const [done, setDone]               = useState(false);

  useEffect(() => {
    // random glitch flashes on the logo
    const glitchLoop = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 1800);

    const timers = [];
    BOOT_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
      }, line.delay));
    });

    timers.push(setTimeout(() => {
      clearInterval(glitchLoop);
      setDone(true);
      setTimeout(onDone, 900);
    }, 2800));

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(glitchLoop);
    };
  }, [onDone]);

  const skip = () => { setDone(true); setTimeout(onDone, 400); };

  return (
    <div className={`boot-screen${done ? ' boot-done' : ''}`}>

      {/* Animated grid background */}
      <div className="boot-grid" />

      {/* Corner decorations */}
      <div className="boot-corner boot-corner-tl" />
      <div className="boot-corner boot-corner-tr" />
      <div className="boot-corner boot-corner-bl" />
      <div className="boot-corner boot-corner-br" />

      {/* Pulsing ring behind logo */}
      <div className="boot-ring" />

      {/* Logo */}
      <div className={`boot-logo${glitch ? ' boot-logo-glitch' : ''}`}>
        <span className="boot-logo-bracket">&lt;</span>
        <span className="boot-logo-text">HAL</span>
        <span className="boot-logo-bracket">/&gt;</span>
      </div>

      <div className="boot-subtitle">PORTFOLIO SYSTEM INITIALISATION</div>

      {/* Boot lines */}
      <div className="boot-lines">
        {BOOT_LINES.map((line, i) => (
          <div
            key={i}
            className={`boot-line${line.dim ? ' boot-line-dim' : ''}${visibleLines.includes(i) ? ' boot-line-visible' : ''}`}
          >
            <span className="boot-prompt">&gt;&nbsp;</span>
            {line.text}
            {visibleLines[visibleLines.length - 1] === i && !done && (
              <span className="boot-cursor" />
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="boot-bar-wrap">
        <div className="boot-bar">
          <div className="boot-bar-fill" style={{ width: progress + '%' }} />
          <div className="boot-bar-glow" style={{ left: progress + '%' }} />
        </div>
        <div className="boot-bar-footer">
          <span className="boot-bar-label">BOOT SEQUENCE</span>
          <span className="boot-bar-pct">{progress}%</span>
        </div>
      </div>

      <button className="boot-skip" onClick={skip}>SKIP →</button>
    </div>
  );
}

export default BootScreen;