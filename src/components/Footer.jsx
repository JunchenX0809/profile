import { profile } from '../content/profile.js'

export default function Footer() {
  return (
    // Bottom padding leaves room for the floating navigation bar.
    <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-5 pt-4 pb-36 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-8">
      <p>
        © {__BUILD_DATE__.slice(0, 4)} {profile.firstName} {profile.lastName}
      </p>
      <p>
        v{__APP_VERSION__} · Updated {__BUILD_DATE__} · Built with React, Tailwind & Vite ·{' '}
        <a href={profile.sourceCode} className="underline underline-offset-4 hover:text-ink">
          Source
        </a>
      </p>
    </footer>
  )
}
