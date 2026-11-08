// Writes the rendered page into dist/index.html so crawlers that don't run
// JavaScript still read the full content. Runs after both builds in `npm run build`.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'

const ssrDir = new URL('../dist-ssr/', import.meta.url)
const page = new URL('../dist/index.html', import.meta.url)
const placeholder = '<div id="root"></div>'

const { render } = await import(new URL('entry-server.js', ssrDir).href)
const html = readFileSync(page, 'utf8')
if (!html.includes(placeholder)) throw new Error(`dist/index.html has no ${placeholder} to fill`)

// A replacer function keeps "$" in the content (e.g. "$200K+") from being read as a pattern.
writeFileSync(page, html.replace(placeholder, () => `<div id="root">${render()}</div>`))
rmSync(ssrDir, { recursive: true })
console.log('prerendered dist/index.html')
