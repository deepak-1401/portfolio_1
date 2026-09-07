import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-14"
      >
        <p className="text-sm text-neon-blue mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Things I've built
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-7">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl overflow-hidden group"
          >
            <div
              className={`h-36 bg-gradient-to-br ${project.accent} relative flex items-end p-5 opacity-90`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="relative font-display text-xl text-white">
                {project.title}
              </h3>
            </div>

            <div className="p-6">
              <p className="text-muted text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center text-sm py-2.5 rounded-lg glass hover:border-neon-blue/50 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center text-sm py-2.5 rounded-lg bg-grad-primary text-white hover:shadow-glow-sm transition-shadow"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
