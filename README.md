# Onnoy-অন্বয় Project

A professional, bilingual platform for digital responsibility and ethical technology use.

## Project Structure

- **`/frontend`**: The static website, including courses, assets, and localization logic.
- **`/backend`**: Flask API for live impact stats, session requests, and fact-check submissions.

## Running Locally

### Frontend
```bash
cd frontend
python3 -m http.server 8000
```
Visit: http://localhost:8000

### Backend
```bash
cd backend
source venv/bin/activate
python3 app.py
```
Visit API: http://localhost:5001/api/health

## Deployment
- **Frontend**: Automatically deployed to Vercel (Root: `/frontend`).
- **Backend**: Can be deployed to any Python-capable host.
