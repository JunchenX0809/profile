import { useEffect, useState } from 'react'

// Returns the id of the section crossing the middle of the screen.
// `ids` must be a stable array (defined outside the component).
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // Shrinks the observed area to a thin band across the middle of the viewport.
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
