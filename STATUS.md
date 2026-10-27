# STATUS

## What was built

A beginner manual and static HTML site on applying for benefits and assistance, published by Asdale Dynamics, LLC (Indiana, formed October 2026).

**Contents**
- `docs/` — Markdown source of the manual (7 files):
  - `index.md` — overview, disclaimer, rights, getting started
  - `finding-programs.md` — chapter 1: finding benefit programs
  - `gathering-documents.md` — chapter 2: documents and where to get them
  - `filling-forms.md` — chapter 3: filling out applications
  - `tracking-applications.md` — chapter 4: tracking and follow-up
  - `checklists.md` — printable checklists
  - `what-to-expect.md` — timelines, outcomes, next steps
- `site/` — static HTML website (7 pages + CSS/JS), no build step, no dependencies, works offline:
  - `index.html`, `finding-programs.html`, `gathering-documents.html`, `filling-forms.html`, `tracking-applications.html`, `checklists.html`, `what-to-expect.html`
  - `assets/style.css`, `assets/main.js` (interactive checklists + nav highlighting)
- `README.md` — project overview, credits, disclaimer, license
- `LICENSE` — MIT License, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`
- `STATUS.md` — this file

**Topics covered:** finding programs, gathering documents, filling forms, tracking applications, checklists, what to expect. Education only, not legal advice. Credits Asdale Dynamics, LLC throughout. No secrets, API keys, or personal data. No `.github/workflows`.

## How to run it

No install or build step required.

- Markdown: read any file in `docs/` with a Markdown viewer or text editor.
- Static site: open any `site/*.html` file directly in a web browser (e.g. `site/index.html`). All pages link to each other and to `assets/style.css` and `assets/main.js` using relative paths, so the site works fully offline.
- Checklists: on `site/checklists.html`, checking a box strikes through the item (client-side JavaScript).

## Verification results

- LICENSE copyright line verified exact: `Copyright (c) 2026 Asdale Dynamics, LLC` (line 3).
- README credits Asdale Dynamics, LLC (multiple occurrences).
- All 7 HTML pages are well-formed (no unclosed/mismatched tags) — verified with Python `html.parser`.
- All internal HTML links resolve to existing files — no broken links.
- `assets/style.css` and `assets/main.js` referenced by all pages exist.
- No secrets, API keys, passwords, or personal data found in any file.
- No `.github/workflows` directory present.
- Git initialized and committed as a single root commit (`cec14b7`) with plain message, no co-author trailers. Working tree clean.
- Not pushed; no remote created; nothing published.

## Known gaps

- No automated test suite or CI (none requested; static site has no build step).
- HTML not validated against a formal DTD/schema beyond tag-balance check.
- Markdown files are not rendered/converted to HTML automatically (docs and site are parallel sources).
- No search function or sitemap on the static site.
- Program-specific eligibility rules and deadlines are not included (vary by location; users directed to confirm with agencies directly — by design, education only).
- No print-specific CSS for checklists (browser print works but is unoptimized).
