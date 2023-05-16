import '../Home.css'
import './SobreNosotros.css'

export const SobreNosotros = ({ titulo, descripcion, imagen}) => {
    return (
      <div className='col-12 col-md-6 my-3 d-flex align-items-center justify-content-center'>
        <div className='sobreNosotros d-flex align-items-center justify-content-center' style={{backgroundImage: `url(${imagen})`}}>
            <div className='capaBlanca p-4'>
                <h2 className='color-secundario'>{ titulo }</h2>
                <p className='text-center'>{ descripcion }</p>
            </div>
        </div>
      </div>
    )
}
