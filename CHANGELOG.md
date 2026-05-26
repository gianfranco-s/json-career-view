# Changelog

All notable changes to this project are documented here.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.10.0] — 2026-05-26

### Added
- Profile routes statically generated with a filtered subset of work experience
- `ProfileSwitcher` pill-nav component (hidden on print)
- `resumeProfiles` top-level field in `cv.json` — defines available profiles, their titles and optional skill filters; no coupling to codebase
- `showInProfiles` field on each work entry in `cv.json` — controls which profile routes it appears on; absent = show everywhere
- `src/lib/cv.ts` — shared `fetchCV()` and `filterCV(data, slug)` utilities
- `src/app/icon.svg` — GS initials SVG favicon
- `docker/docker-compose.yml` for local development

### Changed
- Deployment now done through GitHub Pages
- Page title and description now derived from `cv.json` at build time via `generateMetadata()`
- `Resume` component accepts `activeProfile` prop; passes `resumeProfiles` down to `ProfileSwitcher`
- `[profile]/page.tsx` — `generateStaticParams` reads slugs from `cv.json`; sentinel `_` route ensures build resilience when `resumeProfiles` is absent
- css styles

### Removed
- `favicon.ico` (replaced by `icon.svg`)
- Freelance stub work entry (individual company entries already cover the same roles)

---

## [0.9.0] — 2026-05-24 / 2026-05-25

### Added
- CV data fetched at build time from a public GitHub JSON (`gianfranco-s/gianfranco-s/cv.json`); no local data file committed to this repo
- `repository_dispatch` event triggers a rebuild of this site whenever `cv.json` changes

### Changed
- Moved Next.js project from subdirectory to repository root (`refactor(resume): move to root level`)

---

## [0.8.0] — 2025-11-10

### Added
- Docker build flow — multi-stage `Dockerfile`: `builder → artifacts` (static files only) and `builder → nginx` (local server)
- `docker/README.md` with usage instructions

### Changed
- Updated deployment documentation

---

## [0.7.0] — 2025-03-22 / 2025-05-05

### Added
- AWS Lambda handler for serverless PDF generation via `wkhtmltopdf`
- CLI interface for local PDF export
- Docker-based `wkhtmltopdf` build pipeline and local debug environment
- Lambda packaging scripts

### Changed
- Refactored Python project structure to support both CLI and Lambda entry points (PR #17)
- Updated Next.js from 14.1.4 → 14.2.25 (PR #18)
- Updated nanoid 3.3.7 → 3.3.11 (PR #19)

---

## [0.6.0] — 2025-03-06 / 2025-03-21

### Added
- Python PDF exporter using `wkhtmltopdf` templates

### Changed
- Broke apart research and teaching positions in CV data
- Updated summary

---

## [0.5.0] — 2024-05-11

### Added
- Summary field in Interests section

### Changed
- Work experience: highlights stored as a plain string array in `cv.json`; no longer requires splitting on `.` at render time (PR #14)
- Education URLs rendered conditionally

---

## [0.4.0] — 2024-04-19 / 2024-04-21

### Added
- Projects section with `ProjectsCard` and `ProjectsItem` components (PR #12)

### Fixed
- Light color scheme

---

## [0.3.0] — 2024-04-14

### Added
- Unified `Resume` top-level layout component
- Print-to-PDF via `window.print()` (PR #8)
- External links open in new tab

### Fixed
- TypeScript types across all components — `WorkExperience`, `Skill`, `Education`, `Language`, `Interest`, `ContactInfo` (PR #4)
- Heading hierarchy for consistent font sizing

---

## [0.2.0] — 2024-04-11 / 2024-04-12

### Changed
- Migrated to [JSON Resume standard schema](https://jsonresume.org/) (PR #2)
- Dates show year only in work experience
- Nullable fields added for optional sections

---

## [0.1.0] — 2024-04-09 / 2024-04-10

### Added
- Initial Next.js project with TailwindCSS and TypeScript
- Two-column resume layout
- Core components: `ResumeTitle`, `ContactInfoCard`, `WorkExperienceCard`, `SkillsCard`, `EducationCard`, `SpokenLanguagesCard`, `InterestsCard`
- FontAwesome icons for contact links
- `README.md` with setup instructions
