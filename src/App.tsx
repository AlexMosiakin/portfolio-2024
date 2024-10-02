import './app.scss'
import { Header } from './components/Header/Header'
import { BrickWall } from './modules/BrickWall/BrickWall'
import bgParticles from './assets/bgParticles.png'
import companies from './assets/companies.png'
import otkis from './assets/projects/otkis.png'
import plane from './assets/plane.svg'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'
import { Textarea } from './components/Textarea/Textarea'
import { useRef } from 'react'

function App() {
  window.addEventListener('unload', function (_e) {
    window.scrollTo(0, 0)
  });

  const planeImage = useRef<HTMLImageElement>(null)
  window.addEventListener('mousemove', (e) => {
    if (planeImage.current) {
      planeImage.current.style.left = `${(e as MouseEvent).clientX / 10}px`
      planeImage.current.style.top = `${(e as MouseEvent).clientY / 10}px`
    }
  })

  return (
    <>
      <img className='bg-particles' src={bgParticles} alt="bgParticles" />
      <Header />
      <section className='container main-section'>
        <div className='content-hello-wrapper'>
          <h1 className="content-hello">Hello</h1>
        </div>

        <h2 className="content-subtitle">Hey, nice to see you! My name is</h2>
        <h1 className="content-title">Alex<br />Moss</h1>
        <BrickWall />
      </section>
      <section className='container about-section'>
        <p>
          I am a <b>front-end developer</b> with over <b>5 years of experience</b>, driven by the joy of bringing ideas to life.
          One of the things I love most about front-end development is the immediate impact of my work—something
          as simple as adjusting a color or font can transform a user's experience. But for me, it's not just
          about building websites or applications. My <b>goal</b> is to create <b>useful and meaningful experiences</b> that
          truly serve the users.
          <br /><br />
          I stay up-to-date by <b>following tech bloggers</b> and regularly updating <b>my own Telegram channel</b> where I
          share insights on front-end and IT. I also keep a close eye on the latest documentation for the tools
          I use and enjoy diving into tech content on YouTube.
          <br /><br />
          What matters most to me in a team is a strong connection on a mental level. I'm an active,
          friendly person, and I believe that while we're working in tech, the human connection within the team
          is key. I'm always <b>looking for like-minded collaborators</b> who are just as passionate about creating
          meaningful products.
        </p>
      </section>
      <section className='container experience-section'>
        <div className='experience-text-wrapper'>
          <p>
            Now I am woking with Improvado's SPA, which is used by companies
            like Coca-Cola, L'Oreal, Philips etc. During the period of my work, I
            participated in several integration with <b>third-party services</b>,
            project <b>architecture migration</b>, <b>test implementation</b>, and so on. I
            am currently looking for a position in a strong and ambitious
            team with a complex product, so if you don't mind working
            together, contact me!
          </p>
        </div>
        <div className='experience-image-wrapper'>
          <img src={companies} alt="companies" />
        </div>
      </section>
      <section className='container projects-section'>
        <div className='projects-grid'>
          <div className='projects-item'>
            <p>Otkis</p>
            <a href="#" target='_blank'>
              <img src={otkis} alt="otkis shop" />
            </a>
          </div>
          <div className='projects-item'>
            <p>Otkis</p>
            <a href="#" target='_blank'>
              <img src={otkis} alt="otkis shop" />
            </a>
          </div>
          <div className='projects-item'>
            <p>Otkis</p>
            <a href="#" target='_blank'>
              <img src={otkis} alt="otkis shop" />
            </a>
          </div>
          <div className='projects-item'>
            <p>Otkis</p>
            <a href="#" target='_blank'>
              <img src={otkis} alt="otkis shop" />
            </a>
          </div>
        </div>
      </section>
      <section className='container contacts-section'>
        <div className='contacts-grid'>
          <div className='contacts-image-wrapper'>
            <img className='contacts-image' ref={planeImage} src={plane} alt="plane" />
          </div>
          <div className='contacts-form-wrapper'>
            <form className='contacts-form' action="" method="post">
              <Input
                style={{ width: '100%', marginBottom: '1.69dvw' }}
                placeholder='Name'
              />
              <Input
                style={{ width: '100%', marginBottom: '1.69dvw' }}
                placeholder='Email'
              />
              <Textarea
                style={{ width: '100%', marginBottom: '1.69dvw' }}
                placeholder='Project details'
              />
              <Button content='Send' style={{ width: '100%', marginTop: 'auto' }} />
            </form>
          </div>
        </div>
      </section>
      <footer className='footer-wrapper'>
        <div className='footer-header'>
          <p className='footer-name'>ALEX MOSS</p>
          <nav className='footer-nav'>
            <ul>
              <li>About</li>
              <li>Experience</li>
              <li>Cases</li>
              <li>Contacts</li>
            </ul>
          </nav>
        </div>
        <p className='footer-copyright'>© 2024 Alex Moss. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
