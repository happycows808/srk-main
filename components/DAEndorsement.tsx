export default function DAEndorsement() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase mb-12">
          Endorsed by the DA
        </h2>

        {/* YouTube embed placeholder */}
        <div className="relative w-full mb-12" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Nathan Hochman endorses Street Racing Kills"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <blockquote className="border-l-4 border-red-600 pl-8">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-white italic mb-6">
            &ldquo;Street Racing Kills is doing critical work to protect our communities. Education and intervention save lives — and this program proves it.&rdquo;
          </p>
          <cite className="font-bebas text-red-600 text-base md:text-lg tracking-wider not-italic block">
            — NATHAN HOCHMAN, LOS ANGELES COUNTY DISTRICT ATTORNEY
          </cite>
          <span className="font-bebas text-white/50 text-sm tracking-wider block mt-1">
            Former Federal Prosecutor &amp; U.S. Assistant Attorney General
          </span>
        </blockquote>
      </div>
    </section>
  )
}
