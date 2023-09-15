import './rrss.css'
import instagram from '../Assets/instagram.png'
import facebook from '../Assets/facebook.png'
import linkedin from '../Assets/linkedin.png'
import whatsapp from '../Assets/whatsapp.png'

const RRSS = () => {
    return (
        <div className="rrss">
            <div className='rrssContImg'>
                <a href='https://www.linkedin.com/in/jonatandev/' target='__BLANK'><img className='rrssImg' src={linkedin}/></a>
            </div>
            <div className='rrssContImg'>
                <a href='https://www.instagram.com/jonatannnf/' target='__BLANK'><img className='rrssImg' src={instagram}/></a>    
            </div>
            <div className='rrssContImg'> 
                <a href="https://wa.me/1168401026" target='__BLANK'><img className='rrssImg' src={whatsapp}/></a>
            </div>
            
        </div>
    )
}

export default RRSS;