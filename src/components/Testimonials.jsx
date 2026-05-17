export default function Testimonials() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="neumorphic-raised p-12 rounded-[3rem] relative flex flex-col md:flex-row items-center gap-12">
          <div className="absolute top-10 right-10 opacity-10">
            <span className="material-symbols-outlined text-[120px] text-primary">format_quote</span>
          </div>

          <div className="w-48 h-48 rounded-full neumorphic-pressed p-2 shrink-0">
            <img
              alt="Shresh Kumar"
              className="w-full h-full object-cover rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHkW4iySS3271cWQJa3F1YeujbjxIg4b3jB9kB1x_WSn17xg236lw3uYTG61bdzgflZn4nilqF01lILhkuFcYuDfB4CR_j8RA0UJ-8zWFV6tLZMPUV-1sbhktovZs4jett3MgoEgtklkD_boQ30qXfiHE5CAbNeVfm6cqdJWLiw5nPZlH4GClBG5yzEkIZplvN4SwKo_OEHZg2lMoQvMrhyrL8vzRnkBYrGk4cm7G5E14oSWmMd_RXxDv-njXSw4Ug8gnMQK5XIft1"
            />
          </div>

          <div className="space-y-6 max-w-2xl">
            <span className="material-symbols-outlined text-primary text-5xl">format_quote</span>
            <blockquote className="text-headline-lg font-bold italic text-on-surface">
              "Goforj transformed our outdated site into a modern powerhouse. Our inquiries tripled within the first month of launch. Highly recommended for anyone serious about growth."
            </blockquote>
            <div>
              <p className="text-headline-md font-semibold text-primary">Shresh Kumar</p>
              <p className="text-label-md font-semibold text-on-surface-variant uppercase tracking-widest">
                CEO, TechFlow Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
