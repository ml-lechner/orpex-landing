'use client'
import { useEffect, useRef } from 'react'

export default function Compare() {
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
    <section className="cmp reveal" id="compare" ref={ref}>
      <div className="sl">How We Compare</div>
      <h2 className="st">Something categorically different.</h2>
      <table className="ct">
        <thead>
          <tr>
            <th></th>
            <th className="op">Orpex</th>
            <th>Incorporation</th>
            <th>Human Services</th>
            <th>AI Assistants</th>
            <th>SaaS Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Company formation</td><td className="y">Included</td><td className="y">Included</td><td className="n">—</td><td className="n">—</td><td className="n">—</td></tr>
          <tr><td>Ongoing operations</td><td className="y">Autonomous</td><td className="n">—</td><td className="p">Manual</td><td className="p">Suggestions</td><td className="p">Tools only</td></tr>
          <tr><td>Company context</td><td className="y">Complete</td><td className="n">—</td><td className="p">Partial</td><td className="n">—</td><td className="p">Siloed</td></tr>
          <tr><td>Autonomous execution</td><td className="y">End-to-end</td><td className="n">—</td><td className="n">Human-paced</td><td className="n">—</td><td className="n">—</td></tr>
          <tr><td>24/7 availability</td><td className="y">Always on</td><td className="n">—</td><td className="n">Business hrs</td><td className="p">Chat only</td><td className="p">Self-serve</td></tr>
          <tr><td>Scales infinitely</td><td className="y">Yes</td><td className="n">—</td><td className="p">Hire more</td><td className="n">—</td><td className="p">Add tools</td></tr>
        </tbody>
      </table>
    </section>
  )
}
