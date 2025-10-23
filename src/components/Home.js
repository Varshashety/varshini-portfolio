import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <h1>Hi, I'm <span>Varshini</span></h1>
      <h2>AI & ML Undergraduate | Web Developer</h2>
      <p>Building intelligent systems and interactive web experiences.</p>
      <div className="cta-buttons">
        <Link to="/projects" className="btn">View My Work</Link>
        <a href="mailto:varshamithinti@gmail.com" className="btn btn-outline">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;