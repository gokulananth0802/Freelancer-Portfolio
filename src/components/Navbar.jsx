import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full px-6 py-3 z-50 glass-card flex justify-between items-center">
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-full overflow-hidden glass-pill p-1 flex items-center justify-center transition-transform group-hover:scale-105">
          <img src="/goforj_logo_transparent.png" alt="Goforj Logo" className="w-full h-full object-contain" />
        </div>
        <span className="text-headline-md font-bold text-primary tracking-tight">Goforj</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-2">
        <a className="text-on-surface-variant hover:text-primary px-3.5 py-1.5 rounded-full text-body-md font-medium transition-all hover:bg-primary/5" href="#services">Services</a>
        <a className="text-on-surface-variant hover:text-primary px-3.5 py-1.5 rounded-full text-body-md font-medium transition-all hover:bg-primary/5" href="#portfolio">Portfolio</a>
        <a className="text-on-surface-variant hover:text-primary px-3.5 py-1.5 rounded-full text-body-md font-medium transition-all hover:bg-primary/5" href="#pricing">Pricing</a>
        <a className="text-on-surface-variant hover:text-primary px-3.5 py-1.5 rounded-full text-body-md font-medium transition-all hover:bg-primary/5" href="#faq">FAQ</a>
        <a className="text-on-surface-variant hover:text-primary px-3.5 py-1.5 rounded-full text-body-md font-medium transition-all hover:bg-primary/5" href="#about">About</a>
        <a className="text-on-surface-variant hover:text-primary px-3.5 py-1.5 rounded-full text-body-md font-medium transition-all hover:bg-primary/5" href="#contact">Contact</a>
      </div>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block glass-button-primary px-6 py-2 rounded-full text-label-md font-semibold transition-transform active:scale-95">
        Book a Call
      </a>

      {/* Mobile menu button */}
      <button
        className="md:hidden ml-3 glass-button w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Navigation"
      >
        <span className="material-symbols-outlined text-primary">{menuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-white shadow-xl border border-primary/10 rounded-2xl p-6 flex flex-col gap-3 md:hidden">
          <a className="text-on-surface-variant hover:text-primary py-2 font-medium transition-all" href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a className="text-on-surface-variant hover:text-primary py-2 font-medium transition-all" href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a className="text-on-surface-variant hover:text-primary py-2 font-medium transition-all" href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a className="text-on-surface-variant hover:text-primary py-2 font-medium transition-all" href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="text-on-surface-variant hover:text-primary py-2 font-medium transition-all" href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="text-on-surface-variant hover:text-primary py-2 font-medium transition-all" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform" target="_blank" rel="noopener noreferrer" className="glass-button-primary px-6 py-2.5 rounded-full text-label-md font-semibold text-center transition-transform active:scale-95 mt-2" onClick={() => setMenuOpen(false)}>Book a Call</a>
        </div>
      )}
    </nav>
  )
}
