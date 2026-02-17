'use client'
import Logo from './Logo'

export default function Nav({ onOpenFunnel }: { onOpenFunnel: () => void }) {
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav>
      <a href="#" className="nav-logo" onClick={(e) => e.preventDefault()}>
        <Logo size={28} />
      </a>
      <div className="nav-links">
        <a href="#agents" onClick={(e) => { e.preventDefault(); smoothScroll('agents') }}>Agents</a>
        <a href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScroll('how-it-works') }}>How It Works</a>
        <a href="#pricing" onClick={(e) => { e.preventDefault(); smoothScroll('pricing') }}>Pricing</a>
        <button className="nav-cta" onClick={onOpenFunnel}>Get Early Access</button>
      </div>
    </nav>
  )
}
