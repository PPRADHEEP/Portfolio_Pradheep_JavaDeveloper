import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>My Resume</h2>
      <p>
        You can view my complete resume by clicking the button below.
      </p>
      <a
        href="/Pradheep.P_Resume.pdf" // File path in the public folder
        download="Pradheep.P_Resume.pdf" // Sets the download file name
        className="resume-button"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
