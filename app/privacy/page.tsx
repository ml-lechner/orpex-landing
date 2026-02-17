import Link from 'next/link'
import Logo from '@/components/Logo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Orpex',
}

export default function PrivacyPage() {
  return (
    <>
      <nav className="legal-nav">
        <Link href="/" className="nav-logo"><Logo size={28} /></Link>
        <Link href="/" className="legal-nav" style={{ position: 'static', background: 'none', backdropFilter: 'none', border: 'none', padding: 0, height: 'auto' }}>← Back to Home</Link>
      </nav>
      <div className="legal-page">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="meta">Last updated: February 17, 2025</p>

          <p>Orpex Technologies, Inc. (&quot;Orpex,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at orpex.ai and related services (the &quot;Service&quot;).</p>

          <h2>1. Information We Collect</h2>
          <h2>1.1 Information You Provide</h2>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, password, company name, and role when you register.</li>
            <li><strong>Company Formation Data:</strong> Business entity details, founder information, equity allocations, and formation preferences you submit through our incorporation flow.</li>
            <li><strong>Payment Information:</strong> Billing details processed through our third-party payment processor (Stripe). We do not store full credit card numbers on our servers.</li>
            <li><strong>Communications:</strong> Messages you send through our chat interface, support requests, and feedback.</li>
          </ul>

          <h2>1.2 Information Collected Automatically</h2>
          <ul>
            <li><strong>Usage Data:</strong> Pages visited, features used, clicks, time spent, and other interaction data collected via cookies and analytics tools.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
            <li><strong>Integration Data:</strong> When you connect external accounts (bank, email, Slack), we receive data necessary to provide the Service.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Power AI agent operations on your behalf</li>
            <li>Process transactions and send related information</li>
            <li>Send operational communications and updates</li>
            <li>Respond to support requests</li>
            <li>Monitor for fraud, security, and compliance</li>
            <li>Conduct research and analytics to improve our products</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>We do not sell your personal data. We share information only as follows:</p>
          <ul>
            <li><strong>Service Providers:</strong> Trusted vendors who help us operate the Service (e.g., AWS for hosting, Stripe for payments, Anthropic for AI inference). They are bound by data processing agreements.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect rights and safety.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with prior notice.</li>
            <li><strong>With Your Consent:</strong> For any other purpose with your explicit consent.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement industry-standard security measures including:</p>
          <ul>
            <li>Encryption at rest (AES-256) and in transit (TLS 1.2+)</li>
            <li>OAuth tokens stored with AES-128 encryption</li>
            <li>Isolated data environments per customer account</li>
            <li>Regular security audits and penetration testing</li>
            <li>Role-based access controls for internal teams</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of certain data processing activities</li>
            <li>Data portability — receive your data in a machine-readable format</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise any of these rights, email us at <a href="mailto:privacy@orpex.ai" style={{ color: 'var(--accent)' }}>privacy@orpex.ai</a>.</p>

          <h2>6. Cookies</h2>
          <p>We use cookies and similar tracking technologies for authentication, analytics, and functionality. You can manage cookie preferences in your browser settings. Some features may not function properly if cookies are disabled.</p>

          <h2>7. Third-Party Integrations</h2>
          <p>When you connect external services (Mercury, Stripe, Gmail, Slack), you authorize Orpex to access and process data from those services solely to provide the Service. We request only the minimum permissions required. You can revoke access at any time from your account settings.</p>

          <h2>8. Data Retention</h2>
          <p>We retain your data for as long as your account is active or as needed to provide the Service. After account deletion, we delete or anonymize your data within 90 days, except where retention is required by law.</p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>The Service is not directed to individuals under 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, contact us immediately.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or prominent notice on the Service. Continued use after changes constitutes acceptance.</p>

          <h2>11. Contact Us</h2>
          <p>For privacy-related questions or concerns:</p>
          <ul>
            <li>Email: <a href="mailto:privacy@orpex.ai" style={{ color: 'var(--accent)' }}>privacy@orpex.ai</a></li>
            <li>Address: Orpex Technologies, Inc., 2261 Market Street #4667, San Francisco, CA 94114</li>
          </ul>
        </div>

        <div className="legal-footer">
          <span>© 2025 Orpex Technologies, Inc.</span>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </>
  )
}
