import './app.scss'
import { Header } from './components/Header/Header'
import bgParticles from './assets/bgParticles.png'
import { Main } from './modules/Main/Main'
import { About } from './modules/About/About'
import { Experience } from './modules/Experience/Experience'
import { Projects } from './modules/Projects/Projects'
import { Footer } from './modules/Footer/Footer'
import { Contacts } from './modules/Contacts/Contacts'
import { useRef } from 'react'

function App() {
  window.addEventListener('unload', function (_e) {
    window.scrollTo(0, 0)
  });
  const contacts = useRef<HTMLDivElement>(null)

  return (
    <>
      <img className='bg-particles' src={bgParticles} alt="bgParticles" />
      <Header contacts={contacts} />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contacts contacts={contacts} />
      <Footer />
    </>
  )
}

export default App
