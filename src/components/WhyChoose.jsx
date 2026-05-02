import { useState } from 'react'

const points = [
  {
    num: '01',
    title: '5+ Years of Expertise',
    desc: 'Deep knowledge of LIC products to recommend the perfect plan for your unique needs.',
    details: [
      '5+ years of LIC advisory experience with families, professionals, and business owners.',
      'Strong understanding of term plans, savings plans, child plans, and retirement solutions.',
      'Guidance based on income, age, family responsibility, and long-term financial goals.',
      'Clear explanation of premium, maturity, bonus, riders, and policy benefits.',
      'Support in comparing different LIC plans before choosing the right option.',
      'Practical help with documents, proposal forms, nominee details, and policy servicing.',
      'Experience in helping clients avoid wrong coverage and under-insurance.',
      'Regular follow-up for premium reminders, renewals, and policy updates.',
      'Claim guidance with step-by-step support during important family needs.',
      'A service-first approach focused on trust, clarity, and long-term relationships.',
    ],
  },
  {
    num: '02',
    title: '24/7 Claim Support',
    desc: 'We stand by you at every step — especially during claim settlement when it matters most.',
    details: [
      'Quick support for claim-related questions whenever your family needs guidance.',
      'Step-by-step help in understanding claim requirements and timelines.',
      'Assistance in arranging policy documents, identity proofs, and nominee details.',
      'Clear guidance for death claims, maturity claims, survival benefits, and policy payouts.',
      'Help in filling claim forms correctly to reduce delays and confusion.',
      'Coordination support with LIC branch processes and document submission.',
      'Regular updates so your family knows what stage the claim has reached.',
      'Personal attention during stressful moments with calm and practical guidance.',
      'Support for nominee communication and required verification steps.',
      'A service promise focused on timely settlement and family peace of mind.',
    ],
  },
  {
    num: '03',
    title: 'Doorstep Service',
    desc: 'All paperwork handled at your home. Zero hassle, complete convenience.',
    details: [
      'Policy discussion and paperwork support from the comfort of your home.',
      'Help with proposal forms, KYC documents, photos, and signature requirements.',
      'Convenient appointment planning based on your available time.',
      'Guidance for premium payment options, policy terms, and benefit details.',
      'Document checking before submission to avoid small mistakes and rework.',
      'Support for new policies, renewals, policy updates, and servicing requests.',
      'Assistance for families, senior citizens, and busy professionals who prefer home support.',
      'Clear explanation of every form before you sign or submit anything.',
      'Follow-up until the policy process or service request is properly completed.',
      'A simple, comfortable experience with minimum travel and maximum clarity.',
    ],
  },
  {
    num: '04',
    title: 'MDRT Certified Advisor',
    desc: 'Internationally recognized — one of the top 1% financial advisors worldwide.',
    details: [
      'Recognition connected with high professional standards in insurance advisory.',
      'Global exposure to better client service practices and financial planning ideas.',
      'Advice shaped by discipline, consistency, and long-term client trust.',
      'Focus on ethical recommendations that match real protection and savings needs.',
      'Experience in serving clients with a structured and professional approach.',
      'Commitment to continuous learning in insurance, planning, and customer service.',
      'Better understanding of goal-based planning for family security and future needs.',
      'Service quality built around clarity, transparency, and responsible guidance.',
      'Confidence for clients who want a recognized and dependable LIC advisor.',
      'A relationship-first approach backed by proven performance and dedication.',
    ],
  },
]

export default function WhyChoose() {
  const [openDetails, setOpenDetails] = useState({})

  const toggleDetails = (pointNum) => {
    setOpenDetails((current) => ({
      ...current,
      [pointNum]: !current[pointNum],
    }))
  }

  return (
    <section id="about" className="relative z-[1] px-[5%] py-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-playfair font-bold text-[30px] mb-3" style={{ color: '#002366' }}>
            Your Trusted Insurance Partner
          </h2>
          <span className="section-eyebrow">Why Choose Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        {/* Left — profile photo */}
        <div className="rounded-[24px] overflow-hidden aspect-[4/5] lg:h-[640px] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #c8ddf5, #ddeeff)',
            border: '1px solid rgba(255,255,255,0.8)',
            boxShadow: '0 16px 48px rgba(0,35,102,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
          }}>
          <img
            src="/image/awards/parth-profile.jpg"
            alt="Parth Pandey"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — points */}
        <div className="lg:h-[640px] lg:overflow-y-auto lg:pr-2">
          <div className="flex flex-col gap-3">
            {points.map((p, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-[16px] transition-all group cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.48)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.75)',
                  boxShadow: '0 4px 16px rgba(0,35,102,0.05)',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateX(6px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(0,35,102,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateX(0)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(0,35,102,0.05)' }}>
                {/* Number */}
                <div className="w-10 h-10 rounded-[12px] flex-shrink-0 flex items-center justify-center text-white font-bold text-[14px]"
                  style={{
                    background: 'linear-gradient(135deg, #002366, #003399)',
                    boxShadow: '0 4px 12px rgba(0,35,102,0.25)',
                  }}>
                  {p.num}
                </div>
                <div>
                  <h4 className="font-bold text-[14px] mb-1" style={{ color: '#002366' }}>{p.title}</h4>
                  <p className="text-[13px] leading-[1.65]" style={{ color: '#5a7a9a' }}>{p.desc}</p>
                  {openDetails[p.num] && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {p.details.map((detail, detailIndex) => (
                        <li key={detail} className="text-[12.5px] leading-[1.55]" style={{ color: '#5a7a9a' }}>
                          {detailIndex + 1}. {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleDetails(p.num)}
                    className="mt-3 px-4 py-2 rounded-full text-white text-[12px] font-bold transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: 'linear-gradient(135deg, #2752a2 25%, #1662d3 40%, #81b1e2 100%)',
                      boxShadow: '0 8px 20px rgba(0,35,102,0.22)',
                    }}>
                    {openDetails[p.num] ? 'More Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
