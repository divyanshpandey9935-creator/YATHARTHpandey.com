import { useEffect, useRef } from 'react'

const awards = [
  {
    image: '/image/awards/trophy-display.jpg',
    badge: 'Governor Award 2024',
    title: 'Honored by UP Governor',
    year: 'Government of Uttar Pradesh',
  },
  {
    image: '/image/awards/annual-convention-mdrt.jpg',
    badge: 'MDRT Global Member',
    title: 'Million Dollar Round Table',
    year: 'USA — International Recognition',
  },
  {
    image: '/image/awards/lic-branch-achievement.jpg',
    badge: 'Branch First Award',
    title: 'Top Branch Performer',
    year: 'LIC of India — 2023',
  },
  {
    image: '/image/awards/special-recognition-award.jpg',
    badge: 'Star Performer',
    title: 'Chairman\'s Club Member',
    year: 'LIC of India — 2022–24',
  },
  {
    image: '/image/awards/annual-convention-award.jpg',
    badge: 'Annual Convention',
    title: 'Convention Award Recognition',
    year: 'LIC Annual Meet',
  },
  {
    image: '/image/awards/award-certificate-group.jpg',
    badge: 'Certificate Honor',
    title: 'Recognized for Excellence',
    year: 'LIC Recognition Program',
  },
  {
    image: '/image/awards/award-handover-stage.jpg',
    badge: 'Award Ceremony',
    title: 'Award Handover on Stage',
    year: 'Special Achievement',
  },
  {
    image: '/image/awards/awards-showcase-table.jpg',
    badge: 'Awards Showcase',
    title: 'Achievement Collection',
    year: 'Performance Milestones',
  },
  {
    image: '/image/awards/certificate-showcase.jpg',
    badge: 'Certification',
    title: 'Professional Recognition',
    year: 'LIC Advisor Excellence',
  },
  {
    image: '/image/awards/corporate-group-photo.jpg',
    badge: 'Corporate Meet',
    title: 'Team Recognition Moment',
    year: 'LIC Corporate Event',
  },
  {
    image: '/image/awards/corporate-meet-bouquet.jpg',
    badge: 'Felicitation',
    title: 'Corporate Meet Honor',
    year: 'Regional Recognition',
  },
  {
    image: '/image/awards/honored-with-bouquet.jpg',
    badge: 'Honored',
    title: 'Felicitation with Bouquet',
    year: 'Service Excellence',
  },
  {
    image: '/image/awards/lamp-lighting-ceremony.jpg',
    badge: 'Ceremony',
    title: 'Event Opening Ceremony',
    year: 'LIC Program',
  },
  {
    image: '/image/awards/mdrt-honors-stage.jpg',
    badge: 'MDRT Honors',
    title: 'MDRT Stage Recognition',
    year: 'International Achievement',
  },
  {
    image: '/image/awards/regional-manager-meet.jpg',
    badge: 'Regional Meet',
    title: 'Regional Manager Meeting',
    year: 'LIC Leadership Connect',
  },
]

export default function Awards() {
  const carouselRef = useRef(null)
  const pauseAutoScrollUntil = useRef(0)
  const manualScrollFrame = useRef(null)
  const visibleAwards = [...awards, ...awards, ...awards]

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
        carousel.scrollLeft += 0.75
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

  const scrollAwards = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return

    if (manualScrollFrame.current) {
      window.cancelAnimationFrame(manualScrollFrame.current)
    }

    pauseAutoScrollUntil.current = Date.now() + 2200

    const sectionWidth = carousel.scrollWidth / 3
    const startLeft = carousel.scrollLeft
    const targetLeft = startLeft + direction * 360
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
    <section id="awards" className="relative z-[1] px-[5%] pt-14 pb-8">
      <style>{`
        .awards-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-10">
        <span className="section-eyebrow">Recognition</span>
        <h2 className="font-playfair font-bold text-[30px] mb-3" style={{ color: '#002366' }}>
          Honors & Achievements
        </h2>
        <p className="text-[14px] max-w-[480px] mx-auto" style={{ color: '#5a7a9a' }}>
          Consistently recognized by the Government of UP and LIC for outstanding service and performance.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-[1120px] mx-auto">
        <button
          type="button"
          aria-label="Previous award"
          onClick={() => scrollAwards(1)}
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
          className="awards-carousel flex gap-4 overflow-x-auto px-1 py-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
          {visibleAwards.map((a, i) => (
            <div key={`${a.title}-${i}`} className="glass-card overflow-hidden flex-shrink-0 w-[260px] sm:w-[285px] lg:w-[300px]">
              <img
                src={a.image}
                alt={a.title}
                className="w-full aspect-[4/3] object-cover rounded-[18px_18px_0_0]"
              />
              <div className="p-4">
                <span className="gold-badge mb-2 block w-fit">{a.badge}</span>
                <p className="font-semibold text-[14px] mb-1" style={{ color: '#002366' }}>{a.title}</p>
                <p className="text-[11px]" style={{ color: '#5a7a9a' }}>{a.year}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next award"
          onClick={() => scrollAwards(-1)}
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
