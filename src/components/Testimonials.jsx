export default function Testimonials() {
  const testimonials = [
    {
      quote: "Goforj Solutions transformed our online presence completely. From website development to branding and social media graphics, everything was executed flawlessly.",
      author: "Shresh Kumar",
      role: "CEO, TechFlow Solutions",
      rating: 5,
    },
    {
      quote: "Exceptional quality and timely delivery! The website speed and SEO optimizations helped our business reach new customers within weeks.",
      author: "Praveen Raj",
      role: "Founder, SSRJ Farms",
      rating: 5,
    },
    {
      quote: "From content writing to social media management, Goforj Solutions handled our entire digital strategy smoothly. Highly professional work!",
      author: "Karthik Subramanian",
      role: "Director, Aadhava Group",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface/30">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-primary uppercase tracking-widest">
            <span>Client Feedback</span>
          </div>
          <h2 className="text-headline-xl font-bold text-on-surface">Trusted by Growing Businesses</h2>
          <p className="text-body-lg text-on-surface-variant">
            Here is what clients say about collaborating with Goforj Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                {/* Star rating */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-2xl fill-current">
                      star
                    </span>
                  ))}
                </div>

                <blockquote className="text-body-md text-on-surface leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-primary/10">
                <p className="text-headline-md font-bold text-primary text-base">{t.author}</p>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
