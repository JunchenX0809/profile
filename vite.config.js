import { readFileSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const version = readFileSync(new URL('./version.txt', import.meta.url), 'utf8').trim()
const buildDate = new Date().toISOString().slice(0, 10)
// GitHub Actions provides the commit being built; local builds have none.
const commit = process.env.GITHUB_SHA?.slice(0, 7) ?? 'local'

// Publishes /profile/version.txt so the live site shows which release it serves.
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
  // GitHub Pages serves this repo at junchenx0809.github.io/profile/, so every
  // built asset URL must start with /profile/. Change to '/' on a custom domain.
  base: '/profile/',
  plugins: [react(), tailwindcss(), versionFile()],
  define: {
    __APP_VERSION__: JSON.stringify(version),
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
})
