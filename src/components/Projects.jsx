import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'CineSearch',
      tag: 'Featured Frontend Project',
      problem: 'Users need a fast and simple way to search movies without slow page reloads or cluttered browsing.',
      built: 'Built a real-time movie search application using React, Vite, and the OMDb API with debounced search and clean result rendering.',
      contribution: 'Handled the frontend logic, API integration, responsive UI layout, and smooth interaction flow.',
      impact: 'Shows my ability to build polished React interfaces, work with external APIs, and create user-friendly search experiences.',
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'OMDb API'],
      link: 'https://movie-search-engine-ruddy.vercel.app/',
    },
    {
      title: 'AuraGains',
      tag: 'Full Stack Team Project',
      problem: 'Many beginners experience gym anxiety and need a supportive fitness platform that combines workouts, social motivation, and expert guidance.',
      built: 'Collaborated on a native Android social fitness platform with workout builders, rich media posts, privacy logic, challenges, and expert verification.',
      contribution: 'Worked within a Flutter and Supabase architecture, contributed to application logic, data flow, and feature implementation using MVVM principles.',
      impact: 'Demonstrates teamwork, full-stack thinking, mobile development exposure, and experience with real-world app architecture.',
      tech: ['Flutter', 'Supabase', 'Dart', 'Provider'],
      link: 'https://github.com/lw112k/AuraGains',
    },
    {
      title: 'EcoQuest Website',
      tag: 'Responsive Web Design Group Project',
      problem: 'Community-based platforms need proper administration tools to manage users, content, and moderation actions clearly.',
      built: 'Developed administrative infrastructure for a sustainability-focused web platform, including dashboard features and user management.',
      contribution: 'Built admin-facing features, moderation logging, and database-connected management workflows.',
      impact: 'Highlights my ability to work with backend-connected web systems, CRUD logic, and practical admin functionality.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      link: 'https://github.com/lw112k/EcoQuest',
    },
    {
      title: 'Expense Management System',
      tag: 'Python CLI Project',
      problem: 'Personal spending can become difficult to track without a simple way to categorize expenses and review historical records.',
      built: 'Created a Python command-line application for expense tracking, categorization, reporting, and persistent JSON-based storage.',
      contribution: 'Designed the object-oriented structure, handled data persistence, and implemented core finance-tracking logic.',
      impact: 'Shows strong programming fundamentals, structured thinking, and practical use of Python for real problem solving.',
      tech: ['Python', 'JSON', 'Datetime API'],
      link: 'https://github.com/Zorrow14/Expense_Management_System_PY',
    },
    {
      title: 'Education Management System',
      tag: 'Academic System Project',
      problem: 'Academic platforms require secure student access, course enrolment, and organized grade viewing.',
      built: 'Contributed to an education management system by developing the Student Portal module.',
      contribution: 'Implemented authentication, course enrolment logic, grade viewing, and file-based data integration.',
      impact: 'Demonstrates ability to build structured application modules and collaborate on multi-feature academic systems.',
      tech: ['Python'],
      link: 'https://github.com/lw112k/Education-Management-System-PY',
    },
  ];

  return (
    <section id="projects" className="projects-section animate-on-scroll reveal-up">
      <h2 className="section-title">
        <span className="gradient-text">03.</span> Featured Projects
      </h2>

      <p className="projects-intro">
        A selection of academic, personal, and team projects showing Htet’s practical
        experience in frontend development, backend-connected systems, APIs, databases,
        and full-stack problem solving.
      </p>

      <div className="projects-showcase">
        {projectData.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`project-case-card glass-panel animate-on-scroll ${
              idx % 2 === 0 ? 'reveal-left' : 'reveal-right'
            } delay-1`}
          >
            <div className="project-case-header">
              <div>
                <span className="project-index">0{idx + 1}</span>
                <span className="project-tag">{project.tag}</span>
              </div>

              <h3>{project.title}</h3>
            </div>

            <div className="project-case-grid">
              <div className="project-case-block">
                <span>Problem</span>
                <p>{project.problem}</p>
              </div>

              <div className="project-case-block">
                <span>What I Built</span>
                <p>{project.built}</p>
              </div>

              <div className="project-case-block">
                <span>My Contribution</span>
                <p>{project.contribution}</p>
              </div>

              <div className="project-case-block">
                <span>Why It Matters</span>
                <p>{project.impact}</p>
              </div>
            </div>

            <div className="project-case-footer">
              <div className="datapad-tech">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-pill">{tech}</span>
                ))}
              </div>

              <span className="project-view-link">View Project →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;