import './experience.scss'
import companies from '../../assets/companies.png'

export const Experience = () => {
  return (
    <section className='container experience-section'>
        <div className='experience-text-wrapper'>
          <p>
            Now I am woking with Improvado's SPA, which is used by companies
            like Coca-Cola, L'Oreal, Philips etc. During the period of my work, I
            participated in several integration with <b>third-party services</b>,
            project <b>architecture migration</b>, <b>test implementation</b>, and so on. I
            am currently looking for a position in a strong and ambitious
            team with a complex product, so if you don't mind working
            together, contact me!
          </p>
        </div>
        <div className='experience-image-wrapper'>
          <img src={companies} alt="companies" />
        </div>
      </section>
  )
}
