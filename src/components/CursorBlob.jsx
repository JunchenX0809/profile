import { motion, useReducedMotion, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import { useFinePointer } from '../hooks/useFinePointer.js'

const SIZE = 28
const PAD = 6
const spring = { stiffness: 380, damping: 28, mass: 0.6 }

// Links and buttons attract the blob; add data-cursor to other elements to opt
// them in, or data-cursor="none" to opt a link out.
const TARGETS = 'a, button, [data-cursor]'

// A translucent circle that trails the mouse and wraps around whatever
// clickable element is under it. Skipped on touch screens and for reduced motion.
export default function CursorBlob() {
  const finePointer = useFinePointer()
  const reduceMotion = useReducedMotion()
  const enabled = finePointer && !reduceMotion

  const x = useSpring(0, spring)
  const y = useSpring(0, spring)
  const width = useSpring(SIZE, spring)
  const height = useSpring(SIZE, spring)
  const radius = useSpring(SIZE / 2, spring)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!enabled) return
    let target = null
    let pointer = null

    function place() {
      if (!pointer) return
      if (target) {
        const box = target.getBoundingClientRect()
        const w = box.width + PAD * 2
        const h = box.height + PAD * 2
        const corner = parseFloat(getComputedStyle(target).borderTopLeftRadius) || 6
        x.set(box.left - PAD)
        y.set(box.top - PAD)
        width.set(w)
        height.set(h)
        radius.set(Math.min(corner + PAD, Math.min(w, h) / 2))
      } else {
        x.set(pointer.x - SIZE / 2)
        y.set(pointer.y - SIZE / 2)
        width.set(SIZE)
        height.set(SIZE)
        radius.set(SIZE / 2)
      }
    }

    function onMove(event) {
      if (event.pointerType !== 'mouse') return
      if (!pointer) {
        // First movement: appear under the mouse instead of sliding in from a corner.
        x.jump(event.clientX - SIZE / 2)
        y.jump(event.clientY - SIZE / 2)
      }
      pointer = { x: event.clientX, y: event.clientY }
      const hit = event.target.closest?.(TARGETS)
      target = hit && hit.dataset.cursor !== 'none' ? hit : null
      setVisible(true)
      place()
    }

    function onLeave() {
      setVisible(false)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', place, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', place)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled, x, y, width, height, radius])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[55] bg-accent/35 mix-blend-multiply"
      style={{ x, y, width, height, borderRadius: radius }}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    />
  )
}
