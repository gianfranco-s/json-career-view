# Architecture

## Overview
Single-page static resume rendered from a remote JSON file. Built with Next.js static export and served via GitHub Pages.

## Data flow
```
gianfranco-s/gianfranco-s (cv.json)
        │
        │  fetched at build time (raw.githubusercontent.com)
        ▼
src/app/page.tsx  →  next build  →  out/  →  GitHub Pages
```
A `repository_dispatch` event from the cv repo triggers a rebuild here whenever `cv.json` changes.

## File structure
```
/
├── .agents/
│   └── ARCHITECTURE.md       # this file — update when structure changes
├── .claude/
│   └── CLAUDE.md             # project primer for Claude
├── .github/
│   ├── workflows/
│   │   └── deploy.yml        # build + deploy to GitHub Pages
│   └── notify-resume.yml.reference  # copy to gianfranco-s/gianfranco-s
├── docker/
│   ├── Dockerfile            # multi-stage: builder → artifacts / nginx runner
│   ├── .dockerignore
│   └── README.md
├── public/
│   ├── CNAME                 # gianfranco-salomone.com (copied to out/ at build)
│   └── *.svg
├── src/
│   ├── app/
│   │   ├── page.tsx          # fetches cv.json, renders <Resume>
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   └── components/
│       ├── Resume.tsx         # top-level layout component
│       ├── types.ts           # JSON Resume schema types
│       ├── typesCustom.ts     # project-specific type extensions
│       └── *Card / *Item      # section components (Work, Education, Skills…)
├── next.config.mjs            # output: 'export', trailingSlash, unoptimized images
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Key constraints
- `output: 'export'` — no server; everything must be statically renderable at build time.
- `cv.json` is fetched at build time only; changing it requires a new build.
- GitHub Pages serves from the `out/` directory produced by `npm run build`.
