import quienesSomosIMG from '../../../img/273953-guadalseu-persona-pintando-fachada.jpg'
import nuestroPublicoIMG from '../../../img/nuestro-publico.jpg'
import trayectoriaIMG from '../../../img/trayectoria.jpg'
import nuestroPersonalIMG from '../../../img/nuestro-personal.jpg'

class sobreNosotros {
    constructor (titulo, imagen, descripcion) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

export const quienesSomos = new sobreNosotros('Quiénes somos', quienesSomosIMG, 'Somos Guadalseu, una reconocida empresa especializada en las reformas integrales, construcción y rehabilitación de edificios. Estamos situados en el municipio de San Sebastián de los Reyes.')
export const nuestroPublico = new sobreNosotros('Nuestro público', nuestroPublicoIMG, 'Ofrecemos nuestros servicios a comunidades de vecinos, particulares, empresas subcontratantes y aseguradoras de viviendas, a quienes les atenderemos con la seriedad y eficacia que se merecen. Compruébelo.')
export const trayectoria = new sobreNosotros('Trayectoria', trayectoriaIMG, 'El buen y reconocido desempeño a lo largo de nuestra trayectoria nos ha convertido en una de sus mejores opciones en el sector. Nos diferenciamos por la relación calidad-precio, seriedad y buen servicio.')
export const nuestroPersonal = new sobreNosotros('Nuestro Personal', nuestroPersonalIMG, 'Contamos con personal altamente cualificado que trabaja con responsabilidad, como un instalador homologado por la casa Giscosa Firestone. Los clientes nos prefieren por la disponibilidad y adaptabilidad horaria que ofrecemos.')
