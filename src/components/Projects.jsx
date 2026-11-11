import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'MOCOF AI Sales Chatbot',
    tag: 'Internship · MOCOF Sdn Bhd',
    details: [
      {
        label: 'Problem',
        text: 'A Malaysian furniture company needed an always-on sales assistant that could answer product questions, shortlist products, and quote custom surround-cabinetry from a customer’s wall measurements — without ever misquoting a price.',
      },
      {
        label: 'Built',
        text: 'A deployed AI sales assistant on Node.js and the Gemini API with a pricing guardrail that checks every RM amount in a model reply against the price list and server-side calculations, falling back to a human handoff instead of sending an unverified quote. Integrated Stripe Checkout deposits (server-derived amounts, verified webhooks, Google Sheets logging) and a passcode-protected staff invoice tool where the model proposes and a human confirms, plus consistency tests and CI.',
      },
      {
        label: 'Impact',
        text: 'Real production client work carrying payments and business data — an AI product built with guardrails and tests instead of blind trust in the model.',
      },
    ],
    tech: ['Node.js', 'Gemini API', 'Stripe', 'Vercel'],
    link: 'https://github.com/Zorrow14/mocof-chatbot',
  },
  {
    title: 'CareerSync AI',
    tag: 'Top 80 · Talentbank Tech Hackathon 2026',
    details: [
      {
        label: 'Problem',
        text: 'Students and fresh graduates struggle to see how their skills match real job requirements, or what concrete steps close the gap.',
      },
      {
        label: 'Built',
        text: 'Led the frontend for a three-sided “Career OS” platform with Candidate, Employer and University portals delivering explainable job-match scoring, skill-gap detection, AI career roadmaps, mock interviews and cohort analytics. Designed a fully simulated AI layer with scaled mock data (60+ jobs, 22+ companies, 45+ candidates) for a zero-backend demo, with persona switching, role-based routing and a responsive light/dark UI.',
      },
      {
        label: 'Impact',
        text: 'Placed in the Top 80 at the Talentbank Tech Hackathon 2026 — product thinking under time pressure and multi-persona UX shipped as a demo-ready experience.',
      },
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    link: 'https://careersync-ai-careeros.vercel.app/',
  },
  {
    title: 'Jarvis: Local-First Voice AI Assistant',
    tag: 'Personal Project · Agentic AI',
    details: [
      {
        label: 'Problem',
        text: 'Cloud voice assistants send everything off-device and can act on your files with no checks. I wanted an assistant that runs locally, remembers its own work, and asks before doing anything with side effects.',
      },
      {
        label: 'Built',
        text: 'An agentic assistant with a custom async tool-calling loop, wake-word activation, on-device speech-to-text and text-to-speech, and RAG memory (fastembed + Chroma) over an Obsidian-vault log of its own work. The LLM, STT, TTS and vector store sit behind swappable interfaces, with a confirmation gate for side-effecting actions, sandboxed file access, a regression eval harness and latency/token metrics. Packaged as a Tauri desktop app.',
      },
      {
        label: 'Impact',
        text: 'Hands-on AI engineering beyond prompt-calling: agent loops, retrieval, safety gates and evaluation built into one working system.',
      },
    ],
    tech: ['Python', 'FastAPI', 'Gemini', 'Chroma', 'faster-whisper', 'Tauri'],
    link: 'https://github.com/Zorrow14/personal-assistant',
  },
  {
    title: 'Amber: Myanmar Development Simulation',
    tag: 'Personal Project · Data & Simulation',
    details: [
      {
        label: 'Problem',
        text: 'Debates about Myanmar’s development rarely come with a model you can actually interrogate. I wanted a tool that grounds the discussion in data and lets you pull real policy levers.',
      },
      {
        label: 'Built',
        text: 'A full-stack simulation combining a World Bank data pipeline, a synthetic-control counterfactual (with placebo and leave-one-out robustness tests) and a calibrated system-dynamics model running 200-member ensembles with live policy levers. A hash-verified data snapshot is served via FastAPI to a bilingual (English/Burmese) React 19 + TypeScript app.',
      },
      {
        label: 'Impact',
        text: '319 backend and 45 frontend tests under GitHub Actions CI — a data product built with scientific-computing rigour and engineering discipline.',
      },
    ],
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'SciPy'],
    link: 'https://github.com/Zorrow14/project-amber',
  },
  {
    title: 'Money Atlas: Personal Finance Manager',
    tag: 'Personal Project · Full Stack',
    details: [
      {
        label: 'Problem',
        text: 'Most personal finance apps either round money badly, hide where recurring charges go, or lock your data in. I wanted exact accounting with import/export I control.',
      },
      {
        label: 'Built',
        text: 'A finance tracker covering accounts, transactions, budgets, savings pots and recurring bills, with exact NUMERIC/Decimal money handling, CSV import/export and an accessible Recharts analytics dashboard. Includes a recurring-charge detector, an append-only savings ledger, Alembic migrations and Pytest/Vitest suites.',
      },
      {
        label: 'Impact',
        text: 'A typed React + FastAPI + PostgreSQL system with correctness where it matters most — money — and tests on both sides of the stack.',
      },
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy'],
    link: 'https://github.com/Zorrow14/FinanceManager',
  },
  {
    title: 'AuraGains',
    tag: 'Final Year Project · Group',
    details: [
      {
        label: 'Problem',
        text: 'Many beginners experience “gym anxiety” and need a supportive fitness platform that combines workouts, social motivation, and expert guidance.',
      },
      {
        label: 'Built',
        text: 'Collaborated in a student team on a native Android social fitness platform using strict MVVM: a workout protocol builder, a social feed with database-level privacy logic, gamified challenges and an Expert Verification portal.',
      },
      {
        label: 'Impact',
        text: 'Teamwork, mobile architecture and a real end-to-end app on Flutter and Supabase (PostgreSQL, Auth, Cloud Storage).',
      },
    ],
    tech: ['Flutter', 'Dart', 'Supabase'],
    link: 'https://github.com/lw112k/AuraGains',
  },
  {
    title: 'EcoQuest Website',
    tag: 'Web Development Project',
    details: [
      {
        label: 'Problem',
        text: 'Community platforms need proper administration tools to manage users, content, and moderation actions clearly.',
      },
      {
        label: 'Built',
        text: 'The admin core of a sustainability platform: a real-time dashboard, user management and an automated moderation log.',
      },
      {
        label: 'Impact',
        text: 'Backend-connected web systems, CRUD logic, and practical admin functionality on a classic PHP/MySQL stack.',
      },
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/lw112k/EcoQuest',
  },
  {
    title: 'Expense Management System',
    tag: 'Personal Project · CLI',
    details: [
      {
        label: 'Problem',
        text: 'A simple, dependable way to record expenses and see where money goes, without a database server or a GUI.',
      },
      {
        label: 'Built',
        text: 'An object-oriented Python CLI application for tracking expenses and generating spending reports, persisted with JSON.',
      },
      {
        label: 'Impact',
        text: 'An early project that established the OOP habits and data-persistence patterns reused in later work.',
      },
    ],
    tech: ['Python', 'JSON'],
    link: 'https://github.com/Zorrow14/Expense_Management_System_PY',
  },
  {
    title: 'Education Management System',
    tag: 'Collaborative Academic Project',
    details: [
      {
        label: 'Problem',
        text: 'Students needed a single portal to log in securely, enrol in courses and view grades without manual admin steps.',
      },
      {
        label: 'Built',
        text: 'Engineered the Student Portal: secure authentication, automated course enrolment and a grade-viewing interface, as part of a collaborative Python project.',
      },
      {
        label: 'Impact',
        text: 'Ownership of a complete module inside a team codebase, with authentication and workflow logic done properly.',
      },
    ],
    tech: ['Python'],
    link: null,
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
        Internship, hackathon, personal, and academic projects showing Htet’s practical
        experience across full-stack web, AI-integrated systems, APIs, databases, and
        testing. Click a project for the full case study.
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

                    {project.link && (
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
                    )}
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
