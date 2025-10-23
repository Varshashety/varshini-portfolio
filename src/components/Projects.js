import React from 'react';

const projects = [
  {
    title: "PDF-Based Financial & Industry Analysis Using AI",
    period: "July 2025 – Present",
    desc: "AI system to extract and analyze financial data from PDFs using LangChain, Chroma, MiniLM embeddings, and Google Gemini LLM with RAG.",
    tech: "Python, LangChain, Chroma, Gemini, RAG"
  },
  {
    title: "Image Discriminator Classifier (GAN)",
    period: "March 2025",
    desc: "Built a GAN to generate realistic images using CNN-based generator/discriminator. Evaluated with IS and FID metrics.",
    tech: "PyTorch, TensorFlow, GAN, CNN"
  },
  {
    title: "Handwritten Digit Classification",
    period: "Jan 2025 – Feb 2025",
    desc: "CNN model trained on MNIST/EMNIST with data augmentation. Compared against SVM and Random Forest.",
    tech: "TensorFlow, Keras, Scikit-learn, CNN"
  },
  {
    title: "Movie Search Engine",
    period: "2024",
    desc: "Interactive app to search movies using React and JavaScript.",
    tech: "React, HTML, CSS, JavaScript"
  },
  {
    title: "Food Ordering Website",
    period: "2024",
    desc: "Full-stack food ordering platform with React frontend and Express backend.",
    tech: "React, Express.js, HTML, CSS"
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.title}</h3>
            <p className="period">{proj.period}</p>
            <p>{proj.desc}</p>
            <p className="tech"><strong>Tech:</strong> {proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;