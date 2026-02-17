'use client'
import { useEffect, useRef } from 'react'

export default function HowItWorks() {
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
    <section className="hw reveal" id="how-it-works" ref={ref}>
      <div className="sl">How It Works</div>
      <h2 className="st">From zero to operating company in 24 hours.</h2>
      <p className="sd">No blank states, no &quot;next steps,&quot; no figuring it out yourself.</p>
      <div className="stp">
        <div className="sp"><div className="sn">01</div><h3>Define your intent</h3><p>Tell us what you&apos;re building. We handle Delaware C-Corp, EIN, bank account, and tools — all within 24 hours.</p></div>
        <div className="sp"><div className="sn">02</div><h3>Your workforce deploys</h3><p>AI agents start immediately — monitoring finances, tracking compliance, finding customers, configuring tools.</p></div>
        <div className="sp"><div className="sn">03</div><h3>You build. They operate.</h3><p>Check your operational inbox for decisions. Everything else runs autonomously while you focus on product.</p></div>
      </div>
    </section>
  )
}
