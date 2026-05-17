import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full px-6 py-3 z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center shadow-[8px_8px_16px_#C8D0E7,-8px_-8px_16px_#FFFFFF]">
      <div className="text-headline-md font-bold text-primary tracking-tight">Goforj</div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-4">
        <a className="text-on-surface-variant hover:text-primary px-4 py-2 transition-all" href="#portfolio">Portfolio</a>
        <a className="text-on-surface-variant hover:text-primary px-4 py-2 transition-all" href="#pricing">Pricing</a>
        <a className="text-on-surface-variant hover:text-primary px-4 py-2 transition-all" href="#faq">FAQ</a>
        <a className="text-on-surface-variant hover:text-primary px-4 py-2 transition-all" href="#about">About</a>
        <a className="text-on-surface-variant hover:text-primary px-4 py-2 transition-all" href="#contact">Contact</a>
      </div>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block neumorphic-pressed-indigo px-6 py-2 rounded-full text-label-md font-semibold transition-transform active:scale-95">
        Book a Call
      </a>

      {/* Mobile menu button */}
      <button
        className="md:hidden ml-3 neumorphic-raised w-10 h-10 rounded-full flex items-center justify-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="material-symbols-outlined text-primary">{menuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 mx-4 neumorphic-raised rounded-2xl p-6 flex flex-col gap-3 md:hidden">
          <a className="text-on-surface-variant hover:text-primary py-2 transition-all" href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a className="text-on-surface-variant hover:text-primary py-2 transition-all" href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a className="text-on-surface-variant hover:text-primary py-2 transition-all" href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="text-on-surface-variant hover:text-primary py-2 transition-all" href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="text-on-surface-variant hover:text-primary py-2 transition-all" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform" target="_blank" rel="noopener noreferrer" className="neumorphic-pressed-indigo px-6 py-2 rounded-full text-label-md font-semibold text-center transition-transform active:scale-95 mt-2" onClick={() => setMenuOpen(false)}>Book a Call</a>
        </div>
      )}
    </nav>
  )
}
