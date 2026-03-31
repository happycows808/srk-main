'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bebas text-3xl text-white tracking-wider hover:text-red-600 transition-colors">
          SRK
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="font-bebas text-lg tracking-wider text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#what-we-do" className="font-bebas text-lg tracking-wider text-white/80 hover:text-white transition-colors">
            What We Do
          </Link>
          <Link href="#media" className="font-bebas text-lg tracking-wider text-white/80 hover:text-white transition-colors">
            Media
          </Link>
          <Link href="#contact" className="font-bebas text-lg tracking-wider text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
          <a
            href="https://srk-rdi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bebas text-lg tracking-wider bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors"
          >
            Enroll in RDI →
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-4">
            <Link href="#about" className="font-bebas text-2xl tracking-wider" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#what-we-do" className="font-bebas text-2xl tracking-wider" onClick={() => setMenuOpen(false)}>What We Do</Link>
            <Link href="#media" className="font-bebas text-2xl tracking-wider" onClick={() => setMenuOpen(false)}>Media</Link>
            <Link href="#contact" className="font-bebas text-2xl tracking-wider" onClick={() => setMenuOpen(false)}>Contact</Link>
            <a
              href="https://srk-rdi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bebas text-2xl tracking-wider bg-red-600 text-white px-6 py-3 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Enroll in RDI →
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
