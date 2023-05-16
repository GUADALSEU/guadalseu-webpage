import './DatosContacto.css'

export const DatosContacto = () => {

  return (
    <fieldset id='dondeEstamosBox'>
      <legend className='fw-bold color-secundario'>Datos de contacto</legend>
      <div className='m-3 my-4'>
        <p className='mb-4 datosUbicacion'><span className='fw-bold color-secundario'>Dirección: </span> Avda. Antonio Machado, 84<br />28702 San Sebastián de los Reyes<br />MADRID</p>
        <p className='mb-4 datosUbicacion'><span className='fw-bold color-secundario'>E-mail: </span> info@guadalseu.com</p>
        <p className='mb-4 datosUbicacion'><span className='fw-bold color-secundario'>Teléfono: </span> 916 638 335</p>
        <p className='mb-4 datosUbicacion'><span className='fw-bold color-secundario'>Whatsapp: </span> 696 506 184</p>
      </div>
    </fieldset>
  )
}
