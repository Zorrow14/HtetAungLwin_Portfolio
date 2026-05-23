import React, { useState } from 'react';
import './ProjectDemo.css';

const ProjectDemo = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const demos = [
    {
      title: "CineSearch",
      label: "Live Movie Search Engine",
      websiteUrl: "https://movie-search-engine-ruddy.vercel.app/",
      youtubeId: null,
      description: "Live embedded walkthrough: Test out the real-time search and debouncing instantly.",
      tech: ["React 19", "OMDb API", "Framer Motion"],
      actionLink: "https://movie-search-engine-ruddy.vercel.app/",
      actionText: "LAUNCH LIVE SITE ↗"
    },
    {
      title: "AuraGains",
      label: "Social Fitness Platform",
      youtubeId: "", 
      websiteUrl: null,
      description: "Preview the strict MVVM architecture and native Android hardware integrations.",
      tech: ["Flutter", "Supabase", "Dart"],
      actionLink: "YOUR_GOOGLE_DRIVE_APK_LINK_HERE", // <-- PUT YOUR GOOGLE DRIVE LINK HERE
      actionText: "DOWNLOAD APK ↓"
    },
    {
      title: "EcoQuest",
      label: "Admin Dashboard",
      youtubeId: "iwlCetZ5YNQ",
      websiteUrl: null,
      description: "Dashboard overview, user management flow, and the automated moderation log.",
      tech: ["PHP", "MySQL", "JavaScript"],
      actionLink: "https://github.com/lw112k/EcoQuest",
      actionText: "VIEW SOURCE ↗"
    },
    {
      title: "Expense Manager",
      label: "CLI Application",
      youtubeId: "",
      websiteUrl: null,
      description: "CLI walkthrough: adding, categorising, and exporting transactions with JSON persistence.",
      tech: ["Python", "JSON"],
      actionLink: "https://github.com/Zorrow14/Expense_Management_System_PY",
      actionText: "VIEW SOURCE ↗"
    },
    {
      title: "EduManage",
      label: "Student Portal",
      youtubeId: "",
      websiteUrl: null,
      description: "Auth flow, grade viewing, and the collaborative academic dashboard in action.",
      tech: ["Python"],
      actionLink: "https://github.com/lw112k/Education-Management-System-PY",
      actionText: "VIEW SOURCE ↗"
    }
  ];

  const handleTabChange = (idx) => {
    if (idx === activeIdx) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setIsFading(false);
    }, 300);
  };

  const current = demos[activeIdx];

  return (
    <section id="demos" className="demo-section animate-on-scroll reveal-up">
      <div className="demo-header-title">
        <h2 className="section-title">
          <span className="gradient-text">04.</span> System Demos
        </h2>
        <p className="demo-subtitle">Initialize simulation: Interactive previews & live walkthroughs.</p>
      </div>

      <div className="demo-command-deck">
        
        {/* Left Side: Futuristic Selector Panel */}
        <div className="demo-selector">
          {demos.map((d, idx) => (
            <button
              key={idx}
              className={`demo-node ${activeIdx === idx ? 'active' : ''}`}
              onClick={() => handleTabChange(idx)}
            >
              <div className="node-glow"></div>
              <span className="node-index">SYS_0{idx + 1}</span>
              <span className="node-title">{d.title}</span>
            </button>
          ))}
        </div>

        {/* Right Side: Holographic Viewer Screen */}
        <div className="demo-viewer glass-panel">
          
          <div className="bracket top-left"></div>
          <div className="bracket top-right"></div>
          <div className="bracket bottom-left"></div>
          <div className="bracket bottom-right"></div>

          <div className={`viewer-content ${isFading ? 'fade-out' : 'fade-in'}`}>
            
            <div className="player-container">
              <div className="scan-grid"></div>

              {current.websiteUrl ? (
                <iframe
                  key={current.websiteUrl}
                  src={current.websiteUrl}
                  title={current.title}
                  className="media-frame"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              ) : current.youtubeId ? (
                <iframe
                  key={current.youtubeId}
                  src={`https://www.youtube.com/embed/${current.youtubeId}?rel=0&modestbranding=1&autoplay=1&mute=1`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="media-frame"
                />
              ) : (
                <div className="media-placeholder">
                  <div className="placeholder-ring"></div>
                  <span>AWAITING SIGNAL...</span>
                </div>
              )}
            </div>

            {/* HUD Info Panel */}
            <div className="hud-info">
              <div className="hud-header">
                <span className="hud-label">{current.label}</span>
                <h3 className="hud-title">{current.title}</h3>
              </div>
              <p className="hud-description">{current.description}</p>
              
              <div className="hud-tech">
                {current.tech.map((t, i) => (
                  <span key={i} className="hud-tech-pill">{t}</span>
                ))}
              </div>

              {/* NEW: Action Button Array */}
              {current.actionLink && (
                <div className="hud-action-wrapper">
                  <a 
                    href={current.actionLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hud-action-btn"
                  >
                    <span className="btn-scanline"></span>
                    {current.actionText}
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDemo;