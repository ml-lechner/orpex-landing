'use client'
import { useEffect, useRef } from 'react'

export default function Moats() {
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
    <section className="moats reveal" ref={ref}>
      <div className="sl">Why Orpex Wins</div>
      <h2 className="st">Four moats. Built from day one.</h2>
      <p className="sd">This isn&apos;t another AI wrapper. We&apos;re building autonomous infrastructure with compounding advantages.</p>
      <div className="mg">
        <div className="mc"><div className="mc-num">01</div><div className="mc-icon">◎</div><h3>Data Moat</h3><p>Complete company context from day one — email, Slack, bank, documents. Every interaction makes agents smarter. The longer you use Orpex, the harder it is to leave.</p></div>
        <div className="mc"><div className="mc-num">02</div><div className="mc-icon">◎</div><h3>Trust Moat</h3><p>Track record of reliable decisions builds dependency. Founders learn what to delegate vs. decide. Confidence in autonomous execution compounds over time.</p></div>
        <div className="mc"><div className="mc-num">03</div><div className="mc-icon">◎</div><h3>Behavioral Moat</h3><p>Orpex becomes the daily interface to company operations. Check inbox, approve, stay informed. Switching means rebuilding your entire operational context.</p></div>
        <div className="mc"><div className="mc-num">04</div><div className="mc-icon">◎</div><h3>Integration Moat</h3><p>Unified data layer across finance, legal, and ops. Single source of truth for your entire company. No competitor has this level of cross-domain integration.</p></div>
      </div>
    </section>
  )
}
