export default function Pricing() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface" id="pricing">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-primary text-label-md font-semibold uppercase tracking-widest mb-2">Pricing</p>
        <h2 className="text-headline-xl font-bold">Transparent costs.</h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Landing Page Plan */}
        <div className="neumorphic-raised p-10 rounded-3xl text-center space-y-8">
          <div>
            <h3 className="text-headline-md font-semibold mb-2">Landing Page</h3>
            <div className="text-primary text-headline-xl font-bold">₹2,999</div>
            <p className="text-on-surface-variant text-label-md font-semibold">One-time payment</p>
          </div>
          <ul className="space-y-4 text-left border-y border-outline-variant/20 py-8">
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
          </ul>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform" target="_blank" rel="noopener noreferrer" className="block w-full neumorphic-raised-indigo py-4 rounded-2xl font-bold hover:scale-105 active:shadow-inner transition-all text-center">
            Get Started
          </a>
        </div>

        {/* Standard Plan */}
        <div className="neumorphic-raised p-10 rounded-3xl text-center space-y-8 scale-105 ring-2 ring-primary/20 bg-surface-bright relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
            POPULAR
          </div>
          <div>
            <h3 className="text-headline-md font-semibold mb-2">Standard Site</h3>
            <div className="text-primary text-headline-xl font-bold">₹5,999</div>
            <p className="text-on-surface-variant text-label-md font-semibold">One-time payment</p>
          </div>
          <ul className="space-y-4 text-left border-y border-outline-variant/20 py-8">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>Everything from 2,999 plan</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>Up to 5 Pages</span>
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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform" target="_blank" rel="noopener noreferrer" className="block w-full neumorphic-raised-indigo py-4 rounded-2xl font-bold hover:scale-105 active:shadow-inner transition-all text-center">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
