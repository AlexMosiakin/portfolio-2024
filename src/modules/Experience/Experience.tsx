import './experience.scss'
import croc from '../../assets/companies/Croc.svg'
import improvado from '../../assets/companies/Imp.svg'
import flat12 from '../../assets/companies/Flat12.svg'
import sber from '../../assets/companies/Sber.svg'
import { Button } from '../../components/Button/Button'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {

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
          start: 'top 50%',
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
          start: 'top 50%',
        },
      }
    );
  }, []);

  return (
    <section className='container experience-section'>
      <div className='experience-text-wrapper' ref={textRef}>
        <p>
          Now I am woking with Improvado's SPA, which is used by companies
          like Coca-Cola, L'Oreal, Philips etc.
        </p>
        <div className='experience-text-wrapper_skills'>
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'React'} action={() => { }} />
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'Typescript'} action={() => { }} />
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'Html'} action={() => { }} />
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'Css'} action={() => { }} />
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'Vanilla js'} action={() => { }} />
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'Node'} action={() => { }} />
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'Webpack'} action={() => { }} />
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'Vite'} action={() => { }} />
          <Button style={{ fontSize: 'max(2.4lvw, 32px)' }} content={'Git'} action={() => { }} />
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
