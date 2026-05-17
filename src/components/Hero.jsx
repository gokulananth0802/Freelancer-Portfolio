export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="blob top-20 -left-20" />
      <div className="blob bottom-20 -right-20" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="space-y-8">
          <h1 className="text-headline-xl font-bold text-on-surface">
            Let's build something <br></br><span className="text-primary">your customer will love</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Premium web design, React development, and SEO optimization. We craft high-performance digital experiences that convert visitors into loyal customers.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform" target="_blank" rel="noopener noreferrer" className="neumorphic-raised-indigo px-8 py-4 rounded-full text-headline-md font-semibold hover:scale-105 transition-transform active:shadow-inner">
              Book a Call
            </a>
            <a href="#portfolio" className="neumorphic-raised px-8 py-4 rounded-full text-headline-md font-semibold text-primary hover:scale-105 transition-transform active:shadow-inner">
              View Work
            </a>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="relative">
          <div className="neumorphic-raised rounded-3xl p-4 overflow-hidden transform rotate-3">
            <img
              alt="Modern Web Dashboard"
              className="rounded-2xl w-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB90DAl_QKdZvuLI_9JELUPBN5bHr64RSqgQHWoKMDiMIqFKGm76oRxXecf61hcpkfNdNhfijI9kB3yLSW3m4NpmAzdfpXvk6RXjy-Ktt7MPhv_jlcWuWVfXmzRk4j6w5UZO2wBC8uT2EoEP1dUE0GxQR6FyzIr1JQwXwYlS82Q4aB8Jo_n0dXMqKb7cn1kI_vut4__Txd9Jr_xwCYbvJyZfEyV5wULNxd1cZJ1cVxERnPzgD7K8jhBFIbseJIhwvyvWaLnatgAZPPp"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute bottom-4 -left-8 neumorphic-raised p-6 rounded-2xl hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="neumorphic-pressed w-12 h-12 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">trending_up</span>
              </div>
              <div>
                <p className="text-headline-md font-semibold text-primary">+140%</p>
                <p className="text-label-md font-semibold text-on-surface-variant uppercase">Traffic Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
