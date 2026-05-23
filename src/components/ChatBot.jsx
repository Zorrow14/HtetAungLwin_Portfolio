import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const SYSTEM_PROMPT = `You are an AI assistant embedded in Htet Aung Lwin's personal portfolio website. Your role is to answer questions about Htet on his behalf — think of yourself as his knowledgeable representative. Be concise, friendly, and professional. Always refer to Htet in the third person.

== ABOUT HTET AUNG LWIN ==
Full Name: Htet Aung Lwin
Role: Aspiring Software Engineer | Junior Full Stack Developer | Problem Solver
Status: Final-semester Diploma in Software Engineering student, actively seeking internship opportunities as a React or Full Stack Developer.
Internship availability: July 20, 2026 – October 3, 2026.

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
Tools & Deployment: Git, GitHub, Vercel, Vite, Figma, VS Code

== PHILOSOPHY ==
Htet prioritizes mastering backend fundamentals (Node.js, Express.js) before layering on frontend frameworks like React. He believes solid architecture produces scalable, robust apps rather than relying on surface aesthetics alone. His primary ecosystem: React, JavaScript, Node.js, Express.js, MongoDB.

== PROJECTS ==
1. CineSearch
   - Real-time movie search app exploring React 19 capabilities
   - Integrated OMDb API with client-side filtering and dynamic debouncing
   - Framer Motion for spring-based animations
   - Tech: React 19, Vite, Tailwind CSS, OMDb API
   - Live: https://movie-search-engine-ruddy.vercel.app/

2. AuraGains
   - Native Android full-stack social fitness platform to combat gym anxiety (team project)
   - Custom workout protocol builders and rich media social feed with dynamic privacy logic
   - Flutter + Supabase using strict MVVM architecture
   - Tech: Flutter, Supabase, Dart, Provider
   - GitHub: https://github.com/lw112k/AuraGains

3. EcoQuest Website
   - Core administrative infrastructure for a sustainability-focused web platform
   - Real-time admin dashboard and comprehensive user management system
   - Automated moderation log for community accountability
   - Tech: PHP, MySQL, JavaScript, HTML/CSS
   - GitHub: https://github.com/lw112k/EcoQuest

4. Expense Management System
   - Python CLI application for personal finance tracking
   - OOP architecture for expense categorization and report generation
   - Session persistence using JSON library
   - Tech: Python, JSON, Datetime API
   - GitHub: https://github.com/Zorrow14/Expense_Management_System_PY

5. Education Management System
   - Collaborative academic platform — Htet built the Student Portal module
   - Secure authentication, automated course enrolment, grade-viewing interface
   - File-based database integration
   - Tech: Python
   - GitHub: https://github.com/lw112k/Education-Management-System-PY

== INTERNSHIP GOAL ==
Htet is actively seeking a Software Development internship, particularly as a React or Full Stack Developer, available from July 20, 2026 to October 3, 2026. He is eager to contribute to meaningful projects, refine his engineering practices, and grow alongside a dedicated team.

== INSTRUCTIONS ==
- Answer naturally and conversationally. Keep responses concise (2-4 sentences unless detail is requested).
- If asked about hiring/internship, highlight his availability and eagerness, and direct the visitor to his email or LinkedIn.
- If asked something you genuinely don't know (e.g. Htet's salary expectations, personal hobbies beyond coding), say you don't have that information and suggest they reach out directly.
- Do not make up information not listed above.
- Never say "as an AI language model". Just be helpful and direct.`;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey there! I'm Htet's AI assistant. Ask me anything about his skills, projects, or internship availability. 🚀",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
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
      const assistantMessage = {
        role: 'assistant',
        content: data.content,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please try again shortly!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "What projects has Htet built?",
    "Is Htet available for internship?",
    "What are his main skills?",
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        className={`chatbot-fab ${isOpen ? 'chatbot-fab--active' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* 4-pointed sparkle star */}
            <path d="M12 2 C12 2 13.2 7.5 14.5 9.5 C16 11.8 22 12 22 12 C22 12 16 12.2 14.5 14.5 C13.2 16.5 12 22 12 22 C12 22 10.8 16.5 9.5 14.5 C8 12.2 2 12 2 12 C2 12 8 11.8 9.5 9.5 C10.8 7.5 12 2 12 2 Z" fill="currentColor" stroke="none" opacity="0.9" />
            {/* Small accent dots */}
            <circle cx="4.5" cy="4.5" r="1.1" fill="currentColor" opacity="0.6" />
            <circle cx="19.5" cy="4.5" r="0.8" fill="currentColor" opacity="0.45" />
            <circle cx="19.5" cy="19.5" r="1.1" fill="currentColor" opacity="0.6" />
          </svg>
        )}
        {!isOpen && <span className="chatbot-fab__pulse" />}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window glass-panel ${isOpen ? 'chatbot-window--open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header__status">
            <span className="status-dot" />
            <span className="chatbot-header__name">Htet's AI Assistant</span>
          </div>
          <span className="chatbot-header__model">groq / llama-3</span>
        </div>

        {/* Messages */}
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
                <span /><span /><span />
              </div>
            </div>
          )}

          {/* Suggested questions shown only on first message */}
          {messages.length === 1 && !isLoading && (
            <div className="chatbot-suggestions">
              {suggestedQuestions.map((q, i) => (
                <button key={i} className="chatbot-suggestion-pill" onClick={() => { setInput(q); inputRef.current?.focus(); }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-row">
          <input
            ref={inputRef}
            className="chatbot-input"
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button className="chatbot-send-btn" onClick={sendMessage} disabled={isLoading || !input.trim()} aria-label="Send">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export { SYSTEM_PROMPT };