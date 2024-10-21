import './app.scss'
import { Header } from './components/Header/Header'
import bgParticles from './assets/bgParticles.png'
import { Main } from './modules/Main/Main'
import { About } from './modules/About/About'
import { Experience } from './modules/Experience/Experience'
import { Projects } from './modules/Projects/Projects'
import { Footer } from './modules/Footer/Footer'
import { Contacts } from './modules/Contacts/Contacts'
import { useRef, useState } from 'react'
import { Menu } from './modules/Menu/Menu'

function App() {
  const body = document.querySelector('body') as HTMLElement

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const contacts = useRef<HTMLDivElement>(null)
  const cursor = useRef<HTMLDivElement>(null)

  const menuToggle = () => setIsMenuOpen(!isMenuOpen)
  const menuClose = () => setIsMenuOpen(false)

  window.addEventListener('unload', function (_e) {
    window.scrollTo(0, 0)
  });

  window.addEventListener('mousemove', (e) => {
    if (cursor.current && body) {

      const mouseX = e.pageX;
      const mouseY = e.pageY + body.getBoundingClientRect().top;

      cursor.current.style.translate = `${mouseX - 15}px ${mouseY - 30}px`;
    }
  })

  window.addEventListener('mousedown', () => {
    if (cursor.current) {
      const cursorFlows = document.querySelectorAll('.cursorFlow')
      cursorFlows.forEach((flow) => {
        flow.classList.add('active')
      })
      cursor.current.style.rotate = `-45deg`;
    }
  })

  window.addEventListener('mouseup', () => {
    if (cursor.current) {
      const cursorFlows = document.querySelectorAll('.cursorFlow')
      cursorFlows.forEach((flow) => {
        flow.classList.remove('active')
      })

      cursor.current.style.rotate = `-15deg`;
    }
  })

  return (
    <>
      <div className='cursor' ref={cursor}>
        <svg viewBox="0 0 30 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.0627 7.75279L19.0711 4.8764C19.0719 3.32547 19.0277 2.30765 17.194 2.06578C15.6625 2.06294 13.1016 1.53847 12.6024 3.49882C12.415 4.23452 12.5054 6.84304 12.5082 7.75279C10.1445 7.68124 10.3519 9.30003 10.3597 11.1543C6.88473 12.9316 4.80801 15.8444 3.81615 19.5614C1.43367 20.8417 1.4747 23.8336 3.47425 25.4098C3.51168 26.1745 3.47483 26.958 3.47469 27.7249L3.47296 51.5512C3.47195 53.8436 3.36931 56.3332 6.30501 57.0633C7.11405 57.2644 8.47372 57.153 9.34494 57.1526L21.6724 57.1535C22.5956 57.154 24.5208 57.2562 25.3349 57.072C28.5499 56.3443 28.2585 53.4761 28.2579 51.032L28.2566 25.2926C30.2417 23.6073 30.1851 20.7434 27.7738 19.5614C26.4334 15.6455 25.2546 13.1726 21.1844 11.1543C21.1802 9.34063 21.4544 7.65447 19.0627 7.75279ZM17.0034 3.56842C17.3504 3.57431 17.5867 3.56271 17.6211 3.96242C17.7133 5.03358 17.583 6.62024 17.5928 7.75279H13.952C13.9033 7.25109 13.949 6.73758 13.9515 6.23383C13.9674 3.13438 13.5515 3.45919 17.0034 3.56842ZM13.1514 9.21884H19.7343V10.8451H11.8302C11.8295 10.3038 11.8171 9.75983 11.8302 9.21884C12.2717 9.20574 12.7099 9.20747 13.1514 9.21884ZM20.0307 12.289C20.5066 12.3795 20.9042 12.6781 21.3044 12.9359C23.593 14.4109 25.4728 16.4957 26.1287 19.2009L7.47581 19.2024C6.79562 19.2027 6.10794 19.2274 5.42904 19.2009C6.30804 16.145 8.19329 14.0723 10.9228 12.533C11.7765 12.0516 13.395 12.2866 14.3661 12.2866L20.0307 12.289ZM25.8992 20.6559C27.9948 20.6858 29.0428 22.6503 27.5536 24.0016C26.7123 24.765 25.3027 24.5115 24.2627 24.5112L5.76086 24.5087C2.51853 24.4077 2.95328 20.9353 5.16718 20.6791C5.8743 20.5972 6.63482 20.6576 7.34827 20.6578L25.8992 20.6559ZM25.4999 25.9711L25.4679 26.022C24.5587 27.4535 22.9438 28.3234 21.9231 29.6566C21.6662 29.9923 21.8163 33.4381 21.8165 34.0256L21.8153 45.3823C21.815 46.0705 21.6184 46.8483 22.073 47.4231C23.0689 48.6823 24.425 49.9297 25.4999 51.1988H4.92044V25.9711H25.4999ZM26.8021 26.8505C26.8295 28.6973 26.8021 30.5486 26.8021 32.3958L26.8011 48.1907C26.7999 48.9142 26.7376 49.6704 26.8021 50.3885C26.2318 49.7902 25.67 49.1847 25.1126 48.5745C24.5069 47.9103 23.8114 47.2518 23.2752 46.5345V30.4105C24.429 29.2129 25.6957 28.0889 26.8021 26.8505ZM26.8021 52.647C26.7824 55.5279 25.6572 55.7122 23.0595 55.7126L7.74659 55.7114C5.65764 55.6765 4.89856 54.6901 4.92044 52.647H26.8021Z" fill="white" />
          <path d="M16.5133 5.43079C16.4299 5.00997 16.3041 4.7751 15.8899 4.587C14.8255 4.5402 14.578 5.74399 15.5276 6.10925C16.0594 6.1392 16.3648 5.958 16.5133 5.43079Z" fill="white" />
          <path d="M26.8021 52.647C26.7824 55.5279 25.6572 55.7122 23.0595 55.7126L7.74659 55.7114C5.65764 55.6765 4.89856 54.6901 4.92044 52.647H26.8021Z" fill="white" />
          <path d="M25.4999 25.9711L25.4679 26.022C24.5587 27.4535 22.9438 28.3234 21.9231 29.6566C21.6662 29.9923 21.8163 33.4381 21.8165 34.0256L21.8153 45.3823C21.815 46.0705 21.6184 46.8483 22.073 47.4231C23.0689 48.6823 24.425 49.9297 25.4999 51.1988H4.92044V25.9711H25.4999Z" fill="white" />
          <path d="M26.8021 26.8505C26.8295 28.6973 26.8021 30.5486 26.8021 32.3958L26.8011 48.1907C26.7999 48.9142 26.7376 49.6704 26.8021 50.3885C26.2318 49.7902 25.67 49.1847 25.1126 48.5745C24.5069 47.9103 23.8114 47.2518 23.2752 46.5345V30.4105C24.429 29.2129 25.6957 28.0889 26.8021 26.8505Z" fill="white" />
          <path d="M25.8992 20.6559C27.9948 20.6858 29.0428 22.6503 27.5536 24.0016C26.7123 24.765 25.3027 24.5115 24.2627 24.5112L5.76086 24.5087C2.51853 24.4077 2.95328 20.9353 5.16718 20.6791C5.8743 20.5972 6.63482 20.6576 7.34827 20.6578L25.8992 20.6559Z" fill="white" />
          <path d="M20.0307 12.289C20.5066 12.3795 20.9042 12.6781 21.3044 12.9359C23.593 14.4109 25.4728 16.4957 26.1287 19.2009L7.47581 19.2024C6.79562 19.2027 6.10794 19.2274 5.42904 19.2009C6.30804 16.145 8.19329 14.0723 10.9228 12.533C11.7765 12.0516 13.395 12.2866 14.3661 12.2866L20.0307 12.289Z" fill="white" />
          <path d="M13.1514 9.21884H19.7343V10.8451H11.8302C11.8295 10.3038 11.8171 9.75983 11.8302 9.21884C12.2717 9.20574 12.7099 9.20747 13.1514 9.21884Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0034 3.56842C17.3504 3.57431 17.5867 3.56271 17.6211 3.96242C17.7133 5.03358 17.583 6.62024 17.5928 7.75279H13.952C13.9033 7.25109 13.949 6.73758 13.9515 6.23383C13.9674 3.13438 13.5515 3.45919 17.0034 3.56842ZM15.8899 4.587C16.3041 4.7751 16.4299 5.00997 16.5133 5.43079C16.3648 5.958 16.0594 6.1392 15.5276 6.10925C14.578 5.74399 14.8255 4.5402 15.8899 4.587Z" fill="white" />
          <path d="M19.0627 7.75279L19.0711 4.8764C19.0719 3.32547 19.0277 2.30765 17.194 2.06578C15.6625 2.06294 13.1016 1.53847 12.6024 3.49882C12.415 4.23452 12.5054 6.84304 12.5082 7.75279C10.1445 7.68124 10.3519 9.30003 10.3597 11.1543C6.88473 12.9316 4.80801 15.8444 3.81615 19.5614C1.43367 20.8417 1.4747 23.8336 3.47425 25.4098C3.51168 26.1745 3.47483 26.958 3.47469 27.7249L3.47296 51.5512C3.47195 53.8436 3.36931 56.3332 6.30501 57.0633C7.11405 57.2644 8.47372 57.153 9.34494 57.1526L21.6724 57.1535C22.5956 57.154 24.5208 57.2562 25.3349 57.072C28.5499 56.3443 28.2585 53.4761 28.2579 51.032L28.2566 25.2926C30.2417 23.6073 30.1851 20.7434 27.7738 19.5614C26.4334 15.6455 25.2546 13.1726 21.1844 11.1543C21.1802 9.34063 21.4544 7.65447 19.0627 7.75279ZM17.0034 3.56842C17.3504 3.57431 17.5867 3.56271 17.6211 3.96242C17.7133 5.03358 17.583 6.62024 17.5928 7.75279H13.952C13.9033 7.25109 13.949 6.73758 13.9515 6.23383C13.9674 3.13438 13.5515 3.45919 17.0034 3.56842ZM13.1514 9.21884H19.7343V10.8451H11.8302C11.8295 10.3038 11.8171 9.75983 11.8302 9.21884C12.2717 9.20574 12.7099 9.20747 13.1514 9.21884ZM20.0307 12.289C20.5066 12.3795 20.9042 12.6781 21.3044 12.9359C23.593 14.4109 25.4728 16.4957 26.1287 19.2009L7.47581 19.2024C6.79562 19.2027 6.10794 19.2274 5.42904 19.2009C6.30804 16.145 8.19329 14.0723 10.9228 12.533C11.7765 12.0516 13.395 12.2866 14.3661 12.2866L20.0307 12.289ZM25.8992 20.6559C27.9948 20.6858 29.0428 22.6503 27.5536 24.0016C26.7123 24.765 25.3027 24.5115 24.2627 24.5112L5.76086 24.5087C2.51853 24.4077 2.95328 20.9353 5.16718 20.6791C5.8743 20.5972 6.63482 20.6576 7.34827 20.6578L25.8992 20.6559ZM25.4999 25.9711L25.4679 26.022C24.5587 27.4535 22.9438 28.3234 21.9231 29.6566C21.6662 29.9923 21.8163 33.4381 21.8165 34.0256L21.8153 45.3823C21.815 46.0705 21.6184 46.8483 22.073 47.4231C23.0689 48.6823 24.425 49.9297 25.4999 51.1988H4.92044V25.9711H25.4999ZM26.8021 26.8505C26.8295 28.6973 26.8021 30.5486 26.8021 32.3958L26.8011 48.1907C26.7999 48.9142 26.7376 49.6704 26.8021 50.3885C26.2318 49.7902 25.67 49.1847 25.1126 48.5745C24.5069 47.9103 23.8114 47.2518 23.2752 46.5345V30.4105C24.429 29.2129 25.6957 28.0889 26.8021 26.8505ZM26.8021 52.647C26.7824 55.5279 25.6572 55.7122 23.0595 55.7126L7.74659 55.7114C5.65764 55.6765 4.89856 54.6901 4.92044 52.647H26.8021Z" fill="black" />
          <path d="M16.5133 5.43079C16.4299 5.00997 16.3041 4.7751 15.8899 4.587C14.8255 4.5402 14.578 5.74399 15.5276 6.10925C16.0594 6.1392 16.3648 5.958 16.5133 5.43079Z" fill="black" />
          <path className='cursorFlow' d="M4.77001 3.36501C5.29243 3.49638 5.67305 2.80963 5.52852 2.36207C5.37765 1.89501 1.66185 0.343638 0.975896 0C0.421664 0.0824294 -0.0374161 0.555571 0.215371 1.12549C0.396325 1.53318 4.22212 3.16256 4.77001 3.36501Z" fill="#580EF6" />
          <path className='cursorFlow' d="M8.86528 3.67138C8.39354 3.322 7.7073 3.09846 7.15984 2.88241C6.6164 2.84534 6.16178 3.40769 6.44077 3.92632C6.6865 4.38331 7.75797 4.76211 8.25145 4.89963C9.0091 4.90711 9.19336 4.23744 8.86528 3.67138Z" fill="#580EF6" />
          <path className='cursorFlow' d="M0.50847 6.76208C1.0473 6.83204 1.66314 6.76481 2.21047 6.75978C2.83437 6.75402 4.50456 7.02235 4.83062 6.34187C5.03014 5.92512 4.76987 5.49944 4.39026 5.31273C3.85215 5.28408 0.901903 5.25486 0.501993 5.35433C-0.283002 5.54982 -0.0425952 6.45646 0.50847 6.76208Z" fill="#580EF6" />
          <path className='cursorFlow' d="M6.84471 8.77934C7.72558 8.9243 10.514 7.64827 8.7671 6.76208C7.64165 6.73142 5.05936 8.06028 6.84471 8.77934Z" fill="#580EF6" />
          <path className='cursorFlow' d="M5.48475 8.88846C5.36325 8.44608 5.24737 8.25318 4.77001 8.14075C4.07787 8.26916 1.39423 9.39792 0.708139 9.70052C-0.118027 10.0649 -0.0149574 10.8781 0.76687 11.1646C1.12417 11.1432 4.732 9.74068 5.1322 9.49883C5.37347 9.35301 5.41666 9.14326 5.48475 8.88846Z" fill="#580EF6" />
        </svg>
      </div>
      <img className='bg-particles' src={bgParticles} alt="bgParticles" />
      <Menu isMenuOpen={isMenuOpen} menuClose={menuClose} />
      <Header isMenuOpen={isMenuOpen} menuToggle={menuToggle} contacts={contacts} />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contacts contacts={contacts} />
      <Footer />
    </>
  )
}

export default App
