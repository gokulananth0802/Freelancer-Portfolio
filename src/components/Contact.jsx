import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formsubmit.co/ajax/gokulananths8@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Project Inquiry for Goforj Solutions from ${name}`,
          _captcha: 'false',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 6000)
    }
  }

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface/40" id="contact">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-primary/10 mb-4">
              <div className="w-5 h-5 rounded-full overflow-hidden p-0.5 flex items-center justify-center">
                <img src="/goforj_logo_transparent.png" alt="Goforj Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">Goforj Solutions</span>
            </div>
            <h2 className="text-headline-xl font-bold mb-6">Let's talk about your next big thing.</h2>
            <p className="text-body-lg text-on-surface-variant mb-12">
              Whether you need website development, graphic design, content writing, social media management, or SEO — reach out and let's get started.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="glass-pill w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <span className="text-body-lg font-medium">gokulananths8@gmail.com</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="glass-pill w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <span className="text-body-lg font-medium">+91 6382541084</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="glass-card p-10 rounded-[2.5rem]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-label-md font-semibold px-2 text-on-surface">Your Name</label>
                <input
                  className="w-full glass-input rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 bg-white/50 outline-none text-on-surface"
                  placeholder="John Doe"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-md font-semibold px-2 text-on-surface"> Your Email Address</label>
                <input
                  className="w-full glass-input rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 bg-white/50 outline-none text-on-surface"
                  placeholder="john@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-md font-semibold px-2 text-on-surface">How can Goforj Solutions help you?</label>
                <textarea
                  className="w-full glass-input rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 bg-white/50 outline-none text-on-surface resize-none"
                  placeholder="Tell us about your project or services needed (Web, Design, Content, Social Media, SEO)..."
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                  <span>Thank you! Your message has been sent directly to gokulananths8@gmail.com.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-rose-600">error</span>
                  <span>Oops! Something went wrong. Please try again or email directly to gokulananths8@gmail.com.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glass-button-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>
                    {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Send'}
                  </span>
                  <span className="material-symbols-outlined">
                    {submitStatus === 'success' ? 'check_circle' : 'send'}
                  </span>
                </button>
                <a
                  href="https://wa.me/916382541084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all text-[#25D366]"
                >
                  <span>WhatsApp Us</span>
                  <span className="material-symbols-outlined">forum</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
