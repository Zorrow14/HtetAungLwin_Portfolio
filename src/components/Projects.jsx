import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "CineSearch",
      description: "Real-time movie search application built with React 19, integrating OMDb API. Features dynamic search, debouncing, and Framer Motion animations.",
      tech: ["React", "Vite", "Tailwind", "OMDb API"],
      link: "https://movie-search-engine-ruddy.vercel.app/"
    },
    {
      title: "EcoQuest Website",
      description: "Sustainability-focused web platform admin dashboard with comprehensive user management and an automated moderation log.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      link: "https://github.com/lw112k/EcoQuest"
    },
    {
      title: "Expense Management System",
      description: "Functional CLI application designed for tracking personal finances with an object-oriented architecture and JSON persistence.",
      tech: ["Python", "JSON", "Datetime API"],
      link: "https://github.com/Zorrow14/Expense_Management_System_PY"
    },
    {
      title: "Education Management System",
      description: "Collaborative academic platform Student Portal module, implementing secure user authentication and dynamic grade-viewing.",
      tech: ["Python"],
      link: "https://github.com/lw112k/Education-Management-System-PY"
    }
  ];

  return (
    <section id="projects" className="projects-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">03.</span> Featured Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <a key={idx} href={project.link} target="_blank" rel="noreferrer" className={`project-card glass-panel neon-hover animate-on-scroll reveal-scale delay-${(idx % 2) + 1}`}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
