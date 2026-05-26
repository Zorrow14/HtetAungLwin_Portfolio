import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'CineSearch',
      tag: 'Featured Frontend Project',
      details: [
        {
          label: 'Problem',
          text: 'Users need a fast and simple way to search movies without slow page reloads or cluttered browsing.',
        },
        {
          label: 'Built',
          text: 'A real-time movie search application using React, Vite, and the OMDb API with debounced search and clean result rendering.',
        },
        {
          label: 'My Role',
          text: 'Handled the frontend logic, API integration, responsive UI layout, and smooth interaction flow.',
        },
        {
          label: 'Impact',
          text: 'Shows my ability to build polished React interfaces, work with external APIs, and create user-friendly search experiences.',
        },
      ],
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'OMDb API'],
      link: 'https://movie-search-engine-ruddy.vercel.app/',
    },
    {
      title: 'AuraGains',
      tag: 'Full Stack Team Project',
      details: [
        {
          label: 'Problem',
          text: 'Many beginners experience gym anxiety and need a supportive fitness platform that combines workouts, social motivation, and expert guidance.',
        },
        {
          label: 'Built',
          text: 'A native Android social fitness platform with workout builders, rich media posts, privacy logic, challenges, and expert verification.',
        },
        {
          label: 'My Role',
          text: 'Worked within a Flutter and Supabase architecture, contributing to application logic, data flow, and feature implementation using MVVM principles.',
        },
        {
          label: 'Impact',
          text: 'Demonstrates teamwork, full-stack thinking, mobile development exposure, and real-world app architecture experience.',
        },
      ],
      tech: ['Flutter', 'Supabase', 'Dart', 'Provider'],
      link: 'https://github.com/lw112k/AuraGains',
    },
    {
      title: 'EcoQuest Website',
      tag: 'Admin Dashboard Project',
      details: [
        {
          label: 'Problem',
          text: 'Community platforms need proper administration tools to manage users, content, and moderation actions clearly.',
        },
        {
          label: 'Built',
          text: 'Administrative infrastructure for a sustainability-focused web platform, including dashboard features and user management.',
        },
        {
          label: 'My Role',
          text: 'Built admin-facing features, moderation logging, and database-connected management workflows.',
        },
        {
          label: 'Impact',
          text: 'Highlights my ability to work with backend-connected web systems, CRUD logic, and practical admin functionality.',
        },
      ],
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      link: 'https://github.com/lw112k/EcoQuest',
    },
    {
      title: 'Expense Management System',
      tag: 'Python CLI Project',
      details: [
        {
          label: 'Problem',
          text: 'Personal spending can become difficult to track without a simple way to categorize expenses and review historical records.',
        },
        {
          label: 'Built',
          text: 'A Python command-line application for expense tracking, categorization, reporting, and persistent JSON-based storage.',
        },
        {
          label: 'My Role',
          text: 'Designed the object-oriented structure, handled data persistence, and implemented core finance-tracking logic.',
        },
        {
          label: 'Impact',
          text: 'Shows strong programming fundamentals, structured thinking, and practical use of Python for real problem solving.',
        },
      ],
      tech: ['Python', 'JSON', 'Datetime API'],
      link: 'https://github.com/Zorrow14/Expense_Management_System_PY',
    },
    {
      title: 'Education Management System',
      tag: 'Academic System Project',
      details: [
        {
          label: 'Problem',
          text: 'Academic platforms require secure student access, course enrolment, and organized grade viewing.',
        },
        {
          label: 'Built',
          text: 'Contributed to an education management system by developing the Student Portal module.',
        },
        {
          label: 'My Role',
          text: 'Implemented authentication, course enrolment logic, grade viewing, and file-based data integration.',
        },
        {
          label: 'Impact',
          text: 'Demonstrates ability to build structured application modules and collaborate on multi-feature academic systems.',
        },
      ],
      tech: ['Python'],
      link: 'https://github.com/lw112k/Education-Management-System-PY',
    },
  ];

  return (
    <section id="projects" className="projects-section animate-on-scroll reveal-up">
      <h2 className="section-title">
        <span className="gradient-text">04.</span> Featured Projects
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
            className={`project-datapad glass-panel animate-on-scroll ${
              idx % 2 === 0 ? 'reveal-left' : 'reveal-right'
            } delay-1`}
          >
            <div className="scan-effect"></div>

            <div className="datapad-header">
              <span className="project-index">0{idx + 1}</span>
              <span className="project-tag">{project.tag}</span>

              <h3>{project.title}</h3>

              <div className="datapad-tech">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="datapad-body">
              <ul className="datapad-bullets">
                {project.details.map((item, bIdx) => (
                  <li key={bIdx}>
                    <strong>{item.label}:</strong> {item.text}
                  </li>
                ))}
              </ul>

              <div className="datapad-status">
                <span className="status-dot"></span>
                <span>PROJECT READY</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;