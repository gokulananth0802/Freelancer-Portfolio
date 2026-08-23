const features = [
  { icon: 'search', title: 'Advanced SEO', desc: "We don't just build; we make sure you're found. Higher search visibility is guaranteed." },
  { icon: 'insights', title: 'Analytics & Insights', desc: 'Data-driven decision making. We set up tracking for impressions, clicks, and leads.' },
  { icon: 'devices', title: 'Ultra Responsive', desc: 'Flawless performance across all screen sizes — 4K monitors down to mobile screens.' },
  { icon: 'currency_rupee', title: 'High ROI Delivery', desc: 'Designed to maximize engagement, turn visitors into buyers, and scale revenue.' },
  { icon: 'design_services', title: 'End-to-End Execution', desc: 'From visual design and copywriting to code and management — we handle everything.' },
  { icon: 'speed', title: 'Lightning Speed', desc: 'Optimized asset loading and clean code for high Core Web Vitals performance.' },
]

export default function Results() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-primary uppercase tracking-widest mb-3">
            <span>Why Work With Us</span>
          </div>
          <h2 className="text-headline-xl font-bold text-on-surface">The Goforj Advantage</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-1 transition-all duration-300">
              <div className="glass-pill w-14 h-14 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">{f.icon}</span>
              </div>
              <h3 className="text-headline-md font-semibold text-on-surface">{f.title}</h3>
              <p className="text-on-surface-variant text-body-md">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
