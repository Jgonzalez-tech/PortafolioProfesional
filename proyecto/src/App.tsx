import { useTranslation } from 'react-i18next'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollTop from './components/ScrollTop'
import WhatsAppChat from './components/WhatsAppChat'

export default function App() {
  const { t } = useTranslation()

  return (
    <>
      <a href="#contenido" className="skip-link">
        {t('skip')}
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <WhatsAppChat />
    </>
  )
}
