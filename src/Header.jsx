import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold mb-4">Contact Manager</h1>
      <nav>
        <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link> {/* Botón de Home */}
      </nav>
    </header>
  );
};

export default Header;