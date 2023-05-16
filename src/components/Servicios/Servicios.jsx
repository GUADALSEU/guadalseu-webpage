import './Servicios.css'

export const Servicios = () => {
  return (
    <section>
      <h2 className='py-5 color-secundario fw-bold fs-1'>Servicios</h2>
      <div>
        <p className='text-center pb-3'>En <span className='color-secundario fw-bold'>Guadalseu</span> estamos especializados en los siguientes campos:</p>
        <div id='listas' className='d-flex align-items-center justify-content-center py-4'>
          <ul>
            <li className='pb-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/casa.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Reformas integrales de viviendas y locales</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/aluminio.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Carpintería de aluminio</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/pladur.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Pladur</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/suelo.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Impresión de suelos</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/pintura.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Pintura</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/piscina.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Construcción de piscinas</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/electricidad.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Electricidad</h3>
            </li>
          </ul>
          <ul>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/fontaneria.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Fontanería</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/calefacción.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Calefacción</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/parquet.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Colocación y pulido de parquet</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/cocina.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Diseño de cocinas</h3>
            </li>
            <li className='py-3 d-flex align-items-center justify-content-start'>
              <img src={require('../../img/servicios/tejado.png')} alt="" width='50' height='50' />
              <h3 className='ps-3'>Impermeablizaciones de tejados y terrazas</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
