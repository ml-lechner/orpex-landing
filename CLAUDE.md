# Orpex Landing Page

## Project Overview
Marketing landing page for Orpex — "The Operating System for AI-First Startups". Includes a 6-step waitlist signup funnel with email confirmation.

## Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript + React 19
- **Styling:** Tailwind CSS v4 + custom CSS in `app/globals.css`
- **Database:** Supabase (cloud PostgreSQL) — table: `waitlist`
- **Email:** Resend (sends from `noreply@notify.orpex.ai`, domain: `notify.orpex.ai`)
- **Fonts:** DM Sans + Instrument Serif (Google Fonts)
- **Deployment:** Vercel

## Key Files & Architecture

### Pages
- `app/page.tsx` — main landing page (assembles all sections)
- `app/layout.tsx` — root layout with fonts + metadata
- `app/privacy/page.tsx` — privacy policy
- `app/terms/page.tsx` — terms of service

### API Routes
- `app/api/waitlist/route.ts` — POST endpoint: inserts signup into Supabase, sends confirmation email via Resend

### Components (all in `components/`)
- `SignupFunnel.tsx` — 6-step waitlist modal (email → name/role → company → stage → pain points → source)
- `Hero.tsx`, `Nav.tsx`, `StickyCta.tsx`, `FinalCta.tsx` — all trigger the signup funnel
- `Features.tsx`, `Agents.tsx`, `HowItWorks.tsx`, `Compare.tsx`, `Moats.tsx`, `Pricing.tsx`, `Faq.tsx`, `Stats.tsx` — landing page sections
- `Footer.tsx`, `Logo.tsx`, `SectionDivider.tsx`, `ProductMockup.tsx`, `OperationalInbox.tsx`, `AgentDemoModal.tsx`

### Email Templates
- `emails/WaitlistConfirmation.tsx` — confirmation email sent after signup (React component rendered by Resend)

### Config & Data
- `lib/supabase.ts` — Supabase client (browser-side, used only for public reads if needed)
- `waitlist-table.sql` — Supabase table schema + RLS policies
- `.env.local` — contains `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `RESEND_API_KEY`

## Waitlist Signup Flow
1. User clicks "Get Early Access" from any CTA
2. `SignupFunnel` modal opens → 6-step form
3. On submit, frontend calls `POST /api/waitlist` with form data
4. API route inserts into Supabase `waitlist` table
5. API route sends confirmation email via Resend
6. User sees "You're in!" confirmation screen

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server

## Important Notes
- `.env*` files are gitignored — never commit API keys
- The Supabase anon key is public (NEXT_PUBLIC_) — this is intentional and safe
- The Resend API key is server-only (no NEXT_PUBLIC_ prefix) — keep it that way
- Email sends from `noreply@notify.orpex.ai` (verified Resend domain: `notify.orpex.ai`)
- Duplicate email signups are handled gracefully (no error shown to user)
