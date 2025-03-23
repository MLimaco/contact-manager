import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const ContactList = () => {
  const context = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  if (!context) {
    return <p>No hay contactos disponibles</p>;
  }

  const { contacts, onSelectContact } = context;

  if (!contacts || contacts.length === 0) {
    return <p>No hay contactos disponibles</p>;
  }
  console.log('Contacts in ContactList:', contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedContacts = filteredContacts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.fullname.localeCompare(b.fullname);
    } else {
      return b.fullname.localeCompare(a.fullname);
    }
  });

  const handleSortOrderChange = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
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
      <button onClick={handleSortOrderChange}>
        Ordenar {sortOrder === 'asc' ? 'Descendente' : 'Ascendente'}
      </button> {/* Botón para ordenar contactos */}
      <ul>
        {sortedContacts.map(contact => (
          <li key={contact.id}>
            <Link to={`contact/${contact.id}`} onClick={() => onSelectContact(contact)}>
              {contact.fullname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;