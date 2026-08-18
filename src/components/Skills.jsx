import React, { useRef, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "SQL", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='%23f0b429' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'%3E%3C/ellipse%3E%3Cpath d='M3 5V19A9 3 0 0 0 21 19V5'%3E%3C/path%3E%3Cpath d='M3 12A9 3 0 0 0 21 12'%3E%3C/path%3E%3C/svg%3E" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Responsive Web Design", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f0b429' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12' y2='21'%3E%3C/line%3E%3C/svg%3E" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/F0B429" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" }
    ]
  }
];

const Skills = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [orbitCenter, setOrbitCenter] = useState({ x: 0, y: 0 });
  const titleRefs = useRef([]);
  const wrapRefs = useRef([]);

  const toggleOrbit = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
      return;
    }

    const titleEl = titleRefs.current[idx];
    const wrapEl = wrapRefs.current[idx];

    if (titleEl && wrapEl) {
      const titleRect = titleEl.getBoundingClientRect();
      const wrapRect = wrapEl.getBoundingClientRect();
      setOrbitCenter({
        x: titleRect.left - wrapRect.left + titleRect.width / 2,
        y: titleRect.top - wrapRect.top + titleRect.height / 2,
      });
    }

    setOpenIdx(idx);
  };

  return (
    <section id="skills" className="skills-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">02.</span> Skills</h2>
      <p className="skills-intro">Click a category to bring its skills into orbit.</p>

      <div className="skills-circuit">
        {skillCategories.map((category, idx) => {
          const isOpen = openIdx === idx;
          const count = category.skills.length;

          return (
            <div key={idx} className={`circuit-branch animate-on-scroll reveal-left delay-${(idx % 3) + 1}`}>

              {/* The Glowing Connection Line */}
              <div className="branch-connector">
                <div className={`branch-node ${isOpen ? 'branch-node--active' : ''}`}></div>
                <div className="branch-line"></div>
              </div>

              {/* The Content */}
              <div className="branch-content">
                <button
                  type="button"
                  ref={(el) => (titleRefs.current[idx] = el)}
                  className={`branch-title ${isOpen ? 'branch-title--active' : ''}`}
                  onClick={() => toggleOrbit(idx)}
                  aria-expanded={isOpen}
                >
                  {category.title}
                  <svg
                    className="branch-title__icon"
                    width="14"
                    height="14"
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
                </button>

                <div
                  ref={(el) => (wrapRefs.current[idx] = el)}
                  className={`branch-skills-wrap ${isOpen ? 'is-orbiting' : ''}`}
                >
                  <div className="branch-skills" aria-hidden={isOpen}>
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="skill-pill animate-on-scroll reveal-scale"
                        style={{ transitionDelay: `${sIdx * 0.06}s` }}
                      >
                        {skill.icon && <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />}
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>

                  {isOpen && (
                    <div
                      className="orbit-layer"
                      style={{ left: `${orbitCenter.x}px`, top: `${orbitCenter.y}px` }}
                    >
                      {category.skills.map((skill, sIdx) => {
                        // Arc spans 30deg to 150deg (opening downward, staying clear
                        // of the title's own line), so nodes fan below/beside the
                        // title without covering it or reaching into the category above.
                        const angle = count === 1 ? 90 : 30 + (120 / (count - 1)) * sIdx;
                        const rad = (angle * Math.PI) / 180;
                        const radius = count <= 3 ? 120 : count <= 5 ? 165 : 210;
                        const x = Math.cos(rad) * radius;
                        const y = Math.sin(rad) * radius;

                        return (
                          <div
                            key={sIdx}
                            className="orbit-node"
                            style={{
                              '--x': `${x}px`,
                              '--y': `${y}px`,
                              animationDelay: `${sIdx * 0.04}s`,
                            }}
                          >
                            <span className="orbit-node__icon">
                              {skill.icon && <img src={skill.icon} alt="" />}
                            </span>
                            <span className="orbit-node__label">{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
