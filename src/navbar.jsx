import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Agenda de Contactos
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" className={({ isActive }) => (isActive ? 'active' : '')}>
            Crear Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;