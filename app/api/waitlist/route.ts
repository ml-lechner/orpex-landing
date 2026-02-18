import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { WaitlistConfirmationEmail } from '@/emails/WaitlistConfirmation'
import { createElement } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      email,
      full_name,
      role,
      company_name,
      building,
      industry,
      stage,
      team_size,
      pain_points,
      source,
      needs,
      referrer,
    } = body

    // Validate required fields
    if (!email || !full_name || !company_name) {
      return NextResponse.json(
        { error: 'Email, name, and company are required.' },
        { status: 400 }
      )
    }

    // 1. Insert into Supabase
    let alreadyExists = false
    const { error: dbError } = await supabase.from('waitlist').insert([{
      email,
      full_name,
      role: role || null,
      company_name,
      building: building || null,
      industry: industry || null,
      stage: stage || null,
      team_size: team_size || null,
      pain_points: pain_points || [],
      source: source || null,
      needs: needs || null,
      referrer: referrer || null,
    }])

    if (dbError) {
      if (dbError.code === '23505') {
        // Duplicate email — continue to send confirmation anyway
        alreadyExists = true
      } else {
        console.error('Supabase insert error:', dbError)
        return NextResponse.json(
          { error: 'Failed to save your information.' },
          { status: 500 }
        )
      }
    }

    // 2. Send confirmation email via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Orpex <noreply@notify.orpex.ai>',
      to: email,
      subject: "You're on the Orpex waitlist!",
      react: createElement(WaitlistConfirmationEmail, {
        name: full_name,
      }),
    })

    if (emailError) {
      console.error('Resend email error:', emailError)
    } else {
      console.log('Confirmation email sent:', emailData)
    }

    return NextResponse.json({ success: true, alreadyExists })
  } catch (err) {
    console.error('Waitlist API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}
