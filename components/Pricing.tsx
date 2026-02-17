'use client'
import { useEffect, useRef } from 'react'

export default function Pricing({ onOpenFunnel }: { onOpenFunnel: () => void }) {
  const ref = useRef<HTMLElement>(null)
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
    <section className="pricing reveal" id="pricing" ref={ref}>
      <div className="sl">Pricing</div>
      <h2 className="st" style={{ maxWidth: 'none', textAlign: 'center' }}>Start free. Scale when you&apos;re ready.</h2>
      <p className="sd" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>No hidden fees. Upgrade as your company grows.</p>
      <div className="prg">
        <div className="prc">
          <div className="prc-name">Starter</div>
          <div className="prc-amt">$0</div>
          <div className="prc-per">Free forever</div>
          <ul className="prc-fl">
            <li><span className="ck">✓</span> 1 AI agent (GTM Agent)</li>
            <li><span className="ck">✓</span> 50 leads per month</li>
            <li><span className="ck">✓</span> Basic company dashboard</li>
            <li><span className="ck">✓</span> Email integration</li>
            <li><span className="ck">✓</span> Community support</li>
            <li><span className="nx">—</span> <span style={{ color: 'var(--textTertiary)' }}>Company formation</span></li>
            <li><span className="nx">—</span> <span style={{ color: 'var(--textTertiary)' }}>Finance &amp; Compliance agents</span></li>
            <li><span className="nx">—</span> <span style={{ color: 'var(--textTertiary)' }}>Browser automation</span></li>
          </ul>
          <button className="prc-btn sec" onClick={onOpenFunnel}>Get Early Access →</button>
        </div>
        <div className="prc">
          <div className="prc-name">Growth</div>
          <div className="prc-amt">$199 <span>/month</span></div>
          <div className="prc-per">For early-stage founders</div>
          <ul className="prc-fl">
            <li><span className="ck">✓</span> 2 AI agents (GTM + Ops)</li>
            <li><span className="ck">✓</span> Unlimited leads</li>
            <li><span className="ck">✓</span> Full company dashboard</li>
            <li><span className="ck">✓</span> Email + Slack integration</li>
            <li><span className="ck">✓</span> Document generation</li>
            <li><span className="ck">✓</span> Browser automation</li>
            <li><span className="ck">✓</span> Priority support</li>
            <li><span className="nx">—</span> <span style={{ color: 'var(--textTertiary)' }}>Company formation</span></li>
          </ul>
          <button className="prc-btn sec" onClick={onOpenFunnel}>Get Early Access →</button>
        </div>
        <div className="prc feat">
          <div className="prc-pop">Most Popular</div>
          <div className="prc-name">Founder</div>
          <div className="prc-amt">$499 <span>/month</span></div>
          <div className="prc-per">The full operating system</div>
          <ul className="prc-fl">
            <li><span className="ck">✓</span> All 4 AI agents</li>
            <li><span className="ck">✓</span> Delaware C-Corp formation</li>
            <li><span className="ck">✓</span> Unlimited everything</li>
            <li><span className="ck">✓</span> Operational inbox</li>
            <li><span className="ck">✓</span> Full context integration</li>
            <li><span className="ck">✓</span> Document generation</li>
            <li><span className="ck">✓</span> Browser automation</li>
            <li><span className="ck">✓</span> Dedicated support</li>
          </ul>
          <button className="prc-btn pri" onClick={onOpenFunnel}>Get Early Access →</button>
        </div>
      </div>
      <div className="prc-note">All plans free during design partner program · No credit card required</div>
    </section>
  )
}
