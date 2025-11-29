import './footer.scss'

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer-wrapper'>
        <div className='footer-header'>
          <p className='footer-name'>ALEX MOSS</p>
        </div>
        <p className='footer-copyright'>{`© ${year} Alex Moss. All rights reserved.`}</p>
      </footer>
  )
}
