const videos = [
  {
    src: 'https://www.youtube.com/embed/6APV7oQmeko',
    title: 'Lori PSA - Reckless Driving Intervention Program',
  },
  {
    src: 'https://www.youtube.com/embed/12EwcD5u8PU',
    title: 'SRK Documentary by Dodge College of Film',
  },
  {
    src: 'https://www.youtube.com/embed/sjnN4DvcsgM',
    title: 'Walker PSA - Reckless Driving Intervention Program',
  },
  {
    src: 'https://www.youtube.com/embed/DWI53VmEALI',
    title: 'Suren PSA - Reckless Driving Intervention Program',
  },
  {
    src: 'https://www.youtube.com/embed/jW5Fy7Qz2Rc',
    title: 'Jacob Kolta PSA',
  },
]

export default function AwarenessVideos() {
  const firstFour = videos.slice(0, 4)
  const lastOne = videos[4]

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase mb-4">
          Awareness Videos
        </h2>
        <p className="font-serif text-white/60 text-lg mb-12">
          SRK&apos;s awareness videos have reached hundreds of thousands of viewers.
        </p>

        {/* 2-col grid for first 4 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {firstFour.map((video) => (
            <div key={video.src}>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="font-bebas text-sm tracking-wider text-white/50 mt-3 uppercase">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        {/* Last video centered */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={lastOne.src}
              title={lastOne.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="font-bebas text-sm tracking-wider text-white/50 mt-3 uppercase">
            {lastOne.title}
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://www.youtube.com/@streetracingkills"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bebas text-xl tracking-wider text-red-600 hover:text-white transition-colors border border-red-600 px-8 py-3 hover:bg-red-600 inline-block"
          >
            View All Videos on YouTube →
          </a>
        </div>
      </div>
    </section>
  )
}
