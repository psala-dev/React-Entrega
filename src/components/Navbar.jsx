import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo">
            <h1>Letras & Especias</h1>
        </Link>
        <ul className="menu">
            <li><Link to="/" className="menu-link">Inicio</Link></li>
            <li><Link to="/productos" className="menu-link">Todos los productos</Link></li>
            <li><Link to="/productos/medias" className="menu-link">Libros</Link></li>
            <li><Link to="/productos/pantalones" className="menu-link">Café</Link></li>
            <li><Link to="/productos/remeras" className="menu-link">Otros</Link></li>
            <li><Link to="/productos/buzos" className="menu-link">Otros</Link></li>
            <li><Link to="/contacto" className="menu-link">Contacto</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;