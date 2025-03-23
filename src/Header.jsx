import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Contact Manager</h1>
      <nav>
        <Link to="/">Home</Link> {/* Botón de Home */}
      </nav>
    </header>
  );
};

export default Header;