import { useState } from 'react'

const faqData = [
  {
    q: 'How long does a project take?',
    a: 'Typically 2-4 weeks for a standard website and 1 week for a landing page.',
  },
  {
    q: 'Do you offer maintenance?',
    a: 'Yes, we provide ongoing maintenance, security updates, and performance monitoring to ensure your site stays at its peak.',
  },
  {
    q: 'What technology do you use?',
    a: 'We primarily use React, Next.js, and Tailwind CSS for the frontend, paired with Node.js or headless CMS solutions on the backend.',
  },
  {
    q: 'Can you help with branding?',
    a: 'Absolutely. We offer full branding packages including logo design, color palettes, typography, and brand guidelines.',
  },
  {
    q: 'Do I own the source code?',
    a: 'Yes. Once the project is complete and payment is received, you own 100% of the source code and all assets.',
  },
  {
    q: 'How do we get started?',
    a: "Simply book a call or fill out our contact form. We'll schedule a discovery session to understand your needs and provide a detailed proposal.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1) // second item open by default

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-headline-xl font-bold text-center mb-16">Common Questions.</h2>

        <div className="space-y-6">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`${isOpen ? 'neumorphic-pressed ring-1 ring-primary/20' : 'neumorphic-raised'} rounded-2xl overflow-hidden transition-all`}
              >
                <button
                  className="w-full p-6 flex justify-between items-center cursor-pointer text-left"
                  onClick={() => toggle(i)}
                >
                  <h4 className={`text-headline-md font-semibold ${isOpen ? 'text-primary' : ''}`}>{item.q}</h4>
                  <span className="material-symbols-outlined text-primary">{isOpen ? 'remove' : 'add'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-on-surface-variant">{item.a}</p>
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
