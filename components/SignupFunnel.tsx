'use client'
import { useEffect, useRef, useState } from 'react'
import { supabase } from '@/lib/supabase'

type FunnelState = {
  email: string
  name: string
  role: string
  company: string
  building: string
  industry: string
  stage: string
  teamSize: string
  pains: string[]
  source: string
  needs: string
}

const initialState: FunnelState = {
  email: '', name: '', role: '', company: '', building: '',
  industry: '', stage: '', teamSize: '', pains: [], source: '', needs: ''
}

export default function SignupFunnel({
  isOpen,
  prefillEmail,
  onClose
}: {
  isOpen: boolean
  prefillEmail?: string
  onClose: () => void
}) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FunnelState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [waitlistNum, setWaitlistNum] = useState<string | number>('—')
  const emailRef = useRef<HTMLInputElement>(null)

  const totalSteps = 6

  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setForm({ ...initialState, email: prefillEmail || '' })
      setWaitlistNum('—')
      document.body.style.overflow = 'hidden'
      setTimeout(() => emailRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen, prefillEmail])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const progress = step === 7 ? 100 : (step / totalSteps) * 100

  const validate = (): boolean => {
    if (step === 1) {
      if (!form.email || !form.email.includes('@') || !form.email.includes('.')) {
        emailRef.current?.focus()
        ;(emailRef.current as HTMLInputElement).style.borderColor = '#F87171'
        setTimeout(() => { if (emailRef.current) emailRef.current.style.borderColor = '' }, 2000)
        return false
      }
    }
    if (step === 2 && !form.name.trim()) return false
    if (step === 3 && !form.company.trim()) return false
    return true
  }

  const next = () => {
    if (!validate()) return
    setStep(s => Math.min(s + 1, totalSteps))
  }

  const back = () => setStep(s => Math.max(s - 1, 1))

  const togglePain = (val: string) => {
    setForm(f => ({
      ...f,
      pains: f.pains.includes(val) ? f.pains.filter(p => p !== val) : [...f.pains, val]
    }))
  }

  const submit = async () => {
    setSubmitting(true)
    let position: string | number = '—'
    try {
      await supabase.from('waitlist').insert([{
        email: form.email,
        full_name: form.name,
        role: form.role || null,
        company_name: form.company,
        building: form.building || null,
        industry: form.industry || null,
        stage: form.stage || null,
        team_size: form.teamSize || null,
        pain_points: form.pains,
        source: form.source || null,
        needs: form.needs || null,
        referrer: typeof window !== 'undefined' ? document.referrer || null : null
      }])
      const { count } = await supabase.from('waitlist').select('*', { count: 'exact', head: true })
      if (count) position = count
    } catch {
      // Still show success
    }
    setWaitlistNum(position)
    setSubmitting(false)
    setStep(7)
  }

  if (!isOpen) return null

  return (
    <div className="funnel-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="funnel-modal">
        <button className="funnel-close" onClick={onClose}>✕</button>
        <div className="funnel-progress">
          <div className="funnel-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="funnel-body">

          {/* STEP 1 */}
          <div className={`funnel-step${step === 1 ? ' active' : ''}`}>
            <div className="funnel-step-label">Step 1 of 6</div>
            <h2>Get early access</h2>
            <p className="fsubtext">Join the founders building the next generation of AI-first companies on Orpex.</p>
            <div className="funnel-field">
              <label>Email address</label>
              <input
                ref={emailRef}
                type="email"
                className="funnel-input"
                placeholder="you@startup.com"
                autoComplete="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                onKeyDown={e => e.key === 'Enter' && next()}
              />
            </div>
            <div className="funnel-actions">
              <button className="funnel-next" onClick={next}>Continue →</button>
            </div>
          </div>

          {/* STEP 2 */}
          <div className={`funnel-step${step === 2 ? ' active' : ''}`}>
            <div className="funnel-step-label">Step 2 of 6</div>
            <h2>Tell us about you</h2>
            <p className="fsubtext">So your AI workforce knows who&apos;s in charge.</p>
            <div className="funnel-field">
              <label>Full name</label>
              <input type="text" className="funnel-input" placeholder="Jane Smith" autoComplete="name"
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div className="funnel-field">
              <label>Your role</label>
              <select className="funnel-select" value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}>
                <option value="" disabled>Select your role</option>
                <option value="Solo Founder">Solo Founder</option>
                <option value="Co-Founder / CEO">Co-Founder / CEO</option>
                <option value="CTO / Technical Co-Founder">CTO / Technical Co-Founder</option>
                <option value="COO / Operations">COO / Operations</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="funnel-actions">
              <button className="funnel-back" onClick={back}>← Back</button>
              <button className="funnel-next" onClick={next}>Continue →</button>
            </div>
          </div>

          {/* STEP 3 */}
          <div className={`funnel-step${step === 3 ? ' active' : ''}`}>
            <div className="funnel-step-label">Step 3 of 6</div>
            <h2>About your company</h2>
            <p className="fsubtext">Help us understand what you&apos;re building.</p>
            <div className="funnel-field">
              <label>Company name</label>
              <input type="text" className="funnel-input" placeholder="Acme Inc."
                value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
            </div>
            <div className="funnel-field">
              <label>What are you building? (one line)</label>
              <input type="text" className="funnel-input" placeholder="AI-powered analytics for e-commerce"
                value={form.building} onChange={e => setForm(f => ({ ...f, building: e.target.value }))} />
            </div>
            <div className="funnel-field">
              <label>Industry</label>
              <select className="funnel-select" value={form.industry} onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}>
                <option value="" disabled>Select industry</option>
                <option value="SaaS / Software">SaaS / Software</option>
                <option value="Fintech">Fintech</option>
                <option value="AI / Machine Learning">AI / Machine Learning</option>
                <option value="E-Commerce / Marketplace">E-Commerce / Marketplace</option>
                <option value="Health / Biotech">Health / Biotech</option>
                <option value="Developer Tools">Developer Tools</option>
                <option value="Enterprise / B2B">Enterprise / B2B</option>
                <option value="Consumer / B2C">Consumer / B2C</option>
                <option value="Climate / Energy">Climate / Energy</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="funnel-actions">
              <button className="funnel-back" onClick={back}>← Back</button>
              <button className="funnel-next" onClick={next}>Continue →</button>
            </div>
          </div>

          {/* STEP 4 */}
          <div className={`funnel-step${step === 4 ? ' active' : ''}`}>
            <div className="funnel-step-label">Step 4 of 6</div>
            <h2>Where are you right now?</h2>
            <p className="fsubtext">This helps us tailor your AI workforce to your stage.</p>
            <div className="funnel-field">
              <label>Company stage</label>
              <div className="funnel-options">
                {[
                  { value: 'Idea', label: '💡 Idea', desc: 'Pre-product' },
                  { value: 'Building MVP', label: '🔨 Building MVP', desc: 'In development' },
                  { value: 'Launched', label: '🚀 Launched', desc: 'Live with users' },
                  { value: 'Revenue', label: '💰 Revenue', desc: 'Generating income' },
                ].map(o => (
                  <div key={o.value} className={`funnel-option${form.stage === o.value ? ' selected' : ''}`}
                    onClick={() => setForm(f => ({ ...f, stage: o.value }))}>
                    <div className="fo-label">{o.label}</div>
                    <div className="fo-desc">{o.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="funnel-field" style={{ marginTop: '20px' }}>
              <label>Team size</label>
              <div className="funnel-options">
                {[
                  { value: 'Solo', label: '1', desc: 'Solo founder' },
                  { value: '2-3', label: '2-3', desc: 'Co-founders' },
                  { value: '4-10', label: '4-10', desc: 'Small team' },
                  { value: '10+', label: '10+', desc: 'Growing' },
                ].map(o => (
                  <div key={o.value} className={`funnel-option${form.teamSize === o.value ? ' selected' : ''}`}
                    onClick={() => setForm(f => ({ ...f, teamSize: o.value }))}>
                    <div className="fo-label">{o.label}</div>
                    <div className="fo-desc">{o.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="funnel-actions">
              <button className="funnel-back" onClick={back}>← Back</button>
              <button className="funnel-next" onClick={next}>Continue →</button>
            </div>
          </div>

          {/* STEP 5 */}
          <div className={`funnel-step${step === 5 ? ' active' : ''}`}>
            <div className="funnel-step-label">Step 5 of 6</div>
            <h2>Biggest operational pain points?</h2>
            <p className="fsubtext">Select all that apply. This helps us prioritize your AI agents.</p>
            <div className="funnel-chips">
              {[
                'Finance & Accounting', 'Legal & Compliance', 'Sales & Lead Gen', 'Operations & Tools',
                'HR & Hiring', 'Fundraising', 'Tax & Filings', 'Everything'
              ].map(p => {
                const labels: Record<string, string> = {
                  'Finance & Accounting': '💰 Finance & Accounting',
                  'Legal & Compliance': '⚖️ Legal & Compliance',
                  'Sales & Lead Gen': '📈 Sales & Lead Gen',
                  'Operations & Tools': '⚙️ Operations & Tools',
                  'HR & Hiring': '👥 HR & Hiring',
                  'Fundraising': '🏦 Fundraising',
                  'Tax & Filings': '📋 Tax & Filings',
                  'Everything': '🔥 Honestly, everything'
                }
                return (
                  <div key={p} className={`funnel-chip${form.pains.includes(p) ? ' selected' : ''}`}
                    onClick={() => togglePain(p)}>
                    {labels[p]}
                  </div>
                )
              })}
            </div>
            <div className="funnel-actions">
              <button className="funnel-back" onClick={back}>← Back</button>
              <button className="funnel-next" onClick={next}>Continue →</button>
            </div>
          </div>

          {/* STEP 6 */}
          <div className={`funnel-step${step === 6 ? ' active' : ''}`}>
            <div className="funnel-step-label">Step 6 of 6</div>
            <h2>Almost done!</h2>
            <p className="fsubtext">Two more quick questions to personalize your experience.</p>
            <div className="funnel-field">
              <label>How did you hear about Orpex?</label>
              <select className="funnel-select" value={form.source} onChange={e => setForm(f => ({ ...f, source: e.target.value }))}>
                <option value="" disabled>Select one</option>
                <option value="Twitter / X">Twitter / X</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Friend / Colleague">Friend / Colleague</option>
                <option value="YC / Startup Community">YC / Startup Community</option>
                <option value="Google Search">Google Search</option>
                <option value="Product Hunt">Product Hunt</option>
                <option value="Investor Referral">Investor Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="funnel-field">
              <label>Anything specific you&apos;d like from Orpex? (optional)</label>
              <textarea className="funnel-input"
                placeholder="e.g., I need help with Delaware incorporation, finding my first 10 customers, managing compliance across 3 states..."
                value={form.needs} onChange={e => setForm(f => ({ ...f, needs: e.target.value }))} />
            </div>
            <div className="funnel-actions">
              <button className="funnel-back" onClick={back}>← Back</button>
              <button className="funnel-next" onClick={submit} disabled={submitting}>
                {submitting ? 'Submitting...' : 'Join the Waitlist →'}
              </button>
            </div>
          </div>

          {/* DONE */}
          <div className={`funnel-step${step === 7 ? ' active' : ''}`}>
            <div className="funnel-done">
              <div className="funnel-done-icon">✓</div>
              <h2>You&apos;re in!</h2>
              <div className="waitlist-num">#{waitlistNum}</div>
              <div className="waitlist-label">on the waitlist</div>
              <p>We&apos;re onboarding design partners in small batches. We&apos;ll reach out soon with next steps. In the meantime, keep building — your AI workforce is almost ready.</p>
              <div className="funnel-actions" style={{ justifyContent: 'center', marginTop: '20px' }}>
                <button className="funnel-next" onClick={onClose} style={{ maxWidth: '200px' }}>Back to Home</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
