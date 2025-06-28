import React from 'react';
import './Navbar.css';
import { FaIceCream } from 'react-icons/fa'; // ícone fofo 🍦

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaIceCream className="icon" />
        Sweet Ice
      </div>
      <ul className="nav-links">
        <li><a href="#sabores">Sabores</a></li>
        <li><a href="#promocoes">Promocões</a></li>
        <li><a href="#monte">Monte o seu</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;