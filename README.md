# JSON Career View

### I have a dream...
To be able to manage my life sheet from a single source. I want to be able to
* use a structured format for *all* my work experiences
* filter my life sheet by profile on [gianfranco-salomone.com](https://gianfranco-salomone.com/)
* export to pdf from my website
* pay close to nothing to maintain these services
* *eventually* be able to update it using an LLM based on specific job descriptions

This is my personal project, where I sometimes put in the work to get there.

## Architecture

The CV data lives in a separate repo as the single source of truth:
[gianfranco-s/gianfranco-s — cv.json](https://github.com/gianfranco-s/gianfranco-s/blob/main/cv.json)

At build time, the Next.js app fetches that file and renders it as a static site. No local JSON copy is needed.

## Website

Coded in TypeScript (Next.js + TailwindCSS), deployed on Cloudflare Pages.

### Local development

```bash
cd my-json-resume
npm install
npm run dev
```

The dev server fetches `cv.json` from GitHub on each request.

### Build via Docker

See [my-json-resume/docker/README.md](my-json-resume/docker/README.md) for build commands (artifact export and local nginx).

### Cloudflare Pages setup

| Setting | Value |
|---|---|
| **Root directory** | `my-json-resume` |
| **Build command** | `npm ci && npm run build` |
| **Build output directory** | `out` |
| **Node.js version** | `NODE_VERSION = 20` |

### Updating the CV

1. Edit `cv.json` in [gianfranco-s/gianfranco-s](https://github.com/gianfranco-s/gianfranco-s)
2. Push the change
3. Trigger a Cloudflare Pages rebuild (manually or via a deploy hook from a GitHub Action)

The new build fetches the updated JSON and publishes the static site automatically.

## If I ever get around to it
* add button in frontend to generate PDF for specific profile
* use carousel for current projects
* show status in current projects
* automate CF Pages rebuild when cv.json changes (GitHub Actions → deploy hook)
