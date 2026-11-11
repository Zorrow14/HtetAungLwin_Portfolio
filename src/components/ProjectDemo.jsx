import React, { useState } from 'react';
import './ProjectDemo.css';

const ProjectDemo = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const demos = [
    {
      title: "CareerSync AI",
      label: "Top 80 · Talentbank Tech Hackathon 2026",
      websiteUrl: "https://careersync-ai-careeros.vercel.app/",
      youtubeId: null,
      description: "Live embedded walkthrough: explore the Candidate, Employer and University portals — explainable job-match scoring, skill-gap detection, AI roadmaps and mock interviews.",
      tech: ["React", "Vite", "Tailwind CSS"],
      actionLink: "https://careersync-ai-careeros.vercel.app/",
      actionText: "LAUNCH LIVE SITE ↗︎"
    },
    {
      title: "MOCOF AI Sales Chatbot",
      label: "Internship · Production AI Assistant",
      websiteUrl: null,
      youtubeId: null,
      description: "Gemini-powered sales assistant with live surround-cabinetry quoting, a pricing guardrail on every RM amount, Stripe Checkout deposits and a human-confirmed staff invoice tool.",
      tech: ["Node.js", "Gemini API", "Stripe"],
      actionLink: "https://github.com/Zorrow14/mocof-chatbot",
      actionText: "VIEW SOURCE ↗︎"
    },
    {
      title: "Jarvis",
      label: "Local-First Voice AI Assistant",
      websiteUrl: null,
      youtubeId: null,
      description: "Agentic assistant with a custom tool-calling loop, wake-word activation, on-device STT/TTS and RAG memory over Chroma, packaged as a Tauri desktop app.",
      tech: ["Python", "FastAPI", "Chroma", "Tauri"],
      actionLink: "https://github.com/Zorrow14/personal-assistant",
      actionText: "VIEW SOURCE ↗︎"
    },
    {
      title: "Amber",
      label: "Myanmar Development Simulation",
      websiteUrl: null,
      youtubeId: null,
      description: "World Bank data pipeline, synthetic-control counterfactual and a calibrated system-dynamics model with live policy levers, served to a bilingual React + TypeScript app.",
      tech: ["Python", "FastAPI", "React", "SciPy"],
      actionLink: "https://github.com/Zorrow14/project-amber",
      actionText: "VIEW SOURCE ↗︎"
    },
    {
      title: "EcoQuest",
      label: "Admin Dashboard",
      youtubeId: "iwlCetZ5YNQ",
      websiteUrl: null,
      description: "Dashboard overview, user management flow, and the automated moderation log.",
      tech: ["PHP", "MySQL", "JavaScript"],
      actionLink: "https://github.com/lw112k/EcoQuest",
      actionText: "VIEW SOURCE ↗︎"
    },
    {
      title: "AuraGains",
      label: "Social Fitness Platform",
      youtubeId: "",
      websiteUrl: null,
      description: "Native Android social fitness app built in a student team with strict MVVM on Flutter and Supabase.",
      tech: ["Flutter", "Supabase", "Dart"],
      actionLink: "https://drive.google.com/file/d/1E50Fhlve2BRHRDJg31YR2uwuzjz6tqAp/view?usp=drive_link",
      actionText: "DOWNLOAD APK ↓︎"
    },
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
          <span className="gradient-text">05.</span> System Demos
        </h2>
        <p className="demo-subtitle">Interactive previews and live walkthroughs of select projects.</p>
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
              <span className="node-index">0{idx + 1}</span>
              <span className="node-title">
                {d.title}
                {d.ongoing && <span className="node-ongoing-badge">WIP</span>}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Viewer Panel */}
        <div className="demo-viewer glass-panel">

          <div className={`viewer-content ${isFading ? 'fade-out' : 'fade-in'}`}>

            <div className="player-container">
              {current.websiteUrl && (
                <div className="browser-chrome">
                  <span className="browser-chrome__dot browser-chrome__dot--red"></span>
                  <span className="browser-chrome__dot browser-chrome__dot--yellow"></span>
                  <span className="browser-chrome__dot browser-chrome__dot--green"></span>
                  <span className="browser-chrome__url">{new URL(current.websiteUrl).hostname}</span>
                </div>
              )}

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
                  <span>Preview coming soon — see source instead</span>
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
