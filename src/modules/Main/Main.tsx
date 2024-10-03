import { BrickWall } from '../BrickWall/BrickWall'
import './main.scss'

export const Main = () => {
    return (
        <section className='container main-section'>
            <div className='content-hello-wrapper'>
                <h1 className="content-hello">Hello</h1>
            </div>

            <h2 className="content-subtitle">Hey, nice to see you! My name is</h2>
            <h1 className="content-title">Alex<br />Moss</h1>
            <BrickWall />
        </section>
    )
}
