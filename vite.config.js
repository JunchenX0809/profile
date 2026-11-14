import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const version = readFileSync(new URL('./version.txt', import.meta.url), 'utf8').trim()
const buildDate = new Date().toISOString().slice(0, 10)
// The commit being built. CI variables can hold a branch name instead of a hash
// (a dashboard-started Workers build reported "main"), so fall back to git itself.
function currentCommit() {
  const fromCi = process.env.WORKERS_CI_COMMIT_SHA || process.env.GITHUB_SHA || ''
  if (/^[0-9a-f]{7,40}$/i.test(fromCi)) return fromCi.slice(0, 7)
  try {
    return execSync('git rev-parse --short=7 HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
  } catch {
    return 'unknown'
  }
}
const commit = currentCommit()

// Publishes /version.txt so the live site shows which release it serves.
function versionFile() {
  return {
    name: 'version-file',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.txt',
        source: `${version}\nbuilt ${buildDate} from ${commit}\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // The site lives at the root of junchenxiong.com. A host that serves it from a
  // subfolder (as GitHub Pages did at /profile/) needs that folder here.
  base: '/',
  plugins: [react(), tailwindcss(), versionFile()],
  define: {
    __APP_VERSION__: JSON.stringify(version),
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
})
