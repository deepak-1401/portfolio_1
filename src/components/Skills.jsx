import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-14"
      >
        <p className="text-sm text-neon-blue mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Tools I reach for
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="glow-ring glass rounded-xl p-5 flex items-start justify-between gap-3 group"
          >
            <div>
              <h3 className="font-display text-base mb-1 group-hover:text-gradient transition-colors">
                {skill.name}
              </h3>
              <p className="text-muted text-xs leading-relaxed">{skill.note}</p>
            </div>
            <span className="shrink-0 text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-muted whitespace-nowrap">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
