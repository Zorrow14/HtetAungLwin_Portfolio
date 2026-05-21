import React, { useState } from 'react';
import './ProjectDemo.css';

const ProjectDemo = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const demos = [
    {
      title: "CineSearch",
      label: "Movie Search App",
      youtubeId: "-owbUuBEPLo",
      description: "Live walkthrough: real-time search, debounce in action, and Framer Motion transitions.",
      tech: ["React 19", "OMDb API", "Framer Motion"],
    },
    {
      title: "EcoQuest",
      label: "Admin Dashboard",
      youtubeId: "iwlCetZ5YNQ",
      description: "Dashboard overview, user management flow, and the automated moderation log.",
      tech: ["PHP", "MySQL", "JavaScript"],
    },
    {
      title: "Expense Manager",
      label: "CLI Application",
      youtubeId: "",
      description: "CLI walkthrough: adding, categorising, and exporting transactions with JSON persistence.",
      tech: ["Python", "JSON"],
    },
    {
      title: "EduManage",
      label: "Student Portal",
      youtubeId: "",
      description: "Auth flow, grade viewing, and the collaborative academic dashboard in action.",
      tech: ["Python"],
    },
  ];

  const current = demos[activeIdx];

  return (
    <section id="demos" className="demo-section animate-on-scroll reveal-up">
      <h2 className="section-title">
        <span className="gradient-text">04.</span> Project Demos
      </h2>
      <p className="demo-subtitle">Watch each project come alive — real interactions, real data.</p>

      {/* ── Tab bar ── */}
      <div className="demo-tabs" role="tablist">
        {demos.map((d, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={activeIdx === idx}
            className={`demo-tab${activeIdx === idx ? ' active' : ''}`}
            onClick={() => setActiveIdx(idx)}
          >
            <span className="tab-number">0{idx + 1}</span>
            <span className="tab-title">{d.title}</span>
          </button>
        ))}
      </div>

      {/* ── Player card ── */}
      <div className="demo-player-wrap">
      <div className="demo-player glass-panel neon-hover">
        {/* Scan-line overlay */}
        <div className="scan-lines" aria-hidden="true" />

        {/* Corner brackets */}
        <span className="corner tl" aria-hidden="true" />
        <span className="corner tr" aria-hidden="true" />
        <span className="corner bl" aria-hidden="true" />
        <span className="corner br" aria-hidden="true" />

        {/* Video */}
        <div className="demo-video-wrap">
          {current.youtubeId ? (
            <iframe
              key={current.youtubeId}
              src={`https://www.youtube.com/embed/${current.youtubeId}?rel=0&modestbranding=1`}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="demo-video"
              style={{ border: 'none' }}
            />
          ) : (
            <div className="demo-placeholder">
              <span className="placeholder-icon">⏳</span>
              <p>Demo coming soon</p>
            </div>
          )}
        </div>

        {/* Info panel */}
        <div className="demo-info">
          <div className="demo-header">
            <div>
              <span className="demo-label">{current.label}</span>
              <h3 className="demo-title">{current.title}</h3>
            </div>
          </div>
          <p className="demo-description">{current.description}</p>
          <div className="demo-tech">
            {current.tech.map((t, i) => (
              <span key={i} className="tech-item">{t}</span>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProjectDemo;
