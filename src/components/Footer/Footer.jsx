import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='d-flex flex-column justify-content-center align-items-center'>
      <div className='container d-flex align-items-start justify-content-around w-100 my-4'>
        <div className='d-flex flex-column'>
          <h4 className='align-self-center'>Contacto</h4>
          <div className='d-flex justify-content-start align-items-center'>
            <img className='me-3' src={require('../../img/telefono-contacto.png')} alt="" width='35' height='35' />
            <div>
              <p>916 638 335</p>
              <p>696 506 184</p>
            </div>
          </div>
          <div className='d-flex justify-content-start align-items-center'>
            <img className='me-3' src={require('../../img/email.png')} alt="" width='30' height='30' />
            <p>info@guadalseu.com</p>
          </div>
        </div>
        <div className='fullHeight'>
          <h4 className='m-0'>Enlaces Legales</h4>
          <ul className='text-center d-flex flex-column justify-content-evenly align-items-center m-0 p-0'>
            <Link to='/avisoLegal'><li>Aviso Legal</li></Link>
            <Link to='/politicaPrivacidad'><li>Política de Privacidad</li></Link>
            <Link to='/politicaCookies'><li>Política de Cookies</li></Link>
          </ul>
        </div>
      </div>
      <div className='bg-light w-100 d-flex align-items-center justify-content-center py-2'>
        <p className='color-secundario'><span className='fw-bold'>Copyright ©</span> Guadalseu Construcción y Rehabilitación</p>
      </div>
    </footer>
  )
}
