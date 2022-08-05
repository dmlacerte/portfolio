import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function App() {
  const techStack = {
    languages: ["JavaScript", "HTML", "CSS", "Java", "Python", "SQL"],
    libraries: ["React", "React Native", "Express & Node.js", "SpringBoot", "Django", "Bootstrap"],
    databases: ["PostgreSQL", "MongoDB"],
    other: ["RESTful Routing", "JSON API", "GitHub"]
  };

  const [selectedTechStack, setSelectedTechStack] = useState([]);

  return (

    <div className='pageBody'>
      <header className='sticky'>
        <Navbar />
      </header>
      <main className='pageContent'>
        <AnimationOnScroll animateIn="animate__fadeInDown" >
          <About />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <Skills
            techStack={techStack}
            selectedTechStack={selectedTechStack}
            setSelectedTechStack={setSelectedTechStack}
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <Projects
            selectedTechStack={selectedTechStack}
            setSelectedTechStack={setSelectedTechStack}
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <Contact />
        </AnimationOnScroll>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
