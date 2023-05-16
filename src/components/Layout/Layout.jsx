import './Layout.css'
import Logo from '../../img/logo.png'
import { Link, Outlet } from 'react-router-dom'
import { useRef } from 'react'

import { Footer } from '../Footer/Footer'

export const Layout = () => {
  const navigationBar = useRef(null)
  const burgerRotate = useRef(null)

  const toggleNavBar = () => {
    navigationBar.current.classList.toggle('nav-menu_active')
    burgerRotate.current.classList.toggle('burger-rotate_active')
  }

  const clickLinkManager = () => {
    toggleNavBar();
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const logoAutoScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <header id='barraNavegacion'>
        <div className="d-flex align-items-center justify-content-between px-4 barraNav" >
          <div>
            <Link to={'/'} onClick={logoAutoScroll}><img src={Logo} id='logo' alt='Logo' /></Link>
          </div>
          <nav className="d-flex nav-menu" ref={navigationBar}>
            <ul className="p-0 d-flex align-items-center justify-content-center m-0">
              <Link to={'/'} onClick={clickLinkManager}><li className='layoutList rounded-pill'>Inicio</li></Link>
              <Link to={'/servicios'} onClick={clickLinkManager}><li className='layoutList rounded-pill'>Servicios</li></Link>
              <Link to={'/galería'} onClick={clickLinkManager}><li className='layoutList rounded-pill'>Galería</li></Link>
              <Link to={'/contacto'} onClick={clickLinkManager}><li className='layoutList rounded-pill'>Contacto</li></Link>
              <Link to={'/contacto'} onClick={clickLinkManager}><button className='fw-bold rounded-pill presupuesto'>Solicitar Presupuesto</button></Link>
            </ul>
          </nav>
          <button className='burger-btn' onClick={toggleNavBar}><i className="fa-solid fa-bars burger-rotate" ref={burgerRotate}></i></button>
        </div>
      </header>
      <div className='d-flex align-items-start justify-content-center' id='outletLayout'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

