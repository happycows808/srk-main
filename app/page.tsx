import Hero from '@/components/Hero'
import Divider from '@/components/Divider'
import ValentinaStory from '@/components/ValentinaStory'
import DAEndorsement from '@/components/DAEndorsement'
import WhatWeDo from '@/components/WhatWeDo'
import ImpactStats from '@/components/ImpactStats'
import MediaPress from '@/components/MediaPress'
import AwarenessVideos from '@/components/AwarenessVideos'
import Testimonials from '@/components/Testimonials'
import TakePledge from '@/components/TakePledge'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <ValentinaStory />
      <Divider />
      <DAEndorsement />
      <Divider />
      <WhatWeDo />
      <Divider />
      <ImpactStats />
      <Divider />
      <MediaPress />
      <Divider />
      <AwarenessVideos />
      <Divider />
      <Testimonials />
      <Divider />
      <TakePledge />
      <Divider />
      <Partners />
      <Divider />
      <Contact />
      <Footer />
    </main>
  )
}
