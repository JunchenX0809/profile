# Junchen Xiong — personal website

Live at [junchenx0809.github.io/profile](https://junchenx0809.github.io/profile/).

A single-page site built with [React](https://react.dev/), styled with
[Tailwind CSS](https://tailwindcss.com/), animated with [Motion](https://motion.dev/),
and bundled by [Vite](https://vite.dev/). GitHub Actions builds it and publishes
it to GitHub Pages whenever `main` changes.

## Run it locally

Requires [Node.js](https://nodejs.org/) (`brew install node` on macOS).

```sh
npm install      # once, and after dependencies change
npm run dev      # live preview at http://localhost:5173/profile/ that reloads on save
npm run lint     # check the code for common mistakes
npm run build    # produce the publishable site in dist/
npm run preview  # serve dist/ to check the production build
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/content/` | All text, links, jobs, projects, and skills. Most updates happen here. |
| `src/components/` | One file per page section (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`) plus shared pieces (`Nav`, `Section`, `Reveal`, `Typewriter`). |
| `src/index.css` | Design tokens (colors, fonts, animations) and base styles. |
| `src/assets/` | Images that the code imports; Vite compresses and fingerprints them. |
| `public/` | Files served unchanged at a fixed URL, such as the résumé PDF and favicon. |
| `index.html` | The page shell: title, description, and social-preview tags. |
| `.github/workflows/deploy.yml` | The build-and-publish pipeline. |

## Common updates

**Text, roles, and links.** Edit `src/content/profile.js` (hero, about, stats,
email, social links) or `src/content/experience.js` (jobs and education).

**Add a project or proof of work.** Add an entry to `src/content/projects.js`.
To give it a screenshot:

1. Save the image in `src/assets/projects/` (create the folder the first time)
   at about 1600 pixels wide, ideally under 300 KB. On macOS:
   `sips -s format jpeg -Z 1600 input.png --out src/assets/projects/name.jpg`.
2. Import it at the top of `projects.js`:
   `import bankuityCards from '../assets/projects/bankuity-cards.jpg'`
3. Set `image: bankuityCards` and describe it in `imageAlt` for screen readers.

Projects without an image get a generated cover. Links can point to a live
demo, a repository, a paper, or a PDF placed in `public/`.

**Replace the résumé.** Overwrite `public/Junchen_Xiong_Resume.pdf`, keeping
the filename so existing links still work.

**Change the look.** Colors and fonts are tokens in the `@theme` block of
`src/index.css`. Changing `--color-accent` there recolors every accent on the site.

## Deployment

Every pull request runs `lint` and `build` as a check. A merge to `main`
builds the site and publishes `dist/` to GitHub Pages. The repository's
**Settings → Pages → Build and deployment → Source** must be set to
**GitHub Actions**.

`vite.config.js` sets `base: '/profile/'` because GitHub Pages serves this
repository under `/profile/`. Change it to `'/'` when the site moves to its own
domain.
