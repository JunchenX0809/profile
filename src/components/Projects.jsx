import { LuArrowUpRight } from 'react-icons/lu'
import { projects } from '../content/projects.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

// Stands in for a screenshot until the project has one.
function GeneratedCover({ number, kind, tone }) {
  return (
    <div aria-hidden="true" className="relative flex size-full items-end justify-between overflow-hidden bg-ink p-6 text-paper">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(var(--color-paper) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div
        className={`absolute -top-20 -right-12 size-64 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${tone}`}
      />
      <span className="relative font-display text-7xl leading-none font-semibold">{number}</span>
      <span className="relative font-mono text-[11px] tracking-[0.2em] text-paper/70 uppercase">{kind}</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0')
  const tone = index % 2 === 0 ? 'bg-accent/70' : 'bg-tide/70'

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
      <div className="aspect-[16/9] overflow-hidden border-b border-line">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <GeneratedCover number={number} kind={project.kind} tone={tone} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-xs tracking-wider text-muted uppercase">
          {project.kind} · {project.year}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-balance">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-pretty text-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-paper px-3 py-1 font-mono text-xs text-ink/80 ring-1 ring-line">
              {tag}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-5 pt-6">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent-ink"
              >
                {link.label}
                <LuArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="work" index="03" eyebrow="Selected work" title="Proof of work, from research to shipped tools.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
