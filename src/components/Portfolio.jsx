const projects = [
  {
    tag: 'FOOD & SNACKS',
    title: 'Aadhava Attan',
    desc: 'Built a full e-commerce platform for a traditional South Indian snacks brand with online ordering.',
    result: 'Result: Live & Selling',
    img: '/aadhavaattan-preview.png',
    link: 'https://aadhavaattan.com/',
  },
  {
    tag: 'FARM E-COMMERCE',
    title: 'SSRJ Farms',
    desc: 'Full-stack e-commerce platform for farm-fresh fish, poultry, vegetables & fruits with multi-language support.',
    result: 'Result: Live & Growing',
    img: '/ssrj-farms-preview.png',
    link: 'https://fish-farming-one.vercel.app/',
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface" id="portfolio">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <p className="text-primary text-label-md font-semibold uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-headline-xl font-bold">Selected work.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link || '#'}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noopener noreferrer' : undefined}
              className="neumorphic-raised rounded-3xl p-6 group cursor-pointer hover:-translate-y-2 transition-all duration-300 block"
            >
              <div className="rounded-2xl overflow-hidden mb-6 h-64">
                <img
                  alt={p.title}
                  className="w-full h-full object-cover object-top"
                  src={p.img}
                />
              </div>
              <div className="flex gap-2 mb-4">
                <span className="neumorphic-pressed px-3 py-1 rounded-full text-[12px] font-bold text-primary">
                  {p.tag}
                </span>
              </div>
              <h3 className="text-headline-md font-semibold mb-2">{p.title}</h3>
              <p className="text-on-surface-variant mb-6">{p.desc}</p>
              <div className="neumorphic-pressed p-4 rounded-xl flex justify-between items-center">
                <span className="text-label-md font-semibold">{p.result}</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

