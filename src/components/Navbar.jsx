import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['Home', 'Services', 'Awards', 'About', 'Contact']

  return (
    <>
      <nav className="nav-glass sticky top-0 z-50 flex items-center justify-between px-[5%] h-[68px] shadow-lg">
        {/* Brand */}
        {/* सिर्फ इमेज - बिना किसी एक्स्ट्रा बॉर्डर या बैकग्राउंड के */}
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
            <p className="text-white/60 text-[10px] font-light tracking-widest uppercase">LIC Agent · MDRT USA</p>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.slice(0, -1).map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white hover:bg-white/10 text-[13px] font-medium px-3 py-2 rounded-lg transition-all">
              {link}
            </a>
          ))}
         <a href="#contact"
  className="ml-2 text-[13px] font-bold px-4 py-2 rounded-lg transition-all hover:brightness-110 active:scale-95"
  style={{
    background: 'linear-gradient(135deg, #f5ca4c, #f7e7ad)', // थोड़ा और गोल्ड टच
    color: '#002366',
    boxShadow: '0 0 20px rgba(186, 154, 48, 0.4)', // बटन के चारों ओर हल्का ग्लो
  }}>
  Contact Us
</a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="w-[22px] h-[2px] bg-white rounded-sm" />
          <span className="w-[22px] h-[2px] bg-white rounded-sm" />
          <span className="w-[22px] h-[2px] bg-white rounded-sm" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[68px] left-0 right-0 z-40 flex flex-col gap-1 px-[5%] py-4"
          style={{
            background: 'rgba(0,35,102,0.96)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white/90 text-sm py-3 px-3 rounded-lg hover:bg-white/10 transition-all">
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
