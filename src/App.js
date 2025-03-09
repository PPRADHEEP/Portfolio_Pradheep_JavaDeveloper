import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
      <About />
      <Achievements />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
