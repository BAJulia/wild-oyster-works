# Functional requirements

Status: ✅ implemented · 🟡 partial · ⬜ not started

| ID | Requirement | Acceptance criteria | Status |
| --- | --- | --- | --- |
| **NAV-1** | Site-wide navigation | Header on every page links to Gallery, Behind the Curtain, The Artist, Inquiries; wordmark returns home; current page is indicated. | ✅ |
| **NAV-2** | Responsive navigation | Below 860px, nav collapses into a menu button that opens/closes, announces its state (`aria-expanded`), and closes on navigation. | ✅ |
| **HOME-1** | Hero artwork | Homepage opens with a featured original artwork image, brand name, hero statement, supporting line and "Enter the gallery" link. | ✅ |
| **HOME-2** | Curated preview | Homepage shows works marked `featured`, each linking to its detail page. | ✅ |
| **HOME-3** | Invitation behind the curtain | Homepage includes a distinct, subtle invitation to the studio and the artist page. | ✅ |
| **GAL-1** | Browse completed work | Gallery lists all artworks as image-led cards with title and collection. | ✅ |
| **GAL-2** | Category filters | Filter buttons for All + each collection; selecting one shows only matching works; the URL reflects the filter; result count announced to screen readers. | ✅ |
| **GAL-3** | Clickable cards | Each card opens `/gallery/<slug>`. | ✅ |
| **ART-1** | Detail page | Large image, title, collection, description and any provided details (medium, dimensions, year, status, price). Missing fields are omitted. | ✅ |
| **ART-2** | Additional photographs | Extra finished, in-context, before and progress photos display in grids; each opens full-size. | ✅ |
| **ART-3** | Creative journey | Before → in progress → film → final transformation section shown only when such content exists, visually distinct from the gallery presentation. | ✅ |
| **ART-4** | Inquiry from artwork | "Inquire about this piece" opens the inquiry page pre-set to Purchase with the artwork selected (hidden if sold / not for sale). | ✅ |
| **ART-5** | Awards | Awards display on the detail page when present. | ✅ |
| **ART-6** | Video | Videos with a URL are embedded; videos without one show a "coming" note. | ✅ |
| **BTC-1** | Studio landing | Behind the Curtain has a warmer visual treatment, an introduction, and a list of stories. | ✅ |
| **BTC-2** | Story pages | Each story has its own page with cover, text, photos, optional video, and a link to the related artwork. | ✅ |
| **ARTIST-1** | Meet the Artist | Page introduces the artist, disciplines, and recognition, with authentic photographs. | 🟡 draft copy; name pending |
| **INQ-1** | Inquiry types | Visitor can choose Purchase, Commission, Collaboration or General. | ✅ |
| **INQ-2** | No-backend contact | Form composes a subject and message. If an email is configured it opens the visitor's email program (mailto); otherwise it shows a copyable message. No email address is invented. | 🟡 awaiting address |
| **CONTENT-1** | Data-driven content | Adding an artwork or story requires only a data entry and photos; no page code changes. | ✅ |
| **CONTENT-2** | Graceful optional fields | An artwork with only one photo and the required fields renders without gaps or errors. | ✅ |
| **A11Y-1** | Accessibility | All images have alt text; controls are keyboard-usable with visible focus; skip link; semantic headings and landmarks. | ✅ |
| **PERF-1** | Image loading | Non-critical images lazy-load; hero loads eagerly. | 🟡 resizing pending |
| **RESP-1** | Responsive layout | Usable without horizontal scrolling at 375px, 768px and desktop widths. | ✅ |
