export default function Footer() {
  return (
    <footer className="bg-surface w-full py-12 px-margin-mobile md:px-margin-desktop mt-24 rounded-t-xl shadow-[0_-8px_16px_#C8D0E7,0_-8px_16px_#FFFFFF]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-gutter max-w-[1280px] mx-auto">
        <div className="text-center md:text-left">
          <div className="text-headline-md font-black text-on-surface tracking-tighter mb-2">Goforj</div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-label-md font-semibold text-on-surface-variant">Available for new projects</span>
          </div>
        </div>

        <div className="flex gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/gokulananth0802" target="_blank" rel="noopener noreferrer">Github</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://in.linkedin.com/in/gokulananth0802" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/gokulananth0802?igsh=MXFmNngzc2FqMndrbA==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:gokulananths8@gmail.com">Email</a>
        </div>

        <p className="text-on-surface-variant text-label-md text-center md:text-right">
          © 2024 Goforj. <br />Built with precision and digital tactility.
        </p>
      </div>
    </footer>
  )
}
