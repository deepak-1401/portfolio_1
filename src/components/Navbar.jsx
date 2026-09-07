import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`glass mx-4 md:mx-12 lg:mx-24 rounded-2xl flex items-center justify-between px-5 md:px-7 py-3 transition-shadow ${
          scrolled ? 'shadow-glow-sm' : ''
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('hero')
          }}
          className="font-display font-semibold text-lg tracking-tight"
        >
          Deepak<span className="text-gradient">.G</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle dark and light theme"
            onClick={toggleTheme}
            className="relative h-9 w-16 rounded-full glass flex items-center px-1"
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="h-7 w-7 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple shadow-glow-sm"
              style={{ marginLeft: theme === 'dark' ? 0 : 'auto' }}
            />
          </button>

          <button
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg glass"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <div className="space-y-1.5">
              <span className="block h-[1.5px] w-5 bg-current" />
              <span className="block h-[1.5px] w-5 bg-current" />
              <span className="block h-[1.5px] w-3.5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-4 mt-2 rounded-2xl flex flex-col md:hidden overflow-hidden"
        >
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-left px-5 py-3 text-sm text-muted hover:text-ink border-b border-white/5 last:border-0"
            >
              {link.label}
            </button>
          ))}
        </motion.nav>
      )}
    </header>
  )
}
