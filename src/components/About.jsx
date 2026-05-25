export default function About() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop overflow-hidden" id="about">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Portrait */}
        <div className="relative">
          <div className="neumorphic-raised aspect-square rounded-[4rem] flex items-center justify-center p-8">
            <div className="neumorphic-pressed w-full h-full rounded-[3.5rem] overflow-hidden">
              <img
                alt="Gokul Ananth"
                className="w-full h-full object-cover"
                src="/gokul-photo.png"
              />
            </div>
          </div>
          
        </div>

        {/* Bio */}
        <div className="space-y-8">
          <div>
            <p className="text-primary text-label-md font-semibold uppercase tracking-widest mb-2">The Founder</p>
            <h2 className="text-headline-xl font-bold">Gokul Ananth, 22 · India</h2>
          </div>
          <p className="text-body-lg text-on-surface-variant">
            I'm a self-taught developer and designer with a passion for building digital products that combine aesthetic beauty with technical excellence. Since starting Goforj, I've helped dozens of businesses establish a world-class presence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '10+', label: 'Projects' },
              { value: '3y', label: 'Experience' },
              { value: '100%', label: 'Delivery' },
            ].map((s) => (
              <div key={s.label} className="neumorphic-pressed p-4 rounded-2xl text-center">
                <div className="text-headline-md font-semibold text-primary">{s.value}</div>
                <p className="text-[10px] uppercase font-bold text-outline">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {['REACT', 'NEXT.JS', 'TAILWIND', 'UI/UX', 'SEO'].map((skill) => (
              <span key={skill} className="neumorphic-pressed px-4 py-2 rounded-full text-xs font-bold text-primary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
