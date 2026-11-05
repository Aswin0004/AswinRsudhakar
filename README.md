# Aswin R Sudhakar — Modern portfolio

A responsive, multi-page personal portfolio built with **HTML, CSS, and vanilla JavaScript**, ready to publish on GitHub Pages. No build tools, tracking scripts, API keys or server required.

## What's inside

- `index.html`: Home page with cinematic hero, featured work, expertise, articles, and contact form.
- `projects.html`: Project gallery.
- `project.html?id=educore` (and other IDs): Individual case studies.
- `about.html`: About, technical skills, professional experience and faculty-development training.
- `blog.html`: Journal index with filters.
- `article.html?id=building-educore` (and other IDs): Articles.
- `assets/style.css`: Responsive design and animation.
- `assets/app.js`: Rendering, mobile nav, forms and UI behavior.
- `assets/photos/`: Your **uploaded edited photographs**, web-optimized only (resize and WebP compression; no new face changes).
- `assets/projects/`: AI-generated **conceptual** product visuals (not actual screenshots).
- `assets/data/projects.json`, `assets/data/posts.json`: Editable content sources.
- `assets/docs/Aswin-R-Sudhakar-CV.pdf`: Your supplied résumé. Note: it includes personal contact details.
- `sync_content.py`: Regenerates `assets/data.js` from JSON so the website also works when opened directly as a local file.

## Run locally

Unzip and double-click `index.html`, or (recommended) launch a local server:

```bash
python -m http.server 8000
```

Visit http://localhost:8000. The same files work on GitHub Pages.

## Publish with GitHub Pages

1. Create a new GitHub repository. If it is your profile website, name it `Aswin0004.github.io` (assuming this remains your GitHub username).
2. Upload **the contents of this folder**, not the outer folder.
3. In the repository, open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. After publishing, test every page, project card, journal filter, and mobile menu.

## Update projects and blog articles

1. Open `assets/data/projects.json` or `assets/data/posts.json` in VS Code.
2. Edit or add records. Keep `id` unique. Project status is intentionally described conservatively; do not list planned features as implemented.
3. Run `python sync_content.py` from this directory.
4. Preview, then commit all changes to GitHub.

### Add project screenshots and captions

Create a folder `assets/screenshots` (and optionally subfolders). Add screenshots after removing real client names, private data and sensitive content. In a project inside `assets/data/projects.json`, add:

```json
"gallery": [
  {
    "src": "educore/dashboard.webp",
    "title": "Academic dashboard",
    "description": "The staff dashboard summarizes enrollment and session activity."
  },
  {
    "src": "educore/exams.webp",
    "title": "Exam management",
    "description": "The teacher view configures exams and reviews attempts."
  }
]
```

Store these images at `assets/screenshots/educore/dashboard.webp` etc. Re-run `python sync_content.py`.

### Add verified links

Each project has `"demo": ""` and `"github": ""`. Populate these with public `https://...` URLs. Empty values are hidden automatically—no dead buttons. Do **not** publish private repositories or confidential work.

## Contact form behavior

The contact form uses `mailto:` and **does not send messages on its own**. It opens a configured mail client with a prefilled email. Visitors without a mail client can use the visible email link. Hosting a form that submits directly would require an email/form service or backend.

## Image authenticity

The six personal images used here are optimized copies of the edited images you supplied in this chat. No additional AI alteration to faces has been performed by the website-building process. Conceptual project covers are clearly labeled and their displayed UI details, people, charts and numbers are **illustrative**, not actual application evidence. Swap them for verified screenshots when available.

## Privacy / final review

Check the résumé, public email, project descriptions and article drafts before publishing. Confidential project information is excluded from the website. Claims like CareCompanion's approximate 80% automation are identified as an estimate pending verification.

## Accessibility

Semantic landmarks, reduced-motion preferences, alt text, focus outlines, responsive navigation and keyboard-accessible controls are included. This is a static portfolio, not a substitute for a full accessibility audit.
