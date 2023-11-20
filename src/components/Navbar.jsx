import React, {useState} from "react";

// import {Link} from 'react-router-dom';
import Logo from '../img/logo.png';
import './Navbar.css';

const Navbar = ()=>{

    const [menuOpen, setMenuOpen] = useState(false)


    return(
    <nav>

        <img className="logo" src={Logo} alt="soluciones" />
        
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>

        </div>

        <ul className={menuOpen ? "open" : ""}>
            <li> <a href="#about">About</a> </li>
            <li> <a href="#services">Services</a> </li>
            <li> <a href ="#contact">Contact</a> </li>
        </ul>
    
    </nav>
    )
}

export default Navbar