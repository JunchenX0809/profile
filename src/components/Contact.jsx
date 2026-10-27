import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuArrowUpRight, LuCheck, LuCopy, LuFileText, LuMail } from 'react-icons/lu'
import { profile } from '../content/profile.js'
import Magnetic from './Magnetic.jsx'
import Reveal from './Reveal.jsx'

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume}`

const elsewhere = [
  { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedin },
  { label: 'GitHub', href: profile.github, Icon: FaGithub },
  { label: 'Résumé (PDF)', href: resumeUrl, Icon: LuFileText },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-24 md:py-32"
    >
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-paper sm:rounded-[2.5rem] sm:px-12 sm:py-16 md:px-16 md:py-20">
        <div aria-hidden="true" className="absolute -top-28 -right-28 -z-10 size-[28rem] rounded-full bg-accent/35 blur-3xl" />

        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">05 / Contact</p>
        <h2
          id="contact-title"
          className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
        >
          Let’s talk data, markets, or anything in between.
        </h2>
        <p className="mt-6 max-w-xl text-base text-paper/70 sm:text-lg">
          I’m always happy to hear about interesting problems, roles, and collaborations. Email is the best way to
          reach me.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic strength={0.2}>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper"
            >
              <LuMail aria-hidden="true" />
              {profile.email}
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-paper/60"
            >
              {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </Magnetic>
          <span role="status" className="sr-only">
            {copied ? 'Email address copied' : ''}
          </span>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-paper/10 pt-8 text-sm">
          {elsewhere.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper/80 transition hover:text-paper"
              >
                <Icon aria-hidden="true" />
                {label}
                <LuArrowUpRight aria-hidden="true" className="opacity-60" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
