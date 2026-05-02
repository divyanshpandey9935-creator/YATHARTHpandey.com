export default function Hero() {
  return (
    <section id="home" className="relative min-h-[86vh] flex items-center justify-center overflow-hidden px-[5%] py-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/image/parth-profile.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3) saturate(0.7)',
        }}
      />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute w-[480px] h-[480px] rounded-full -top-24 -left-24 opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,100,255,0.4), transparent 70%)' }}
        />
        <div
          className="absolute w-[360px] h-[360px] rounded-full -bottom-16 -right-16 opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent 70%)' }}
        />
      </div>

      <div className="relative z-[2] max-w-[650px] w-full text-center px-7 py-9 md:px-10 md:py-11 animate-fade-up bg-white/10  rounded-[30px] border border-white/20 shadow-2xl">
        <p
          className="font-playfair font-black tracking-[0.15em] uppercase mb-3 bg-clip-text text-transparent"
          style={{
            fontSize: '2.2rem',
            backgroundImage: 'linear-gradient(135deg, #3d62ac 20%, #5c9efa 30%, #9ac4f2 100%)',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          Parth Pandey
        </p>

        <h1
          className="font-playfair font-semibold mb-3 whitespace-nowrap"
          style={{ fontSize: 'clamp(1.25rem, 5vw, 2rem)', color: '#FFFFFF', lineHeight: '1.2' }}
        >
          Protecting Families, Securing Futures
        </h1>

        <p className="text-[16px] leading-[1.6] mb-3 text-white/80 max-w-[500px] mx-auto">
          With 5+ years of expertise and international recognition, 
          providing tailored LIC solutions for your peace of mind.
        </p>

        <div className="inline-flex flex-col items-center mb-5">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#25D366' }} />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/90">
              MDRT-USA Certified Advisor
            </span>
          </div>
          <div
            className="mt-2 h-[2.5px] w-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #D4AF37, #f0d060)' }}
          />
        </div>


        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-w-[180px] px-8 py-3 rounded-full font-bold text-center transition-all hover:scale-105 active:scale-95"
            style={{


              background: 'linear-gradient(135deg, #2752a2 25%, #1662d3 40%, #81b1e2 100%)',
              color: '#fff',
              boxShadow: '0 12px 28px rgba(0, 35, 102, 0.35)',
            }}
          >
            Free Consultation
          </a>
          <a
            href="https://wa.me/8858971111"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full font-bold border border-white/30 backdrop-blur-sm flex items-center gap-2  transition-all hover:scale-105 active:scale-95 text-white"
            style={{
              background: 'linear-gradient(135deg, #2f9d35 20%, #27ca32 40%, #a6f3ab 100%)',
            }}
          >
            <span style={{ fontSize: 20 }}>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
