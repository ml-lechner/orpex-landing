'use client'
import { useEffect, useRef } from 'react'

export default function OperationalInbox() {
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
    <section className="is reveal" ref={ref}>
      <div>
        <div className="sl">The Interface</div>
        <h2 className="st" style={{ fontSize: '28px' }}>You don&apos;t manage tools. You review outcomes.</h2>
        <p className="sd">Escalations, approvals, and completed work. That&apos;s the entire interface to running your company.</p>
      </div>
      <div className="iv">
        <div className="ivh">Operational Inbox <span className="ivc">3 new</span></div>
        <div className="ii"><div className="it e">ESCALATION</div><div><div className="itx"><strong>Unusual expense detected</strong><span>Finance Agent flagged a $2,400 AWS charge — 3× normal.</span></div><div className="itm">2 min ago · Finance Agent</div></div></div>
        <div className="ii"><div className="it apr">APPROVAL</div><div><div className="itx"><strong>Vendor contract ready</strong><span>Compliance Agent drafted your SaaS agreement with DataDog.</span></div><div className="itm">1 hour ago · Compliance Agent</div></div></div>
        <div className="ii"><div className="it done">COMPLETED</div><div><div className="itx"><strong>Delaware franchise tax filed</strong><span>Annual filing completed. Confirmation #DE-2025-84721.</span></div><div className="itm">3 hours ago · Compliance Agent</div></div></div>
        <div className="ii"><div className="it done">COMPLETED</div><div><div className="itx"><strong>23 qualified leads found</strong><span>Enriched leads matching your ICP in fintech vertical.</span></div><div className="itm">Yesterday · GTM Agent</div></div></div>
        <div className="ii"><div className="it done">COMPLETED</div><div><div className="itx"><strong>Stripe account configured</strong><span>Payment processing ready. API keys in your dashboard.</span></div><div className="itm">Yesterday · Ops Agent</div></div></div>
      </div>
    </section>
  )
}
