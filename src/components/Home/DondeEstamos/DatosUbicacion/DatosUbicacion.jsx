import './DatosUbicacion.css'

export const DatosUbicacion = () => {

  return (
    <fieldset id='dondeEstamosBox'>
      <legend className='fw-bold color-secundario'>¿Dónde estámos?</legend>
      <div className='m-3 text-center'>
        <p className='datosUbicacion madrid'>San Sebastián de los Reyes</p>
        <p className='datosUbicacion otrosDatos'>Avda. Antonio Machado, 84</p>
        <p className='datosUbicacion otrosDatos'>28702 MADRID</p>
      </div>
    </fieldset>
  )
}
