-- ═══════════════════════════════════════════════
-- ORPEX WAITLIST TABLE
-- Run this in your Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Paste → Run
-- ═══════════════════════════════════════════════

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT,
  company_name TEXT,
  building TEXT,
  industry TEXT,
  stage TEXT,
  team_size TEXT,
  pain_points TEXT[] DEFAULT '{}',
  source TEXT,
  needs TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Prevent duplicate emails
  CONSTRAINT waitlist_email_unique UNIQUE (email)
);

-- Enable Row Level Security (required for Supabase)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the landing page)
-- This lets the frontend insert without authentication
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous count (for waitlist position)
CREATE POLICY "Allow anonymous count" ON waitlist
  FOR SELECT
  TO anon
  USING (true);

-- Create index on email for fast lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist (created_at DESC);

-- ═══════════════════════════════════════════════
-- VERIFICATION: Run this after to check it worked
-- ═══════════════════════════════════════════════
-- SELECT * FROM waitlist LIMIT 5;
