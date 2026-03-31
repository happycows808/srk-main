import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center" id="hero">
      {/* Red left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full py-32">
        <div className="max-w-4xl">
          <h1 className="font-bebas leading-none">
            <span className="block text-7xl md:text-9xl lg:text-[11rem] text-white tracking-tight">
              STREET RACING
            </span>
            <span className="block text-7xl md:text-9xl lg:text-[11rem] text-red-600 tracking-tight">
              KILLS
            </span>
          </h1>

          <p className="mt-8 text-white/60 font-serif text-base md:text-lg tracking-wider uppercase">
            A Reckless Driving Prevention Organization · Founded 2014 · 501(c)(3) · Los Angeles, CA
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://srk-rdi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bebas text-xl tracking-wider bg-red-600 text-white px-8 py-4 hover:bg-red-700 transition-colors inline-block text-center"
            >
              Enroll in RDI Program →
            </a>
            <Link
              href="#pledge"
              className="font-bebas text-xl tracking-wider border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors inline-block text-center"
            >
              Take the Pledge →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
