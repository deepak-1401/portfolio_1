// Handles the resume download action from the Hero section.
//
// Drop your real resume file at `public/Deepak_G_Resume.pdf` and this
// will download it directly. Until that file exists, it falls back to
// opening a print-ready summary window so the button always works.

export function downloadResume() {
  const link = document.createElement('a')
  link.href = '/Deepak_G_Resume.pdf'
  link.download = 'Deepak_G_Resume.pdf'

  fetch(link.href, { method: 'HEAD' })
    .then((res) => {
      if (res.ok) {
        link.click()
      } else {
        openFallbackResume()
      }
    })
    .catch(() => openFallbackResume())
}

function openFallbackResume() {
  const w = window.open('', '_blank')
  if (!w) return
  w.document.write(`
    <html>
      <head>
        <title>Deepak G — Resume</title>
        <style>
          body { font-family: 'Inter', sans-serif; max-width: 640px; margin: 60px auto; color: #12131C; line-height: 1.6; }
          h1 { margin-bottom: 0; }
          h2 { margin-top: 32px; border-bottom: 2px solid #4F7CFF; padding-bottom: 6px; }
          .role { color: #5B5F73; margin-top: 4px; }
        </style>
      </head>
      <body>
        <h1>Deepak G</h1>
        <p class="role">Software Developer · Flutter & Firebase Enthusiast · Python & Java Programmer</p>
        <p>Email: g.deepak1401@gmail.com &nbsp;|&nbsp; GitHub: github.com/deepak-1401 &nbsp;|&nbsp; LinkedIn: linkedin.com/in/deepakg</p>
        <h2>Education</h2>
        <p><strong>MSc Computer Science</strong> — SRM University (2025–2027)</p>
        <p><strong>BCA</strong> — AM Jain College (2022–2025)</p>
        <h2>Skills</h2>
        <p>Flutter, Firebase & Firestore, Dart, Python, Java, SQL, Git & GitHub, OOP, Data Structures & Algorithms</p>
        <h2>Certifications</h2>
        <p>Python Programming, Java Programming, Generative AI Fundamentals, Prompt Engineering for Generative AI — Great Learning</p>
        <script>window.print()</script>
      </body>
    </html>
  `)
  w.document.close()
}
