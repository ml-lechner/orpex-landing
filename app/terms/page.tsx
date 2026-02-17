import Link from 'next/link'
import Logo from '@/components/Logo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Orpex',
}

export default function TermsPage() {
  return (
    <>
      <nav className="legal-nav">
        <Link href="/" className="nav-logo"><Logo size={28} /></Link>
        <Link href="/" style={{ color: 'var(--textSecondary)', textDecoration: 'none', fontSize: '13px', transition: 'color .15s' }}>← Back to Home</Link>
      </nav>
      <div className="legal-page">
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <p className="meta">Last updated: February 17, 2025</p>

          <p>These Terms of Service (&quot;Terms&quot;) govern your use of the Orpex platform and services provided by Orpex Technologies, Inc. (&quot;Orpex,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our Service at orpex.ai, you agree to be bound by these Terms.</p>

          <h2>1. The Service</h2>
          <p>Orpex provides an AI-powered operating system for startups, including company formation assistance, AI agent operations (finance, compliance, GTM, and operations), third-party integrations, and related tools and features (collectively, the &quot;Service&quot;).</p>

          <h2>2. Eligibility</h2>
          <p>You must be at least 18 years old and have the legal authority to enter into these Terms. If you are using the Service on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.</p>

          <h2>3. Account Registration</h2>
          <p>You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately at <a href="mailto:security@orpex.ai" style={{ color: 'var(--accent)' }}>security@orpex.ai</a> if you suspect unauthorized access.</p>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Transmit malicious code or interfere with the Service&apos;s integrity</li>
            <li>Engage in unauthorized data scraping or automated access beyond API limits</li>
            <li>Misrepresent your identity or affiliation</li>
            <li>Use the Service for any unlawful, fraudulent, or deceptive purpose</li>
          </ul>

          <h2>5. AI Agent Operations</h2>
          <p>Our AI agents operate autonomously within authority levels you define. You acknowledge that:</p>
          <ul>
            <li>AI outputs may occasionally contain errors and should be reviewed for high-stakes decisions</li>
            <li>You remain responsible for all actions taken by AI agents on your behalf</li>
            <li>We are not liable for business decisions made based on AI-generated information</li>
            <li>Agents will escalate decisions above your configured thresholds for human approval</li>
          </ul>

          <h2>6. Payment Terms</h2>
          <p>Paid plans are billed in advance on a monthly or annual basis. Fees are non-refundable except as required by law or as explicitly stated in our refund policy. We reserve the right to change pricing with 30 days&apos; notice. During the design partner program, all plans are provided free of charge.</p>

          <h2>7. Intellectual Property</h2>
          <p><strong>Our IP:</strong> The Service, including all software, designs, and content, is owned by Orpex or its licensors. Nothing in these Terms grants you ownership rights to the Service.</p>
          <p><strong>Your IP:</strong> You retain ownership of all data and content you submit to the Service. You grant Orpex a limited license to process your data solely to provide the Service.</p>

          <h2>8. Company Formation Services</h2>
          <p>Orpex facilitates company formation but is not a law firm and does not provide legal advice. Formation services involve third-party registered agents and state filing fees. Processing times depend on state agencies. We are not responsible for delays caused by state processing queues.</p>

          <h2>9. Third-Party Integrations</h2>
          <p>The Service integrates with third-party platforms (Mercury, Stripe, Gmail, Slack, etc.). Your use of these integrations is subject to those providers&apos; terms. Orpex is not responsible for third-party service outages, changes, or data handling.</p>

          <h2>10. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORPEX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, OR DATA, ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOU IN THE TWELVE MONTHS PRECEDING THE CLAIM.</p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>

          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold harmless Orpex and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.</p>

          <h2>13. Termination</h2>
          <p>Either party may terminate these Terms at any time. Upon termination, your access to the Service will cease. We will retain your data for 90 days after termination to allow for export, then delete it per our data retention policy.</p>

          <h2>14. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in San Francisco, California, except where prohibited by law.</p>

          <h2>15. Changes to Terms</h2>
          <p>We may update these Terms from time to time. Material changes will be communicated via email or prominent notice on the Service. Continued use after the effective date constitutes acceptance of the updated Terms.</p>

          <h2>16. Contact</h2>
          <p>For questions about these Terms:</p>
          <ul>
            <li>Email: <a href="mailto:legal@orpex.ai" style={{ color: 'var(--accent)' }}>legal@orpex.ai</a></li>
            <li>Address: Orpex Technologies, Inc., 2261 Market Street #4667, San Francisco, CA 94114</li>
          </ul>
        </div>

        <div className="legal-footer">
          <span>© 2025 Orpex Technologies, Inc.</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </>
  )
}
