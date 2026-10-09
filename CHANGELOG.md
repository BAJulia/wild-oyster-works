# Changelog

## 0.2.0 (2026-10-09): Artwork Curator

- Added the **artwork-curator** Claude Code subagent (`.claude/agents/artwork-curator.md`) with four modes: add new artwork, enrich existing artwork, add creative journey, review gallery (read-only). Uses approval gates for content, local changes and publishing.
- Added `artwork-intake/` for original photographs. Its contents are excluded from Git.
- Added `scripts/prepare-image.ps1`: web copies of photos (upright, ≤2000px, no crop, metadata/GPS removed, no overwrite).
- Added `npm run check:content` (`scripts/check-content.mjs`): read-only content validation.
- Added `.claude/settings.json`: Claude Code always asks before `git push` / `git merge`.
- No artwork records or website pages were changed.

## 0.1.1 (2026-10-09): GitHub Pages

- Added an automatic deploy workflow: every push to `main` publishes the site to GitHub Pages.
- Site now works when served from a sub-folder (`/wild-oyster-works/`): images, links and page refreshes.

## 0.1.0 (2026-10-09): first working MVP

- Set up React + TypeScript + Vite project with React Router (replaces the placeholder `index.html`).
- Content model (`src/data/`) for artworks, stories, collections and site settings.
- Added 20 artworks from the supplied photographs across four collections, including The Clearing with before, progress, exhibition and award details.
- Pages: Home, Gallery (with filters), Artwork detail, Behind the Curtain + story pages, Meet the Artist, Inquiries, Not found.
- Added Wearable Art as a fourth collection.
- Added project documents: README, PROJECT, REQUIREMENTS, CHANGELOG.
