import { useEffect, useState } from 'react'

// Cycles through a list of role strings with a typewriter effect.
export default function TypingEffect({
  strings,
  typingSpeed = 55,
  deletingSpeed = 30,
  pause = 1600,
}) {
  const [textIndex, setTextIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[textIndex % strings.length]
    let timeout

    if (!deleting && display.length < current.length) {
      timeout = setTimeout(
        () => setDisplay(current.slice(0, display.length + 1)),
        typingSpeed
      )
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(
        () => setDisplay(current.slice(0, display.length - 1)),
        deletingSpeed
      )
    } else if (deleting && display.length === 0) {
      setDeleting(false)
      setTextIndex((i) => (i + 1) % strings.length)
    }

    return () => clearTimeout(timeout)
  }, [display, deleting, textIndex, strings, typingSpeed, deletingSpeed, pause])

  return (
    <span>
      {display}
      <span className="inline-block w-[2px] h-[1em] bg-neon-blue ml-1 align-middle animate-blink" />
    </span>
  )
}
