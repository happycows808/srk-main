const testimonials = [
  {
    quote:
      'Lili truly cares for others going through the heartbreak that she also had to endure. Bringing awareness of the dangers of street racing to the forefront is a very important job that she has taken very seriously. I am very thankful for this organization!',
    author: 'Ashley Schichler',
  },
  {
    quote:
      "I officially stopped street racing 3 months ago. So satisfying to know I don't need to go fast to enjoy a car.",
    author: 'Jose R.',
  },
  {
    quote:
      "The story of Valentina is just so shocking and the way you explained the feeling is just a feeling I never want to experience. Also with Raul going in at age 18 just reminds me to really make smart decisions so I don't miss the best years of my life.",
    author: 'RDI Program Attendee',
  },
  {
    quote: "It was amazing. I didn't get into my friend's car because of Lili's presentation.",
    author: 'Stacy',
  },
  {
    quote:
      'LASD Motorsports was honored to speak at a recent Street Racing Kills class. SRK is a big supporter of traffic safety.',
    author: 'LASD Motorsports',
  },
  {
    quote:
      'I just wanted to say thank you for this program and thank you for having everyone on board sharing their emotional stories. You are doing something great! You guys have definitely changed my life!',
    author: 'Paul Castro',
  },
  {
    quote:
      "Sometimes street racers don't care about their life; they don't know that the lives of other innocent people are at risk as well!! I am a SRK survivor, my thoughts changed after that day.",
    author: 'Ivan',
  },
  {
    quote:
      'Michael talked with us a lot about attending the class and the speakers. We believe it made a positive impact. Thank you for all your help and support.',
    author: 'Lisa',
  },
]

export default function Testimonials() {
  const leftCol = testimonials.filter((_, i) => i % 2 === 0)
  const rightCol = testimonials.filter((_, i) => i % 2 !== 0)

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-black uppercase mb-16">
          Lives Changed
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {leftCol.map((t) => (
              <div key={t.author} className="border-l-4 border-black pl-6 py-2">
                <p className="font-serif text-black/80 leading-relaxed mb-4 text-base md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <cite className="font-bebas text-base tracking-wider text-black not-italic">
                  — {t.author}
                </cite>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            {rightCol.map((t) => (
              <div key={t.author} className="border-l-4 border-red-600 pl-6 py-2">
                <p className="font-serif text-black/80 leading-relaxed mb-4 text-base md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <cite className="font-bebas text-base tracking-wider text-black not-italic">
                  — {t.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
