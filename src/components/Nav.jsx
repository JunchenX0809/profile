import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { LuBriefcaseBusiness, LuHouse, LuLayers, LuMail, LuUser, LuWrench } from 'react-icons/lu'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useFinePointer } from '../hooks/useFinePointer.js'
import Magnetic from './Magnetic.jsx'

const items = [
  { id: 'home', label: 'Home', Icon: LuHouse },
  { id: 'about', label: 'About', Icon: LuUser },
  { id: 'experience', label: 'Experience', Icon: LuBriefcaseBusiness },
  { id: 'work', label: 'Work', Icon: LuLayers },
  { id: 'skills', label: 'Toolkit', Icon: LuWrench },
  { id: 'contact', label: 'Contact', Icon: LuMail },
]
const ids = items.map((item) => item.id)

export default function Nav() {
  const active = useActiveSection(ids)
  const finePointer = useFinePointer()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  // On touch screens, slide the bar away while reading downward and bring it
  // back on any upward scroll or near the end of the page.
  useMotionValueEvent(scrollY, 'change', (y) => {
    if (finePointer) return setHidden(false)
    const goingDown = y > (scrollY.getPrevious() ?? 0)
    const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 160
    setHidden(goingDown && y > 240 && !nearEnd)
  })

  return (
    <motion.nav
      aria-label="Sections"
      animate={{ y: hidden ? '160%' : '0%' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-3 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]"
    >
      <ul className="flex items-center gap-0.5 rounded-full border border-ink/10 bg-card/75 p-1.5 shadow-xl shadow-ink/10 backdrop-blur-xl">
        {items.map(({ id, label, Icon }) => {
          const isActive = active === id
          return (
            <li key={id}>
              <Magnetic>
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? 'location' : undefined}
                className={`relative isolate flex h-11 items-center gap-2 rounded-full px-3 text-sm font-medium transition-colors sm:px-3.5 ${
                  isActive ? 'text-paper' : 'text-muted hover:text-ink'
                }`}
              >
                {/* layoutId makes Motion slide this pill between links instead of jumping. */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-ink"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon className="size-5" aria-hidden="true" />
                <span className={isActive ? 'hidden md:inline' : 'hidden'}>{label}</span>
              </a>
              </Magnetic>
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
