import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'TimeSlot API',
    tag: 'Backend / API Project',
    details: [
      {
        label: 'Problem',
        text: 'Naive booking systems check "is this slot free?" then insert — a gap where two requests racing at the same instant can both succeed and double-book the same resource.',
      },
      {
        label: 'Built',
        text: 'A FastAPI + PostgreSQL booking API with JWT auth that closes the race two ways: a service-layer overlap check for clean rejections, plus a PostgreSQL EXCLUDE constraint that guarantees no two confirmed bookings can ever overlap, even under concurrent writes.',
      },
      {
        label: 'My Role',
        text: 'Designed the booking data model, wrote the exclusion-constraint migration, built the automated concurrency test proving the race is closed, and set up CI.',
      },
      {
        label: 'Impact',
        text: 'Demonstrates backend fundamentals beyond CRUD — database-level correctness guarantees, race-condition testing, and a production-style API with interactive docs.',
      },
    ],
    tech: ['FastAPI', 'PostgreSQL', 'JWT', 'Alembic'],
    link: 'https://timeslot-api.onrender.com/docs',
  },
  {
    title: 'CareerSync AI',
    tag: 'AI Hackathon Project',
    details: [
      {
        label: 'Problem',
        text: 'Students and fresh graduates struggle to see clearly how their skills match real job requirements, or what concrete steps close the gap.',
      },
      {
        label: 'Built',
        text: 'A three-sided AI-powered Career OS — candidate, employer, and university portals — with explainable job-match scoring, skill-gap detection, AI-generated roadmaps, and mock interviews, built for the Talentbank Tech Hackathon 2026.',
      },
      {
        label: 'My Role',
        text: 'Built the React frontend, the simulated AI-response layer, and the full role-based portal architecture solo, under a hackathon deadline.',
      },
      {
        label: 'Impact',
        text: 'Shows product thinking under time pressure, multi-persona UX design, and the ability to ship a demo-ready full experience alone.',
      },
    ],
    tech: ['React', 'Vite', 'AI/UX Design'],
    link: 'https://careersync-ai-careeros.vercel.app/',
  },
  {
    title: 'MOCOF Chatbot',
    tag: 'Client / Freelance Project',
    details: [
      {
        label: 'Problem',
        text: 'A furniture and interior design business needed an always-on assistant that could answer product questions and quote custom cabinetry prices — without ever misquoting a customer.',
      },
      {
        label: 'Built',
        text: 'A production, Vercel-hosted chatbot ("Moco") that assembles a curated knowledge-based system prompt, calls the Gemini API for responses, computes cabinetry price estimates in code, and verifies every price the model outputs against real business data before it reaches a customer.',
      },
      {
        label: 'My Role',
        text: 'Built the serverless backend, the knowledge-routing system, the price-hallucination guardrail, and the CI pipeline end-to-end for a real paying client.',
      },
      {
        label: 'Impact',
        text: 'Real production client work — shows I can ship a reliable, tested AI product with safety guardrails, not just a demo.',
      },
    ],
    tech: ['Node.js', 'Vercel Functions', 'Gemini API', 'CI/CD'],
    link: 'https://mocof-chatbot.vercel.app',
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
    title: 'Sprout',
    tag: 'Personal Product / PWA',
    details: [
      {
        label: 'Problem',
        text: 'Streak-based habit trackers punish a single missed day with a hard reset, which discourages people from returning after a slip instead of helping them recover.',
      },
      {
        label: 'Built',
        text: 'A local-first, installable habit-tracking PWA where habits are plants that softly wilt instead of resetting, plus a dedicated "Craving SOS" tool with a breathing pacer and trigger logging for quit-habits.',
      },
      {
        label: 'My Role',
        text: 'Designed and built the full app solo — the data model, on-device IndexedDB persistence, PWA install flow, and the SOS/insights features.',
      },
      {
        label: 'Impact',
        text: 'Shows independent product design: spotting a real UX flaw in an existing app category and building a more compassionate alternative.',
      },
    ],
    tech: ['React', 'Vite', 'IndexedDB', 'PWA'],
    link: 'https://github.com/Zorrow14/Sprout',
  },
  {
    title: 'DevPilot',
    tag: 'Ongoing — Full Stack Platform',
    ongoing: true,
    details: [
      {
        label: 'Problem',
        text: 'Students and junior developers track their learning across scattered tutorials, roadmaps, and side projects, with no single system to show real progress.',
      },
      {
        label: 'Building',
        text: 'A full-stack SaaS-style platform — skill tracker, project planner, AI-generated learning roadmaps, and an internship-readiness score — using Next.js, Express.js, PostgreSQL, Prisma, and Firebase Authentication.',
      },
      {
        label: 'My Role',
        text: 'Architecting and building the full stack solo, including the Firebase/PostgreSQL auth bridge and the admin monitoring dashboard.',
      },
      {
        label: 'Status',
        text: 'Currently in active development — included here to show how Htet plans and builds a multi-service SaaS architecture end-to-end, not just finished demos.',
      },
    ],
    tech: ['Next.js', 'Express.js', 'PostgreSQL', 'Prisma'],
    link: 'https://github.com/Zorrow14/DevPilot',
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

const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const toggleProject = (idx) => {
    setActiveIdx((current) => (current === idx ? null : idx));
  };

  return (
    <section id="projects" className="projects-section animate-on-scroll reveal-up">
      <h2 className="section-title">
        <span className="gradient-text">04.</span> Featured Projects
      </h2>

      <p className="projects-intro">
        A selection of academic, personal, and team projects showing Htet’s practical
        experience in frontend development, backend-connected systems, APIs, databases,
        and full-stack problem solving. Click a project for the full case study.
      </p>

      <div className="projects-list">
        {projectData.map((project, idx) => {
          const isOpen = activeIdx === idx;

          return (
            <div key={idx} className="project-item animate-on-scroll reveal-up delay-1">
              <button
                type="button"
                onClick={() => toggleProject(idx)}
                aria-expanded={isOpen}
                className={`project-row glass-panel ${isOpen ? 'project-row--open' : ''}`}
              >
                <span className="project-index">0{idx + 1}</span>

                <div className="project-row__main">
                  <h3>{project.title}</h3>
                  <span className="project-tag">{project.tag}</span>
                </div>

                <div className="project-row__meta">
                  <span className={`project-status ${project.ongoing ? 'project-status--ongoing' : ''}`}>
                    {project.ongoing ? 'In Progress' : 'Completed'}
                  </span>

                  <svg
                    className="project-row__chevron"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              <div className={`project-panel-wrap ${isOpen ? 'is-open' : ''}`}>
                <div className="project-panel-inner">
                  <div className="project-panel">
                    <div className="datapad-tech">
                      {project.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-card__grid">
                      {project.details.map((item, bIdx) => (
                        <div key={bIdx} className="project-card__detail">
                          <span className="detail-label">{item.label}</span>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-panel__cta"
                    >
                      Visit Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
