export default function ValentinaStory() {
  return (
    <section className="bg-black py-24 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="font-bebas text-red-600 text-base tracking-[0.3em] uppercase mb-4">
          The Story Behind SRK
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — headline + red callout */}
          <div>
            <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl tracking-wider text-white uppercase leading-none mb-10">
              Valentina&apos;s<br />Story
            </h2>

            {/* Date callout — big and bold */}
            <div className="bg-red-600 p-8 mb-8">
              <p className="font-bebas text-4xl md:text-5xl text-white tracking-wider leading-tight">
                December 7<br />2013
              </p>
              <div className="w-8 h-0.5 bg-white/40 my-4" />
              <p className="font-bebas text-xl tracking-wider text-white/80 uppercase">
                Avalon & Anaheim
              </p>
              <p className="font-serif text-white/60 text-sm mt-1">
                Los Angeles, California
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-white/20 pl-6">
              <p className="font-serif text-lg leading-relaxed text-white/70 italic mb-4">
                &ldquo;I started this organization so no mother would have to go through what I went through — and so no young person would make a decision they can&apos;t take back.&rdquo;
              </p>
              <cite className="font-bebas text-red-600 text-base tracking-wider not-italic">
                — Lili, Founder of Street Racing Kills
              </cite>
            </blockquote>

            <div className="mt-10">
              <a
                href="https://www.streetracingkills.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bebas text-lg tracking-wider bg-red-600 text-white px-8 py-4 hover:bg-white hover:text-black transition-colors inline-block"
              >
                Support the Mission →
              </a>
            </div>
          </div>

          {/* Right — story text */}
          <div className="space-y-6">
            <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
              On December 7th, 2013, a street racer tore through the intersection of Avalon & Anaheim in Los Angeles. In the wreckage, a 16-year-old girl lost her life.
            </p>

            <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
              Her name was Valentina. She was getting a ride home.
            </p>

            <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
              Her mother, Lili, refused to let grief be the end of the story. In 2014 — just months after burying her daughter — Lili founded Street Racing Kills. Not out of anger. Out of purpose.
            </p>

            <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
              She walks into high schools, courtrooms, community centers, and tells the truth: street racing isn&apos;t a sport. It&apos;s a death sentence you hand to strangers.
            </p>

            <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
              Over a decade later, tens of thousands of people have heard Lili speak. Some of them are alive because of it.
            </p>

            {/* Stats inline */}
            <div className="border-t border-white/10 pt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="font-bebas text-5xl text-red-600 leading-none">2014</p>
                <p className="font-bebas text-sm tracking-widest text-white/40 uppercase mt-1">Founded</p>
              </div>
              <div>
                <p className="font-bebas text-5xl text-red-600 leading-none">501(c)(3)</p>
                <p className="font-bebas text-sm tracking-widest text-white/40 uppercase mt-1">Nonprofit Status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
