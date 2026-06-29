# AGENTS.md — Onnoy-অন্বয়

## Project Structure

- **`/frontend/`** — Static website (24 HTML pages, shared CSS/JS). No build step.
- **`/backend/`** — Flask API (`app.py`) with JSON file-based persistence.

## Running Locally

## Before Making Changes

Before making code changes, sync the local `main` branch with the original remote code:

```bash
git checkout main
git fetch origin
git pull origin main
```

If the working tree has uncommitted changes, do not overwrite or discard them. Confirm whether they should be committed, stashed, or left untouched before pulling changes that could conflict.

### Frontend
```bash
cd frontend
python3 -m http.server 8000
```
Visit: http://localhost:8000

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python3 app.py
```
Visit API: http://localhost:5001/api/health

**Backend expects `.env` in repo root** (gitignored). Required keys:
- `SECRET_KEY` — Flask secret (defaults to insecure dev value)
- `ADMIN_TOKEN` — Bearer token for admin endpoints (defaults to `onnoy-admin-dev`)

## Architecture Notes

- **No build tools, no tests, no CI.** This is a hand-written static site + lightweight Flask API.
- **Frontend is deployed to Vercel.** `vercel.json` at repo root rewrites all paths to `/frontend/`.
- **Shared frontend assets:**
  - `frontend/assets/css/style.css` — single stylesheet for all pages
  - `frontend/assets/js/main.js` — navbar, theme toggle, mobile menu, scroll animations
  - `frontend/assets/js/translations.js` — bilingual (EN/BN) UI strings
- **Backend persistence:** JSON files in `backend/data/` (`impact.json`, `requests.json`, `factchecks.json`). Not a database.

## Backend API Endpoints

| Endpoint | Method | Auth | Notes |
|---|---|---|---|
| `/api/health` | GET | None | Liveness check |
| `/api/impact` | GET | None | Returns stats object |
| `/api/impact` | PATCH | `ADMIN_TOKEN` | Updates stats |
| `/api/requests` | GET | `ADMIN_TOKEN` | List session requests |
| `/api/requests` | POST | None | Submit session request |
| `/api/factchecks` | GET | `ADMIN_TOKEN` | List fact-checks |
| `/api/factchecks` | POST | None | Submit fact-check |

## Important Frontend-Backend Split

- **Public-facing forms** (contact, support, session request, fact-check, facilitator guide) submit to **Formspree** URLs (`https://formspree.io/f/...`), **not** to the Flask backend.
- The backend's `/api/requests` and `/api/factchecks` endpoints are used only by the **admin dashboard** (`frontend/admin.html`), which fetches from `http://localhost:5001/api` and stores the token in `localStorage`.
- If you modify form endpoints, verify whether the change is meant for Formspree or the Flask API.

## Code Conventions

- All HTML pages include the same `<head>` boilerplate (SEO, OG tags, Google Analytics placeholder `GA_MEASUREMENT_ID`).
- HTML comment convention: `<!-- PAGE: filename.html | PHASE: N | STATUS: completed -->` near the `<title>`.
- Bilingual content uses `data-i18n` attributes with keys defined in `translations.js`.
- CSS uses custom properties (`--green-pale`, `--radius`, `--shadow`, etc.) defined in `style.css`.

## Common Gotchas

- Backend must run separately from frontend during local development; CORS is enabled.
- `backend/data/` JSON files are checked into git (small, seed data). They are read/write at runtime.
- No dependency lockfile. `requirements.txt` pins exact versions.
