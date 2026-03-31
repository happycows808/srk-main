'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden" id="hero">
      {/* Red left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 w-full py-32">
        <div
          className={`max-w-5xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Eyebrow */}
          <p
            className="font-bebas text-red-600 text-lg md:text-xl tracking-[0.3em] uppercase mb-6"
            style={{ transitionDelay: '0ms' }}
          >
            Los Angeles · Since 2014 · 501(c)(3)
          </p>

          {/* Main headline */}
          <h1 className="font-bebas leading-[0.9] mb-8">
            <span
              className={`block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-white tracking-tight transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '150ms' }}
            >
              STREET RACING
            </span>
            <span
              className={`block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-red-600 tracking-tight transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              KILLS
            </span>
          </h1>

          {/* Divider */}
          <div
            className={`w-24 h-0.5 bg-red-600 mb-8 transition-all duration-700 ${visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
            style={{ transformOrigin: 'left', transitionDelay: '450ms' }}
          />

          <p
            className={`font-serif text-white/60 text-base md:text-lg tracking-widest uppercase mb-10 max-w-2xl transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '500ms' }}
          >
            A Reckless Driving Prevention Organization — Fighting to end street racing one life at a time.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '650ms' }}
          >
            <a
              href="https://srk-rdi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bebas text-xl tracking-wider bg-red-600 text-white px-10 py-4 hover:bg-white hover:text-black transition-colors inline-block text-center"
            >
              Enroll in RDI Program →
            </a>
            <Link
              href="#pledge"
              className="font-bebas text-xl tracking-wider border border-white text-white px-10 py-4 hover:bg-white hover:text-black transition-colors inline-block text-center"
            >
              Take the Pledge →
            </Link>
            <a
              href="https://www.streetracingkills.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bebas text-xl tracking-wider border border-red-600 text-red-600 px-10 py-4 hover:bg-red-600 hover:text-white transition-colors inline-block text-center"
            >
              Donate →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-bebas text-xs tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/30">
          <rect x="5.5" y="0.5" width="5" height="9" rx="2.5" stroke="currentColor"/>
          <circle cx="8" cy="4" r="1.5" fill="currentColor"/>
          <path d="M4 16L8 20L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
