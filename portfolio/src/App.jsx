import { useState, useRef} from 'react'
import NavBar from "./pages/NavBar"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import About from "./pages/About"
import './App.css'

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <NavBar scrollTo={scrollTo} refs={{ heroRef, aboutRef, projectsRef }} />

      <section className="bg-[#0e1712] pt-20 min-h-screen" ref={heroRef}>
        <Hero onNext={() => scrollTo(aboutRef)} />
      </section>
      <section className="bg-[#1a2a22] pt-20 min-h-screen" ref={aboutRef}>
        <About onNext={() => scrollTo(projectsRef)} />
      </section>
      <section className="bg-[#0e1712] pt-20 min-h-screen" ref={projectsRef}>
        <Projects onNext={() => scrollTo(contactRef)} />
      </section>

    </div>
  )
}

export default App
