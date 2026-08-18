# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Htet Aung Lwin, built with React 18 + Vite, deployed on Vercel. No test suite, no linter config, no TypeScript — plain `.jsx`/`.css` files per component.

## Commands

```
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

There is no test or lint script configured.

## Architecture

- **Single-page app, section-based**: [src/App.jsx](src/App.jsx) renders one long page by stacking section components inside `<main>` (Hero, About, Skills, AIProductivity, Projects, ProjectDemo, Contact, EndingQuote), plus overlay/global components rendered outside `<main>` (BootScreen, StarBackground, ChatBot, BackToTop, CustomCursor). There is no router — new sections are added by importing and placing another component in `App.jsx`.
- **Component convention**: each component in [src/components/](src/components/) pairs a `.jsx` file with a same-named `.css` file imported directly into it (no CSS modules, no Tailwind, no styled-components). Global styles live in [src/index.css](src/index.css).
- **Scroll-reveal animation**: `App.jsx` sets up an `IntersectionObserver` that adds a `fade-in` class to any element with `.animate-on-scroll` when it enters the viewport. Components that want scroll-in animation must include `animate-on-scroll` (often combined with a `reveal-*`/`delay-*` class) in their JSX rather than implementing their own observer.
- **Boot sequence**: `BootScreen` gates the rest of the UI behind a `booted` state in `App.jsx`; the real page mounts underneath it and is revealed once `BootScreen` calls `onDone`.

### AI chatbot (ChatBot + api/chat.js)

- [src/components/ChatBot.jsx](src/components/ChatBot.jsx) is the floating chat widget (two tabs: free-form Q&A and a "JD Match" recruiter tool that scores a pasted job description against Htet's profile). It calls `POST /api/chat` with `{ messages }` and renders `data.content`.
- [api/chat.js](api/chat.js) is a Vercel serverless function that proxies to Groq's OpenAI-compatible chat completions API (`openai/gpt-oss-120b`), injecting a large `SYSTEM_PROMPT` describing Htet's background, skills, and projects server-side, and reading the Groq key from the `My_Groq_Portfolio_Chat` env var. The API key is never exposed to the client.
- **Important**: `SYSTEM_PROMPT` is currently duplicated verbatim in both `ChatBot.jsx` (exported but effectively unused by the request path, since the server injects its own copy) and `api/chat.js` (the one actually sent to Groq). If you edit Htet's bio/skills/projects, update the copy in `api/chat.js` — that's the one that governs actual chatbot behavior — and keep `ChatBot.jsx`'s copy in sync to avoid drift.

### Contact form

[src/components/Contact.jsx](src/components/Contact.jsx) sends messages client-side via `@emailjs/browser`, configured through `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` Vite env vars. If these are unset, the form shows a `config-error` status instead of attempting to send.

## Environment variables

- `My_Groq_Portfolio_Chat` — Groq API key, server-side only, used by [api/chat.js](api/chat.js).
- `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` — EmailJS config, client-side (must be prefixed `VITE_` to be exposed by Vite).

None of these are checked into the repo; set them in `.env.local` for local dev and in the Vercel project settings for deployment.
