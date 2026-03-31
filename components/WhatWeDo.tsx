export default function WhatWeDo() {
  const pillars = [
    {
      number: '01',
      title: 'Education & Awareness',
      description:
        'Lili speaks directly to the people who need to hear it. High schools, colleges, community events, faith communities. No PowerPoint. No corporate talking points. Just the truth about what happens when a car becomes a weapon.',
      bullets: [
        'High school and college assemblies',
        'Community events and town halls',
        'Faith-based and civic organizations',
        'Bilingual presentations (English & Spanish)',
      ],
      link: null,
    },
    {
      number: '02',
      title: 'Reckless Driving Intervention',
      description:
        'A court-accepted, 3-hour behavior-based program for drivers cited for reckless driving or street racing. One session. Real consequences. Real change. Accepted by courts across Los Angeles County.',
      bullets: [
        'Court-accepted in LA County',
        '3-hour online program',
        'Certificate issued within 4 hours',
        'Serving CA, TX, FL, USVI & more',
      ],
      link: { href: 'https://srk-rdi.vercel.app', label: 'Enroll in the Program →' },
    },
    {
      number: '03',
      title: 'Community Advocacy',
      description:
        "Street racing isn't just a personal choice — it's a public safety crisis. SRK works alongside law enforcement, elected officials, and families to push for real policy change.",
      bullets: [
        'Working with LAPD and LASD',
        'Legislative advocacy in Sacramento',
        "Ryan's Law awareness campaigns",
        'Support for grieving families',
      ],
      link: null,
    },
  ]

  return (
    <section className="bg-black py-24 px-6" id="what-we-do">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase mb-16">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="border-t border-red-600 pt-8">
              <span className="font-bebas text-5xl text-red-600 block mb-4">{pillar.number}</span>
              <h3 className="font-bebas text-2xl tracking-wider text-white uppercase mb-6">
                {pillar.title}
              </h3>
              <p className="font-serif text-white/70 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-2 mb-6">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="font-serif text-white/60 text-sm flex items-start gap-2">
                    <span className="text-red-600 mt-0.5 flex-shrink-0">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              {pillar.link && (
                <a
                  href={pillar.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas text-lg tracking-wider text-red-600 hover:text-white transition-colors"
                >
                  {pillar.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
