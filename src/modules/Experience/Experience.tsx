import './experience.scss'
import croc from '../../assets/companies/Croc.svg'
import improvado from '../../assets/companies/Imp.svg'
import flat12 from '../../assets/companies/Flat12.svg'
import sber from '../../assets/companies/Sber.svg'
import { Button } from '../../components/Button/Button'

export const Experience = () => {
  return (
    <section className='container experience-section'>
      <div className='experience-text-wrapper'>
        <p>
          Now I am woking with Improvado's SPA, which is used by companies
          like Coca-Cola, L'Oreal, Philips etc.
        </p>
        <div className='experience-text-wrapper_skills'>
          <Button style={{ fontSize: '2.4lvw' }} content={'React'} action={() => { }} />
          <Button style={{ fontSize: '2.4lvw' }} content={'Typescript'} action={() => { }} />
          <Button style={{ fontSize: '2.4lvw' }} content={'Html'} action={() => { }} />
          <Button style={{ fontSize: '2.4lvw' }} content={'Css'} action={() => { }} />
          <Button style={{ fontSize: '2.4lvw' }} content={'Vanilla js'} action={() => { }} />
          <Button style={{ fontSize: '2.4lvw' }} content={'Node'} action={() => { }} />
          <Button style={{ fontSize: '2.4lvw' }} content={'Webpack'} action={() => { }} />
          <Button style={{ fontSize: '2.4lvw' }} content={'Vite'} action={() => { }} />
          <Button style={{ fontSize: '2.4lvw' }} content={'Git'} action={() => { }} />
        </div>
      </div>
      <div className='experience-image-banner'>
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
