import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const ContactList = () => {
  const context = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showFavorites, setShowFavorites] = useState(false);

  if (!context) {
    return <p className="text-center text-gray-500">No hay contactos disponibles</p>;
  }

  const { contacts, onSelectContact } = context;

  if (!contacts || contacts.length === 0) {
    return <p className="text-center text-gray-500">No hay contactos disponibles</p>;
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
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Lista de Contactos</h2>
      <input
        type="text"
        placeholder="Buscar contactos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      /> {/* Campo de búsqueda */}
      <div className="flex justify-between items-center mb-4">
        <select
          onChange={handleSortOrderChange}
          value={sortOrder}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="asc">Ordenar Ascendente</option>
          <option value="desc">Ordenar Descendente</option>
        </select> {/* Desplegable para ordenar contactos */}
        <button
          onClick={handleShowFavoritesChange}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {showFavorites ? 'Mostrar Todos' : 'Mostrar Favoritos'}
        </button> {/* Botón para filtrar favoritos */}
      </div>
      <ul className="space-y-2 list-none">
        {sortedContacts.map(contact => (
          <li key={contact.id} className="p-2">
            <Link to={`contact/${contact.id}`} onClick={() => onSelectContact(contact)} className="block no-underline">
              {contact.fullname} {contact.favorite && '⭐'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;