import { about } from '../content/profile.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Data, markets, and the people who use them.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="first:text-ink">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 self-start">
          {about.stats.map((stat, i) => (
            <li key={stat.label}>
              <Reveal delay={i * 0.08} className="h-full rounded-2xl border border-line bg-card p-5">
                <p className="font-display text-4xl font-semibold tracking-tight">{stat.value}</p>
                <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
