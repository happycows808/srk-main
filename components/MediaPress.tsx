const pressItems = [
  {
    outlet: 'Spectrum News',
    type: 'Feature',
    description: 'Coverage of SRK\'s community outreach programs and legislative advocacy in Los Angeles County.',
    tag: 'Community Impact',
  },
  {
    outlet: 'NBC4 Los Angeles',
    type: 'Interview',
    description: 'Feature on Lili\'s journey from grief to action — and the lives her work has changed across Southern California.',
    tag: 'Founder Story',
  },
  {
    outlet: 'Los Angeles Times',
    type: 'Op-Ed & Profile',
    description: 'In-depth profile on the human cost of street racing in Los Angeles County and SRK\'s decade-long fight.',
    tag: 'Investigative',
  },
  {
    outlet: 'Telemundo',
    type: 'Segment',
    description: 'Spanish-language coverage of SRK\'s bilingual outreach to the Latino community — the hardest-hit demographic.',
    tag: 'Bilingual Outreach',
  },
]

export default function MediaPress() {
  return (
    <section className="bg-black py-24 px-6" id="media">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="font-bebas text-red-600 text-base tracking-[0.3em] uppercase mb-4">
              Press & Media
            </p>
            <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase">
              In the News
            </h2>
          </div>
          <p className="font-serif text-white/50 text-base md:text-lg max-w-sm">
            Street Racing Kills has been featured across local and national media for over a decade.
          </p>
        </div>

        {/* Press grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10 mb-16">
          {pressItems.map((item, i) => (
            <div key={item.outlet} className="bg-black p-8 hover:bg-white/5 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <span className="font-bebas text-xs tracking-[0.2em] text-red-600 uppercase border border-red-600/30 px-3 py-1">
                  {item.tag}
                </span>
                <span className="font-bebas text-xs tracking-widest text-white/30 uppercase">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-bebas text-3xl tracking-wider text-white mb-2 group-hover:text-red-600 transition-colors">
                {item.outlet}
              </h3>
              <p className="font-bebas text-sm tracking-wider text-red-600/70 uppercase mb-4">
                {item.type}
              </p>
              <p className="font-serif text-white/60 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Podcasts row */}
        <div className="border-t border-white/10 pt-12">
          <h3 className="font-bebas text-3xl md:text-4xl tracking-wider text-white uppercase mb-4">
            Podcasts & Radio
          </h3>
          <p className="font-serif text-white/50 text-base leading-relaxed max-w-2xl mb-6">
            Lili has been a guest on podcasts covering public safety, victim advocacy, and community organizing in Los Angeles. Her voice brings the human reality to policy conversations.
          </p>
          <a
            href="mailto:info@streetracingkills.org"
            className="font-bebas text-base tracking-wider text-red-600 hover:text-white transition-colors border-b border-red-600/30 hover:border-white pb-0.5"
          >
            Booking inquiries: info@streetracingkills.org →
          </a>
        </div>
      </div>
    </section>
  )
}
