import { useTranslation } from 'react-i18next'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollTop from './components/ScrollTop'
import Services from './components/Services'
import WhatsAppChat from './components/WhatsAppChat'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-svh bg-canvas">
      <a href="#main" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <WhatsAppChat />
    </div>
  )
}
