import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — HI Agent',
  description: 'Frequently asked questions about HI Agent — your 24/7 AI voice agent for home service businesses.',
}

const faqs = [
  {
    q: 'Is HI Agent a real person or AI?',
    a: 'HI Agent is an AI voice agent — but it\'s designed to sound like a real, friendly receptionist. It uses ElevenLabs voice technology and OpenAI GPT-4o to hold natural conversations. Most callers don\'t realize they\'re talking to AI.',
  },
  {
    q: 'How quickly can we go live?',
    a: 'Most businesses are live within 2-3 business days. We set up the assistant, train it on your specific business, provision a phone number, and you forward your calls. That\'s it.',
  },
  {
    q: 'What happens when HI Agent can\'t answer a question?',
    a: 'It gracefully redirects to the next step — booking a call with Scott. It never invents answers or misleads callers. If it doesn\'t know something, it says "That\'s one for Scott — let me get you on his calendar."',
  },
  {
    q: 'Does HI Agent work after hours and on weekends?',
    a: 'Yes — 24 hours a day, 7 days a week, 365 days a year. That\'s the whole point. While you\'re sleeping, on a job, or enjoying the weekend, HI Agent answers every call.',
  },
  {
    q: 'What if the caller has an emergency?',
    a: 'HI Agent is trained to detect emergency situations (burst pipes, no heat, water damage) and responds appropriately — capturing their name and number and letting them know someone will reach back within minutes.',
  },
  {
    q: 'Do I need to install any software?',
    a: 'Nothing. You forward your business phone number to the HI Agent number. That\'s the entire setup. No apps, no dashboards to learn, no IT required.',
  },
  {
    q: 'Can HI Agent be trained specifically on my business?',
    a: 'Absolutely — and it is. We train it on your specific services, your service area, your pricing structure (at the level of detail you\'re comfortable sharing), and your most common questions. It\'s not a generic script.',
  },
  {
    q: 'What do I get after every call?',
    a: 'An email with the caller\'s phone number, call duration, a full transcript of the conversation, and an AI-generated summary of what was discussed and what the next step is.',
  },
  {
    q: 'Is HI Agent cheaper than a human receptionist?',
    a: 'Yes — significantly. A part-time human receptionist typically costs $2,000–$3,500/month and only works certain hours. HI Agent works 24/7 for a fraction of that cost, with no sick days or missed shifts.',
  },
  {
    q: 'How do I get started?',
    a: 'Hit the "Talk to HI Agent" button on this page and call us — or fill out the contact form. Scott personally follows up with every new conversation.',
  },
]

export default function FAQPage() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-teal-dark text-white py-16 px-6 text-center">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">🤖</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-3">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Everything you need to know about HI Agent — answered honestly.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="section-pad bg-white">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} id={`faq-${i + 1}`} className="faq-item group">
                <summary className="faq-summary list-none">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-teal-mid shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pb-5 text-warm-mid leading-relaxed text-sm pl-0 pr-8">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* CTA below FAQ */}
          <div className="text-center mt-16">
            <p className="text-warm-mid mb-6">Still have questions? Scott answers personally.</p>
            <a
              href="/#voice-widget"
              id="faq-cta-button"
              className="btn-amber text-base px-8 py-4"
            >
              Talk to HI Agent Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
