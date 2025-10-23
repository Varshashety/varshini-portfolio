import React from 'react';

const experiences = [
  {
    company: "EISystems Pvt. Ltd",
    role: "Frontend Development Intern",
    period: "May 2025 – July 2025",
    bullets: [
      "Developed interactive web applications using React.js, HTML, CSS, and JavaScript.",
      "Tested and deployed real-time applications during internship."
    ]
  },
  {
    company: "Rinex AI",
    role: "AI/ML Intern",
    period: "Nov 2024 – Dec 2024",
    bullets: [
      "Built ML-based applications and optimized AI prompts.",
      "Researched real-world impact of machine learning across industries."
    ]
  },
  {
    company: "Vault of Codes",
    role: "Prompt Engineering Intern",
    period: "May 2024 – June 2024",
    bullets: [
      "Researched and implemented prompt engineering techniques to improve AI model accuracy and efficiency."
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company} <span>• {exp.period}</span></h4>
              <ul>
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;