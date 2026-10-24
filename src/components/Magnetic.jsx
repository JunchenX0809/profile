import { motion, useReducedMotion, useSpring } from 'motion/react'

// Low damping lets the element overshoot and wobble briefly before settling.
const spring = { stiffness: 260, damping: 11, mass: 0.5 }

// Pulls its child a few pixels toward the mouse while the mouse is over it.
export default function Magnetic({ children, strength = 0.35 }) {
  const reduceMotion = useReducedMotion()
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  function pull(event) {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const box = event.currentTarget.getBoundingClientRect()
    // Measure from the element's resting center, not its current pulled position.
    const centerX = box.left + box.width / 2 - x.get()
    const centerY = box.top + box.height / 2 - y.get()
    x.set((event.clientX - centerX) * strength)
    y.set((event.clientY - centerY) * strength)
  }

  function release() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span className="inline-flex" style={{ x, y }} onPointerMove={pull} onPointerLeave={release}>
      {children}
    </motion.span>
  )
}
