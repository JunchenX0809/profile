import { skillGroups } from '../content/skills.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section id="skills" index="04" eyebrow="Toolkit" title="The tools I reach for.">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 2) * 0.08}
            className="h-full rounded-3xl border border-line bg-card p-6 sm:p-7"
          >
            <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{group.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
                >
                  {Icon && <Icon className="size-4" aria-hidden="true" />}
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
