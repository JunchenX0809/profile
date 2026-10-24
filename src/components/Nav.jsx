import { motion } from 'motion/react'
import { LuBriefcaseBusiness, LuHouse, LuLayers, LuMail, LuUser, LuWrench } from 'react-icons/lu'
import { useActiveSection } from '../hooks/useActiveSection.js'

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

  return (
    <nav aria-label="Sections" className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3 sm:bottom-6">
      <ul className="flex items-center gap-0.5 rounded-full border border-ink/10 bg-card/75 p-1.5 shadow-xl shadow-ink/10 backdrop-blur-xl">
        {items.map(({ id, label, Icon }) => {
          const isActive = active === id
          return (
            <li key={id}>
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
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
