import { DatosContacto } from './DatosContacto/DatosContacto'
import { Mapa } from '../Home/DondeEstamos/Mapa/Mapa'
import './Contacto.css'
import { Formulario } from './Formulario/Formulario'

export const Contacto = () => {
  return (
    <div id='contacto' className='d-flex flex-column align-items-center justify-content-center'>
      <h2 className='py-5 color-secundario fw-bold fs-1'>Contáctanos</h2>
      <p className='w-75 text-center'>En <span className='color-secundario fw-bold'>Guadalseu</span> estamos atentos a sus dudas y consultas. Contacte con nosotros y le responderemos con la mayor brevedad posible. Somos un referente en construcción de piscinas, carpintería de aluminio, pintura y más. Ubíquenos en San Sebastián de los Reyes.</p>
      <div id='mapaConDatos' className='py-5 w-100 px-2 d-flex align-items-center justify-content-evenly'>
        <div id='divMapa'>
          <Mapa width='100%' />
        </div>
        <div className='px-3 d-flex justify-content-center'>
          <DatosContacto />
        </div>
      </div>
      <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <h2 className='color-secundario fw-bold'>Envíanos un mensaje!</h2>
        <Formulario />
      </div>
    </div>
  )
}
