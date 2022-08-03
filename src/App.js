import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const techStack = {
    languages: ["JavaScript", "HTML", "CSS", "Java", "Python", "SQL"],
    libraries: ["React", "React Native", "Express.js", "Node.js", "SpingBoot", "Django", "Bootstrap"],
    databases: ["PostgreSQL", "MongoDB"],
    other: ["RESTful Routing", "JSON API", "Git"]
  };

  const [selectedTechStack, setSelectedTechStack] = useState(techStack);
  
  return (
    <div className='pageBody'>
      <header>
        <Navbar /> 
      </header>
      <main className='pageContent'>
        <About/>
        <Skills 
          techStack={techStack} 
          selectedTechStack={selectedTechStack}
          setSelectedTechStack={setSelectedTechStack}
        />
        <Projects
          selectedTechStack={selectedTechStack}
        />
        <Contact/>
      </main>
    </div>
  );
}

export default App;
