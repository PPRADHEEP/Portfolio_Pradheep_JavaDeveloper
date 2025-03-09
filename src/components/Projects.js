import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Swiggy Clone Web Application</h3>
        <p>Technologies: React.js, Spring Boot, MySQL, Redux</p>
        <p>A full-stack food delivery application inspired by Swiggy, featuring restaurant listing, user authentication, and more.</p>
        <a href="https://github.com/PPRADHEEP" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
