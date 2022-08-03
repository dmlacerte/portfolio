import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const techStack = [];
  const [selectedTechStack, setSelectedTechStack] = useState(techStack);
  
  return (
    <div className='pageBody'>
      <header>
        <Navbar /> 
      </header>
      <main className='pageContent'>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
