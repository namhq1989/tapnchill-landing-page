import { About } from './components/About'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { ScrollToTop } from './components/ScrollToTop'
import { Services } from './components/Services'
import { Features } from '@/components/Features.tsx'
import './App.css'
import { useEffect, useState } from 'react'
import { initializePaddle, Paddle } from '@paddle/paddle-js'
import { Toaster } from '@/components/ui/toaster.tsx'

function App() {
  const [paddle, setPaddle] = useState<Paddle>()

  // Download and initialize Paddle instance from CDN
  useEffect(() => {
    initializePaddle({
      environment: import.meta.env.VITE_PADDLE_ENVIRONMENT,
      token: import.meta.env.VITE_PADDLE_TOKEN,
    }).then((paddleInstance: Paddle | undefined) => {
      if (paddleInstance) {
        setPaddle(paddleInstance)

        const token = new URLSearchParams(window.location.search).get('c')
        if (token) {
          const components = atob(token).split(':')
          if (!components.length) return

          const [userId, priceId, discountId] = components
          const checkoutPayload = {
            items: [{ priceId, quantity: 1 }],
            discountId: '',
            customData: {
              userId,
            },
          }
          if (discountId) {
            checkoutPayload.discountId = discountId
          }

          paddle?.Checkout.open(checkoutPayload)
        }
      }
    })
  }, [paddle?.Checkout])

  return (
    <>
      <Toaster />
      <Navbar />
      <Hero />
      {/*<Sponsors />*/}
      <About />
      {/*<HowItWorks />*/}
      <Features />
      <Services />
      {/*<Cta />*/}
      {/*<Testimonials />*/}
      {/*<Team />*/}
      <Pricing />
      {/*<Newsletter />*/}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
