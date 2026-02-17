'use client'
import { useEffect } from 'react'

const demos = [
  {
    name: 'GTM Agent', tag: 'Live lead generation workflow', color: '#3B82F6', letter: 'G',
    desc: 'Watch the GTM Agent find and qualify leads autonomously — from ICP definition to personalized outreach.',
    steps: [
      { icon: '🔍', text: '<strong>Analyzing ICP profile</strong> — B2B SaaS, Series A, fintech vertical, 10-50 employees', time: '0:00' },
      { icon: '🌐', text: '<strong>Searching web sources</strong> — Scanning 12 databases for matching companies in target market', time: '0:03' },
      { icon: '📊', text: '<strong>Found 47 candidates</strong> — Filtering by funding stage, team size, and technology stack', time: '0:08' },
      { icon: '⚡', text: '<strong>Scoring & ranking</strong> — Applied 8 qualification criteria, 23 companies scored above threshold', time: '0:12' },
      { icon: '👤', text: '<strong>Enriching contacts</strong> — Found decision-maker emails and LinkedIn profiles for top 23 leads', time: '0:18' },
      { icon: '✉️', text: '<strong>Drafting outreach</strong> — Personalized emails based on each company\'s recent news and pain points', time: '0:24' },
    ],
    result: { value: '23', label: 'Qualified leads ready for outreach' }
  },
  {
    name: 'Finance Agent', tag: 'Continuous cash monitoring', color: '#34D399', letter: 'F',
    desc: 'See how the Finance Agent monitors your accounts, processes invoices, and alerts you to anomalies.',
    steps: [
      { icon: '🏦', text: '<strong>Connected to Mercury</strong> — Syncing real-time transaction feed from checking account', time: '0:00' },
      { icon: '📄', text: '<strong>3 new invoices detected</strong> — Parsing amounts, vendors, and due dates from email attachments', time: '0:02' },
      { icon: '💰', text: '<strong>Cash position updated</strong> — Current balance $142,340. Weekly burn rate $4,500.', time: '0:05' },
      { icon: '⚠️', text: '<strong>Anomaly detected</strong> — AWS charge $2,400, 3× higher than trailing average. Escalating.', time: '0:08' },
      { icon: '📈', text: '<strong>Runway calculated</strong> — 7.9 months at current burn. 6.2 months if AWS stays elevated.', time: '0:11' },
      { icon: '📋', text: '<strong>Monthly report generated</strong> — P&L summary, burn breakdown, runway projections saved to workspace', time: '0:15' },
    ],
    result: { value: '$142K', label: 'Cash monitored · 7.9mo runway' }
  },
  {
    name: 'Compliance Agent', tag: 'Regulatory tracking & filings', color: '#FBBF24', letter: 'C',
    desc: 'The Compliance Agent continuously tracks deadlines, prepares filings, and maintains your legal state.',
    steps: [
      { icon: '📅', text: '<strong>Scanning deadline calendar</strong> — Checking federal, state, and local requirements for Delaware C-Corp', time: '0:00' },
      { icon: '🔔', text: '<strong>Upcoming: DE franchise tax</strong> — Due March 1. Estimated amount: $400. Preparing filing.', time: '0:03' },
      { icon: '📝', text: '<strong>Drafting annual report</strong> — Pulling registered agent info, officer details, and share structure', time: '0:06' },
      { icon: '✅', text: '<strong>Filing submitted</strong> — Delaware Division of Corporations. Confirmation #DE-2025-84721.', time: '0:10' },
      { icon: '📂', text: '<strong>Documents updated</strong> — Certificate of Good Standing, annual report filed in company vault', time: '0:13' },
      { icon: '🛡️', text: '<strong>Compliance score: 100%</strong> — All jurisdictions current. Next deadline: March 15', time: '0:16' },
    ],
    result: { value: '100%', label: 'Compliance score · All filings current' }
  },
  {
    name: 'Operations Agent', tag: 'Tool setup & vendor management', color: '#F87171', letter: 'O',
    desc: 'Watch the Ops Agent configure your entire tool stack using browser automation.',
    steps: [
      { icon: '🌐', text: '<strong>Opening Stripe dashboard</strong> — Navigating to account setup with company details pre-filled', time: '0:00' },
      { icon: '🏢', text: '<strong>Filling business profile</strong> — Company name, EIN, business category, bank account for payouts', time: '0:04' },
      { icon: '🔑', text: '<strong>API keys generated</strong> — Test and live keys saved securely to your workspace vault', time: '0:08' },
      { icon: '📧', text: '<strong>Configuring Notion</strong> — Creating workspace with project boards, meeting notes, and wiki templates', time: '0:12' },
      { icon: '🔗', text: '<strong>Connecting integrations</strong> — Slack notifications, calendar sync, and email forwarding configured', time: '0:16' },
      { icon: '✅', text: '<strong>Setup complete</strong> — 8 tools configured, 3 vendor accounts active, all credentials stored', time: '0:20' },
    ],
    result: { value: '8', label: 'Tools configured in 20 seconds' }
  }
]

export default function AgentDemoModal({ agentIndex, onClose }: { agentIndex: number | null; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    if (agentIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [agentIndex])

  if (agentIndex === null) return null
  const d = demos[agentIndex]

  return (
    <div className="demo-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="demo-modal">
        <button className="demo-close" onClick={onClose}>✕</button>
        <div className="demo-header">
          <div className="demo-icon" style={{ background: `linear-gradient(135deg,${d.color},${d.color}cc)`, boxShadow: `0 4px 16px ${d.color}40` }}>{d.letter}</div>
          <div>
            <div className="demo-title">{d.name}</div>
            <div className="demo-tag">{d.tag}</div>
          </div>
        </div>
        <div className="demo-body">
          <p className="demo-desc">{d.desc}</p>
          <div className="demo-feed">
            <div className="demo-feed-hdr">
              <span className="livedot" style={{ background: d.color }} /> Live workflow simulation
            </div>
            {d.steps.map((s, j) => (
              <div className="demo-step" key={j} style={{ animationDelay: `${j * 0.5}s` }}>
                <div className="demo-step-icon" style={{ background: `${d.color}15`, color: d.color }}>{s.icon}</div>
                <div>
                  <div className="demo-step-text" dangerouslySetInnerHTML={{ __html: s.text }} />
                  <div className="demo-step-time">{s.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="demo-result" style={{ animation: `demoStepIn .4s ease-out ${d.steps.length * 0.5}s both` }}>
            <div className="demo-result-val" style={{ color: d.color }}>{d.result.value}</div>
            <div className="demo-result-label">{d.result.label}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
