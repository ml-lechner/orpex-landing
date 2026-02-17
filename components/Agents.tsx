'use client'
import { useEffect, useRef, useState } from 'react'
import AgentDemoModal from './AgentDemoModal'

export default function Agents() {
  const ref = useRef<HTMLElement>(null)
  const [openDemo, setOpenDemo] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section className="agents-sec reveal" id="agents" ref={ref}>
        <div className="sl">Your AI Workforce</div>
        <h2 className="st">Four agents. Zero overhead.</h2>
        <p className="sd">Autonomous agents that don&apos;t chat — they execute. Click any agent to see it in action.</p>
        <div className="ag">
          <div className="ac" onClick={() => setOpenDemo(0)}>
            <div className="ai">
              <div className="ah"><div className="aicon">G</div><div><div className="aname">GTM Agent</div><div className="atag">Finds customers while you sleep</div></div></div>
              <p className="adesc">Autonomous lead generation, research, enrichment, and personalized outreach — running continuously in the background.</p>
              <ul className="alist"><li><span className="ck">✓</span> ICP-based lead discovery</li><li><span className="ck">✓</span> Contact enrichment &amp; verification</li><li><span className="ck">✓</span> Personalized outreach drafting</li><li><span className="ck">✓</span> Competitor &amp; market intelligence</li></ul>
              <div className="astat"><span className="astat-dot" /> Active — last run 2h ago<span className="astat-m">156 leads</span></div>
            </div>
            <div className="ac-demo-hint">Click to see live demo →</div>
          </div>

          <div className="ac" onClick={() => setOpenDemo(1)}>
            <div className="ai">
              <div className="ah"><div className="aicon">F</div><div><div className="aname">Finance Agent</div><div className="atag">Your CFO that never sleeps</div></div></div>
              <p className="adesc">Monitors cash, processes invoices, tracks burn, flags anomalies, and generates financial reports automatically.</p>
              <ul className="alist"><li><span className="ck">✓</span> Real-time cash position monitoring</li><li><span className="ck">✓</span> Automatic invoice processing</li><li><span className="ck">✓</span> Burn rate tracking &amp; runway alerts</li><li><span className="ck">✓</span> Monthly financial reporting</li></ul>
              <div className="astat"><span className="astat-dot" /> Monitoring — $142K cash<span className="astat-m">7.9mo runway</span></div>
            </div>
            <div className="ac-demo-hint">Click to see live demo →</div>
          </div>

          <div className="ac" onClick={() => setOpenDemo(2)}>
            <div className="ai">
              <div className="ah"><div className="aicon">C</div><div><div className="aname">Compliance Agent</div><div className="atag">Never miss a deadline again</div></div></div>
              <p className="adesc">Tracks regulatory requirements across jurisdictions, drafts filings, maintains documents, and escalates only when needed.</p>
              <ul className="alist"><li><span className="ck">✓</span> Delaware &amp; state filing management</li><li><span className="ck">✓</span> Tax deadline tracking</li><li><span className="ck">✓</span> Board minutes &amp; cap table</li><li><span className="ck">✓</span> 83(b) elections &amp; equity compliance</li></ul>
              <div className="astat"><span className="astat-dot" /> All clear — next due Mar 15<span className="astat-m">100% score</span></div>
            </div>
            <div className="ac-demo-hint">Click to see live demo →</div>
          </div>

          <div className="ac" onClick={() => setOpenDemo(3)}>
            <div className="ai">
              <div className="ah"><div className="aicon">O</div><div><div className="aname">Operations Agent</div><div className="atag">Setup, vendors, workflows — handled</div></div></div>
              <p className="adesc">Configures your tools, manages vendor relationships, handles onboarding workflows, and executes tasks autonomously.</p>
              <ul className="alist"><li><span className="ck">✓</span> Tool setup &amp; configuration</li><li><span className="ck">✓</span> Vendor research &amp; management</li><li><span className="ck">✓</span> Document generation &amp; drafting</li><li><span className="ck">✓</span> Browser automation for workflows</li></ul>
              <div className="astat"><span className="astat-dot" /> 8 tools configured<span className="astat-m">12 tasks done</span></div>
            </div>
            <div className="ac-demo-hint">Click to see live demo →</div>
          </div>
        </div>
      </section>
      <AgentDemoModal agentIndex={openDemo} onClose={() => setOpenDemo(null)} />
    </>
  )
}
