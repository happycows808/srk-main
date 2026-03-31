const partners = [
  'Los Angeles Police Dept.',
  'LA County Sheriff',
  'LASD Motorsports',
  'City of Los Angeles',
  'LA County DA',
  'California DMV',
  'MADD',
  'Safe Streets LA',
  'LA Unified School District',
  'California Highway Patrol',
  'Youth Justice Coalition',
  'Families for Safe Streets',
]

export default function Partners() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase mb-16">
          Partners &amp; Sponsors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {partners.map((partner) => (
            <div
              key={partner}
              className="border border-white/20 px-6 py-5 hover:border-red-600 transition-colors"
            >
              <p className="font-bebas text-base md:text-lg tracking-wider text-white/70 uppercase">
                {partner}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="font-bebas text-xl tracking-wider text-white/60 hover:text-white transition-colors"
          >
            Interested in supporting SRK? Reach out →
          </a>
        </div>
      </div>
    </section>
  )
}
