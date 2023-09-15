import './portfolio.css'
import flechaAbajo from '../Assets/flechaAbajo.png'
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    const portfolioDatos = [
        {src: require('../Assets/proyectoInmb.png'), proyecto: 'Inmobiliaria JF', descripcion: 'Proyecto desarrollado con Javascript, Node Js, EJS, donde los administradores pueden cargar propiedades en alquiler/venta y los usuarios visualizarlas.', link: 'https://inmobiliariafj.onrender.com/'},
        {src: require('../Assets/portfolio1.jpg'), proyecto: 'David Milan Design', descripcion: 'Portfolio de Diseño Gráfico, desarrollado con HTML, CSS y Javascript, donde se muestra una galería de imágenes del diseñador.', link: 'https://jona1094.github.io/David-Milan/'},
        {src: require('../Assets/proyectoKiosco.png'), proyecto: 'Kiosco - Productos', descripcion: 'Proyecto desarrollado con EJS y Node Js. El administrador puede crear/editar/eliminar. Además cuenta con un filtro de búsqueda para encontrar cada producto.', link: 'https://kiosco.onrender.com/'},
        {src: require('../Assets/portfolioFot.jpg'), proyecto: 'Portfolio Fotógrafo', descripcion: 'Proyecto desarrollado con HTML, CSS y Javascript. Galería de imágenes. Diseño web únicamente Desktop.', link: 'https://jona1094.github.io/Fot-grafo/'},
        {src: require('../Assets/portfolioOdon.png'), proyecto: 'Consultorio Odontológico', descripcion: 'Proyecto desarrollado con React Js. Sitio web estático donde se muestra información de los servicios, profesionales y contacto del consultorio.', link: 'https://jona1094.github.io/Fot-grafo/'}
    ]

    const portfolioLista = []

    for (let i = 0; i < portfolioDatos.length; i++) {
        const proyecto = portfolioDatos[i]
        portfolioLista.push (
            <div key={i} ref={ref} className={`portfolio ${inView ? 'aparecer' : ''}`}>
                <img className='portfolioImg' src={proyecto.src}/>
                <h1 className='portfolioTitulo'>{proyecto.proyecto}</h1>
                <p className='portfoloDescripcion'>{proyecto.descripcion}</p>
                {<a className='portfolioLink' target='__BLANK' href={proyecto.link}>Ver Sitio</a>}
            </div>
        )
    }

    return (
           <div className='portfolioProyectos'>
            <h1 className='portfolioProyectos__Titulo'>ALGUNOS DE MIS PROYECTOS<img className='flechaAbajo' src={flechaAbajo}/></h1>
            <div className='portfolioProyectosContainer'>
                {portfolioLista}
            </div>
        </div>
       
        
    )
}

export default Portfolio;