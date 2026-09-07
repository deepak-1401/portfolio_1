import { motion } from 'framer-motion'

const CARDS = [
  {
    title: 'Currently studying',
    body: 'MSc Computer Science at SRM University, deepening my grasp of software systems, algorithms, and applied engineering.',
  },
  {
    title: 'What I build',
    body: 'Mobile applications and scalable software solutions — with a particular focus on Flutter apps backed by Firebase.',
  },
  {
    title: 'What draws me in',
    body: 'Real-time applications, database systems, and interfaces that feel considered rather than assembled.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-14"
      >
        <p className="text-sm text-neon-blue mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-5">
          A developer who likes to see things run in real time
        </h2>
        <p className="text-muted leading-relaxed">
          I'm an MSc Computer Science student building toward a career as a
          software developer, with a soft spot for mobile apps that respond
          instantly and interfaces that feel modern without trying too hard.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-7 hover:-translate-y-1 transition-transform"
          >
            <h3 className="font-display text-lg mb-3">{card.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
