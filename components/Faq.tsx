'use client'
import { useEffect, useRef, useState } from 'react'

const faqs = [
  { q: 'What if I already have an incorporated company?', a: 'Orpex works for existing companies too. You can skip the formation step and connect your existing bank, email, and tools. Your AI workforce deploys on top of your current setup.' },
  { q: 'How is this different from ChatGPT or Claude?', a: 'AI assistants answer questions. Orpex agents execute tasks autonomously with full company context. They monitor your finances, file your taxes, find leads, and configure tools — without you asking.' },
  { q: 'Is my company data secure?', a: 'All data is encrypted at rest and in transit. OAuth tokens use AES-128 encryption. Your data is isolated per company and never shared. You can revoke access to any integration at any time.' },
  { q: 'Can I try it before committing?', a: 'Yes. The Starter plan is free forever and includes our GTM Agent with 50 leads per month. During our design partner program, all plans are free while we work closely with early founders.' },
  { q: 'What does "autonomous execution" actually mean?', a: 'Agents operate within defined authority levels. Routine tasks execute automatically. High-stakes decisions get escalated to you via the operational inbox. You stay in control without doing the work.' },
  { q: 'How quickly can I get started?', a: 'Sign up takes 2 minutes. If you\'re forming a new company, you\'ll have a Delaware C-Corp within 24-48 hours. If you\'re connecting an existing company, agents start working within the hour.' },
  { q: 'Do I need technical skills to use Orpex?', a: 'No. Orpex is built for founders, not engineers. The interface is your operational inbox — review decisions, approve actions, stay informed. No code, no configuration, no learning curve.' },
]

export default function Faq() {
  const ref = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
    <section className="faq reveal" id="faq" ref={ref}>
      <div className="sl">FAQ</div>
      <h2 className="st">Common questions.</h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {faq.q}<span className="arrow">+</span>
            </button>
            <div className="faq-a"><p>{faq.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}
