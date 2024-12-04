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
// import { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
// import { initializePaddle, Paddle } from '@paddle/paddle-js'
import { Toaster } from '@/components/ui/toaster.tsx'
import { useEffect, useState } from 'react'

const View = () => {
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

// function App() {
//   const [paddle, setPaddle] = useState<Paddle>()
//
//   useEffect(() => {
//     initializePaddle({
//       environment: import.meta.env.VITE_PADDLE_ENVIRONMENT,
//       token: import.meta.env.VITE_PADDLE_TOKEN,
//     }).then((paddleInstance: Paddle | undefined) => {
//       if (paddleInstance) {
//         setPaddle(paddleInstance)
//
//         const token = new URLSearchParams(window.location.search).get('c')
//         if (token) {
//           const components = atob(token).split(':')
//           if (!components.length) return
//
//           const [userId, priceId, discountId] = components
//           const checkoutPayload = {
//             items: [{ priceId, quantity: 1 }],
//             discountId: '',
//             customData: {
//               userId,
//             },
//           }
//           if (discountId) {
//             checkoutPayload.discountId = discountId
//           }
//
//           paddle?.Checkout.open(checkoutPayload)
//           const newUrl = window.location.origin + window.location.pathname;
//           window.history.replaceState(null, '', newUrl);
//         }
//       }
//     })
//   }, [paddle?.Checkout])
//
//   return <View />
// }

function loadLemonSqueezyScript(callback) {
  const existingScript = document.querySelector(
    'script[src="https://app.lemonsqueezy.com/js/lemon.js"]',
  )
  if (existingScript) {
    if (window.LemonSqueezy) {
      callback() // Script already loaded
    } else {
      existingScript.addEventListener('load', callback)
    }
    return
  }

  const script = document.createElement('script')
  script.src = 'https://app.lemonsqueezy.com/js/lemon.js'
  script.async = true

  script.onload = () => {
    callback() // Script loaded successfully
  }

  script.onerror = () => {
    console.error('Failed to load Lemonsqueezy script. Retrying...')
    setTimeout(() => loadLemonSqueezyScript(callback), 1000) // Retry after 1 second
  }

  document.head.appendChild(script)
}

function App() {
  const [isUIReady, setIsUIReady] = useState(false)
  const [isLemonSqueezyReady, setIsLemonSqueezyReady] = useState(false)

  useEffect(() => {
    // Simulate UI rendering completion
    const timer = setTimeout(() => setIsUIReady(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Load the Lemonsqueezy script
    loadLemonSqueezyScript(() => {
      setIsLemonSqueezyReady(true)
    })
  }, [])

  // Open checkout overlay if UI and Lemonsqueezy are ready
  useEffect(() => {
    if (isUIReady && isLemonSqueezyReady && window.LemonSqueezy) {
      const c = new URLSearchParams(window.location.search).get('c')
      // console.log('c', c)
      if (c) {
        const checkoutUrl = atob(c)
        window.LemonSqueezy.Url.Open(checkoutUrl)
        const newUrl = window.location.origin + window.location.pathname
        window.history.replaceState(null, '', newUrl)
      }
    }
  }, [isUIReady, isLemonSqueezyReady])

  return <View />
}

export default App
