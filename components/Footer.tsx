import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo + mission */}
          <div>
            <p className="font-bebas text-3xl text-white tracking-wider mb-1">
              STREET RACING KILLS
            </p>
            <div className="w-8 h-0.5 bg-red-600 mb-4" />
            <p className="font-serif text-white/40 text-sm leading-relaxed">
              A 501(c)(3) nonprofit organization dedicated to ending street racing deaths through education, intervention, and advocacy.
            </p>
            <p className="font-bebas text-xs tracking-widest text-white/30 uppercase mt-4">
              Los Angeles, CA · Since 2014
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-bebas text-sm tracking-[0.2em] text-red-600 uppercase mb-6">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'What We Do', href: '#what-we-do' },
                { label: 'RDI Program', href: 'https://srk-rdi.vercel.app', external: true },
                { label: 'Media & Press', href: '#media' },
                { label: 'Take the Pledge', href: '#pledge' },
                { label: 'Contact', href: '#contact' },
              ].map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bebas text-base tracking-wider text-white/50 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label} ↗
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-bebas text-base tracking-wider text-white/50 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact + social */}
          <div>
            <p className="font-bebas text-sm tracking-[0.2em] text-red-600 uppercase mb-6">
              Get in Touch
            </p>
            <div className="space-y-3 mb-8">
              <a
                href="tel:3103030164"
                className="font-bebas text-xl tracking-wider text-white hover:text-red-600 transition-colors block"
              >
                (310) 303-0164
              </a>
              <a
                href="mailto:info@streetracingkills.org"
                className="font-serif text-white/50 text-sm hover:text-white transition-colors block"
              >
                info@streetracingkills.org
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { label: 'IG', href: 'https://www.instagram.com/streetracingkills' },
                { label: 'YT', href: 'https://www.youtube.com/@streetracingkills' },
                { label: 'FB', href: 'https://www.facebook.com/streetracingkills' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas text-sm tracking-widest text-white/50 hover:text-white transition-colors border border-white/20 hover:border-red-600 hover:text-red-600 px-4 py-2"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-white/10 w-full mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bebas text-xs tracking-widest text-white/30 uppercase">
            © 2026 Street Racing Kills. 501(c)(3). All rights reserved.
          </p>
          <a
            href="https://www.streetracingkills.org/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bebas text-sm tracking-wider text-red-600 hover:text-white transition-colors border border-red-600/40 hover:border-white px-6 py-2"
          >
            Donate →
          </a>
        </div>
      </div>
    </footer>
  )
}
