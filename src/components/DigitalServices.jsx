const services = [
  {
    icon: '💳',
    title: 'Pay Premium Online',
    desc: 'Pay your LIC premium instantly and securely via the official LIC portal.',
    link: 'https://licindia.in',
  },
  {
    icon: '📋',
    title: 'Check Policy Status',
    desc: 'Track your policy details, premium due dates, and bonus information.',
    link: 'https://licindia.in',
  },
  {
    icon: '📥',
    title: 'Download Forms',
    desc: 'Download nomination, address change, and other LIC service request forms.',
    link: 'https://licindia.in',
  },
]

export default function DigitalServices() {
  return (
    <section className="relative z-[1] px-[5%] py-14">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="section-eyebrow">Online Services</span>
        <h2 className="font-playfair font-bold text-[30px] mb-3" style={{ color: '#002366' }}>
          Digital Convenience
        </h2>
        <p className="text-[14px]" style={{ color: '#5a7a9a' }}>
          Manage your policy without visiting the office.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
        {services.map((s, i) => (
          <a key={i} href={s.link} target="_blank" rel="noreferrer"
            className="block text-center p-8 rounded-[20px] no-underline transition-all"
            style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 8px 28px rgba(0,35,102,0.07), inset 0 1px 0 rgba(255,255,255,0.85)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.boxShadow='0 20px 44px rgba(0,35,102,0.13)' }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(0,35,102,0.07)' }}>
            <span className="text-[42px] mb-3 block"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,35,102,0.12))' }}>
              {s.icon}
            </span>
            <h3 className="font-bold text-[16px] mb-2" style={{ color: '#002366' }}>{s.title}</h3>
            <p className="text-[13px] leading-[1.65]" style={{ color: '#5a7a9a' }}>{s.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
