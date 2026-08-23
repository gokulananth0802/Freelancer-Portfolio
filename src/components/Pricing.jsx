export default function Pricing() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface/50" id="pricing">
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-primary uppercase tracking-widest">
          <span>Investment</span>
        </div>
        <h2 className="text-headline-xl font-bold text-on-surface">Transparent & Affordable Pricing</h2>
        <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
          High quality solutions crafted to deliver exceptional ROI for your business.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Landing Page Plan */}
        <div className="glass-card p-10 rounded-3xl text-center flex flex-col justify-between space-y-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-headline-md font-semibold mb-2">Landing Page</h3>
              <div className="text-primary text-headline-xl font-bold">₹2,999</div>
              <p className="text-on-surface-variant text-label-md font-semibold">One-time payment</p>
            </div>
            <ul className="space-y-4 text-left border-y border-primary/10 py-8">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Single Landing Page</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>SEO Optimized</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Mobile Responsive</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Basic Graphic Creatives</span>
              </li>
            </ul>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full glass-button-primary py-4 rounded-2xl font-bold hover:scale-[1.02] transition-all text-center"
          >
            Get Started
          </a>
        </div>

        {/* Standard Plan */}
        <div className="glass-card p-10 rounded-3xl text-center flex flex-col justify-between space-y-8 border-2 border-primary/40 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
            POPULAR
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-headline-md font-semibold mb-2">Standard Site</h3>
              <div className="text-primary text-headline-xl font-bold">₹5,999</div>
              <p className="text-on-surface-variant text-label-md font-semibold">One-time payment</p>
            </div>
            <ul className="space-y-4 text-left border-y border-primary/10 py-8">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Everything from 2,999 plan</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Up to 5 Custom Pages</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Contact Form &amp; Maps</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Free Hosting (1 Year)</span>
              </li>
            </ul>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full glass-button-primary py-4 rounded-2xl font-bold hover:scale-[1.02] transition-all text-center"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
