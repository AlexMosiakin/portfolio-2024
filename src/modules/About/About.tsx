import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './about.scss'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {

    const yearsCard = useRef(null);
    const goalCard = useRef(null);
    const lookingCard = useRef(null);
    useLayoutEffect(() => {
        const years = yearsCard.current;
        const goal = goalCard.current;
        const looking = lookingCard.current;

        gsap.fromTo(
            years,
            { 
                opacity: 0,
                y: 100,
             },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                scrollTrigger: {
                    trigger: years,
                    start: 'top 75%',
                },
            }
        );
        gsap.fromTo(
            goal,
            { 
                opacity: 0,
                y: 100,
             },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                delay: 0.3,
                scrollTrigger: {
                    trigger: goal,
                    start: 'top 75%',
                },
            }
        );
        gsap.fromTo(
            looking,
            { 
                opacity: 0,
                y: 100,
             },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                delay: 0.6,
                scrollTrigger: {
                    trigger: looking,
                    start: 'top 75%',
                },
            }
        );
    }, []);

    return (
        <section className='container about-section'>
            <div className='about-section_card-wrapper'>
                <div className='about-section_card-wrapper_item' ref={yearsCard}>
                    <h2>5 years</h2>
                    <p>Of experience in front-end development</p>
                </div>
                <div className='about-section_card-wrapper_item' ref={goalCard}>
                    <h2>Goal</h2>
                    <p>Is useful and meaningful experiences</p>
                </div>
                <div className='about-section_card-wrapper_item' ref={lookingCard}>
                    <h2>Looking</h2>
                    <p>For like-minded collaborators</p>
                </div>

            </div>
        </section>
    )
}
