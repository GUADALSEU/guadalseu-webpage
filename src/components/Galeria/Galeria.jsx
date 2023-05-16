import './Galeria.css'
import { Imagen } from './Imagen/Imagen'
import data from './Imagen/imagenes.json'

export const Galeria = () => {
  return (
    <div className='m-5 w-100'>
      <h2 className='mb-5 color-secundario fw-bold fs-1'>Estos son algunos de nuestros trabajos!</h2>
      <div className='row px-2 g-5'>
        {data.imagenes.map((imagen, i) => {
          return (
            <Imagen key={i} num={i + 1} />
          )
        })}
      </div>
    </div>
  )
}
