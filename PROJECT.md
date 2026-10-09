# Project record

Living document. Updated as decisions are made.

## Business objectives

- Present Wild Oyster Works as a serious fine art studio: artwork first, gallery-quality presentation.
- Build connection with the artist through the creative process ("Behind the Curtain").
- Make it easy to inquire about purchases, commissions and collaborations.
- Keep the site easy to extend: new work, stories, video, and later e-commerce or a CMS.

## Implemented (MVP, v0.1)

- Site-wide design: ivory / charcoal / muted green / wood / brass palette, Cormorant Garamond headings, Inter body.
- Responsive header with mobile menu, footer, skip-to-content link.
- **Home**: The Clearing as the hero, statement, selected works, collection links, invitation to the studio.
- **Gallery**: 20 works across Functional, Living, Wall and Wearable Art, with category filters (shareable via URL, e.g. `/gallery?category=living-art`).
- **Artwork detail pages**: large image, details, awards, more photographs, story, "in the world", the creative journey (before / in progress / film / transformation), inquiry links, previous/next.
- **Behind the Curtain**: warmer studio styling, three stories, each with its own page.
- **Meet the Artist**: draft introduction, disciplines, recognition.
- **Inquiries**: four inquiry types, form that composes an email (mailto) or a copyable message while no address is set.
- Full-size photo viewer (lightbox) on detail and story pages.

## Assumptions (reversible)

- **Wearable Art** added as a fourth collection because the photos were grouped that way.
- **Artwork titles are working titles** from photo filenames (e.g. "Alice's Peacock", "Whale Below the Storm"). Living Art titles are descriptive, e.g. "Feathers and Antlers".
- "Ship in Moonlight" photos 1 and 2 show **two different pieces** (a chest of drawers and a cabinet), listed separately.
- The two red-table photos are **one piece**, "Red Table with Sunset".
- Medium is described generally, e.g. "Painted chest of drawers", until confirmed (oil vs. acrylic, etc.).
- No prices, dimensions, years or availability shown anywhere until supplied.
- Artist page copy is a **draft** built only from the brief, written with she/her pronouns as in the brief.
- Fonts load from Google Fonts. They could be self-hosted later.

## Outstanding questions

1. **Names and dates** for each piece: titles, year, medium, dimensions, availability, price (to be supplied in an update).
2. **Artist's name**: how should the artist be named on the site?
3. **Inquiry email address**: which address should receive inquiries? Until set, the form only prepares a copyable message.
4. The photo `503136247_…_n.jpg` in the Clearing folder (outdoor cedar cabinet with a top drawer) doesn't appear to be the same wardrobe. Is it a different piece? It's currently unused.
5. Is "CDHR" the right way to name the exhibition, or should it be spelled out?
6. Is there a story behind the name "Wild Oyster Works" to tell on the site?
7. Should Wearable Art stay a separate collection?
8. Hosting and domain: where should the site live when it's ready?

## Known issues

- Photos are served at full size (13 MB total). Fine locally, but they should be resized/compressed before going live.
- With no inquiry email configured, visitors can't actually send an inquiry yet.
- Photos display with the same 4:5 crop in grids. Wide pieces (e.g. Whale Breach) are cropped in thumbnails, but shown whole on their detail pages.

## Next priorities

1. Add names, dates and details for each piece.
2. Set the inquiry email (or a form service such as Formspree).
3. Replace draft artist copy with the artist's own words; add a portrait.
4. Image optimization (resized web versions).
5. The Clearing film, when ready.
6. Hosting and domain.
