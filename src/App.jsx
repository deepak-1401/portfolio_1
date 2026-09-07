import { useEffect, useState } from 'react'
import CanvasParticles from './components/CanvasParticles'
import GlowCursor from './components/GlowCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-grad-radial pointer-events-none z-0" />
      <CanvasParticles />
      <GlowCursor />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
