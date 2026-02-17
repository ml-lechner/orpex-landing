'use client'
import { useEffect, useRef } from 'react'

export default function Features() {
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
    <section className="sec reveal" ref={ref}>
      <div className="sl">What You Get</div>
      <h2 className="st">Everything a startup needs. Nothing it doesn&apos;t.</h2>
      <p className="sd">From incorporation to autonomous operations — one platform replaces the entire back office.</p>
      <div className="fg">
        <div className="fc"><div className="fi">◎</div><h3>Company Formation</h3><p>Delaware C-Corp, EIN, bank account, and compliance setup — all handled in 24 hours. The fastest path from idea to incorporated entity.</p></div>
        <div className="fc"><div className="fi">◎</div><h3>AI Workforce</h3><p>Four autonomous agents for finance, compliance, GTM, and operations. They execute, you decide. Zero coordination overhead.</p></div>
        <div className="fc"><div className="fi">◎</div><h3>Operational Inbox</h3><p>Escalations when you need to decide. Approvals when agents need confirmation. Completed items as FYI. That&apos;s your entire interface.</p></div>
        <div className="fc"><div className="fi">◎</div><h3>Complete Context</h3><p>Connected to email, Slack, bank, and tools. Your agents know everything about your company and get smarter every day.</p></div>
      </div>
    </section>
  )
}
