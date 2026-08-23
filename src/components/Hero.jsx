import BackgroundBlobs from "./BackgroundBlobs";
import ParticlesBg from "./ParticlesBg";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-28 pb-16 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <BackgroundBlobs />
      <ParticlesBg />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill">
            <div className="w-6 h-6 rounded-full overflow-hidden p-0.5 flex items-center justify-center">
              <img src="/goforj_logo_transparent.png" alt="Goforj Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-label-md font-bold tracking-wider text-primary uppercase">Goforj Solutions</span>
          </div>

          <h1 className="text-headline-xl font-bold text-on-surface">
            Building digital solutions <br />
            <span className="text-primary">your business needs to grow</span>
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-xl">
            From web development and graphic design to content writing, social media management, and SEO — Goforj Solutions crafts high-impact digital experiences tailored to scale your brand.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScudw1bn5311lrWOTOCP2a-djRXGcRqwz5PpCZekcz_jcA81w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button-primary px-8 py-4 rounded-full text-headline-md font-semibold hover:scale-105 transition-transform"
            >
              Book a Call
            </a>
            <a
              href="#services"
              className="glass-button px-8 py-4 rounded-full text-headline-md font-semibold text-primary hover:scale-105 transition-transform"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right — hero visual */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-4 overflow-hidden transform rotate-2">
            <img
              alt="Modern Web Dashboard"
              className="rounded-2xl w-full transition-all duration-500 shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB90DAl_QKdZvuLI_9JELUPBN5bHr64RSqgQHWoKMDiMIqFKGm76oRxXecf61hcpkfNdNhfijI9kB3yLSW3m4NpmAzdfpXvk6RXjy-Ktt7MPhv_jlcWuWVfXmzRk4j6w5UZO2wBC8uT2EoEP1dUE0GxQR6FyzIr1JQwXwYlS82Q4aB8Jo_n0dXMqKb7cn1kI_vut4__Txd9Jr_xwCYbvJyZfEyV5wULNxd1cZJ1cVxERnPzgD7K8jhBFIbseJIhwvyvWaLnatgAZPPp"
            />
          </div>

          {/* Floating stat badge */}
          <div className="absolute bottom-4 -left-8 glass-card p-5 rounded-2xl hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="glass-pill w-12 h-12 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">trending_up</span>
              </div>
              <div>
                <p className="text-headline-md font-semibold text-primary">+140%</p>
                <p className="text-label-md font-semibold text-on-surface-variant uppercase">Client Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
