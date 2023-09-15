import icon1 from '../Assets/codigo.png'
import icon2 from '../Assets/github.png'
import icon3 from '../Assets/llaves.png'
import '../IconosDev/icondev.css'

const IconsDev = () => {
    return (
        <div className='iconDevCont'>
            <img className='iconDevImg' src={icon1}/>
            <img className='iconDevImg' src={icon2}/>
            <img className='iconDevImg' src={icon3}/>
        </div>
    )
}

export default IconsDev