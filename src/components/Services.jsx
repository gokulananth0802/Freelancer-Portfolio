export default function Services() {
  const servicesList = [
    {
      icon: 'palette',
      title: 'Graphic Design & Branding',
      desc: 'Eye-catching logos, brand identities, social media creatives, ad banners, and complete visual guidelines tailored to elevate your business.',
      tags: ['Logo Design', 'Brand Identity', 'Social Creatives', 'UI/UX']
    },
    {
      icon: 'edit_note',
      title: 'Content Writing & Copywriting',
      desc: 'Engaging website copy, SEO-optimized blog posts, product descriptions, and compelling marketing text that converts visitors into customers.',
      tags: ['SEO Copywriting', 'Web Content', 'Blog Writing', 'Brand Voice']
    },
    {
      icon: 'hub',
      title: 'Social Media Management',
      desc: 'End-to-end management of your social channels. Content planning, post designing, caption writing, and growth strategies.',
      tags: ['Content Strategy', 'Post Design', 'Audience Growth', 'Page Audit']
    },
    {
      icon: 'code',
      title: 'Web Design & Development',
      desc: 'Modern, high-speed websites and web applications built with React, Next.js, and Tailwind CSS for max performance and seamless UX.',
      tags: ['React & Next.js', 'E-commerce', 'Responsive Web', 'Fast Loading']
    },
    {
      icon: 'trending_up',
      title: 'SEO & Performance',
      desc: 'Data-driven search engine optimization, technical site audits, mobile speed tuning, and local search visibility to boost organic traffic.',
      tags: ['On-Page SEO', 'Technical Audits', 'Speed Boost', 'Keyword Strategy']
    }
  ]

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface/50 relative" id="services">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-primary uppercase tracking-widest">
            <span>What We Deliver</span>
          </div>
          <h2 className="text-headline-xl font-bold text-on-surface">Digital Solutions</h2>
          <p className="text-body-lg text-on-surface-variant">
            From design and development to content and growth, Goforj Solutions provides everything your business needs to scale effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-headline-md font-bold text-on-surface mb-3">{service.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-6">{service.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10">
                {service.tags.map((tag) => (
                  <span key={tag} className="glass-pill px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
