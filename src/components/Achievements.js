import React from 'react';
import './Achievements.css';
import fullStackLogo from '../components/full-stack-logo.png'; // Add appropriate logo images
import typingLogo from '../components/typing-logo.png';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <h2>Achievements & Certifications</h2>
      <div className="certifications">
        <div className="cert-item">
          <img src={fullStackLogo} alt="Full Stack Development" />
          <p>Master Program in Full Stack Development Using Java</p>
        </div>
        <div className="cert-item">
          <img src={typingLogo} alt="Typewriting" />
          <p>Typewriting Tamil & English - Higher Grade</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
