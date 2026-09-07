# Deepak G — Portfolio

A dark, glassmorphism developer portfolio built with React, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The build output goes to `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Adding your resume

Drop a PDF at `public/Deepak_G_Resume.pdf`. The "Download Resume" button in the Hero
section will pick it up automatically. Until then, it opens a print-ready fallback
summary so the button always works.

## Structure

```
portfolio/
├── public/
│   └── deepak_photo.jpg        # profile photo used in the Hero section
├── src/
│   ├── components/             # one file per section/effect
│   ├── data/                   # skills, projects, timeline content
│   ├── utils/resumeBuilder.js  # resume download logic
│   ├── styles/globals.css      # theme tokens, glass/glow utilities
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── index.html
└── package.json
```

## Customising

- **Colors / fonts**: `tailwind.config.js` (`neon-blue`, `neon-purple`, `neon-cyan`) and the
  Google Fonts link in `index.html` (Space Grotesk + Inter).
- **Content**: edit `src/data/skills.js`, `src/data/projects.js`, `src/data/timeline.js`,
  and the certifications list inside `src/components/Certifications.jsx`.
- **Contact form**: currently opens the visitor's email client via a `mailto:` link
  (no backend required). Swap `handleSubmit` in `src/components/Contact.jsx` for a
  real endpoint (Formspree, EmailJS, your own API) when you're ready.
- **Dark/light mode**: toggled from the Navbar; styles for light mode live under the
  `body.light` selectors in `src/styles/globals.css`.
