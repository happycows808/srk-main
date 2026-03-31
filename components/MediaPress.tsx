const pressItems = [
  {
    outlet: 'Spectrum News',
    description:
      'Coverage of Lili Trujillo Puckett and Street Racing Kills bringing awareness to Los Angeles communities on the dangers of street racing and reckless driving.',
    tag: 'Community Impact',
  },
  {
    outlet: 'NBC4 LA',
    description:
      "NBC4 features SRK's Reckless Driving Intervention program and its acceptance by LA County courts as an alternative to traditional sentencing for street racing offenses.",
    tag: 'Program Feature',
  },
  {
    outlet: 'LA Times',
    description:
      "The Los Angeles Times covers the one-year anniversary of Valentina's death and how her mother turned tragedy into a movement that has reached tens of thousands across Southern California.",
    tag: "Valentina's Story",
  },
  {
    outlet: 'Telemundo',
    description:
      "Telemundo spotlights SRK's bilingual outreach efforts in Latino communities, where street racing fatalities disproportionately impact young men between the ages of 16 and 25.",
    tag: 'Bilingual Outreach',
  },
]

export default function MediaPress() {
  return (
    <section className="bg-black py-24 px-6" id="media">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase mb-16">
          In the News
        </h2>

        <div className="grid md:grid-cols-2 gap-0">
          {pressItems.map((item, i) => (
            <div
              key={item.outlet}
              className={`border border-white/10 p-8 ${
                i % 2 === 0 ? 'border-r-0 md:border-r' : ''
              } ${i < 2 ? 'border-b-0' : ''}`}
            >
              <span className="font-bebas text-xs tracking-widest text-red-600 uppercase block mb-3">
                {item.tag}
              </span>
              <h3 className="font-bebas text-3xl tracking-wider text-white uppercase mb-4">
                {item.outlet}
              </h3>
              <p className="font-serif text-white/60 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
