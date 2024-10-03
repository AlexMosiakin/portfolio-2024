import './projects.scss'
import otkis from '../../assets/projects/otkis.png'
import lina from '../../assets/projects/lina.png'
import room from '../../assets/projects/room.png'
import pokeLand from '../../assets/projects/pokeLand.png'

export const Projects = () => {

  const projects = [
    {
      title: 'Otkis',
      image: otkis,
      link: 'https://otkis.ru/'
    },
    {
      title: 'Lina smm',
      image: lina,
      link: 'https://seleznevalina.ru/'
    },
    {
      title: 'Room',
      image: room,
      link: 'https://room-alexmosiakin.vercel.app/'
    },
    {
      title: 'PokeLand',
      image: pokeLand,
      link: 'https://alexmosiakin.github.io/poke-land/'
    }
  ]

  return (
    <section className='container projects-section'>
      <div className='projects-grid'>
        {projects.map((project, index) =>
          <div className='projects-item' key={index}>
            <p>{project.title}</p>
            <a href={project.link} target='_blank'>
              <img src={project.image} alt={project.title} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
