import { motion } from 'framer-motion'
import { timeline } from '../data/timeline'

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-14"
      >
        <p className="text-sm text-neon-blue mb-3">Experience & Education</p>
        <h2 className="text-3xl md:text-4xl font-semibold">The path so far</h2>
      </motion.div>

      <div className="relative max-w-2xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-9"
            >
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-grad-primary shadow-glow-sm ring-4 ring-void" />
              <div className="glass rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <span className="text-xs text-neon-blue">{item.period}</span>
                </div>
                <p className="text-sm text-muted mb-2">{item.org}</p>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
