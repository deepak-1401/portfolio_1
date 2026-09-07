import { motion } from 'framer-motion'

const CERTS = [
  { title: 'Python Programming', issuer: 'Great Learning' },
  { title: 'Java Programming', issuer: 'Great Learning' },
  { title: 'Generative AI Fundamentals', issuer: 'Great Learning' },
  { title: 'Prompt Engineering for Generative AI', issuer: 'Great Learning' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-pad">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-14"
      >
        <p className="text-sm text-neon-blue mb-3">Certifications</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Learning, formalised
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {CERTS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glow-ring glass rounded-xl p-6 flex items-center gap-4"
          >
            <div className="h-11 w-11 shrink-0 rounded-lg bg-grad-primary flex items-center justify-center shadow-glow-sm">
              <CertIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-display text-base mb-0.5">{cert.title}</h3>
              <p className="text-muted text-sm">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CertIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
