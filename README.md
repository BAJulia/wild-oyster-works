# Wild Oyster Works

Website for Wild Oyster Works, a fine art studio making original paintings, hand-painted furniture, botanical work and wearable art.

> *Fine art up front. Creative journey in the back.*

## Running the site on your computer

You need **Node.js** (version 20 or newer). Check with `node -v`.

```bash
npm install      # first time only: downloads the libraries the site uses
npm run dev      # starts the site
```

Then open **http://localhost:5173** in your browser. The page reloads automatically when files change. Press `Ctrl+C` in the terminal to stop it.

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Checks the code and builds the finished site into `dist/` |
| `npm run preview` | Serves the built site locally to check it before publishing |

## Publishing (GitHub Pages)

The live site is at **https://bajulia.github.io/wild-oyster-works/**.

Publishing is automatic: every time changes are pushed to the `main` branch on GitHub, the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and publishes it. It takes about two minutes.

- **See progress:** on GitHub, open the repository's **Actions** tab. A green check means it's live; a red cross means the build failed (click it to see why). The live site keeps its previous version until a build succeeds.
- **Publish again without changes:** Actions tab → *Deploy to GitHub Pages* → **Run workflow**.
- **One-time setup** (already done once): repository **Settings → Pages → Source: GitHub Actions**.
- **Custom domain later:** add it under Settings → Pages, then change `BASE_PATH` in the workflow to `/`.

## The Artwork Curator (AI assistant)

A Claude Code assistant that adds new pieces, fills in missing details, writes descriptions with you, prepares photos and reviews the gallery. It's defined in [`.claude/agents/artwork-curator.md`](.claude/agents/artwork-curator.md).

**How to use it:** open Claude Code in this folder and ask in plain words, for example:

- *"Use the Artwork Curator to add a new piece."* Put the photos in [`artwork-intake/`](artwork-intake/README.md) first.
- *"Use the Artwork Curator to update The Clearing."*
- *"Use the Artwork Curator to add the process photos for Alice's Peacock."*
- *"Use the Artwork Curator to review my gallery for missing information."* This one only reports; it changes nothing.

You can also type `@artwork-curator` followed by your request.

**What to expect:** the curator interviews you a few questions at a time; you can always say "skip". It then shows you the text and details for approval (**Gate 1**), then the exact files it will change (**Gate 2**). Only after both does it change anything, and only on your computer. **Publishing is always a separate step**: nothing goes live until you explicitly ask for the changes to be pushed to GitHub. Claude Code will also ask for confirmation before any `git push`.

Helper commands it uses (you can run them too):

| Command | What it does |
| --- | --- |
| `npm run check:content` | Checks every artwork and story: unique ids/slugs, image files exist, alt text present. Lists missing details. Changes nothing. |
| `powershell -ExecutionPolicy Bypass -File scripts/prepare-image.ps1 -Source artwork-intake/<photo> -Destination public/images/artworks/<folder>/<name>.jpeg` | Makes a web copy of a photo: upright, max 2000px, no cropping, location data removed. Never touches the original. |

## Adding or changing artwork

All content lives in plain data files. You never need to edit page code to add work.

1. **Add the photographs** to `public/images/artworks/<folder>/`. Use lowercase file names with hyphens, e.g. `blue-dresser-front.jpeg`.
2. **Add an entry** to [`src/data/artworks.ts`](src/data/artworks.ts). Copy an existing entry and change it. Only these fields are required:

   ```ts
   {
     id: 'aw-009',                 // any unique id
     slug: 'blue-dresser',         // becomes the web address: /gallery/blue-dresser
     title: 'Blue Dresser',
     category: 'functional-art',   // functional-art | living-art | wall-art | wearable-art
     description: 'One or two sentences.',
     featuredImage: { src: '/images/artworks/functional/blue-dresser.jpeg', alt: 'Describe the photo for screen readers.' },
   }
   ```

3. **Optional fields**: `medium`, `dimensions`, `year`, `status`, `price`, `galleryImages` (more finished photos), `inContextImages` (with the artist, at exhibitions), `beforeImages`, `processImages`, `videoLinks`, `story` (paragraphs), `awards`, and `featured: true` (shows it on the homepage). Leave out anything you don't have; the page adjusts.

Studio stories for **Behind the Curtain** work the same way in [`src/data/stories.ts`](src/data/stories.ts). Site-wide wording and the inquiry email address are in [`src/data/site.ts`](src/data/site.ts). Collection names are in [`src/data/categories.ts`](src/data/categories.ts).

### Image tips

- Aim for photos about **2000px on the longest side** and under ~1 MB. Larger photos work but load slowly on phones.
- Every image needs `alt` text: a short description of what's in the photo, for visitors using screen readers.
- During development, a missing photo shows a striped "Photograph to come" placeholder with the expected path. In the built site it simply doesn't appear.

## Project structure

```
public/images/        Photographs (served as-is)
src/data/             Content: artworks, stories, categories, site settings
src/components/       Reusable building blocks (layout, image, cards, photo grid, video)
src/pages/            One file per page
src/styles/global.css All styling: colors, fonts and layout in one place
```

Built with React, TypeScript, Vite and React Router. No database, CMS or paid services.

## Project documents

- [PROJECT.md](PROJECT.md): objectives, assumptions, open questions, known issues, next priorities
- [REQUIREMENTS.md](REQUIREMENTS.md): functional requirements and acceptance criteria
- [CHANGELOG.md](CHANGELOG.md): record of significant changes
