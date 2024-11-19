import './experience.scss'
import croc from '../../assets/companies/Croc.svg'
import improvado from '../../assets/companies/Imp.svg'
import flat12 from '../../assets/companies/Flat12.svg'
import sber from '../../assets/companies/Sber.svg'
import { Button } from '../../components/Button/Button'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from 'react'
import { Link } from '../../components/Link/Link'
gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {

  const technologies = [
    {
      title: 'React',
      href: 'https://react.dev',
    },
    {
      title: 'Typescript',
      href: 'https://www.typescriptlang.org',
    },
    {
      title: 'Html',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      title: 'Css',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      title: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      title: 'Node',
      href: 'https://nodejs.org',
    },
    {
      title: 'Webpack',
      href: 'https://webpack.js.org',
    },
    {
      title: 'Vite',
      href: 'https://vite.dev',
    },
    {
      title: 'Git',
      href: 'https://git-scm.com',
    }
  ]

  const textRef = useRef(null);
  const bannerRef = useRef(null);

  useLayoutEffect(() => {
    const textElement = textRef.current;
    const bannerElement = bannerRef.current;

    gsap.fromTo(
      textElement,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: textElement,
          start: 'top 75%',
        },
      }
    );
    gsap.fromTo(
      bannerElement,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: textElement,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section className='container experience-section'>
      <div className='experience-text-wrapper' ref={textRef}>
        <p>
          Now I am woking with <Link href="https://improvado.io/" content="Improvado's" target='_blank'/> SPA, which is used by companies
          like Coca-Cola, L'Oreal, Philips etc.
        </p>
        <div className='experience-text-wrapper_skills'>
          {technologies.map((tech) => (
            <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={tech.title} type={'link'} href={tech.href} />
          ))}
        </div>
      </div>
      <div className='experience-image-banner' ref={bannerRef}>
        <div className='experience-image-wrapper first'>
          <img src={improvado} alt="improvado" />
          <p>Improvado</p>
          <img src={sber} alt="sber" />
          <p>Sberbank</p>
          <img src={croc} alt="croc" />
          <p>Croc</p>
          <img src={flat12} alt="flat12" />
          <p>Flat12</p>
        </div>
        <div className='experience-image-wrapper second'>
          <img src={improvado} alt="improvado" />
          <p>Improvado</p>
          <img src={sber} alt="sber" />
          <p>Sberbank</p>
          <img src={croc} alt="croc" />
          <p>Croc</p>
          <img src={flat12} alt="flat12" />
          <p>Flat12</p>
        </div>
      </div>
    </section>
  )
}
