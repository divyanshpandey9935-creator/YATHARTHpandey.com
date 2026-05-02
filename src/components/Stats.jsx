const stats = [
  { icon: '🏆', num: 'MDRT-USA', label: 'International Recognition', sub: 'Global Top Performers' },
  { icon: '👨‍👩‍👧', num: '500+', label: 'Happy Families', sub: 'Insured & Protected' },
  { icon: '🎖️', num: 'Governor', label: 'Award Winner', sub: 'Govt. of Uttar Pradesh' },
]

export default function Stats() {
  return (
    <section className="relative z-[1] px-[5%] py-12">
      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="glass-card p-6 text-center">
            <div className="text-[36px] mb-2">{s.icon}</div>
            <p className="font-playfair font-bold text-[26px] mb-1" style={{ color: '#002366' }}>{s.num}</p>
            <p className="font-semibold text-[14px] mb-1" style={{ color: '#002366' }}>{s.label}</p>
            <p className="text-[12px]" style={{ color: '#5a7a9a' }}>{s.sub}</p>
            <div className="w-10 h-[2px] rounded-full mx-auto mt-3"
              style={{ background: 'linear-gradient(90deg,#D4AF37,#f0d060)' }} />
          </div>
        ))}
      </div>
    </section>
  )
}
