const features = [
  { icon: 'search', title: 'Advanced SEO', desc: "We don't just build; we make sure you're found. First page ranking is the goal." },
  { icon: 'insights', title: 'Analytics Integration', desc: 'Data-driven decisions. We setup custom dashboards to track every click.' },
  { icon: 'devices', title: 'Ultra Responsive', desc: 'Flawless performance on 4k monitors down to the smallest smartphones.' },
  { icon: 'currency_rupee', title: 'High ROI', desc: 'Our sites are sales machines. Every element is designed to convert.' },
  { icon: 'design_services', title: 'Full Service', desc: 'From branding to deployment, we handle the technical heavy lifting.' },
  { icon: 'speed', title: 'Speed Optimized', desc: 'Core Web Vitals compliant. Lightning fast load times guaranteed.' },
]

export default function Results() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <p className="text-primary text-label-md font-semibold uppercase tracking-widest mb-2">Services</p>
          <h2 className="text-headline-xl font-bold">Our Core Service.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {features.map((f) => (
            <div key={f.title} className="neumorphic-raised p-8 rounded-3xl space-y-4">
              <div className="neumorphic-pressed w-16 h-16 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">{f.icon}</span>
              </div>
              <h4 className="text-headline-md font-semibold">{f.title}</h4>
              <p className="text-on-surface-variant">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
