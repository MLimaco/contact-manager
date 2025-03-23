import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const ContactList = () => {
  const context = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <input
        type="text"
        placeholder="Buscar contactos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> {/* Campo de búsqueda */}
      <ul>
        {filteredContacts.map(contact => (
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