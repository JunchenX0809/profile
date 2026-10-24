import { LuArrowUpRight, LuGraduationCap } from 'react-icons/lu'
import { education, experience } from '../content/experience.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Experience" title="Where I’ve put data to work.">
      <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr]">
        <ol className="border-l border-line">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 border-paper ${
                  i === 0 ? 'bg-accent ring-4 ring-accent/20' : 'bg-ink/30'
                }`}
              />
              <Reveal>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">
                  {job.period} · {job.location}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
                <p className="mt-1 font-medium text-accent-ink">
                  {job.href ? (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      {job.company}
                      <LuArrowUpRight aria-hidden="true" />
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <ul className="mt-4 space-y-2 text-muted">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-ink/40" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <aside aria-labelledby="education-title" className="lg:sticky lg:top-10 lg:self-start">
          <Reveal className="rounded-3xl border border-line bg-card p-7">
            <h3
              id="education-title"
              className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase"
            >
              <LuGraduationCap className="size-4 text-accent-ink" aria-hidden="true" />
              Education
            </h3>
            <ul className="mt-6 space-y-7">
              {education.map((school) => (
                <li key={school.school}>
                  <p className="font-mono text-xs text-muted">{school.period}</p>
                  <p className="mt-1 font-semibold">{school.school}</p>
                  <p className="mt-1 text-sm text-muted">{school.degree}</p>
                  <p className="mt-2 text-sm text-accent-ink">{school.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </Section>
  )
}
