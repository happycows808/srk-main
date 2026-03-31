const videos = [
  {
    src: 'https://www.youtube.com/embed/6APV7oQmeko',
    title: 'Lori PSA',
    subtitle: 'Reckless Driving Intervention Program',
  },
  {
    src: 'https://www.youtube.com/embed/12EwcD5u8PU',
    title: 'SRK Documentary',
    subtitle: 'By Dodge College of Film',
  },
  {
    src: 'https://www.youtube.com/embed/sjnN4DvcsgM',
    title: 'Walker PSA',
    subtitle: 'Reckless Driving Intervention Program',
  },
  {
    src: 'https://www.youtube.com/embed/DWI53VmEALI',
    title: 'Suren PSA',
    subtitle: 'Reckless Driving Intervention Program',
  },
  {
    src: 'https://www.youtube.com/embed/jW5Fy7Qz2Rc',
    title: 'Jacob Kolta PSA',
    subtitle: 'Street Racing Kills',
  },
]

export default function AwarenessVideos() {
  const firstFour = videos.slice(0, 4)
  const lastOne = videos[4]

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="font-bebas text-red-600 text-base tracking-[0.3em] uppercase mb-4">
              See the Impact
            </p>
            <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-white uppercase">
              Awareness Videos
            </h2>
          </div>
          <p className="font-serif text-white/50 text-base max-w-xs">
            SRK&apos;s awareness videos have reached hundreds of thousands of viewers. Real stories. Real consequences.
          </p>
        </div>

        {/* 2-col grid for first 4 */}
        <div className="grid md:grid-cols-2 gap-1 mb-1">
          {firstFour.map((video) => (
            <div key={video.src} className="group">
              <div className="relative w-full bg-white/5" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="bg-black border-t border-white/10 px-4 py-3">
                <p className="font-bebas text-base tracking-wider text-white">{video.title}</p>
                <p className="font-bebas text-xs tracking-widest text-red-600/70 uppercase">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last video centered */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative w-full bg-white/5" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={lastOne.src}
              title={lastOne.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-black border-t border-white/10 px-4 py-3">
            <p className="font-bebas text-base tracking-wider text-white">{lastOne.title}</p>
            <p className="font-bebas text-xs tracking-widest text-red-600/70 uppercase">{lastOne.subtitle}</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.youtube.com/@streetracingkills"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bebas text-xl tracking-wider text-red-600 hover:text-white transition-colors border border-red-600 hover:bg-red-600 px-10 py-4 inline-block"
          >
            View All Videos on YouTube →
          </a>
        </div>
      </div>
    </section>
  )
}
