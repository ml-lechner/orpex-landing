export default function Logo({ size = 28 }: { size?: number }) {
  const height = size
  const width = Math.round(size * (720 / 160))
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 720 160" fill="none">
      <defs>
        <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="144" height="144" rx="40" stroke="url(#brand-gradient)" strokeWidth="10" fill="none" />
      <circle cx="80" cy="80" r="32" fill="url(#brand-gradient)" />
      <text x="192" y="104" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="500" fontSize="88" fill="#fafafa" letterSpacing="-2">Orpex</text>
    </svg>
  )
}
