import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const ContactList = () => {
  const context = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showFavorites, setShowFavorites] = useState(false);

  if (!context) {
    return <p>No hay contactos disponibles</p>;
  }

  const { contacts, onSelectContact } = context;

  if (!contacts || contacts.length === 0) {
    return <p>No hay contactos disponibles</p>;
  }
  console.log('Contacts in ContactList:', contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.fullname.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!showFavorites || contact.favorite)
  );

  const sortedContacts = filteredContacts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.fullname.localeCompare(b.fullname);
    } else {
      return b.fullname.localeCompare(a.fullname);
    }
  });

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleShowFavoritesChange = () => {
    setShowFavorites(prevShowFavorites => !prevShowFavorites);
  };

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <input
        type="text"
        placeholder="Buscar contactos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> {/* Campo de búsqueda */}
      <select onChange={handleSortOrderChange} value={sortOrder}>
        <option value="asc">Ordenar Ascendente</option>
        <option value="desc">Ordenar Descendente</option>
      </select> {/* Desplegable para ordenar contactos */}
      <button onClick={handleShowFavoritesChange}>
        {showFavorites ? 'Mostrar Todos' : 'Mostrar Favoritos'}
      </button> {/* Botón para filtrar favoritos */}
      <ul>
        {sortedContacts.map(contact => (
          <li key={contact.id}>
            <Link to={`contact/${contact.id}`} onClick={() => onSelectContact(contact)}>
              {contact.fullname} {contact.favorite && '⭐'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;