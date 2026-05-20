import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["JavaScript", "Python", "Java", "HTML/CSS"] },
    { title: "Frameworks", skills: ["React", "Next.js", "Express.js", "Node.js"] },
    { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
    { title: "Tools", skills: ["Git", "GitHub", "Vercel", "Figma"] }
  ];

  return (
    <section id="skills" className="skills-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">02.</span> Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className={`skill-category glass-panel neon-hover animate-on-scroll reveal-up delay-${idx + 1}`}>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
