import './Home.css'
import { SobreNosotros } from './SobreNosotros/SobreNosotros'
import { DondeEstamos } from './DondeEstamos/DondeEstamos'

import { quienesSomos, nuestroPublico, trayectoria, nuestroPersonal } from './SobreNosotros/sobreNosotrosOBJ.js'

export const Home = () => {
  return (
    <div>
      <div id='fotoPortada'></div>
      <section className='d-flex flex-column align-items-center justify-content-center my-5'>
        <p className='container text-center py-4 my-3 slogan'>Somos <span className='color-secundario'>Guadalseu</span>, una reconocida empresa especializada en las reformas integrales, construcción y rehabilitación de edificios en Madrid.</p>
      </section>
      <section className='fondo px-4 py-5 d-flex align-items-center justify-content-center'>
        <div className='sobreNosotrosContainer row'>
          <SobreNosotros titulo={quienesSomos.titulo} descripcion={quienesSomos.descripcion} imagen={quienesSomos.imagen} />
          <SobreNosotros titulo={nuestroPublico.titulo} descripcion={nuestroPublico.descripcion} imagen={nuestroPublico.imagen} />
          <SobreNosotros titulo={trayectoria.titulo} descripcion={trayectoria.descripcion} imagen={trayectoria.imagen} />
          <SobreNosotros titulo={nuestroPersonal.titulo} descripcion={nuestroPersonal.descripcion} imagen={nuestroPersonal.imagen} />
        </div>
      </section>
      <DondeEstamos />
    </div>
  )
}
