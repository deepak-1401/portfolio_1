import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import { downloadResume } from "../utils/resumeBuilder";

const ROLES = [
  "Software Developer",
  "Flutter & Firebase ",
  "Python & Java Programmer",
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/deepak-1401", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/deepakg",
    icon: LinkedInIcon,
  },
  { label: "Email", href: "mailto:g.deepak1401@gmail.com", icon: MailIcon },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-pad pt-32 md:pt-24"
    >
      <div className="relative z-10 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm tracking-wide text-neon-blue mb-4">
            MSc Computer Science · SRM University
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] mb-5">
            Hi, I'm <span className="text-gradient">Deepak G</span>
          </h1>
          <div className="text-xl sm:text-2xl text-muted font-display h-9 mb-6">
            <TypingEffect strings={ROLES} />
          </div>
          <p className="text-muted max-w-xl leading-relaxed mb-9">
            I build real-time mobile applications and scalable software with
            Flutter and Firebase, and reach for Python and Java when the problem
            calls for it. Currently exploring database systems and modern UI/UX
            as part of my MSc in Computer Science.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={downloadResume}
              className="px-6 py-3 rounded-xl bg-grad-primary font-medium text-white shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              Download Resume
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl glass hover:border-neon-blue/50 transition-colors"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-11 w-11 rounded-full glass flex items-center justify-center hover:shadow-glow-sm hover:-translate-y-0.5 transition-all"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>{" "}
      </div>
    </section>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6 9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
