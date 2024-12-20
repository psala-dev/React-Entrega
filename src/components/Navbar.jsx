import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      
        <Link to="/" className="logo">
            <h1>Letras <span>&</span> <br />Especias</h1>
        </Link>
        <ul className="menu">
            <li><Link to="/productos" className="menu-link">Todos los productos</Link></li>
            <li><Link to="/productos/libreria" className="menu-link">Libros</Link></li>
            <li><Link to="/productos/cafeteria" className="menu-link">Café</Link></li>
            <li><Link to="/productos/accesorios" className="menu-link">Accesorios</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  );
}

export default Navbar;