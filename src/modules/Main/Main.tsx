import { useLayoutEffect, useRef } from 'react';
import { BrickWall } from '../BrickWall/BrickWall'
import gsap from 'gsap';
import './main.scss'

export const Main = () => {

    const helloDivRef = useRef(null);
    useLayoutEffect(() => {
        const helloDiv = helloDivRef.current;

        gsap.fromTo(
            helloDiv,
            {
                clipPath: 'rect(0% -50% 100% 0%)',
            },
            {
                clipPath: 'rect(-50% 150% 150% -50%)',
                duration: 1,
            }
        );
    }, []);

    return (
        <section className='container main-section'>
            <div className='content-hello-wrapper' ref={helloDivRef}>
                <h1 className="content-hello">
                    Hello
                </h1>
                <p className='subcontent-hello'>click on the sign</p>
            </div>

            <h2 className="content-subtitle">Hey, nice to see you! My name is</h2>
            <h1 className="content-title">Alex<br />Moss</h1>
            <BrickWall />
        </section>
    )
}
