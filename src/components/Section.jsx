import Reveal from './Reveal.jsx'

export default function Section({ id, index, eyebrow, title, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-6xl scroll-mt-8 px-5 py-24 sm:px-8 md:py-32"
    >
      <Reveal>
        <p className="font-mono text-xs tracking-[0.2em] text-accent-ink uppercase">
          {index} / {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
        >
          {title}
        </h2>
      </Reveal>
      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  )
}
