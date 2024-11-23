import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo">
            <h1>Letras & Especias</h1>
        </a>
        <ul className="menu">
            <li><a href="#" className="menu-link">Inicio</a></li>
            <li><a href="#" className="menu-link">Todos los productos</a></li>
            <li><a href="#" className="menu-link">Libros</a></li>
            <li><a href="#" className="menu-link">Café</a></li>
            <li><a href="#" className="menu-link">Otros</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;