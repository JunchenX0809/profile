import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { LuMapPin } from 'react-icons/lu'

// Cross-fades through `photos`. Auto-advance pauses while the pointer or
// keyboard focus is on the carousel, and is off for reduced motion.
export default function PhotoCarousel({ photos, interval = 5000 }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = photos.length
  const photo = photos[index]

  useEffect(() => {
    if (count < 2 || paused || reduceMotion) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearInterval(timer)
  }, [count, paused, reduceMotion, interval])

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos"
      className="relative"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink shadow-2xl shadow-ink/20">
        <AnimatePresence initial={false}>
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 size-full object-cover"
            style={{ objectPosition: photo.position }}
          />
        </AnimatePresence>

        {count > 1 && (
          <div className="absolute right-4 bottom-4 flex items-center gap-1 rounded-full bg-ink/45 p-1 backdrop-blur">
            {photos.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={i === index ? 'true' : undefined}
                data-cursor="none"
                onClick={() => setIndex(i)}
                className="grid size-6 place-items-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-4 bg-paper' : 'w-1.5 bg-paper/50'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {photo.caption && (
        <p className="absolute -bottom-5 -left-4 inline-flex items-center gap-2 rounded-2xl border border-line bg-card px-4 py-2.5 font-mono text-xs shadow-lg">
          <LuMapPin className="text-accent-ink" aria-hidden="true" />
          {photo.caption}
        </p>
      )}
    </div>
  )
}
