import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Logo */}
          <div>
            <p className="font-bebas text-4xl text-white tracking-wider">
              STREET RACING KILLS
            </p>
            <p className="font-bebas text-sm tracking-widest text-white/40 uppercase mt-1">
              501(c)(3) · Los Angeles, CA
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            <Link href="#about" className="font-bebas text-lg tracking-wider text-white/50 hover:text-white transition-colors">
              About
            </Link>
            <a
              href="https://srk-rdi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bebas text-lg tracking-wider text-white/50 hover:text-white transition-colors"
            >
              RDI Program
            </a>
            <Link href="#media" className="font-bebas text-lg tracking-wider text-white/50 hover:text-white transition-colors">
              Media
            </Link>
            <Link href="#contact" className="font-bebas text-lg tracking-wider text-white/50 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/streetracingkills"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bebas text-sm tracking-widest text-white/50 hover:text-white transition-colors border border-white/20 px-4 py-2 hover:border-white/60"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@streetracingkills"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bebas text-sm tracking-widest text-white/50 hover:text-white transition-colors border border-white/20 px-4 py-2 hover:border-white/60"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/streetracingkills"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bebas text-sm tracking-widest text-white/50 hover:text-white transition-colors border border-white/20 px-4 py-2 hover:border-white/60"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="h-0.5 bg-white/10 w-full mb-6" />

        <p className="font-bebas text-sm tracking-widest text-white/30 text-center uppercase">
          © 2026 Street Racing Kills. 501(c)(3). All rights reserved.
        </p>
      </div>
    </footer>
  )
}
