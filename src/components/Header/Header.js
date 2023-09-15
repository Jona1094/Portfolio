import '../Header/header.css'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <Nav/>
        </div>
    )
}

export default Header