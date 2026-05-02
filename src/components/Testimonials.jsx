const testimonials = [
  {
    stars: 5,
    quote: '"Parth bhai was with us through every step of the claim process. He\'s not just an agent — he\'s family."',
    name: 'Ramesh Verma',
    city: 'Unnao, UP',
    initial: 'R',
  },
  {
    stars: 5,
    quote: '"Got the best retirement plan for my father at the most affordable premium. Highly recommend Parth sir!"',
    name: 'Sunita Gupta',
    city: 'Lucknow, UP',
    initial: 'S',
  },
  {
    stars: 5,
    quote: '"Within 3 days of submission, our claim was settled. Parth\'s support was outstanding throughout."',
    name: 'Manoj Tiwari',
    city: 'Kanpur, UP',
    initial: 'M',
  },
]

export default function Testimonials() {
  return (
    <section className="relative z-[1] px-[5%] py-14"
      style={{ background: 'rgba(235,245,255,0.45)' }}>
      {/* Header */}
      <div className="text-center mb-10">
        <span className="section-eyebrow">Testimonials</span>
        <h2 className="font-playfair font-bold text-[30px] mb-3" style={{ color: '#002366' }}>
          Happy Clients
        </h2>
        <p className="text-[14px]" style={{ color: '#5a7a9a' }}>Real experiences from families we've protected.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card p-6">
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {Array(t.stars).fill(0).map((_, j) => (
                <span key={j} className="text-[16px]" style={{ color: '#D4AF37' }}>★</span>
              ))}
            </div>
            {/* Quote */}
            <p className="text-[13.5px] leading-[1.7] mb-4 italic" style={{ color: '#5a7a9a' }}>{t.quote}</p>
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[15px] flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #002366, #003399)',
                  border: '2px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 4px 12px rgba(0,35,102,0.2)',
                }}>
                {t.initial}
              </div>
              <div>
                <p className="font-bold text-[13px]" style={{ color: '#002366' }}>{t.name}</p>
                <p className="text-[11px]" style={{ color: '#5a7a9a' }}>{t.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
