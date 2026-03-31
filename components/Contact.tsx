'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-black py-24 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white uppercase mb-4">
          Reach Out.
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          {/* Contact info */}
          <div>
            <div className="mb-8">
              <p className="font-bebas text-sm tracking-widest text-red-600 uppercase mb-2">Phone</p>
              <a
                href="tel:+13103030164"
                className="font-bebas text-3xl text-white hover:text-red-600 transition-colors tracking-wider"
              >
                (310) 303-0164
              </a>
            </div>
            <div className="mb-8">
              <p className="font-bebas text-sm tracking-widest text-red-600 uppercase mb-2">Email</p>
              <a
                href="mailto:info@streetracingkills.org"
                className="font-bebas text-2xl text-white hover:text-red-600 transition-colors tracking-wider"
              >
                info@streetracingkills.org
              </a>
            </div>
            <div>
              <p className="font-bebas text-sm tracking-widest text-red-600 uppercase mb-2">Based In</p>
              <p className="font-bebas text-xl text-white/60 tracking-wider">Los Angeles, California</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-white/5 border border-white/20 text-white font-serif px-5 py-4 placeholder-white/30 focus:outline-none focus:border-red-600 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-white/5 border border-white/20 text-white font-serif px-5 py-4 placeholder-white/30 focus:outline-none focus:border-red-600 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="bg-white/5 border border-white/20 text-white font-serif px-5 py-4 placeholder-white/30 focus:outline-none focus:border-red-600 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-bebas text-xl tracking-wider bg-red-600 text-white px-8 py-4 hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="font-serif text-white/70 text-sm">
                ✓ Message sent. We&apos;ll be in touch.
              </p>
            )}
            {status === 'error' && (
              <p className="font-serif text-red-400 text-sm">
                Something went wrong. Please try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
