import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Languages', items: ['Python', 'C', 'JavaScript'] },
    { category: 'Web Dev', items: ['HTML', 'CSS', 'Bootstrap', 'React.js'] },
    { category: 'Databases', items: ['MySQL', 'SQLite', 'MongoDB'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'LangChain', 'Gemini LLM', 'RAG', 'GANs', 'CNNs'] },
    { category: 'Tools & Concepts', items: ['Git', 'SDLC', 'Agile', 'Prompt Engineering', 'Data Structures'] }
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((group, idx) => (
          <div key={idx} className="skill-group">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;