export default function ValentinaStory() {
  return (
    <section className="bg-black py-24 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase mb-12">
          Valentina&apos;s Story
        </h2>

        <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80 mb-10">
          On December 7th, 2013, a street racer tore through the intersection of Avalon &amp; Anaheim in Los Angeles. In the wreckage, a 16-year-old girl lost her life. Her name was Valentina. She was getting a ride home.
        </p>

        <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80 mb-10">
          Her mother, Lili, refused to let grief be the end of the story. In 2014 — just months after burying her daughter — Lili founded Street Racing Kills. Not out of anger. Out of purpose.
        </p>

        <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80 mb-10">
          She walks into high schools, courtrooms, community centers, and tells the truth: street racing isn&apos;t a sport. It&apos;s a death sentence you hand to strangers. Over a decade later, tens of thousands of people have heard Lili speak. Some of them are alive because of it.
        </p>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-red-600 pl-8 my-12">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-white italic mb-4">
            &ldquo;I started this organization so no mother would have to go through what I went through — and so no young person would make a decision they can&apos;t take back.&rdquo;
          </p>
          <cite className="font-bebas text-red-600 text-lg tracking-wider not-italic">
            — Lili, Founder
          </cite>
        </blockquote>

        {/* Red callout box */}
        <div className="bg-red-600 px-8 py-6 mt-10">
          <p className="font-bebas text-xl md:text-2xl tracking-wider text-white text-center">
            December 7, 2013 · AVALON &amp; ANAHEIM · Los Angeles, California
          </p>
        </div>
      </div>
    </section>
  )
}
