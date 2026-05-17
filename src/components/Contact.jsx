import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New Project Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    window.open(`mailto:gokulananths8@gmail.com?subject=${subject}&body=${body}`, '_self')

    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface" id="contact">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <h2 className="text-headline-xl font-bold mb-6">Let's talk about your next big thing.</h2>
            <p className="text-body-lg text-on-surface-variant mb-12">
              Whether you need a simple landing page or a complex web application, I'm here to bring your vision to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="neumorphic-raised w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <span className="text-body-lg">gokulananths8@gmail.com</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="neumorphic-raised w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <span className="text-body-lg">+91 6382541084</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="neumorphic-raised p-10 rounded-[2.5rem]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-label-md font-semibold px-2">Your Name</label>
                <input
                  className="w-full neumorphic-pressed border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 bg-transparent outline-none"
                  placeholder="John Doe"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-md font-semibold px-2">Email Address</label>
                <input
                  className="w-full neumorphic-pressed border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 bg-transparent outline-none"
                  placeholder="john@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-md font-semibold px-2">How can we help?</label>
                <textarea
                  className="w-full neumorphic-pressed border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 bg-transparent outline-none resize-none"
                  placeholder="Tell us about your project..."
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="submit"
                  className="neumorphic-raised-indigo py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>{sent ? 'Opening Mail...' : 'Start Project'}</span>
                  <span className="material-symbols-outlined">{sent ? 'check_circle' : 'send'}</span>
                </button>
                <a
                  href="https://wa.me/916382541084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neumorphic-raised py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all text-[#25D366]"
                >
                  <span>Chat now</span>
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
