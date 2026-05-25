# CLAUDE.md

## Project
Static resume site — Next.js (`output: 'export'`) → `out/` → GitHub Pages at `gianfranco-salomone.com`.
CV data lives in a separate repo: [gianfranco-s/gianfranco-s/cv.json](https://github.com/gianfranco-s/gianfranco-s/blob/main/cv.json), fetched at build time.

## Dev
```bash
npm install && npm run dev   # http://localhost:3000
npm run build                # outputs to out/
```

## Deploy
Push to `main` → GitHub Actions builds and deploys automatically.
Manual trigger: `gh workflow run deploy.yml`

## Key rule
**When the file structure changes, read and update `.agents/ARCHITECTURE.md`.**
