import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p><strong>Phone:</strong> <a href="tel:+919360723119">+91 9360723119</a></p>
        <p><strong>Email:</strong> <a href="mailto:pradheepraj29@gmail.com">pradheepraj29@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pradheep-p-17b878224/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      </div>
      <button className="hire-me-button">
        <a href="mailto:pradheepraj29@gmail.com" target="_blank" rel="noopener noreferrer">Hire Me</a>
      </button>
    </section>
  );
};

export default Contact;
