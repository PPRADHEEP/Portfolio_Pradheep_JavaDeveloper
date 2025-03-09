import React from 'react';
import './About.css';
import profilePic from '../components/Pradheep.jpg'; // Ensure this path is correct

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <img src={profilePic} alt="Pradheep P" className="profile-pic" />
      <p>
        I am a passionate Full Stack Java Developer with hands-on experience in designing and building web applications using Java, Spring Boot, React.js, and SQL. 
        I thrive on creating seamless user experiences and solving complex problems. My sharp attention to detail, coupled with adaptability and teamwork, make me a valuable contributor to software development projects.
      </p>
      <div className="skills-container">
        <div className="tech-stack">
          <h3>🔹 Tech Stack:</h3>
          <ul>
            <li>✔ Java, Spring Boot, Hibernate</li>
            <li>✔ React.js, JavaScript, HTML, CSS, Bootstrap</li>
            <li>✔ REST APIs, MySQL, MongoDB</li>
            <li>✔ Tools: Git, GitHub, Postman, MySQL Workbench</li>
          </ul>
        </div>
        <div className="soft-skills">
          <h3>🔹 Soft Skills:</h3>
          <ul>
            <li>✔ Problem Solving</li>
            <li>✔ Adaptability</li>
            <li>✔ Teamwork & Collaboration</li>
            <li>✔ Time Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
