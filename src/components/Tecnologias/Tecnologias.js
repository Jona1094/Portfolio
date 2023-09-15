import '../Tecnologias/tecnologias.css'

const Tecnologias = () => {

    const ListaTecnologias = [
        { tec: 'HTML', imagen: require('../Assets/html.png') },
        { tec: 'CSS', imagen: require('../Assets/css.png') },
        { tec: 'Javascript', imagen: require('../Assets/js.png') },
        { tec: 'React', imagen: require('../Assets/react.png') },
        { tec: 'Node Js', imagen: require('../Assets/node.png') }
    ]

    const elementosTecnologias = [];

    for (let i=0; i < ListaTecnologias.length; i++) {
        const tecnologia = ListaTecnologias[i]
        elementosTecnologias.push(
            <div key={i} className='tecnologiaElementos'>
               <img className='tecnologiasImg' src={tecnologia.imagen}/>
               <h1 className='tecnologiaTec'>{tecnologia.tec}</h1>
            </div>
        )
    }

    return (
        <div className='tecnologias'>
                <h1 className='tecnologiasTecTitulo'>Tecnologías</h1>
                <div className='tecnologiasDiv'>{elementosTecnologias}</div>
        </div>
       
    )
}

export default Tecnologias