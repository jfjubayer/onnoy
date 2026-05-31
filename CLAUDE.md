# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> A complementary `AGENTS.md` exists with the full API endpoint table, env-var details, and conventions. Read it for specifics; this file covers the big picture.

## What this is

**Onnoy-অন্বয়** — a bilingual (English/Bangla) static site for digital responsibility education, plus a lightweight Flask API. **No build step, no tests, no CI, no package.json.** Frontend is hand-written HTML/CSS/JS; backend is Flask with JSON-file persistence (not a database).

## Commands

```bash
# Frontend (static) — serve from frontend/, no build
cd frontend && python3 -m http.server 8000        # → http://localhost:8000

# Backend (Flask API)
cd backend && python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python3 app.py                                     # → http://localhost:5000/api/health
```

Backend reads a gitignored `.env` from the **repo root** (`SECRET_KEY`, `ADMIN_TOKEN`; both have insecure dev defaults in `backend/config.py`).

## Architecture

- **Frontend** (`/frontend/`): ~24 standalone HTML pages sharing three assets:
  - `assets/css/style.css` — single stylesheet; theming via CSS custom properties (`--green-pale`, `--radius`, `--shadow`, …).
  - `assets/js/main.js` — navbar, theme toggle, mobile menu, scroll animations.
  - `assets/js/translations.js` — EN/BN strings; pages mark translatable text with `data-i18n` attributes.
- **Backend** (`/backend/`): app factory in `app.py`, config classes in `config.py`, all routes in `routes/api.py` (single blueprint under `/api`). Persistence is read/modify/write of JSON files in `backend/data/` (`impact.json`, `requests.json`, `factchecks.json`) — these are committed seed data **and** the runtime store. Admin endpoints (PATCH impact, GET requests/factchecks) gate on a `Bearer <ADMIN_TOKEN>` header.

## The critical frontend↔backend split

Two unrelated data paths — do not confuse them:

- **Public forms** (contact, support, session-request, fact-check, facilitator-guide) POST to **Formspree** (`https://formspree.io/f/...`), *not* to Flask.
- **The Flask API** is consumed only by `frontend/admin.html`, which fetches `http://localhost:5000/api`, stores the admin token in `localStorage`, and is the only client of `/api/requests` and `/api/factchecks`.

When editing a form's submission target, first determine which path it belongs to.

## Deployment

- Frontend → Vercel. `vercel.json` rewrites all paths to `/frontend/$1`.
- Backend → any Python host (deployed separately; CORS is enabled app-wide for cross-origin frontend calls).

## Conventions

- Every page carries an HTML status comment near `<title>`: `<!-- PAGE: file.html | PHASE: N | STATUS: completed -->`.
- Shared `<head>` boilerplate across pages (SEO/OG tags, Google Analytics placeholder `GA_MEASUREMENT_ID`).
- `requirements.txt` pins exact versions; there is no lockfile.

## Before changing code

Per `AGENTS.md`: sync `main` first (`git checkout main && git fetch origin && git pull origin main`), but never discard uncommitted working-tree changes without confirming.
