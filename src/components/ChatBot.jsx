import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const SYSTEM_PROMPT = `You are an AI assistant embedded in Htet Aung Lwin's personal portfolio website. Your role is to answer questions about Htet on his behalf — think of yourself as his knowledgeable representative. Be concise, friendly, and professional. Always refer to Htet in the third person.

== ABOUT HTET AUNG LWIN ==
Full Name: Htet Aung Lwin
Role: Software Developer | Full Stack Developer | builds AI-integrated applications end to end
Summary: Software developer who builds full-stack and AI-integrated applications end to end, with a completed Diploma in ICT (Software Engineering) from Asia Pacific University. Built and deployed an AI sales chatbot with live pricing and Stripe deposit payments for MOCOF, a Malaysian furniture company, and led frontend development on CareerSync AI, which placed in the Top 80 at the Talentbank Tech Hackathon 2026. Strong in React, TypeScript, Python/FastAPI and PostgreSQL, with a growing focus on AI engineering and MLOps.

Education:
- Asia Pacific University (APU), Kuala Lumpur, Malaysia
- Diploma in Information and Communication Technology, Specialism in Software Engineering (Completed)
- July 2024 – 2026
- Relevant coursework: Databases, Web Development

Experience:
- Software Development Intern, MOCOF Sdn Bhd (Malaysian furniture company) — internship completed; built and deployed the MOCOF AI Sales Chatbot (see projects)

Languages: English (fluent), Myanmar (native)

Contact:
- Email: htetaunglwin223@gmail.com
- Phone: +60 17-667 9531
- GitHub: github.com/Zorrow14
- LinkedIn: linkedin.com/in/htet-aung-lwin
- CV: available via the download link on the portfolio

== TECHNICAL SKILLS ==
Programming Languages: JavaScript, TypeScript, Python, Java, PHP, Dart, SQL, HTML/CSS
Frontend: React.js, Next.js, React Router, Tailwind CSS, Framer Motion, Recharts, TanStack Query
Backend: Node.js, Express.js, FastAPI, Pydantic, SQLAlchemy, Supabase, REST APIs, Stripe API
AI & Data: Gemini and Groq APIs, LLM tool-calling, RAG (Chroma, fastembed), pandas, SciPy
Mobile: Flutter, Dart (MVVM Architecture)
Databases: PostgreSQL, MySQL, MongoDB
Testing & DevOps: Pytest, Vitest, GitHub Actions CI, Docker, Git, GitHub, Vercel, Render, Vite, Figma

== PHILOSOPHY ==
Htet prioritizes understanding core mechanics over any single framework. He has shipped across JavaScript/TypeScript, Python, Java, PHP and Dart — React/Next.js frontends, FastAPI and Node.js backends, a Flutter mobile app, and AI systems on the Gemini and Groq APIs. He builds AI features with guardrails, tests and CI rather than blind trust in the model, and is growing towards AI engineering and MLOps.

== PROJECTS ==
1. MOCOF AI Sales Chatbot (Software Dev Intern, MOCOF Sdn Bhd)
   - Built and deployed an AI sales assistant for a Malaysian furniture company that answers product questions, shortlists products and calculates live surround-cabinetry quotes from a customer's wall measurements
   - Engineered a pricing guardrail that checks every RM amount in a model reply against the price list and server-side calculations, falling back to a human handoff instead of sending an unverified quote
   - Integrated Stripe Checkout deposits (server-derived amounts, verified webhooks, Google Sheets logging) and a passcode-protected staff invoice tool where the model proposes and a human confirms; added consistency tests and CI
   - Tech: Node.js, Gemini API, Stripe, Vercel
   - GitHub: https://github.com/Zorrow14/mocof-chatbot

2. CareerSync AI (Top 80, Talentbank Tech Hackathon 2026)
   - Led frontend for a three-sided "Career OS" platform with Candidate, Employer and University portals delivering explainable job-match scoring, skill-gap detection, AI career roadmaps, mock interviews and cohort analytics
   - Designed a fully simulated AI layer with scaled mock data (60+ jobs, 22+ companies, 45+ candidates) for a zero-backend demo; implemented persona switching, role-based routing and a responsive light/dark UI (React Router, Framer Motion)
   - Tech: React, Vite, Tailwind CSS, Node.js, MongoDB
   - Live: https://careersync-ai-careeros.vercel.app/
   - GitHub: https://github.com/Zorrow14/careersync-ai

3. Jarvis: Local-First Voice AI Assistant (personal project)
   - Agentic assistant with a custom async tool-calling loop, wake-word activation, on-device speech-to-text/text-to-speech, and RAG memory (fastembed + Chroma) over an Obsidian-vault log of its own work
   - LLM, STT, TTS and vector store behind swappable interfaces; confirmation gate for side-effecting actions, sandboxed file access, a regression eval harness and latency/token metrics; packaged as a Tauri desktop app
   - Tech: Python, FastAPI, Gemini, Chroma, faster-whisper, Tauri
   - GitHub: https://github.com/Zorrow14/personal-assistant

4. Amber: Myanmar Development Simulation (personal project)
   - Full-stack simulation combining a World Bank data pipeline, a synthetic-control counterfactual (placebo and leave-one-out robustness tests) and a calibrated system-dynamics model running 200-member ensembles with live policy levers
   - Hash-verified data snapshot served via FastAPI to a bilingual (English/Burmese) React 19 + TypeScript app; 319 backend and 45 frontend tests with GitHub Actions CI
   - Tech: Python, FastAPI, React, TypeScript, SciPy
   - GitHub: https://github.com/Zorrow14/project-amber

5. Money Atlas: Personal Finance Manager (personal project)
   - Finance tracker covering accounts, transactions, budgets, savings pots and recurring bills, with exact NUMERIC/Decimal money handling, CSV import/export and an accessible Recharts analytics dashboard
   - Recurring-charge detector, append-only savings ledger, Alembic migrations and Pytest/Vitest suites
   - Tech: React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy
   - GitHub: https://github.com/Zorrow14/FinanceManager

6. AuraGains (final year project, group)
   - Native Android social fitness platform to combat "gym anxiety", built in a student team using strict MVVM
   - Workout protocol builder, social feed with database-level privacy logic, gamified challenges and an Expert Verification portal
   - Tech: Flutter, Dart, Supabase (PostgreSQL, Auth, Cloud Storage)
   - GitHub: https://github.com/lw112k/AuraGains

7. EcoQuest Website (web development project)
   - Built the admin core of a sustainability platform: real-time dashboard, user management and an automated moderation log
   - Tech: PHP, MySQL, HTML, CSS, JavaScript
   - GitHub: https://github.com/lw112k/EcoQuest

8. Expense Management System (personal project)
   - Object-oriented Python CLI app for tracking expenses and generating spending reports, persisted with JSON
   - GitHub: https://github.com/Zorrow14/Expense_Management_System_PY

9. Education Management System (collaborative academic project)
   - Engineered the Student Portal: secure authentication, automated course enrolment and a grade-viewing interface
   - Tech: Python

== CURRENT STATUS ==
Htet has completed his Diploma in ICT (Software Engineering) at Asia Pacific University and has finished his internship at MOCOF Sdn Bhd. He is actively looking for a REMOTE software engineering role (full-stack, frontend, backend, or AI engineering) and is available to start. He is also open to networking and collaboration. Point interested visitors to his email or LinkedIn.

== INSTRUCTIONS ==
- Answer naturally and conversationally. Keep responses concise unless detail is requested.
- If asked about hiring or availability, say clearly that he is available and looking for a remote role, summarise why he is a fit, and direct the visitor to his email or LinkedIn to continue the conversation. Do not invent salary expectations, notice periods, or location constraints beyond "remote".
- If a recruiter provides a job description, analyze the match against Htet's capabilities using this structure: Match Level, Best Fit For, Overall Fit, Strongest Matches, Possible Gaps, Suggested Positioning, and Recommended Next Step.
- His highest completed qualification is a Diploma in ICT (Software Engineering). Describe it that way. Never call him a "graduate", and never imply he holds a Bachelor's or any higher degree.
- Be honest and do not claim skills that are not listed.
- If asked something you genuinely do not know, say you do not have that information and suggest reaching out directly.
- Do not make up information not listed above.
- Never say "as an AI language model". Just be helpful and direct.`;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I can answer questions about Htet's skills, projects, and background. For recruiter job matching, open the JD Match tab. 🚀",
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [jobDescription, setJobDescription] = useState('');
  const [jobAnalysis, setJobAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const jdRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }

    if (activeTab === 'match') {
      jdRef.current?.focus();
    }
  }, [messages, isOpen, activeTab]);

  const sendMessage = async (messageOverride) => {
    const trimmed = (messageOverride ?? input).trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.content,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Sorry, I'm having trouble connecting right now. Please try again shortly!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const analyzeJobMatch = async () => {
    const trimmedJD = jobDescription.trim();
    if (!trimmedJD || isAnalyzing) return;

    setIsAnalyzing(true);
    setJobAnalysis('');

    const analysisPrompt = `
A recruiter has provided this Job Description:

${trimmedJD}

Please analyze whether this role matches Htet Aung Lwin's current capabilities.

Use this exact structure:

Match Level: Strong / Moderate / Weak
Best Fit For: Frontend / Full Stack / Backend / Mobile / Other

1. Overall Fit
Briefly explain whether Htet is suitable for this role.

2. Strongest Matches
List the strongest overlaps between the job description and Htet's skills/projects.

3. Possible Gaps
List missing or weaker areas honestly. Do not invent experience.

4. Suggested Positioning
Explain how Htet should position himself when applying.

5. Recommended Next Step
Give one clear action, such as applying, tailoring CV, building a small demo, or improving a missing skill.

Be honest, concise, recruiter-friendly, and easy to scan.
Do not claim skills or experience that are not listed in Htet's profile.
`;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: analysisPrompt,
            },
          ],
        }),
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      setJobAnalysis(data.content);
    } catch {
      setJobAnalysis(
        "Sorry, I couldn't analyze the job description right now. Please try again shortly."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearJobMatch = () => {
    setJobDescription('');
    setJobAnalysis('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "What projects has Htet built?",
    "Is Htet available for remote work?",
    "What are his main skills?",
    "How can I contact Htet?",
  ];

  const handleSuggestionClick = (question) => {
    if (isLoading) return;
    sendMessage(question);
  };

  const getMatchLevel = (analysis) => {
    const match = analysis.match(/Match Level:\s*(Strong|Moderate|Weak)/i);
    return match ? match[1].toLowerCase() : null;
  };

  const matchLevel = getMatchLevel(jobAnalysis);

  return (
    <>
      <button
        className={`chatbot-fab ${isOpen ? 'chatbot-fab--active' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M12 2 C12 2 13.2 7.5 14.5 9.5 C16 11.8 22 12 22 12 C22 12 16 12.2 14.5 14.5 C13.2 16.5 12 22 12 22 C12 22 10.8 16.5 9.5 14.5 C8 12.2 2 12 2 12 C2 12 8 11.8 9.5 9.5 C10.8 7.5 12 2 12 2 Z"
              fill="currentColor"
              stroke="none"
              opacity="0.9"
            />
            <circle cx="4.5" cy="4.5" r="1.1" fill="currentColor" opacity="0.6" />
            <circle cx="19.5" cy="4.5" r="0.8" fill="currentColor" opacity="0.45" />
            <circle cx="19.5" cy="19.5" r="1.1" fill="currentColor" opacity="0.6" />
          </svg>
        )}

        {!isOpen && <span className="chatbot-fab__pulse" />}
      </button>

      <div className={`chatbot-window glass-panel ${isOpen ? 'chatbot-window--open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header__status">
            <span className="status-dot" />
            <span className="chatbot-header__name">Htet's AI Assistant</span>
          </div>

          <span className="chatbot-header__badge">Career Assistant</span>
        </div>

        <div className="chatbot-tabs">
          <button
            className={`chatbot-tab ${activeTab === 'chat' ? 'chatbot-tab--active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            Ask About Htet
          </button>

          <button
            className={`chatbot-tab ${activeTab === 'match' ? 'chatbot-tab--active' : ''}`}
            onClick={() => setActiveTab('match')}
          >
            JD Match
          </button>
        </div>

        <p className="chatbot-tab-helper">
          Ask quick questions about Htet or paste a job description for match analysis.
        </p>

        {activeTab === 'chat' && (
          <>
            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                  {msg.role === 'assistant' && (
                    <div className="chatbot-msg__avatar">AI</div>
                  )}

                  <div className="chatbot-msg__bubble">{msg.content}</div>
                </div>
              ))}

              {isLoading && (
                <div className="chatbot-msg chatbot-msg--assistant">
                  <div className="chatbot-msg__avatar">AI</div>
                  <div className="chatbot-msg__bubble chatbot-msg__bubble--typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              {messages.length === 1 && !isLoading && (
                <div className="chatbot-suggestions">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      className="chatbot-suggestion-pill"
                      onClick={() => handleSuggestionClick(q)}
                      disabled={isLoading}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-row">
              <input
                ref={inputRef}
                className="chatbot-input"
                type="text"
                placeholder="Ask about Htet..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />

              <button
                className="chatbot-send-btn"
                onClick={() => sendMessage()}
                disabled={isLoading || !input.trim()}
                aria-label="Send"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </>
        )}

        {activeTab === 'match' && (
          <div className="chatbot-match-panel">
            <div className="chatbot-match-intro">
              <span className="chatbot-match-intro__label">Recruiter tool</span>

              <h4>Job Description Match</h4>

              <p>
                Paste a recruiter&apos;s job description here. The assistant will return a
                quick match level, strongest overlaps, possible gaps, and the best next step.
              </p>

              <div className="chatbot-match-summary">
                <span>Match Level</span>
                <span>Best Fit Area</span>
                <span>Skill Gaps</span>
              </div>
            </div>

            <textarea
              ref={jdRef}
              className="chatbot-jd-textarea"
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              disabled={isAnalyzing}
            />

            <div className="chatbot-match-actions">
              <button
                className="chatbot-analyze-btn"
                onClick={analyzeJobMatch}
                disabled={isAnalyzing || !jobDescription.trim()}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Match'}
              </button>

              <button
                className="chatbot-clear-btn"
                onClick={clearJobMatch}
                disabled={isAnalyzing || (!jobDescription && !jobAnalysis)}
              >
                Clear
              </button>
            </div>

            {isAnalyzing && (
              <div className="chatbot-analysis-loading">
                <span />
                <span />
                <span />
                <p>Checking the match...</p>
              </div>
            )}

            {jobAnalysis && !isAnalyzing && (
              <div className="chatbot-analysis-result">
                <div className="chatbot-analysis-result__header">
                  <span className="chatbot-analysis-result__label">
                    Analysis result
                  </span>

                  {matchLevel && (
                    <span className={`chatbot-match-badge chatbot-match-badge--${matchLevel}`}>
                      {matchLevel.toUpperCase()} MATCH
                    </span>
                  )}
                </div>

                <div className="chatbot-analysis-result__content">
                  {jobAnalysis}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export { SYSTEM_PROMPT };