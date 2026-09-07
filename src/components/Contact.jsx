import { useState } from 'react'
import { motion } from 'framer-motion'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/deepak-1401' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/deepakg' },
  { label: 'Email', href: 'mailto:g.deepak1401@gmail.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:g.deepak1401@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative section-pad">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-neon-blue mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            Let's build something
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-md">
            Open to internships, freelance Flutter work, and conversations
            about real-time systems. Reach out directly, or use the form.
          </p>

          <div className="space-y-3">
            <a href="mailto:g.deepak1401@gmail.com" className="block text-sm hover:text-neon-blue transition-colors">
              g.deepak1401@gmail.com
            </a>
            <a href="https://linkedin.com/in/deepakg" target="_blank" rel="noreferrer" className="block text-sm text-muted hover:text-neon-blue transition-colors">
              linkedin.com/in/deepakg
            </a>
            <a href="https://github.com/deepak-1401" target="_blank" rel="noreferrer" className="block text-sm text-muted hover:text-neon-blue transition-colors">
              github.com/deepak-1401
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-7 space-y-5"
        >
          <div>
            <label htmlFor="name" className="text-sm text-muted block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-neon-blue/60 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-muted block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-neon-blue/60 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="What are you building?"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-neon-blue/60 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-grad-primary text-white font-medium hover:shadow-glow transition-shadow"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-xs text-neon-cyan text-center">
              Your email client should have opened with this message ready to send.
            </p>
          )}
        </motion.form>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Deepak G. Built with React, Tailwind CSS & Framer Motion.
        </p>
        <div className="flex gap-5">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted hover:text-neon-blue transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </section>
  )
}
