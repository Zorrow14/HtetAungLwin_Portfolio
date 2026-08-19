import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const SYSTEM_PROMPT = `You are an AI assistant embedded in Htet Aung Lwin's personal portfolio website. Your role is to answer questions about Htet on his behalf — think of yourself as his knowledgeable representative. Be concise, friendly, and professional. Always refer to Htet in the third person.

== ABOUT HTET AUNG LWIN ==
Full Name: Htet Aung Lwin
Role: Aspiring Software Engineer | Junior Full Stack Developer | Problem Solver
Status: Final-semester Diploma in Software Engineering student, currently working as a Software Development Intern.

Education:
- Asia Pacific University (APU), Kuala Lumpur
- Diploma in ICT (Software Engineering)
- July 2024 – Present

Contact:
- Email: htetaunglwin223@gmail.com
- GitHub: github.com/Zorrow14
- LinkedIn: linkedin.com/in/htet-aung-lwin-6010683b0/
- CV: Available via Google Drive link on the portfolio

== TECHNICAL SKILLS ==
Programming Languages: JavaScript, Python, Java, HTML/CSS, SQL
Frontend: React.js, Next.js, Tailwind CSS, Responsive Web Design
Backend: Node.js, Express.js, Supabase
Databases: MySQL, PostgreSQL, MongoDB
Tools & Deployment: Git, GitHub, Vercel, Render, Vite, Figma, VS Code

== PHILOSOPHY ==
Htet prioritizes understanding core mechanics over any single framework. He has shipped production work across JavaScript/TypeScript, Python, and Java — a FastAPI + PostgreSQL booking service with database-level concurrency guarantees, React/Next.js frontends, a Flutter mobile app, and serverless AI chatbots on the Gemini and Groq APIs. That range lets him pick the right tool for the problem instead of forcing every project through the same stack. He is not limited to the MERN stack.

== PROJECTS ==
1. TimeSlot API
   - Backend booking/reservation REST API where the core guarantee is that the same resource can never be double-booked, even under concurrent requests
   - Closes the race two ways: a service-layer overlap check plus a PostgreSQL EXCLUDE constraint proven with an automated concurrency test
   - Tech: FastAPI, PostgreSQL, JWT, Alembic
   - Live API docs: https://timeslot-api.onrender.com/docs
   - GitHub: https://github.com/Zorrow14/TimeSlot_API

2. CareerSync AI
   - AI-powered Career OS with candidate, employer, and university portals: job-match scoring, skill-gap detection, AI roadmaps, mock interviews
   - Built solo for the Talentbank Tech Hackathon 2026
   - Tech: React, Vite, AI/UX Design
   - Live: https://careersync-ai-careeros.vercel.app/
   - GitHub: https://github.com/Zorrow14/careersync-ai

3. MOCOF Chatbot
   - Internship project: a serverless AI chatbot ("Moco") built for a furniture/interior design client during an internship placement
   - Composes curated knowledge-based prompts, calls Gemini, computes cabinetry price estimates in code, and verifies every price against real business data before replying to guard against hallucinated quotes
   - Tech: Node.js, Vercel Functions, Gemini API, CI/CD
   - Live: https://mocof-chatbot.vercel.app
   - GitHub: https://github.com/Zorrow14/mocof-chatbot

4. AuraGains
   - Native Android full-stack social fitness platform to combat gym anxiety
   - Custom workout protocol builders and rich media social feed with dynamic privacy logic
   - Flutter + Supabase using strict MVVM architecture
   - Tech: Flutter, Supabase, Dart, Provider
   - GitHub: https://github.com/lw112k/AuraGains

5. EcoQuest Website
   - Core administrative infrastructure for a sustainability-focused web platform
   - Real-time admin dashboard and comprehensive user management system
   - Automated moderation log for community accountability
   - Tech: PHP, MySQL, JavaScript, HTML/CSS
   - GitHub: https://github.com/lw112k/EcoQuest

6. Sprout
   - Personal product: a local-first, installable habit-tracking PWA
   - Habits are plants that softly wilt instead of hard-resetting on a missed day; includes a "Craving SOS" tool for quit-habits
   - Tech: React, Vite, IndexedDB, PWA
   - GitHub: https://github.com/Zorrow14/Sprout

7. DevPilot (ONGOING — currently in active development, not finished)
   - Full-stack developer growth platform: skill tracker, project planner, AI-generated learning roadmaps, internship-readiness score
   - Tech: Next.js, Express.js, PostgreSQL, Prisma, Firebase Authentication
   - GitHub: https://github.com/Zorrow14/DevPilot
   - If asked about this project, be clear it is still being built and not yet complete.

== CURRENT STATUS ==
Htet is currently working as a Software Development Intern while finishing his diploma. He is not seeking a new internship right now, but is always open to networking, collaboration, and future opportunities.

== INSTRUCTIONS ==
- Answer naturally and conversationally. Keep responses concise unless detail is requested.
- If asked about hiring, availability, or internship status, clarify he is currently interning, and direct the visitor to his email or LinkedIn for further conversation.
- If a recruiter provides a job description, analyze the match against Htet's capabilities using this structure: Match Level, Best Fit For, Overall Fit, Strongest Matches, Possible Gaps, Suggested Positioning, and Recommended Next Step.
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
    "What is Htet currently working on?",
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