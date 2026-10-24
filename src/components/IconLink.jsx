export default function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="grid size-11 place-items-center rounded-full text-xl text-ink/70 transition hover:bg-ink/5 hover:text-ink"
    >
      {children}
    </a>
  )
}
