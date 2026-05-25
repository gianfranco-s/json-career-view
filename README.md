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

Coded in TypeScript (Next.js + TailwindCSS), deployed on GitHub Pages at [gianfranco-salomone.com](https://gianfranco-salomone.com).

### Local development

```bash
npm install
npm run dev
```

The dev server fetches `cv.json` from GitHub on each request.

### Build via Docker

See [docker/README.md](docker/README.md) for build commands (artifact export and local nginx).

### GitHub Pages setup

Deployments are handled by `.github/workflows/deploy.yml` via GitHub Actions. One-time setup:

**1. Enable GitHub Pages**

Repo → Settings → Pages → Source → **GitHub Actions**

**2. Create a PAT for cross-repo triggers**

GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token

- Name: `RESUME_REPO_TOKEN`
- Scope: `repo`

**3. Add the PAT as a secret in the cv.json repo**

In [gianfranco-s/gianfranco-s](https://github.com/gianfranco-s/gianfranco-s):
Settings → Secrets → Actions → New repository secret → `RESUME_REPO_TOKEN`

**4. Add the notify workflow to the cv.json repo**

Copy `.github/notify-resume.yml.reference` from this repo into `gianfranco-s/gianfranco-s` as `.github/workflows/notify-resume.yml`.
This fires a `cv-updated` dispatch event here whenever `cv.json` changes on `main`.

**5. Configure DNS**

At your registrar, point `gianfranco-salomone.com` to GitHub Pages:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `gianfranco-s.github.io` |

GitHub provisions HTTPS automatically once DNS resolves (may take up to 24 h).

### Updating the CV

1. Edit `cv.json` in [gianfranco-s/gianfranco-s](https://github.com/gianfranco-s/gianfranco-s)
2. Push to `main`

The notify workflow fires automatically, triggering a rebuild and deploy here. No manual steps needed.

## If I ever get around to it
* add button in frontend to generate PDF for specific profile
* use carousel for current projects
* show status in current projects
* automate rebuild when cv.json changes (cross-repo GitHub Actions trigger)
