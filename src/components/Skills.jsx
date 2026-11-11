import React from 'react';
import './Skills.css';

const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;
const simple = (name, color = 'F0B429') => `https://cdn.simpleicons.org/${name}/${color}`;

// Inline gold glyphs for skills that have no brand logo.
const glyph = (paths) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='#f0b429' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>${paths}</svg>`
  )}`;

const ICON_DB = glyph(
  "<ellipse cx='12' cy='5' rx='9' ry='3'/><path d='M3 5V19A9 3 0 0 0 21 19V5'/><path d='M3 12A9 3 0 0 0 21 12'/>"
);
const ICON_CODE = glyph("<polyline points='16 18 22 12 16 6'/><polyline points='8 6 2 12 8 18'/>");
const ICON_CHART = glyph("<line x1='4' y1='20' x2='20' y2='20'/><rect x='6' y='10' width='3' height='8'/><rect x='11' y='5' width='3' height='13'/><rect x='16' y='13' width='3' height='5'/>");
const ICON_SPARK = glyph("<path d='M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z'/><path d='M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z'/>");
const ICON_LAYERS = glyph("<polygon points='12 2 2 7 12 12 22 7 12 2'/><polyline points='2 17 12 22 22 17'/><polyline points='2 12 12 17 22 12'/>");
const ICON_SCREEN = glyph("<rect x='2' y='3' width='20' height='14' rx='2' ry='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/>");

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: devicon('javascript') },
      { name: 'TypeScript', icon: devicon('typescript') },
      { name: 'Python', icon: devicon('python') },
      { name: 'Java', icon: devicon('java') },
      { name: 'PHP', icon: devicon('php') },
      { name: 'Dart', icon: devicon('dart') },
      { name: 'SQL', icon: ICON_DB },
      { name: 'HTML/CSS', icon: devicon('html5') },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: devicon('react') },
      { name: 'Next.js', icon: devicon('nextjs') },
      { name: 'React Router', icon: devicon('reactrouter') },
      { name: 'Tailwind CSS', icon: devicon('tailwindcss') },
      { name: 'Framer Motion', icon: simple('framer') },
      { name: 'Recharts', icon: ICON_CHART },
      { name: 'TanStack Query', icon: simple('reactquery') },
      { name: 'Responsive Web Design', icon: ICON_SCREEN },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: devicon('nodejs') },
      { name: 'Express.js', icon: devicon('express') },
      { name: 'FastAPI', icon: devicon('fastapi') },
      { name: 'Pydantic', icon: simple('pydantic') },
      { name: 'SQLAlchemy', icon: devicon('sqlalchemy') },
      { name: 'Supabase', icon: devicon('supabase') },
      { name: 'REST APIs', icon: ICON_LAYERS },
      { name: 'Stripe API', icon: simple('stripe') },
    ],
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'Gemini API', icon: simple('googlegemini', 'F5D890') },
      { name: 'Groq API', icon: ICON_SPARK },
      { name: 'LLM Tool-Calling', icon: ICON_SPARK },
      { name: 'RAG (Chroma, fastembed)', icon: ICON_SPARK },
      { name: 'pandas', icon: devicon('pandas') },
      { name: 'SciPy', icon: simple('scipy') },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter', icon: devicon('flutter') },
      { name: 'Dart (MVVM Architecture)', icon: devicon('dart') },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: devicon('postgresql') },
      { name: 'MySQL', icon: devicon('mysql') },
      { name: 'MongoDB', icon: devicon('mongodb') },
    ],
  },
  {
    title: 'Testing & DevOps',
    skills: [
      { name: 'Pytest', icon: devicon('pytest') },
      { name: 'Vitest', icon: devicon('vitest') },
      { name: 'GitHub Actions CI', icon: devicon('githubactions') },
      { name: 'Docker', icon: devicon('docker') },
      { name: 'Git', icon: devicon('git') },
      { name: 'GitHub', icon: devicon('github') },
      { name: 'Vercel', icon: devicon('vercel') },
      { name: 'Render', icon: simple('render') },
      { name: 'Vite', icon: devicon('vitejs') },
      { name: 'Figma', icon: devicon('figma') },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">02.</span> Skills</h2>
      <p className="skills-intro">A breakdown of the languages, frameworks, and tools I work with.</p>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className={`skill-box glass-panel animate-on-scroll reveal-up delay-${(idx % 3) + 1}`}>
            <h3 className="skill-box__title">{category.title}</h3>
            <div className="skill-box__list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-pill">
                  {skill.icon && <img src={skill.icon} alt="" className="skill-icon" loading="lazy" />}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
