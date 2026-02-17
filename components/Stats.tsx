'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 15000, suffix: '+', label: 'Venture-backed startups founded annually in the US' },
  { target: 10, suffix: '×', label: 'Faster to build software with AI in 2025' },
  { target: 40, suffix: '%', label: 'Of founder time wasted on operations' },
  { target: 13, suffix: '', label: 'Employees at Instagram when acquired for $1B' },
]

function useCounter(target: number, started: boolean, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setValue(current)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])
  return value
}

function StatCard({ stat, started, index }: { stat: typeof stats[0]; started: boolean; index: number }) {
  const value = useCounter(stat.target, started)
  const display = stat.target >= 1000 ? value.toLocaleString() : value
  return (
    <div className={`sc`} style={{ '--i': index } as React.CSSProperties}>
      <div className="sv">{display}{stat.suffix}</div>
      <div className="slb">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('visible')
        setStarted(true)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="stats reveal" ref={ref}>
      <div className="sl">Why Now</div>
      <h2 className="st">The infrastructure moment for AI-first companies.</h2>
      <p className="sd">AI capabilities crossed the threshold from &quot;assist&quot; to &quot;execute.&quot; Team sizes are deflating. The next breakout companies will be radically smaller.</p>
      <div className="sg">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} started={started} index={i} />
        ))}
      </div>
    </section>
  )
}
