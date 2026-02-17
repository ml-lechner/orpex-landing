'use client'
import { useEffect, useRef, useState } from 'react'

export default function StickyCta({ onOpenFunnel }: { onOpenFunnel: (email?: string) => void }) {
  const [show, setShow] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const obs = new IntersectionObserver(([e]) => {
      setShow(!e.isIntersecting)
    }, { threshold: 0 })
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`sticky-cta${show ? ' show' : ''}`}>
      <span className="sticky-cta-text"><strong>Orpex</strong> — Join the next generation of founders</span>
      <input ref={emailRef} type="email" className="sticky-input" placeholder="you@startup.com" />
      <button className="sticky-btn" onClick={() => onOpenFunnel(emailRef.current?.value?.trim())}>
        Get Early Access →
      </button>
    </div>
  )
}
