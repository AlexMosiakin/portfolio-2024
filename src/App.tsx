import './app.scss'
import { Header } from './components/Header/Header'
import { BrickWall } from './modules/BrickWall/BrickWall'
import bgParticles from './assets/bgParticles.png'

function App() {
  return (
    <>
      <img className='bg-particles' src={bgParticles} alt="bgParticles" />
      <Header />
      <section className='container main-section'>
        <h1 className="content-hello">Hello</h1>
        <h2 className="content-subtitle">Hey, nice to see you! My name is</h2>
        <h1 className="content-title">Alex<br />Moss</h1>
        <BrickWall />
      </section>
      <section className='container about-section'>
        <p>
          I'am a front-end developer with over 5 years of experience, driven by the joy of bringing ideas to life.
          One of the things I love most about front-end development is the immediate impact of my work—something
          as simple as adjusting a color or font can transform a user's experience. But for me, it's not just
          about building websites or applications. My goal is to create useful and meaningful experiences that
          truly serve the users.
          <br /><br />
          I stay up-to-date by following tech bloggers and regularly updating my own Telegram channel where I
          share insights on front-end and IT. I also keep a close eye on the latest documentation for the tools
          I use and enjoy diving into tech content on YouTube.
          <br /><br />
          What matters most to me in a team is a strong connection on a mental level. I'm an active,
          friendly person, and I believe that while we're working in tech, the human connection within the team
          is key. I'm always looking for like-minded collaborators who are just as passionate about creating
          meaningful products.</p>
      </section>
    </>
  )
}

export default App
