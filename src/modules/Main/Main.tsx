import { useLayoutEffect, useRef, useState } from 'react';
import { BrickWall } from '../BrickWall/BrickWall'
import gsap from 'gsap';
import './main.scss'

export const Main = () => {

    const helloDivRef = useRef(null);
    const [webFontsLoaded, setWebFontsLoaded] = useState(false)

    useLayoutEffect(() => {
        async function areFontsReady() {
            await (document).fonts.ready
            setWebFontsLoaded(true)
        }

        areFontsReady()
    }, [])

    useLayoutEffect(() => {
        if (webFontsLoaded) {
            const helloDiv = helloDivRef.current;

            gsap.to(
                helloDiv,
                {
                    clipPath: 'rect(-50% 150% 150% -50%)',
                    duration: 1,
                }
            );
        }
    }, [webFontsLoaded]);

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
