interface WaitlistConfirmationProps {
  name: string
}

export function WaitlistConfirmationEmail({ name }: WaitlistConfirmationProps) {
  const firstName = name.split(' ')[0]

  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", backgroundColor: '#0a0a0f', color: '#e2e2e8', padding: '40px 20px' }}>
      <div style={{ maxWidth: '520px', margin: '0 auto' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.5px' }}>
            Orpex
          </span>
        </div>

        {/* Main card */}
        <div style={{ backgroundColor: '#12121a', border: '1px solid rgba(129, 140, 248, 0.15)', borderRadius: '16px', padding: '40px 32px' }}>

          {/* Checkmark */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'inline-block', width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #818cf8, #3b82f6)', lineHeight: '56px', fontSize: '28px', color: '#fff' }}>
              ✓
            </div>
          </div>

          <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 600, color: '#ffffff', margin: '0 0 16px' }}>
            You&apos;re on the list, {firstName}!
          </h1>

          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#a0a0b0', textAlign: 'center', margin: '0 0 24px' }}>
            Thanks for signing up for early access to Orpex. We&apos;re onboarding design partners in small batches to make sure every founder gets a great experience.
          </p>

          <div style={{ borderTop: '1px solid rgba(129, 140, 248, 0.1)', margin: '24px 0' }} />

          <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', margin: '0 0 12px' }}>
            What happens next?
          </h2>

          <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#a0a0b0', paddingLeft: '20px', margin: '0 0 24px' }}>
            <li>We review every application personally</li>
            <li>You&apos;ll get an invite once your batch is ready</li>
            <li>Early access founders help shape the product</li>
          </ul>

          <div style={{ borderTop: '1px solid rgba(129, 140, 248, 0.1)', margin: '24px 0' }} />

          <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#6b6b7b', textAlign: 'center', margin: 0 }}>
            In the meantime, keep building — your AI workforce is almost ready.
          </p>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '12px', color: '#4a4a5a', margin: '0 0 8px' }}>
            Orpex — The Operating System for AI-First Startups
          </p>
          <p style={{ fontSize: '12px', color: '#3a3a4a', margin: 0 }}>
            <a href="https://orpex.ai" style={{ color: '#818cf8', textDecoration: 'none' }}>orpex.ai</a>
          </p>
        </div>

      </div>
    </div>
  )
}
