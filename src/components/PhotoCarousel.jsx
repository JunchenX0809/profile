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

  // Swipe left for the next photo, right for the previous one.
  function handleSwipe(_event, info) {
    if (Math.abs(info.offset.x) < 40) return
    const step = info.offset.x < 0 ? 1 : -1
    setIndex((i) => (i + step + count) % count)
  }

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
      <motion.div
        className="relative aspect-[4/5] cursor-grab overflow-hidden rounded-[2rem] bg-ink shadow-2xl shadow-ink/20 active:cursor-grabbing"
        drag={count > 1 ? 'x' : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        onDragStart={() => setPaused(true)}
        onDragEnd={(event, info) => {
          setPaused(false)
          handleSwipe(event, info)
        }}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0 size-full object-cover select-none"
            style={{ objectPosition: photo.position }}
            draggable={false}
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
                className="grid size-9 place-items-center lg:size-6"
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
      </motion.div>

      {photo.caption && (
        <p className="absolute -bottom-5 -left-4 inline-flex items-center gap-2 rounded-2xl border border-line bg-card px-4 py-2.5 font-mono text-xs shadow-lg">
          <LuMapPin className="text-accent-ink" aria-hidden="true" />
          {photo.caption}
        </p>
      )}
    </div>
  )
}
