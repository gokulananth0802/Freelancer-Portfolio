export default function About() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop overflow-hidden" id="about">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Portrait */}
        <div className="relative">
          <div className="glass-card aspect-square rounded-[4rem] flex items-center justify-center p-8">
            <div className="glass-card-subtle w-full h-full rounded-[3.5rem] overflow-hidden">
              <img
                alt="Gokul Ananth"
                className="w-full h-full object-cover"
                src="/gokul-photo.png"
              />
            </div>
          </div>

          {/* Goforj Badge */}
          <div className="absolute bottom-6 right-6 glass-card p-3 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 glass-pill flex items-center justify-center">
              <img src="/goforj_logo_transparent.png" alt="Goforj Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-primary uppercase leading-tight">Goforj Solutions</p>
              <p className="text-[10px] font-medium text-on-surface-variant">Digital Craftsmanship</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full overflow-hidden p-0.5 glass-pill flex items-center justify-center">
                <img src="/goforj_logo_transparent.png" alt="Goforj Logo" className="w-full h-full object-contain" />
              </div>
              <p className="text-primary text-label-md font-semibold uppercase tracking-widest">Founder of Goforj Solutions</p>
            </div>
            <h2 className="text-headline-xl font-bold">Gokul Ananth, 22 · India</h2>
          </div>
          <p className="text-body-lg text-on-surface-variant">
            I'm a passionate developer and creative strategist. Through Goforj Solutions, I deliver end-to-end digital services — from high-converting website designs and web applications to graphic design, content writing, social media management, and SEO.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '10+', label: 'Projects' },
              { value: '3y', label: 'Experience' },
              { value: '100%', label: 'Delivery' },
            ].map((s) => (
              <div key={s.label} className="glass-card-subtle p-4 rounded-2xl text-center">
                <div className="text-headline-md font-semibold text-primary">{s.value}</div>
                <p className="text-[10px] uppercase font-bold text-outline">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Skills / Capabilities */}
          <div className="flex flex-wrap gap-2">
            {['WEB DEV', 'GRAPHIC DESIGN', 'CONTENT WRITING', 'SOCIAL MEDIA', 'SEO'].map((skill) => (
              <span key={skill} className="glass-pill px-4 py-2 rounded-full text-xs font-bold text-primary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
