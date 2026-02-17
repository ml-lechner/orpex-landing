'use client'
import { useEffect, useRef } from 'react'

export default function FinalCta({ onOpenFunnel }: { onOpenFunnel: (email?: string) => void }) {
  const ref = useRef<HTMLElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

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
    <section className="cta reveal" ref={ref}>
      <h2>The 1-person unicorn starts <span className="accent">here.</span></h2>
      <p>Join the founders building the next generation of companies on Orpex.</p>
      <div className="cig">
        <input ref={emailRef} type="email" className="ci" placeholder="you@startup.com" />
        <button className="btn-primary" onClick={() => onOpenFunnel(emailRef.current?.value?.trim())}>Get Access →</button>
      </div>
      <div className="csub">Currently onboarding design partners · Limited spots</div>
    </section>
  )
}
