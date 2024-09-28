import './app.scss'
import { Header } from './components/Header/Header'
import { BrickWall } from './modules/BrickWall/BrickWall'

function App() {
  return (
    <>
      <Header />
      <section className='main-section'>
        <h1 className="content-hello">Hello</h1>
        <h2 className="content-subtitle">Hey, nice to see you! My name is</h2>
        <h1 className="content-title">Alex Moss</h1>
        <BrickWall />
      </section>
    </>
  )
}

export default App
