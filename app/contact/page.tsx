'use client'
import { useState } from 'react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { AnnouncementBar } from '@/components/AnnouncementBar'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    message: '',
  })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', businessName: '', email: '', phone: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <>
      <AnnouncementBar />
      <NavBar />
      <main className="pt-24">
        {/* Header */}
        <section className="bg-teal-dark text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-3">Get in Touch</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Scott personally reviews every message and calls back within the day.
          </p>
        </section>

        {/* Form */}
        <section className="section-pad bg-warm-light">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-teal-sm">

              {state === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-teal-dark mb-3">Message Received!</h2>
                  <p className="text-warm-mid">
                    Scott will be in touch within the day. In the meantime, feel free to
                    call HI Agent directly from the homepage.
                  </p>
                  <button
                    onClick={() => setState('idle')}
                    className="btn-teal mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-warm-dark mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={set('name')}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-business" className="block text-sm font-semibold text-warm-dark mb-1.5">
                        Business Name
                      </label>
                      <input
                        id="contact-business"
                        type="text"
                        placeholder="Smith Plumbing LLC"
                        value={form.businessName}
                        onChange={set('businessName')}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-warm-dark mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@smithplumbing.com"
                      value={form.email}
                      onChange={set('email')}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-warm-dark mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={set('phone')}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-warm-dark mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell us about your business and what you're looking for..."
                      value={form.message}
                      onChange={set('message')}
                      className="form-input resize-none"
                    />
                  </div>

                  {state === 'error' && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    id="contact-submit-button"
                    type="submit"
                    disabled={state === 'loading'}
                    className="btn-amber w-full py-4 text-base disabled:opacity-60"
                  >
                    {state === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
