import '../styles/nav.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
    return (
        
    <nav className="nav">

            <div className="nav_container">
                <h1 className="nav_logo">LOGO</h1>

                <label htmlFor="menu" className="nav_label">
                    <FontAwesomeIcon icon={faBars} className='nav_img'/>
                </label>
                <input type="checkbox" id="menu" className="nav_input"></input>

                <div className="nav_menu">
                    <a href="#home" className="nav_item">Inicio</a>
                    <a href="#about" className="nav_item">Acerca de</a>
                    <a href="#contact" className="nav_item">Contacto</a>
                </div>
                
            </div>
        </nav>
        
    )
}

export default Nav