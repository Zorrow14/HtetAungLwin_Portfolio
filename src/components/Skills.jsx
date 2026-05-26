import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { 
      title: "Programming Languages", 
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "SQL", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='%2300d4ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'%3E%3C/ellipse%3E%3Cpath d='M3 5V19A9 3 0 0 0 21 19V5'%3E%3C/path%3E%3Cpath d='M3 12A9 3 0 0 0 21 12'%3E%3C/path%3E%3C/svg%3E" }
      ] 
    },
    { 
      title: "Frontend Development", 
      skills: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Responsive Web Design", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300d4ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='3' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12' y2='21'%3E%3C/line%3E%3C/svg%3E" }
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
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" }
      ] 
    }
  ];

  return (
    <section id="skills" className="skills-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">02.</span> Skills</h2>
      
      <div className="skills-circuit">
        {skillCategories.map((category, idx) => (
          <div key={idx} className={`circuit-branch animate-on-scroll reveal-left delay-${(idx % 3) + 1}`}>
            
            {/* The Glowing Connection Line */}
            <div className="branch-connector">
              <div className="branch-node"></div>
              <div className="branch-line"></div>
            </div>
            
            {/* The Content */}
            <div className="branch-content">
              <h3 className="branch-title">{category.title}</h3>
              <div className="branch-skills">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    {skill.icon && <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;