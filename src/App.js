import './App.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className='pageBody'>
      <header>
        <Navbar /> 
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
