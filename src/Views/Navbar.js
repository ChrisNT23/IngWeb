//Se importan iconos de react 
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
//Importar el css file que se llama main
import "../Style/main.css";

function Navbar () {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return ( 
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}> 
                <a href="/#">Inicio</a>
                <a href="/#">Contacto</a>
                <a href="/#">Sobre Nosotros</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>

            
            <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
            </button>

        </header>
        
    );
}

export default Navbar;