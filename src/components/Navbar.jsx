import React from 'react';
import { Link } from 'react-router';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo">
            <h1>Letras & Especias</h1>
        </Link>
        <ul className="menu">
            <li><Link to="/" className="menu-link">Tienda</Link></li>
            <li><Link to="/productos" className="menu-link">Todos los productos</Link></li>
            <li><Link to="/productos/libreria" className="menu-link">Libros</Link></li>
            <li><Link to="/productos/cafeteria" className="menu-link">Café</Link></li>
            <li><Link to="/productos/accesorios" className="menu-link">Otros</Link></li>
            <li><Link to="/productos/buzos" className="menu-link">Otros</Link></li>
            <li><Link to="/contacto" className="menu-link">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  );
}

export default Navbar;