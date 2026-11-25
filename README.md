# Dormitory Portfolio — Iman Husni

A responsive, single-page portfolio built around an illustrated dormitory. Each window on the
building opens a section of the portfolio in a fixed-size overlay panel.

Built with **Vite + React + TypeScript** and plain CSS. No UI framework, no Tailwind, no runtime
CDN dependencies for icons.

---

## Quick start

Requires **Node.js 18 or newer** (Node 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal — by default <http://localhost:5173>.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot reload. |
| `npm run build` | Type-checks the project (`tsc -b`) and outputs a production build to `dist/`. |
| `npm run preview` | Serves the built `dist/` folder locally so you can check the production output. |

## Project structure

```
.
├── index.html                  # HTML entry point, fonts, favicon, meta tags
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── public/                     # Static assets, copied as-is into the build
│   ├── avatar.png              # Pixel-art avatar by the front door
│   ├── favicon.png             # Browser tab icon
│   └── portfolio-contact-sheet.png  # Project artwork (4 quadrants, used via CSS crops)
└── src/
    ├── main.tsx                # React entry point
    ├── App.tsx                 # All components and site content
    ├── index.css               # Design system, animations, responsive rules
    ├── logos.ts                # Inlined brand SVG paths for the tech stack
    ├── techStack.ts            # Tech stack data
    └── TechLogo.tsx            # Icon renderer
```

There are no absolute local file paths anywhere in the source. Every asset reference is either a
`/public` path resolved by Vite or an inlined SVG, so the project works from any folder or host.

## Content

- **Who am I?** — introduction plus a compact grid of technology icons.
- **Projects** — ChronoLux, weVOLT, Voxora, SediaGo (one slide each, with description, impact and tech).
- **Experience** — Web Design Assistant (WordPress), August – September 2025, presented as a
  sticky-note board.
- **Student journey** — Dean's List and CGPA 3.90, SMARTTYnker, AI Explorer, Hackathons & Events.
  Same frame dimensions and navigation as Projects.
- **Contact** — LinkedIn and Email icon buttons.

To edit content, open `src/App.tsx`. Projects live in the `projects` array, journey slides in
`journeySlides`, and the tech stack in `src/techStack.ts`.

## Deploying

The build output is a completely static site — any static host works.

### Netlify

1. Push this repository to GitHub.
2. In Netlify choose **Add new site → Import an existing project**, select the repo.
3. Build command: `npm run build` — Publish directory: `dist`.
4. Deploy.

A `netlify.toml` with these settings is already included, so Netlify should detect them
automatically.

### Vercel

1. Import the repository in Vercel.
2. Vercel auto-detects Vite. Confirm build command `npm run build` and output directory `dist`.
3. Deploy.

### GitHub Pages

1. In `vite.config.ts`, set `base` to your repository name, for example:
   ```ts
   export default defineConfig({ plugins: [react()], base: '/your-repo-name/' })
   ```
   Skip this if you deploy to a `username.github.io` root repository.
2. Run `npm run build`.
3. Publish the `dist/` folder to the `gh-pages` branch, for example with the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d dist
   ```

### Any other host

Upload the contents of `dist/` to your web root. No server-side runtime is required.

## Notes

- Fonts (`DM Mono`, `Playfair Display`) load from Google Fonts. If you need to work fully offline,
  download the font files and self-host them from `public/`.
- `public/portfolio-contact-sheet.png` is placeholder artwork. To use real project images, drop them
  into `public/` and replace the `crop` values in the `projects` array, or swap the
  `.project-crop-*` background rules in `src/index.css`.
- Reduced-motion preferences are respected: the avatar wave and other animations are disabled when
  the visitor's OS asks for less motion.
