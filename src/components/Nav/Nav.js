import '../Nav/nav.css'

const Nav = () => {
    return (
        <div>
            <nav className="nav">
            <ul className="navUl">
                <li className='navLi'><a className='navLink' href="">Home</a></li>
                <li className='navLi'><a className='navLink' href="">Sobre mi</a></li>
                <li className='navLi'><a className='navLink' href="">Portfolio</a></li>
                <li className='navLi'><a className='navLink' href="">Contacto</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav