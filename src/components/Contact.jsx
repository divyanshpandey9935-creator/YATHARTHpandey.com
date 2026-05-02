import { useState } from 'react'

const topics = [
  'LIC Forms',
  'Insurance Plans',
  'Products',
  'Know Your Life Insurance',
  'Buy New Policy',
  'Claim Assistance',
  'Policy Status',
  'Renewal Premium / Revival',
  'Advance Premium',
  'Loan Repayment / Interest Payment',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', topic: '', message: '', consent: false })
  const [sent, setSent] = useState(false)
  const [topicMenuOpen, setTopicMenuOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.topic || !form.consent) return
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', topic: '', message: '', consent: false })
    setTopicMenuOpen(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(0,35,102,0.15)',
    background: 'rgba(255,255,255,0.55)',
    backdropFilter: 'blur(12px)',
    outline: 'none',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '14px',
    color: '#1a2a4a',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
    transition: 'border 0.2s, box-shadow 0.2s',
  }

  const isButtonActive = form.consent
  const buttonStyle = {
    width: '190px',
    padding: '12px 26px',
    borderRadius: '12px',
    border: 'none',
    color: '#fff',
    fontWeight: 700,
    fontSize: 14,
    fontFamily: 'Nunito, sans-serif',
    backgroundColor: isButtonActive ? 'transparent' : '#b8c7dc',
    backgroundImage: isButtonActive
      ? 'linear-gradient(135deg, #3c66b4 25%, #226ad7 40%, #a1ccf7 100%)'
      : 'none',
    boxShadow: isButtonActive
      ? '0 12px 26px rgba(61,98,172,0.28), inset 0 1px 0 rgba(255,255,255,0.18)'
      : 'none',
    cursor: isButtonActive ? 'pointer' : 'not-allowed',
    opacity: isButtonActive ? 1 : 0.78,
    transition: 'all 0.22s ease',
  }

  return (
    <section id="contact" className="relative z-[1] px-[5%] py-14">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="section-eyebrow">Get In Touch</span>
        <h2 className="font-playfair font-bold text-[30px] mb-3" style={{ color: '#002366' }}>
          Contact Us
        </h2>
        <p className="text-[14px]" style={{ color: '#5a7a9a' }}>
          We'd love to help. Fill in the form and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="max-w-[760px] mx-auto">
        {/* Form */}
        <div className="glass-card p-6 sm:p-8">
          {sent && (
            <div className="mb-5 px-4 py-3 rounded-xl text-[13px] font-semibold text-center"
              style={{ background: 'rgba(37,211,102,0.12)', color: '#1a7a40', border: '1px solid rgba(37,211,102,0.3)' }}>
              ✅ Thank you! We'll contact you shortly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
              <div className="flex flex-col gap-3">
                <div>
                  <label className="block text-[12px] font-bold mb-1 tracking-wide uppercase" style={{ color: '#002366' }}>
                    Full Name
                  </label>
                  <input
                    type="text" required placeholder="Full Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold mb-1 tracking-wide uppercase" style={{ color: '#002366' }}>
                    Mobile Number
                  </label>
                  <input
                    type="tel" required placeholder="Number"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold mb-1 tracking-wide uppercase" style={{ color: '#002366' }}>
                    What Would You Like to Know?
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setTopicMenuOpen(!topicMenuOpen)}
                      aria-expanded={topicMenuOpen}
                      className="text-left"
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                      }}>
                      <span style={{ color: form.topic ? '#1a2a4a' : '#7a8aa0' }}>
                        {form.topic || 'Select a topic...'}
                      </span>
                      <span aria-hidden="true" style={{ color: '#002366', fontWeight: 800 }}>v</span>
                    </button>
                    {topicMenuOpen && (
                      <div
                        className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 max-h-[178px] overflow-y-auto rounded-[12px]"
                        style={{
                          background: 'rgba(255,255,255,0.96)',
                          border: '1px solid rgba(0,35,102,0.15)',
                          boxShadow: '0 14px 32px rgba(0,35,102,0.16)',
                        }}>
                        {topics.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => {
                              setForm({ ...form, topic })
                              setTopicMenuOpen(false)
                            }}
                            className="block w-full text-left px-4 py-2.5 text-[13px] transition-colors hover:bg-[#e8f4ff]"
                            style={{ color: '#1a2a4a', fontFamily: 'Nunito, sans-serif' }}>
                            {topic}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <label className="flex items-center justify-end gap-2 text-[12px] font-bold cursor-pointer" style={{ color: '#002366' }}>
                  <span>I agree to be contacted</span>
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={e => setForm({ ...form, consent: e.target.checked })}
                    className="h-4 w-4 cursor-pointer"
                    required
                  />
                </label>
              </div>

              <div className="flex flex-col">
                <label className="block text-[12px] font-bold mb-1 tracking-wide uppercase" style={{ color: '#002366' }}>
                  Message
                </label>
                <textarea
                  required
                  placeholder="Message"
                  rows={1}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, height: '224px', resize: 'vertical' }}
                />
                <button type="submit" disabled={!isButtonActive} className="text-center self-end mt-3" style={buttonStyle}>
                  Send Message →
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
