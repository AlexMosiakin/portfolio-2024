import './projects.scss'
import otkis from '../../assets/projects/otkis.png'
import lina from '../../assets/projects/lina.png'
import room from '../../assets/projects/room.png'
import pokeLand from '../../assets/projects/pokeLand.png'
import weatherApp from '../../assets/projects/weatherApp.png'
import musicPlayer from '../../assets/projects/musicPlayer.png'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {

  const otkisRef = useRef(null);
  const linaRef = useRef(null);
  const roomRef = useRef(null);
  const pokeLandRef = useRef(null);
  const weatherAppRef = useRef(null);
  const musicPlayerRef = useRef(null);

  useLayoutEffect(() => {
    projects.forEach((project, index) => {
      const element = project.ref.current;
      gsap.fromTo(
        element,
        {
          y: 100,
          opacity: 0,
          pointerEvents: 'none',
        },
        {
          y: 0,
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.3,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: otkisRef.current,
            start: 'top 75%',
          },
        }
      );
    })
  }, []);

  const projects = [
    {
      ref: otkisRef,
      title: 'Otkis',
      image: otkis,
      link: 'https://otkis.ru/'
    },
    {
      ref: linaRef,
      title: 'Lina smm',
      image: lina,
      link: 'https://seleznevalina.ru/'
    },
    {
      ref: roomRef,
      title: 'Room',
      image: room,
      link: 'https://room-alexmosiakin.vercel.app/'
    },
    {
      ref: weatherAppRef,
      title: 'Weather App',
      image: weatherApp,
      link: 'https://alexmosiakin.github.io/weather-app/'
    },
    {
      ref: musicPlayerRef,
      title: 'Music Player',
      image: musicPlayer,
      link: 'https://alexmosiakin.github.io/music-player/'
    },
    {
      ref: pokeLandRef,
      title: 'PokeLand',
      image: pokeLand,
      link: 'https://alexmosiakin.github.io/poke-land/'
    },
  ]

  return (
    <section className='container projects-section'>
      <div className='projects-grid'>
        {projects.map((project) =>
          <a key={project.title} className='projects-item' href={project.link} target='_blank' ref={project.ref}>
            <p>{project.title}</p>
            <img src={project.image} alt={project.title} />
          </a>
        )}
      </div>
    </section>
  )
}
