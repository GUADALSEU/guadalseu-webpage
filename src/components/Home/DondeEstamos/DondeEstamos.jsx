import './DondeEstamos.css'
import { Mapa } from './Mapa/Mapa'
import { DatosUbicacion } from './DatosUbicacion/DatosUbicacion'

export const DondeEstamos = () => {
  return (
    <section id='dondeEstamosBox' className='container d-flex align-items-center justify-content-evenly py-5'>
      <div className='d-flex flex-column'>
        <img className='ms-4' src={require('../../../img/location-sign.png')} alt='' width='50' height='50' />
        <div>
          <DatosUbicacion />
        </div>
      </div>
      <div id='divMapa'>
        <Mapa width='100%' />
      </div>
    </section>
  )
}
