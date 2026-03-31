'use client'

import { useState } from 'react'

export default function TakePledge() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-black py-24 px-6" id="pledge">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase mb-4">
          Take the Pledge
        </h2>

        <p className="font-bebas text-2xl text-white/50 tracking-wider mb-10">
          15,000<span className="text-red-600">+</span> People have taken this pledge
        </p>

        {/* Pledge text callout */}
        <div className="bg-red-600 px-8 py-8 mb-10">
          <p className="font-serif text-white leading-relaxed text-base md:text-lg">
            I, (state your name), understand that engaging in a street race, driving recklessly, or even speeding, could injure or kill passengers, bystanders, and anyone else on the road. If I engage in such activity and someone is killed, I understand I could be charged with murder — Ryan&apos;s Law (California Senate Bill 1472).
          </p>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 bg-white/10 border border-white/30 text-white font-serif px-6 py-4 placeholder-white/40 focus:outline-none focus:border-red-600 transition-colors"
            />
            <button
              type="submit"
              className="font-bebas text-xl tracking-wider bg-red-600 text-white px-8 py-4 hover:bg-red-700 transition-colors whitespace-nowrap"
            >
              Take the Pledge
            </button>
          </form>
        ) : (
          <div className="border border-red-600 px-8 py-6 text-center">
            <p className="font-bebas text-2xl tracking-wider text-white mb-2">
              PLEDGE TAKEN, {name.toUpperCase()}.
            </p>
            <p className="font-serif text-white/60">
              Thank you for standing with Street Racing Kills.
            </p>
          </div>
        )}

        {/* Ryan's Law callout */}
        <div className="mt-10 border-t border-white/20 pt-8">
          <p className="font-bebas text-base md:text-lg tracking-wider text-white/50 uppercase">
            <span className="text-red-600">Ryan&apos;s Law</span> — California Senate Bill 1472 — makes street racing homicide a murder charge.
          </p>
        </div>
      </div>
    </section>
  )
}
