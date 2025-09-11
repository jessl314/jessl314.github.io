import { useState, useRef } from 'react'
import { type RefObject } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/admin/AuthHandler.js';
import NavBar from "./pages/NavBar.js"
import Hero from "./pages/Hero.js"
import Projects from "./pages/Projects.js"
import About from "./pages/About.js"
import AdminPage from "./pages/admin/Admin.js"
import './App.css'

function PortfolioContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: RefObject<HTMLDivElement | null>) => {
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
        <Projects onNext={() => scrollTo(projectsRef)} />
      </section>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioContent />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;
