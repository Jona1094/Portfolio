import './presentacion.css'
import RRSS from '../RRSS/RRSS'
import jonatan from '../Assets/jonatan.png'
import IconDev from '../IconosDev/IconosDev'
import { useInView } from 'react-intersection-observer';

const Presentacion = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    return (
        <div className='presentacion'>
            <div className='presentacionCont1'>
                <div ref={ref} className={`presentacionInfo ${inView ? 'aparecer' : ''}`}>
                    <h1 className='presetacionInfo__Nombre'> Soy Jonatan Ferrari</h1>
                    <h2 className='presentacionInfo__Prof'>Web Developer</h2>
                    <h3 className='presentacionInfo__Email'>jonaaf32@gmail.com</h3>
                    <h4 className='presentacionInfo__Ciudad'>Vivo en Ciudad Autónoma de Buenos Aires, Argentina.</h4>
                    <div className='presentacionInfo__Redes'>
                    <RRSS/>
                </div>
            </div>
            <div ref={ref} className= {`presentacionCuadroImg ${inView ? 'aparecer' : ''}`}>
                <div className='presentacionContImg'>
                    <img className='presentacionImg' src={jonatan}/>
                </div>
            </div>
            <IconDev/>
        </div>
            <div className='presentacionCont2'>
            <h1 className='presentacionInfo__Prof'>SOBRE MI</h1>
                <p className='presentacionCont2__Text1'>
                Me forme como Desarrollador Web, gracias al Proyecto Dalto, creado y dirigido por Lucas Dalto.<br/> 
                Fui seleccionado entre 13.500. Aprendí herramientas como HTML, CSS, Javascript, React Js, Node Js, Git y Github.
                </p>
                <p className='presentacionCont2__Text1'>
                Actualmente me oriento más al Frontend, ya que soy un
                apasionado por el Diseño, aunque sigo aprendiendo más sobre el Backend para ampliar mis conocimientos.
                </p>
                <p className='presentacionCont2__Text1'>
                Tuve la oportunidad de participar como colaborador durante 3 meses en <a href='https://talleres.donweb.com/' target='__BLANK'>Don Web</a>, en un sistema que consiste en crear certificados de Talleres que brinda la plataforma, una vez finalizado el cursado del usuario, con sus respectivos datos.<br/>
                Mi función fue encargarme de el Frontend y el prototipo del Certificado. Utilicé React js y Canva para el prototipo.
                </p>
            </div>
        </div>
    )
}

export default Presentacion