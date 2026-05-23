import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "CineSearch",
      description: [
        "Developed a real-time movie search application to explore the capabilities of React 19.",
        "Integrated the OMDb API for live data retrieval with client-side filtering and dynamic debouncing.",
        "Incorporated Framer Motion to deliver smooth, spring-based animations and transitions."
      ],
      tech: ["React 19", "Vite", "Tailwind CSS", "OMDb API"],
      link: "https://movie-search-engine-ruddy.vercel.app/"
    },
    {
      title: "AuraGains",
      description: [
        "Collaborated to engineer a native Android full-stack social fitness platform to combat gym anxiety.",
        "Built custom workout protocol builders and a rich media social feed with dynamic privacy logic.",
        "Leveraged Flutter and Supabase utilizing strict MVVM architecture for a highly scalable native experience."
      ],
      tech: ["Flutter", "Supabase", "Dart", "Provider"],
      link: "https://github.com/lw112k/AuraGains"
    },
    {
      title: "EcoQuest Website",
      description: [
        "Developed the core Administrative Infrastructure for a sustainability-focused web platform.",
        "Built a real-time admin dashboard paired with a comprehensive user management system.",
        "Engineered an automated moderation log to ensure and enforce community accountability."
      ],
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      link: "https://github.com/lw112k/EcoQuest"
    },
    {
      title: "Expense Management System",
      description: [
        "Developed a functional Python CLI application designed for comprehensive personal finance tracking.",
        "Implemented an object-oriented architecture allowing users to categorize expenses and generate reports.",
        "Engineered reliable session persistence by safely storing historical data utilizing the JSON library."
      ],
      tech: ["Python", "JSON", "Datetime API"],
      link: "https://github.com/Zorrow14/Expense_Management_System_PY"
    },
    {
      title: "Education Management System",
      description: [
        "Contributed to a collaborative academic platform by engineering the Student Portal module.",
        "Implemented secure user authentication alongside automated course enrolment logic.",
        "Built a dynamic grade-viewing interface seamlessly linked to a file-based database."
      ],
      tech: ["Python"],
      link: "https://github.com/lw112k/Education-Management-System-PY"
    }
  ];

  return (
    <section id="projects" className="projects-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">03.</span> Featured Projects</h2>
      
      <div className="projects-showcase">
        {projectData.map((project, idx) => (
          <a 
            key={idx} 
            href={project.link} 
            target="_blank" 
            rel="noreferrer" 
            className={`project-datapad glass-panel animate-on-scroll ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-1`}
          >
            {/* The scanning line animation effect */}
            <div className="scan-effect"></div>
            
            <div className="datapad-header">
              <span className="project-index">0{idx + 1}</span>
              <h3>{project.title}</h3>
              
              <div className="datapad-tech">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="datapad-body">
              <ul className="datapad-bullets">
                {project.description.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
              
              {/* Fake UI element to make it look like a futuristic interface */}
              <div className="datapad-status">
                <span className="status-dot"></span>
                <span>SYSTEM_READY</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;