import { useEffect, useRef } from 'react'

const services = [
  {
    icon: '📋',
    title: 'Policy Status',
    desc: 'Check your LIC policy details, due dates, and current status with quick guidance.',
    color: 'rgba(0,100,200,0.08)',
  },
  {
    icon: '🔄',
    title: 'Renewal Premium / Revival',
    desc: 'Pay renewal premiums and revive lapsed policies with the right documentation.',
    color: 'rgba(212,175,55,0.08)',
  },
  {
    icon: '💳',
    title: 'Advance Premium',
    desc: 'Plan and deposit advance premiums to keep your policy active without delays.',
    color: 'rgba(0,180,100,0.08)',
  },
  {
    icon: '🏦',
    title: 'Loan Repayment / Interest Payment',
    desc: 'Manage LIC policy loan repayment and interest payment support in one place.',
    color: 'rgba(160,50,200,0.08)',
  },
  {
    icon: '📝',
    title: 'LIC Forms',
    desc: 'Get help with the correct LIC forms for service requests, updates, and claims.',
    color: 'rgba(255,130,0,0.08)',
  },
  {
    icon: '🛡️',
    title: 'Insurance Plans',
    desc: 'Compare LIC plans based on protection, savings, family needs, and long-term goals.',
    color: 'rgba(0,35,102,0.08)',
  },
  {
    icon: '📦',
    title: 'Products',
    desc: 'Explore LIC products for children, retirement, savings, protection, and investment.',
    color: 'rgba(20,160,170,0.08)',
  },
  {
    icon: '💡',
    title: 'Know Your Life Insurance',
    desc: 'Understand life insurance benefits, terms, riders, premiums, and maturity values.',
    color: 'rgba(212,175,55,0.1)',
  },
  {
    icon: '🛒',
    title: 'Buy New Policy',
    desc: 'Choose and start a new LIC policy with clear advice and complete assistance.',
    color: 'rgba(0,180,100,0.1)',
  },
  {
    icon: '🤝',
    title: 'Claim Assistance',
    desc: 'Receive support for claim documents, submission process, and follow-up guidance.',
    color: 'rgba(180,50,90,0.08)',
  },
]

export default function Services() {
  const carouselRef = useRef(null)
  const pauseAutoScrollUntil = useRef(0)
  const manualScrollFrame = useRef(null)
  const visibleServices = [...services, ...services, ...services]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return undefined

    let animationFrame
    const sectionWidth = carousel.scrollWidth / 3

    carousel.scrollLeft = sectionWidth

    const moveCarousel = () => {
      if (carousel.scrollLeft <= 2) {
        carousel.scrollLeft += sectionWidth
      }

      if (carousel.scrollLeft >= sectionWidth * 2) {
        carousel.scrollLeft -= sectionWidth
      }

      if (Date.now() >= pauseAutoScrollUntil.current) {
        carousel.scrollLeft -= 0.85
      }

      animationFrame = window.requestAnimationFrame(moveCarousel)
    }

    animationFrame = window.requestAnimationFrame(moveCarousel)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      if (manualScrollFrame.current) {
        window.cancelAnimationFrame(manualScrollFrame.current)
      }
    }
  }, [])

  const scrollServices = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return

    if (manualScrollFrame.current) {
      window.cancelAnimationFrame(manualScrollFrame.current)
    }

    pauseAutoScrollUntil.current = Date.now() + 2200

    const sectionWidth = carousel.scrollWidth / 3
    const startLeft = carousel.scrollLeft
    const targetLeft = startLeft + direction * 620
    const duration = 420
    const startTime = performance.now()

    const animateManualScroll = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      carousel.scrollLeft = startLeft + (targetLeft - startLeft) * easedProgress

      if (carousel.scrollLeft <= 2) {
        carousel.scrollLeft += sectionWidth
      }

      if (carousel.scrollLeft >= sectionWidth * 2) {
        carousel.scrollLeft -= sectionWidth
      }

      if (progress < 1) {
        manualScrollFrame.current = window.requestAnimationFrame(animateManualScroll)
      }
    }

    manualScrollFrame.current = window.requestAnimationFrame(animateManualScroll)
  }

  return (
    <section id="services" className="relative z-[1] px-[5%] pt-6 pb-14"
      style={{ background: 'linear-gradient(135deg, rgba(0,35,102,0.03), rgba(212,175,55,0.03))' }}>
      <style>{`
        .services-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-10">
        <span className="section-eyebrow">What We Offer</span>
        <h2 className="font-playfair font-bold text-[30px] mb-3" style={{ color: '#002366' }}>
          Our Insurance Services
        </h2>
        <p className="text-[14px] max-w-[440px] mx-auto" style={{ color: '#5a7a9a' }}>
          Tailored LIC plans for every stage of life — from growing families to retirement.
        </p>
      </div>

      {/* Services carousel */}
      <div className="relative max-w-[1120px] mx-auto">
        <button
          type="button"
          aria-label="Previous services"
          onClick={() => scrollServices(1)}
          className="absolute left-0 top-1/2 z-20 w-12 h-12 -translate-x-3 -translate-y-1/2 rounded-full flex items-center justify-center text-white text-[24px] font-bold transition-all cursor-pointer hover:scale-105 active:scale-95"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 14px 30px rgba(0,35,102,0.16)',
          }}>
          ‹
        </button>

        <div
          ref={carouselRef}
          className="services-carousel flex gap-4 overflow-x-auto px-1 py-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
          {visibleServices.map((s, i) => (
            <div key={`${s.title}-${i}`} className="glass-card p-6 text-center flex flex-col items-center min-w-[260px] sm:min-w-[280px] lg:min-w-[300px]">
              {/* Icon box */}
              <div className="w-16 h-16 rounded-[18px] flex items-center justify-center text-[30px] mb-4"
                style={{
                  background: s.color,
                  border: '1px solid rgba(0,35,102,0.08)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
                }}>
                {s.icon}
              </div>
              <h3 className="font-playfair font-semibold text-[17px] mb-2" style={{ color: '#002366' }}>{s.title}</h3>
              <p className="text-[13px] leading-[1.65] mb-4 flex-1" style={{ color: '#5a7a9a' }}>{s.desc}</p>
              <a href="#contact"
                className="text-[12px] font-bold px-4 py-2 rounded-[10px] transition-all"
                style={{
                  background: 'rgba(0,35,102,0.07)',
                  color: '#002366',
                  border: '1px solid rgba(0,35,102,0.12)',
                }}
                onMouseEnter={e => { e.target.style.background='#002366'; e.target.style.color='#fff' }}
                onMouseLeave={e => { e.target.style.background='rgba(0,35,102,0.07)'; e.target.style.color='#002366' }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next services"
          onClick={() => scrollServices(-1)}
          className="absolute right-0 top-1/2 z-20 w-12 h-12 translate-x-3 -translate-y-1/2 rounded-full flex items-center justify-center text-white text-[24px] font-bold transition-all cursor-pointer hover:scale-105 active:scale-95"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 14px 30px rgba(0,35,102,0.16)',
          }}>
          ›
        </button>
      </div>
    </section>
  )
}
