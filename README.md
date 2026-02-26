# Margarin Sandbox (Eleventy + GitHub Pages)

This repo now runs on Eleventy; source Markdown lives under `src/`, shared layout under `src/_layouts`, and assets under `assets/`. Build output goes to `_site/`, which is published to GitHub Pages via `peaceiris/actions-gh-pages`.

## Local commands
```bash
npm install
npm run build   # build static site to _site/
npm run start   # serve with Eleventy (http://localhost:8080)
```

## Updating content
- Edit Markdown files under `src/` (`index.md`, `heartopia/index.md`, etc.).
- Put images into `assets/` and reference them with `/assets/...` in Markdown.
- Run `npm run build` to verify.
- Push to `main`; GitHub Action will publish `_site/` to `gh-pages` automatically.

## Front Matter Template (Proactive Agent)

When creating spotlight pages in `src/topics/`, use this front matter:

```yaml
---
title: Page Title
layout: default
description: One-sentence SEO/meta description
lastModified: YYYY-MM-DD HH:MM:SS
category: Category Name
tags: [tag1, tag2, tag3]
---
```

**Notes:**
- `layout: default` is **REQUIRED** — must include in front matter (data cascade doesn't work)
- `lastModified` MUST include time (HH:MM:SS) because multiple posts can be created in one day
- Use `category: Tech/Anime/Games/AI/Japan/Science/Music/Indie` from rotation

## GitHub Pages
The workflow `.github/workflows/deploy.yml` installs dependencies, runs the Eleventy build, and deploys `_site/` to the `gh-pages` branch with the default `GITHUB_TOKEN`.
