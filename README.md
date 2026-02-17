# Orpex Landing Page

Static landing page for [orpex.ai](https://orpex.ai) — the AI operating system for startups.

## Files

- `index.html` — Main landing page (all CSS + JS inline)
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Service
- `vercel.json` — Vercel routing + security headers
- `waitlist-table.sql` — Supabase SQL to create the waitlist table

## Setup

### 1. Supabase
1. Go to your Supabase dashboard → SQL Editor
2. Paste and run the contents of `waitlist-table.sql`
3. Go to Settings → API and copy your **Project URL** and **anon public key**
4. In `index.html`, replace:
   - `YOUR_SUPABASE_URL` → your project URL
   - `YOUR_SUPABASE_ANON_KEY` → your anon key

### 2. Deploy to Vercel
```bash
npx vercel
```
Follow the prompts. Vercel auto-detects this as a static site.

### 3. Custom Domain
In Vercel dashboard → Project → Settings → Domains:
- Add `orpex.ai` for this landing page
- Keep `app.orpex.ai` pointing to the main app

## Tech Stack
Pure static HTML/CSS/JS — no frameworks, no build tools.
