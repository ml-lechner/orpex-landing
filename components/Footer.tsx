import Logo from './Logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div className="fb">
          <Logo size={22} />
          <p>The AI operating system for startups. Making the 1-person unicorn possible.</p>
        </div>
        <div className="fcl">
          <h4>Product</h4>
          <a href="#agents">GTM Agent</a>
          <a href="#agents">Finance Agent</a>
          <a href="#agents">Compliance Agent</a>
          <a href="#agents">Ops Agent</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="fcl">
          <h4>Company</h4>
          <a href="mailto:hello@orpex.ai">Contact</a>
          <a href="#">Careers</a>
        </div>
        <div className="fcl">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className="fbot">
        <span>© 2025 Orpex Technologies, Inc. · Delaware C-Corp</span>
        <div className="fsoc">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
