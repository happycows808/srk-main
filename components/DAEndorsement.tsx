export default function DAEndorsement() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="font-bebas text-red-600 text-base tracking-[0.3em] uppercase mb-4">
          Law Enforcement Backing
        </p>
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase mb-12">
          Endorsed by the DA
        </h2>

        {/* YouTube embed — Nathan Hochman SRK video */}
        <div className="relative w-full mb-12 border border-white/10" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/6APV7oQmeko"
            title="Nathan Hochman endorses Street Racing Kills"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Quote — takes 2 cols */}
          <div className="md:col-span-2">
            <blockquote className="border-l-4 border-red-600 pl-8">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-white italic mb-6">
                &ldquo;Street Racing Kills is doing critical work to protect our communities. Education and intervention save lives — and this program proves it.&rdquo;
              </p>
              <cite className="font-bebas text-red-600 text-base md:text-lg tracking-wider not-italic block">
                — NATHAN HOCHMAN
              </cite>
              <span className="font-bebas text-white/50 text-sm tracking-wider block mt-1">
                LOS ANGELES COUNTY DISTRICT ATTORNEY
              </span>
              <span className="font-serif text-white/30 text-sm block mt-1 not-italic">
                Former Federal Prosecutor & U.S. Assistant Attorney General
              </span>
            </blockquote>
          </div>

          {/* Credential box */}
          <div className="bg-red-600/10 border border-red-600/30 p-6">
            <p className="font-bebas text-4xl text-white tracking-wider mb-1">LA County</p>
            <p className="font-bebas text-red-600 text-xl tracking-wider">District Attorney</p>
            <div className="w-8 h-0.5 bg-red-600 my-4" />
            <p className="font-serif text-white/60 text-sm leading-relaxed">
              The highest law enforcement official in Los Angeles County — backing SRK's mission to end street racing deaths.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
