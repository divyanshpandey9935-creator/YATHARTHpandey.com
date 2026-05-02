const quickLinks = ['Home', 'Services', 'Awards', 'About', 'Contact']

const contactDetails = [
  { icon: '📞', label: 'Phone', value: '+91 99999 99999', href: 'tel:+919999999999' },
  { icon: '📍', label: 'Office', value: 'LIC Branch, Unnao, Uttar Pradesh', href: 'https://maps.google.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM', href: null },
]

export default function Footer() {
  return (
    <footer className="relative z-[1]"
      style={{
        background: 'rgba(0,35,102,0.88)',
        backdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
      <div className="px-[5%] py-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1 — Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-13 flex items-center justify-center overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                borderRadius: '7px',
              }}>
              <img
                src="/image/icons/lic-logo-main.jpg"
                alt="LIC"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-[15px] leading-tight">Parth Pandey</p>
              <p className="text-white/55 text-[10px] tracking-widest uppercase">LIC Agent · MDRT USA</p>
            </div>
          </div>
          <p className="text-white/60 text-[13px] leading-[1.7]">
            Trusted LIC advisor dedicated to protecting your family's future with the right insurance plan.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <p className="text-white font-bold text-[13px] tracking-widest uppercase mb-4">Quick Links</p>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}
                  className="text-white/65 hover:text-white text-[13px] transition-colors no-underline">
                  → {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact Info */}
        <div>
          <p className="text-white font-bold text-[13px] tracking-widest uppercase mb-4">Contact Info</p>
          <div className="flex flex-col gap-3">
            {contactDetails.map(item => (
              <div key={item.label} className="flex gap-3 items-start">
                <span className="text-[17px] leading-none mt-1">{item.icon}</span>
                <div>
                  <p className="text-white/45 text-[10px] font-bold tracking-widest uppercase mb-1">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-white/70 hover:text-white text-[13px] font-semibold no-underline transition-colors">{item.value}</a>
                    : <p className="text-white/70 text-[13px] font-semibold leading-[1.5]">{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 4 — Social */}
        <div className="lg:border-l lg:border-white/10 lg:pl-8">
          <p className="text-white font-bold text-[13px] tracking-widest uppercase mb-4">Follow Us</p>
          <div className="flex gap-3 mb-5">
            {[
              { icon: '📘', label: 'Facebook', href: 'https://facebook.com' },
              { icon: '📸', label: 'Instagram', href: 'https://instagram.com' },
              { icon: '▶️', label: 'YouTube', href: 'https://youtube.com' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[18px] no-underline transition-all"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                {s.icon}
              </a>
            ))}
          </div>
          <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
            style={{ background: 'rgba(212,175,55,0.18)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}>
            MDRT USA Member
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-[5%] py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-white/50 text-[12px]">© 2025 Parth Pandey. All Rights Reserved.</p>
        <p className="text-white/40 text-[12px]">
          Designed with ❤️ by{' '}
          <span className="text-white/65 font-semibold">Divyansh Pandey</span>
        </p>
      </div>
    </footer>
  )
}
