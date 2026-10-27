import { motion } from 'motion/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuArrowDown, LuFileText } from 'react-icons/lu'
import { profile } from '../content/profile.js'
import IconLink from './IconLink.jsx'
import Magnetic from './Magnetic.jsx'
import PhotoCarousel from './PhotoCarousel.jsx'
import Typewriter from './Typewriter.jsx'

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume}`
const ease = [0.22, 1, 0.36, 1]

function rise(delay) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  }
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate flex min-h-svh items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(640px circle at 75% 35%, color-mix(in oklab, var(--color-accent) 16%, transparent), transparent 65%)',
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pt-12 pb-28 sm:gap-16 sm:px-8 sm:pt-20 sm:pb-32 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <motion.p
            {...rise(0.05)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/80 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inset-0 animate-ping-slow rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            <span className="hidden sm:inline">Currently ·</span> {profile.status}
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="mt-6 font-display text-5xl leading-[1.05] sm:mt-8 font-bold tracking-[0.08em] uppercase sm:text-7xl lg:text-[5.25rem]"
          >
            {profile.firstName}
            <br />
            <span className="text-accent-ink">{profile.lastName}</span>
          </motion.h1>

          <motion.p {...rise(0.25)} className="mt-6 min-h-[1.5em] font-mono text-base sm:mt-7 sm:text-xl">
            <span className="mr-2 text-accent-ink" aria-hidden="true">
              &gt;
            </span>
            <Typewriter words={profile.roles} />
          </motion.p>

          <motion.p
            {...rise(0.35)}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div {...rise(0.45)} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.2}>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-shadow hover:shadow-lg hover:shadow-ink/20"
              >
                See my work <LuArrowDown aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-ink/40"
              >
                <LuFileText aria-hidden="true" /> Résumé
              </a>
            </Magnetic>
            <div className="flex items-center gap-1">
              <Magnetic>
                <IconLink href={profile.linkedin} label="LinkedIn">
                  <FaLinkedin />
                </IconLink>
              </Magnetic>
              <Magnetic>
                <IconLink href={profile.github} label="GitHub">
                  <FaGithub />
                </IconLink>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* On phones the photo comes first and smaller, so it is on the first screen. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="relative order-first mx-auto w-full max-w-[12.5rem] sm:max-w-xs lg:order-none lg:max-w-sm"
        >
          <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-accent" />
          <div aria-hidden="true" className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-[2rem] border border-ink/20" />
          <PhotoCarousel photos={profile.photos} />
        </motion.div>
      </div>
    </section>
  )
}
