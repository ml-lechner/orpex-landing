'use client'
import ProductMockup from './ProductMockup'

export default function Hero({ onOpenFunnel }: { onOpenFunnel: () => void }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" /> Now onboarding design partners
        </div>
        <h1>The operating system for <span className="gradient">AI-first startups</span></h1>
        <p className="hero-sub">Incorporate your company and deploy an autonomous AI workforce that handles finance, compliance, GTM, and operations from day one.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onOpenFunnel}>Get Early Access →</button>
          <a href="#how-it-works" className="btn-outline" onClick={(e) => {
            e.preventDefault()
            document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}>See How It Works</a>
        </div>
      </div>
      <ProductMockup />
    </section>
  )
}
