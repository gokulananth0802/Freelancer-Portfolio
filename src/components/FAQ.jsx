import { useState } from 'react'

const faqData = [
  {
    q: 'What services does Goforj Solutions offer?',
    a: 'We provide Graphic Design & Branding, Content Writing & Copywriting, Social Media Management, Custom Web Design & React Development, and Search Engine Optimization (SEO).',
  },
  {
    q: 'How long does a web or design project take?',
    a: 'Typically 1-2 weeks for landing pages and graphics/content deliverables, and 2-4 weeks for multi-page web applications.',
  },
  {
    q: 'Can you manage our social media and content on an ongoing basis?',
    a: 'Yes! We offer monthly retainer packages for social media post designing, content creation, caption writing, and growth management.',
  },
  {
    q: 'What technology stack do you use for web development?',
    a: 'We specialize in modern web technologies including React, Next.js, Vite, Tailwind CSS, JavaScript, and Node.js for ultra-fast, responsive web apps.',
  },
  {
    q: 'Do I own all final assets and code?',
    a: 'Yes. Once the project is completed, you own 100% of all graphic designs, written content, source code, and assets created for your business.',
  },
  {
    q: 'How do we get started with Goforj Solutions?',
    a: "Simply fill out our contact form or send us a message on WhatsApp. We'll discuss your goals and provide a customized plan.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface/50" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold text-primary uppercase tracking-widest">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-headline-xl font-bold text-on-surface">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`${isOpen ? 'glass-card border-primary/30 shadow-md' : 'glass-card-subtle'} rounded-2xl overflow-hidden transition-all`}
              >
                <button
                  className="w-full p-6 flex justify-between items-center cursor-pointer text-left gap-4"
                  onClick={() => toggle(i)}
                >
                  <h3 className={`text-headline-md font-semibold text-base md:text-lg ${isOpen ? 'text-primary' : 'text-on-surface'}`}>{item.q}</h3>
                  <span className="material-symbols-outlined text-primary">{isOpen ? 'remove' : 'add'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-primary/10 mt-2">
                    <p className="text-on-surface-variant text-body-md pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
