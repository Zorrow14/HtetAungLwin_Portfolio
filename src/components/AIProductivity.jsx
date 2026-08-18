import React from 'react';
import './AIProductivity.css';

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="ai-tool-inline-icon" aria-hidden="true">
    <path d="M12 2.25a4.35 4.35 0 0 1 4.16 3.05a4.36 4.36 0 0 1 3.31 6.7a4.36 4.36 0 0 1-3.15 6.82a4.36 4.36 0 0 1-7.28 1.73a4.36 4.36 0 0 1-4.15-7.14a4.36 4.36 0 0 1 2.86-7.05A4.36 4.36 0 0 1 12 2.25Zm0 2.05a2.3 2.3 0 0 0-2.22 1.72l-.16.65l-.67.05a2.31 2.31 0 0 0-1.52 3.86l.45.5l-.3.6a2.31 2.31 0 0 0 2.2 3.31l.65-.04l.3.58a2.31 2.31 0 0 0 4.08-.1l.29-.65l.7.02a2.31 2.31 0 0 0 1.81-3.78l-.45-.52l.33-.6a2.31 2.31 0 0 0-1.88-3.4l-.67-.04l-.17-.64A2.3 2.3 0 0 0 12 4.3Z" />
    <path d="M8.35 9.4L12 7.3l3.65 2.1v4.2L12 15.7l-3.65-2.1V9.4Zm1.65 1v2.25l2 1.15l2-1.15V10.4l-2-1.15l-2 1.15Z" />
  </svg>
);

const GroqIcon = () => (
  <svg viewBox="0 0 24 24" className="ai-tool-inline-icon" aria-hidden="true">
    <path d="M12 2.5a9.5 9.5 0 1 0 8.94 12.7h-2.45A7.25 7.25 0 1 1 16.9 6.5l-2.55 2.55H22V1.4l-2.52 2.52A9.45 9.45 0 0 0 12 2.5Z" />
    <path d="M12 8.2a3.8 3.8 0 1 0 3.8 3.8h-2.2A1.6 1.6 0 1 1 12 10.4V8.2Z" />
  </svg>
);

const AgentIcon = () => (
  <svg viewBox="0 0 24 24" className="ai-tool-inline-icon" aria-hidden="true">
    <path d="M12 2a2 2 0 0 1 2 2v1.2h2.2A3.8 3.8 0 0 1 20 9v5.4a3.8 3.8 0 0 1-3.8 3.8H7.8A3.8 3.8 0 0 1 4 14.4V9a3.8 3.8 0 0 1 3.8-3.8H10V4a2 2 0 0 1 2-2Zm-4.2 5.3A1.7 1.7 0 0 0 6.1 9v5.4a1.7 1.7 0 0 0 1.7 1.7h8.4a1.7 1.7 0 0 0 1.7-1.7V9a1.7 1.7 0 0 0-1.7-1.7H7.8Z" />
    <path d="M9 12.2a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4Zm6 0a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4Zm-4.8 2.1h3.6a1 1 0 0 0 0-2h-3.6a1 1 0 0 0 0 2Z" />
  </svg>
);

const aiTools = [
  {
    name: 'ChatGPT',
    customIcon: <ChatGPTIcon />,
  },
  {
    name: 'GitHub Copilot',
    logo: 'https://cdn.simpleicons.org/githubcopilot/F0B429',
  },
  {
    name: 'Cursor AI',
    logo: 'https://cdn.simpleicons.org/cursor/F0B429',
  },
  {
    name: 'Claude',
    logo: 'https://cdn.simpleicons.org/anthropic/F5D890',
  },
  {
    name: 'Gemini',
    logo: 'https://cdn.simpleicons.org/googlegemini/F5D890',
  },
  {
    name: 'Groq',
    customIcon: <GroqIcon />,
  },
  {
    name: 'AI Agents',
    customIcon: <AgentIcon />,
  },
  {
    name: 'Prompt Engineering',
    fallback: '⌘',
  },
  {
    name: 'AI-Assisted Coding',
    fallback: '</>',
  },
];

const AIProductivity = () => {
  return (
    <section
      id="ai-productivity"
      className="ai-productivity-section animate-on-scroll reveal-up"
    >
      <h2 className="section-title">
        <span className="gradient-text">03.</span> AI & Productivity
      </h2>

      <p className="ai-productivity-intro">
        I use AI tools to support coding, debugging, refactoring, documentation,
        UI/UX exploration, and faster development workflows. My part-time prompt
        engineering experience helps me create clearer prompts, structure better
        AI outputs, and validate generated solutions before implementation.
      </p>

      <div className="ai-tools-list">
        {aiTools.map((tool, index) => (
          <div
            key={tool.name}
            className="ai-tool-row glass-panel animate-on-scroll reveal-up"
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <div className="ai-tool-icon-wrap">
              {tool.logo && (
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="ai-tool-logo"
                  loading="lazy"
                />
              )}

              {tool.customIcon && (
                <span className="ai-tool-custom-icon">
                  {tool.customIcon}
                </span>
              )}

              {tool.fallback && (
                <span className="ai-tool-fallback">{tool.fallback}</span>
              )}
            </div>

            <div className="ai-tool-content">
              <span className="ai-tool-index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{tool.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIProductivity;