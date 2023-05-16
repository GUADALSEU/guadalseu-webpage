import './Imagen.css'

export const Imagen = ({ num }) => {
  return (
    <img className='col-lg-4 col-md-6 imagenesGaleria' src={require(`../../../img/galeria/${num}.jpg`)} alt="" />
  )
}
