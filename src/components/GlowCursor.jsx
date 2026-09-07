import { useEffect, useRef } from 'react'

// A soft radial glow that trails the pointer. Desktop only — skipped on
// touch devices where there is no cursor to follow.
export default function GlowCursor() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const el = glowRef.current
    let raf
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let current = { ...target }

    function onMove(e) {
      target = { x: e.clientX, y: e.clientY }
    }

    function animate() {
      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12
      if (el) {
        el.style.transform = `translate3d(${current.x - 200}px, ${current.y - 200}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-30 blur-[90px] hidden md:block"
      style={{
        background:
          'radial-gradient(circle, rgba(79,124,255,0.55) 0%, rgba(164,92,255,0.35) 45%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  )
}
