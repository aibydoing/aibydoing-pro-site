import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Faqs } from '@/components/Faqs'

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Resources />
      <Faqs />
      <Footer />
    </>
  )
}
